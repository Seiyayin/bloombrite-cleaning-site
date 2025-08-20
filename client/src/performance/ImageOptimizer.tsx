import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  placeholder?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholder
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    setError(false);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(false);
  };

  // Generate WebP and fallback sources
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const shouldLoad = isInView || priority;

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ 
            width: width || '100%', 
            height: height || '200px'
          }}
        />
      )}

      {/* Error state */}
      {error && (
        <div 
          className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400"
          style={{ 
            width: width || '100%', 
            height: height || '200px'
          }}
        >
          <span>Image unavailable</span>
        </div>
      )}

      {/* Optimized image with WebP support */}
      {shouldLoad && (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: width ? `${width}px` : '100%',
              height: height ? `${height}px` : 'auto',
              objectFit: 'cover'
            }}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;