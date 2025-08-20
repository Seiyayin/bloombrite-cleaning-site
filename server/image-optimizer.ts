import path from 'path';
import fs from 'fs';
import sharp from 'sharp';
import { Request, Response, NextFunction } from 'express';

// Cache for optimized images to avoid reprocessing
const imageCache: Record<string, Buffer> = {};

/**
 * Middleware to optimize images on the fly
 * - Converts images to WebP format (next-gen format)
 * - Properly sizes images based on device needs
 * - Applies efficient encoding and compression
 * - Resizes large images to appropriate dimensions
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
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // Cache for 1 year with immutable
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
    
    // Resize image appropriately if no specific dimensions provided
    if (!width && !height) {
      // Default reasonable size limits for web
      imageProcessor = imageProcessor.resize({
        width: 1200,
        height: 1200,
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Convert to WebP format with optimized compression
    const optimizedImageBuffer = await imageProcessor
      .webp({ 
        quality: 75,
        effort: 6, // Higher compression effort
        nearLossless: false
      })
      .toBuffer();
    
    // Cache the optimized image
    imageCache[cacheKey] = optimizedImageBuffer;
    
    // Send the optimized image with enhanced caching headers
    res.setHeader('Content-Type', 'image/webp');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('ETag', `"${cacheKey.replace(/[^a-zA-Z0-9]/g, '')}"`);
    res.setHeader('Vary', 'Accept');
    return res.send(optimizedImageBuffer);
  } catch (error) {
    console.error('Error optimizing image:', error);
    return next(); // Continue to serve original image if optimization fails
  }
};