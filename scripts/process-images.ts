#!/usr/bin/env tsx
import path from 'path';
import fs from 'fs/promises';
import sharp from 'sharp';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ImageVariant {
  width: number;
  url: string;
  format: 'webp' | 'jpg' | 'png';
}

interface ImageManifest {
  [originalPath: string]: {
    width: number;
    height: number;
    webp: ImageVariant[];
    fallback: ImageVariant[];
  };
}

// Responsive breakpoints for generating multiple sizes
const RESPONSIVE_SIZES = [480, 768, 1200, 1600];
const WEBP_QUALITY = 75;
const LARGE_IMAGE_THRESHOLD = 1200; // px width
const LARGE_FILE_THRESHOLD = 300 * 1024; // 300 KB

class ImageProcessor {
  private manifest: ImageManifest = {};
  private processedCount = 0;
  private totalCount = 0;

  async processAllImages() {
    console.log('🖼️  Starting image optimization...');

    // Find all images in public/images and client/src/assets
    const publicImages = await glob('public/images/**/*.{jpg,jpeg,png}', { absolute: false });
    const assetImages = await glob('client/src/assets/**/*.{jpg,jpeg,png}', { absolute: false });
    const attachedImages = await glob('attached_assets/**/*.{jpg,jpeg,png}', { absolute: false });
    
    const allImages = [...publicImages, ...assetImages, ...attachedImages];
    this.totalCount = allImages.length;

    console.log(`📊 Found ${this.totalCount} images to process`);

    for (const imagePath of allImages) {
      await this.processImage(imagePath);
    }

    await this.generateManifest();
    
    console.log(`✅ Image processing complete! Processed ${this.processedCount} images`);
    console.log(`📄 Generated manifest at: client/src/data/imageManifest.ts`);
  }

  private async processImage(imagePath: string) {
    try {
      console.log(`🔄 Processing: ${imagePath}`);

      // Get image metadata
      const imageBuffer = await fs.readFile(imagePath);
      const metadata = await sharp(imageBuffer).metadata();
      
      if (!metadata.width || !metadata.height) {
        console.warn(`⚠️  Skipping ${imagePath} - no dimensions found`);
        return;
      }

      const originalWidth = metadata.width;
      const originalHeight = metadata.height;
      const fileSize = imageBuffer.length;

      // Determine if we need responsive versions
      const needsResponsive = originalWidth > LARGE_IMAGE_THRESHOLD || fileSize > LARGE_FILE_THRESHOLD;

      const webpVariants: ImageVariant[] = [];
      const fallbackVariants: ImageVariant[] = [];

      if (needsResponsive) {
        // Generate responsive versions
        for (const targetWidth of RESPONSIVE_SIZES) {
          if (targetWidth >= originalWidth) break; // Don't upscale

          await this.createVariant(
            imagePath, 
            imageBuffer, 
            targetWidth, 
            webpVariants, 
            fallbackVariants
          );
        }
      }

      // Always create a full-size version
      await this.createVariant(
        imagePath, 
        imageBuffer, 
        originalWidth, 
        webpVariants, 
        fallbackVariants
      );

      // Add to manifest
      const manifestKey = this.getManifestKey(imagePath);
      this.manifest[manifestKey] = {
        width: originalWidth,
        height: originalHeight,
        webp: webpVariants,
        fallback: fallbackVariants
      };

      this.processedCount++;
      console.log(`✅ Processed: ${imagePath} (${this.processedCount}/${this.totalCount})`);

    } catch (error) {
      console.error(`❌ Error processing ${imagePath}:`, error);
    }
  }

  private async createVariant(
    originalPath: string,
    originalBuffer: Buffer,
    targetWidth: number,
    webpVariants: ImageVariant[],
    fallbackVariants: ImageVariant[]
  ) {
    const parsedPath = path.parse(originalPath);
    const isFullSize = targetWidth === (await sharp(originalBuffer).metadata()).width;
    
    // Generate filenames
    const sizePrefix = isFullSize ? '' : `-${targetWidth}w`;
    const webpPath = path.join(
      parsedPath.dir, 
      `${parsedPath.name}${sizePrefix}.webp`
    );
    const fallbackPath = path.join(
      parsedPath.dir, 
      `${parsedPath.name}${sizePrefix}${parsedPath.ext}`
    );

    // Create WebP version
    try {
      const webpBuffer = await sharp(originalBuffer)
        .resize(targetWidth, null, { 
          fit: 'inside', 
          withoutEnlargement: true 
        })
        .webp({ 
          quality: WEBP_QUALITY, 
          effort: 6,
          nearLossless: parsedPath.ext.toLowerCase() === '.png' // Use near-lossless for PNGs
        })
        .toBuffer();

      await fs.writeFile(webpPath, webpBuffer);
      
      webpVariants.push({
        width: targetWidth,
        url: this.getPublicUrl(webpPath),
        format: 'webp'
      });
    } catch (error) {
      console.error(`Error creating WebP for ${originalPath} at ${targetWidth}w:`, error);
    }

    // Create fallback version (compressed original format)
    if (!isFullSize) {
      try {
        let processor = sharp(originalBuffer).resize(targetWidth, null, { 
          fit: 'inside', 
          withoutEnlargement: true 
        });

        // Apply format-specific optimization
        const ext = parsedPath.ext.toLowerCase();
        if (ext === '.jpg' || ext === '.jpeg') {
          processor = processor.jpeg({ quality: 80, progressive: true });
        } else if (ext === '.png') {
          processor = processor.png({ compressionLevel: 8, adaptiveFiltering: false });
        }

        const fallbackBuffer = await processor.toBuffer();
        await fs.writeFile(fallbackPath, fallbackBuffer);
        
        fallbackVariants.push({
          width: targetWidth,
          url: this.getPublicUrl(fallbackPath),
          format: ext.replace('.', '') as 'jpg' | 'png'
        });
      } catch (error) {
        console.error(`Error creating fallback for ${originalPath} at ${targetWidth}w:`, error);
      }
    } else {
      // For full-size, just reference the original
      fallbackVariants.push({
        width: targetWidth,
        url: this.getPublicUrl(originalPath),
        format: parsedPath.ext.replace('.', '').toLowerCase() as 'jpg' | 'png'
      });
    }
  }

  private getManifestKey(imagePath: string): string {
    // Convert file paths to consistent keys for the manifest
    if (imagePath.startsWith('public/')) {
      return imagePath.replace('public/', '/');
    } else if (imagePath.startsWith('client/src/assets/')) {
      return imagePath.replace('client/src/assets/', '@/assets/');
    } else if (imagePath.startsWith('attached_assets/')) {
      return imagePath.replace('attached_assets/', '@assets/');
    }
    return imagePath;
  }

  private getPublicUrl(filePath: string): string {
    // Convert file paths to URLs that can be used in the browser
    if (filePath.startsWith('public/')) {
      return filePath.replace('public', '');
    } else if (filePath.startsWith('client/src/assets/')) {
      return filePath.replace('client/src/assets/', '@/assets/');
    } else if (filePath.startsWith('attached_assets/')) {
      return filePath.replace('attached_assets/', '@assets/');
    }
    return filePath;
  }

  private async generateManifest() {
    try {
      // Ensure the data directory exists
      await fs.mkdir('client/src/data', { recursive: true });

      const manifestContent = `// Auto-generated image manifest - DO NOT EDIT MANUALLY
// Generated on ${new Date().toISOString()}

export interface ImageVariant {
  width: number;
  url: string;
  format: 'webp' | 'jpg' | 'png';
}

export interface ImageInfo {
  width: number;
  height: number;
  webp: ImageVariant[];
  fallback: ImageVariant[];
}

export const imageManifest: Record<string, ImageInfo> = ${JSON.stringify(this.manifest, null, 2)};

export default imageManifest;
`;

      await fs.writeFile('client/src/data/imageManifest.ts', manifestContent);
      console.log('📄 Image manifest generated successfully');

    } catch (error) {
      console.error('❌ Error generating manifest:', error);
    }
  }
}

// Run the image processor
async function main() {
  try {
    const processor = new ImageProcessor();
    await processor.processAllImages();
  } catch (error) {
    console.error('❌ Image processing failed:', error);
    process.exit(1);
  }
}

// Check if this script is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export default main;