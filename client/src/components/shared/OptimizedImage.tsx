import { useState } from 'react';
import { imageManifest, type ImageInfo } from '@/data/imageManifest';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  role?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  role,
  loading,
  decoding = 'async'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Check if image has optimized versions in manifest
  const imageInfo: ImageInfo | undefined = imageManifest[src];
  
  // If no optimization data, fallback to simple img tag
  if (!imageInfo) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading || (priority ? 'eager' : 'lazy')}
        decoding={decoding}
        onLoad={() => setIsLoaded(true)}
        className={className}
        role={role}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    );
  }
  
  // Use manifest dimensions if not provided
  const imgWidth = width || imageInfo.width;
  const imgHeight = height || imageInfo.height;
  
  // Generate srcset for WebP sources with URL encoding
  const webpSrcSet = imageInfo.webp
    .map(variant => `${encodeURI(variant.url)} ${variant.width}w`)
    .join(', ');
    
  // Generate srcset for fallback sources with URL encoding
  const fallbackSrcSet = imageInfo.fallback
    .map(variant => `${encodeURI(variant.url)} ${variant.width}w`)
    .join(', ');
  
  // Get the best fallback URL (largest width available)
  const fallbackSrc = encodeURI(
    imageInfo.fallback.reduce((max, current) => 
      current.width > max.width ? current : max
    )?.url || src
  );
  
  // Get fallback image type
  const fallbackType = imageInfo.fallback[0]?.format === 'png' ? 'image/png' : 'image/jpeg';
  
  return (
    <picture>
      {/* WebP source with responsive srcset */}
      <source 
        type="image/webp" 
        srcSet={webpSrcSet} 
        sizes={sizes}
      />
      
      {/* Fallback source with responsive srcset */}
      <source 
        type={fallbackType}
        srcSet={fallbackSrcSet} 
        sizes={sizes}
      />
      
      {/* Fallback img tag */}
      <img
        src={fallbackSrc}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        loading={loading || (priority ? 'eager' : 'lazy')}
        decoding={decoding}
        onLoad={() => setIsLoaded(true)}
        role={role}
        className={className}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </picture>
  );
};

export default OptimizedImage;