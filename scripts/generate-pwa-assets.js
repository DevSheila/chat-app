const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [192, 256, 384, 512];
const inputFile = path.join(process.cwd(), 'public', 'logo.svg');
const outputDir = path.join(process.cwd(), 'public');

async function generatePWAIcons() {
  try {
    // Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Generate PNG icons for each size
    for (const size of sizes) {
      await sharp(inputFile)
        .resize(size, size)
        .png()
        .toFile(path.join(outputDir, `icon-${size}x${size}.png`));
      
      console.log(`Generated ${size}x${size} icon`);
    }

    console.log('PWA icons generated successfully!');
  } catch (error) {
    console.error('Error generating PWA icons:', error);
    process.exit(1);
  }
}

generatePWAIcons(); 