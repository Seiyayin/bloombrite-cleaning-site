import path from 'path';
import fs from 'fs';
import sharp from 'sharp';
import { Request, Response, NextFunction } from 'express';

// Cache for optimized images to avoid reprocessing
const imageCache: Record<string, Buffer> = {};

/**
 * Middleware to optimize images on the fly
 * - Converts images to WebP format
 * - Applies proper sizing and optimization
 * - Caches results for better performance
 */
export const imageOptimizer = async (req: Request, res: Response, next: NextFunction) => {
  // Only process image requests
  const filePath = req.path;
  const ext = path.extname(filePath).toLowerCase();
  
  // Check if it's an image request
  if (!['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
    return next();
  }

  // Set the original file path
  const originalFilePath = path.join('./public', filePath);
  
  // Check if file exists
  if (!fs.existsSync(originalFilePath)) {
    return next();
  }

  try {
    // Check if browser supports WebP
    const acceptHeader = req.headers.accept || '';
    const supportsWebP = acceptHeader.includes('image/webp');
    
    // If browser doesn't support WebP, continue to the next middleware
    if (!supportsWebP) {
      return next();
    }
    
    // Create cache key based on path and query params (width, height, etc.)
    const cacheKey = `${filePath}?${JSON.stringify(req.query)}`;
    
    // Check if image is already in cache
    if (imageCache[cacheKey]) {
      res.setHeader('Content-Type', 'image/webp');
      res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
      return res.send(imageCache[cacheKey]);
    }
    
    // Get query parameters for resizing
    const width = req.query.width ? parseInt(req.query.width as string) : null;
    const height = req.query.height ? parseInt(req.query.height as string) : null;
    
    // Process the image
    let imageProcessor = sharp(originalFilePath);
    
    // Resize if width or height is specified
    if (width || height) {
      imageProcessor = imageProcessor.resize(width || null, height || null, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }
    
    // Convert to WebP format
    const optimizedImageBuffer = await imageProcessor
      .webp({ quality: 80 })
      .toBuffer();
    
    // Cache the optimized image
    imageCache[cacheKey] = optimizedImageBuffer;
    
    // Send the optimized image
    res.setHeader('Content-Type', 'image/webp');
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
    return res.send(optimizedImageBuffer);
  } catch (error) {
    console.error('Error optimizing image:', error);
    return next(); // Continue to serve original image if optimization fails
  }
};