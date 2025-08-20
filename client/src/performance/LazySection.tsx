import { useState, useEffect, useRef, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  placeholder?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

const LazySection = ({ 
  children, 
  placeholder,
  rootMargin = '100px',
  threshold = 0.1,
  className = ''
}: LazySectionProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsIntersecting(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold, hasLoaded]);

  const defaultPlaceholder = (
    <div className="animate-pulse bg-gray-200 h-32 rounded-lg"></div>
  );

  return (
    <div ref={ref} className={className}>
      {isIntersecting ? children : (placeholder || defaultPlaceholder)}
    </div>
  );
};

export default LazySection;