const CACHE_NAME = 'zeromark-apps-v2';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/index.css',
  '/manifest.json',
  '/pwa.js',
  '/sw.js',
  '/icon.svg',
  '/tool/split.html',
  '/icons/apple-touch-icon.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-maskable-192.png',
  '/icons/icon-maskable-512.png',
];

const LOCAL_NAVIGATION_FALLBACKS = new Map([
  ['/', '/index.html'],
  ['/index.html', '/index.html'],
  ['/tool/split.html', '/tool/split.html'],
]);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request, url));
    return;
  }

  event.respondWith(cacheFirstWithRefresh(request));
});

async function networkFirstNavigation(request, url) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    const fallbackPath = LOCAL_NAVIGATION_FALLBACKS.get(url.pathname);
    if (fallbackPath) {
      const cached = await caches.match(fallbackPath);
      if (cached) return cached;
    }

    return new Response('Offline. This page is not cached by Zeromark Apps.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
}

async function cacheFirstWithRefresh(request) {
  const cached = await caches.match(request);
  const refresh = fetch(request).then(async (response) => {
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    return response;
  }).catch(() => cached);

  return cached || refresh;
}
