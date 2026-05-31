const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '..', 'icons');
const SVG_PATH = path.join(__dirname, '..', 'icon.svg');

const sizes = [
  { file: 'icon-192.png',      size: 192 },
  { file: 'icon-512.png',      size: 512 },
  { file: 'icon-maskable-192.png', size: 192 },
  { file: 'icon-maskable-512.png', size: 512 },
  { file: 'apple-touch-icon.png',  size: 180 },
];

async function main() {
  const svgBuffer = fs.readFileSync(SVG_PATH);

  for (const { file, size } of sizes) {
    const outPath = path.join(ICONS_DIR, file);
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outPath);
    console.log(`✓ ${file} (${size}×${size})`);
  }

  console.log('\nDone! All icons generated.');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
