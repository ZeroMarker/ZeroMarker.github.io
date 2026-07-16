const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const ICONS_DIR = path.join(PUBLIC_DIR, 'icons');
const SVG_PATH = path.join(PUBLIC_DIR, 'icon.svg');

const sizes = [
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
  { file: 'icon-maskable-192.png', size: 192, flatten: true },
  { file: 'icon-maskable-512.png', size: 512, flatten: true },
  { file: 'apple-touch-icon.png', size: 180, flatten: true },
];

async function main() {
  const svgBuffer = fs.readFileSync(SVG_PATH);
  fs.mkdirSync(ICONS_DIR, { recursive: true });

  for (const { file, size, flatten = false } of sizes) {
    const outPath = path.join(ICONS_DIR, file);
    const pipeline = sharp(svgBuffer).resize(size, size);

    if (flatten) {
      // Maskable and Apple icons need an opaque, full-bleed background so
      // platform masks never expose transparent corners.
      pipeline.flatten({ background: '#101521' });
    }

    await pipeline.png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(outPath);
    console.log(`✓ ${file} (${size}×${size})`);
  }

  console.log('\nDone! All icons generated.');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
