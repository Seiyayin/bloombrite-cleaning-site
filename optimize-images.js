#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, 'client/src/assets');
const PUBLIC_IMAGES_DIR = path.join(__dirname, 'public/images');

// Images that are causing performance issues
const PRIORITY_IMAGES = [
  'living room deep cleaning.jpg',
  'Kitchen deep cleaning.jpg', 
  'bathroom tile brushing.jpg',
  'blinds.jpg',
  'D0CBF959-53C6-4181-A054-B5217EB78F19.jpg',
  'gutters cleaning.jpg',
  'hard water bathroom glass.jpg'
];

async function optimizeImage(inputPath, outputPath, options = {}) {
  try {
    const { width = 1200, quality = 75 } = options;
    
    console.log(`Optimizing: ${path.basename(inputPath)}`);
    
    // Get original file size
    const originalSize = fs.statSync(inputPath).size;
    
    // Process with Sharp
    const processedBuffer = await sharp(inputPath)
      .resize({
        width: width,
        height: width,
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ 
        quality: quality,
        effort: 6,
        nearLossless: false
      })
      .toBuffer();
    
    // Save optimized image
    const webpPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    fs.writeFileSync(webpPath, processedBuffer);
    
    const newSize = processedBuffer.length;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Optimized: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Savings: ${savings}%`);
    console.log(`  Saved to: ${webpPath}\n`);
    
    return { originalSize, newSize, savings };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
    return null;
  }
}

async function optimizeAllImages() {
  console.log('🖼️  Starting image optimization...\n');
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  // Ensure output directory exists
  if (!fs.existsSync(PUBLIC_IMAGES_DIR)) {
    fs.mkdirSync(PUBLIC_IMAGES_DIR, { recursive: true });
  }
  
  // Process priority images first
  for (const imageName of PRIORITY_IMAGES) {
    const inputPath = path.join(ASSETS_DIR, imageName);
    
    if (fs.existsSync(inputPath)) {
      const outputPath = path.join(PUBLIC_IMAGES_DIR, imageName);
      const result = await optimizeImage(inputPath, outputPath, {
        width: 1200, // Reasonable max width for web
        quality: 75  // Good balance of quality vs size
      });
      
      if (result) {
        totalOriginalSize += result.originalSize;
        totalOptimizedSize += result.newSize;
      }
    } else {
      console.log(`⚠️  Priority image not found: ${imageName}`);
    }
  }
  
  // Also create smaller versions for thumbnails/cards
  console.log('📱 Creating thumbnail versions...\n');
  
  for (const imageName of PRIORITY_IMAGES) {
    const inputPath = path.join(ASSETS_DIR, imageName);
    
    if (fs.existsSync(inputPath)) {
      const baseName = path.basename(imageName, path.extname(imageName));
      const outputPath = path.join(PUBLIC_IMAGES_DIR, `${baseName}-thumb.jpg`);
      
      await optimizeImage(inputPath, outputPath, {
        width: 400, // Thumbnail size
        quality: 80
      });
    }
  }
  
  const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  
  console.log('✅ Optimization complete!');
  console.log(`Total original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total savings: ${totalSavings}%`);
}

// Run the optimization
optimizeAllImages().catch(console.error);