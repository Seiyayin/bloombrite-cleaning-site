import React, { useEffect, useRef, useState } from 'react';
import houseImage from '@/assets/IMG_4412.jpg';

const HouseEntranceAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate how much of the element is visible
      const visibleTop = Math.max(0, windowHeight - rect.top);
      const visibleBottom = Math.min(windowHeight, windowHeight - rect.bottom + elementHeight);
      const visibleHeight = Math.min(visibleTop, elementHeight, visibleBottom);
      
      // Convert to progress (0 to 1)
      const progress = Math.max(0, Math.min(1, visibleHeight / (windowHeight * 0.8)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation styles based on scroll progress
  const doorProgress = Math.min(1, scrollProgress * 1.5);
  const personProgress = Math.max(0, Math.min(1, (scrollProgress - 0.3) * 2));
  const cleaningProgress = Math.max(0, Math.min(1, (scrollProgress - 0.6) * 2.5));

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden"
    >
      {/* Real House Image */}
      <div className="relative z-10 flex items-center justify-center">
        <div 
          className="relative transition-all duration-1000 rounded-lg overflow-hidden shadow-2xl"
          style={{
            transform: `scale(${0.7 + scrollProgress * 0.4})`,
            filter: `brightness(${0.8 + scrollProgress * 0.3})`,
          }}
        >
          {/* House Image */}
          <img 
            src={houseImage} 
            alt="Beautiful house ready for professional cleaning"
            className="w-full h-auto max-w-2xl"
            style={{
              maxHeight: '500px',
              objectFit: 'cover',
            }}
          />
          
          {/* Door overlay for animation */}
          <div 
            className="absolute"
            style={{
              bottom: '15%',
              left: '45%',
              width: '10%',
              height: '25%',
              background: 'rgba(139, 69, 19, 0.8)',
              transformOrigin: 'left center',
              transform: `rotateY(${doorProgress * -70}deg)`,
              transition: 'transform 1000ms ease-out',
              borderRadius: '2px',
            }}
          >
            {/* Door handle */}
            <div 
              className="absolute bg-yellow-400 rounded-full"
              style={{
                top: '50%',
                right: '10%',
                width: '8px',
                height: '8px',
                transform: 'translateY(-50%)',
              }}
            />
          </div>
          
          {/* Welcome mat */}
          <div 
            className="absolute bg-amber-900 rounded transition-all duration-1000"
            style={{
              bottom: '8%',
              left: '42%',
              width: '16%',
              height: '6%',
              opacity: scrollProgress > 0.3 ? 1 : 0,
              transform: `translateY(${scrollProgress > 0.3 ? 0 : 20}px)`,
            }}
          />
        </div>
      </div>

      {/* Person entering */}
      <div 
        className="absolute transition-all duration-1000 z-20"
        style={{
          bottom: '25%',
          left: `${35 + personProgress * 20}%`,
          transform: `translateX(-50%) scale(${0.8 + personProgress * 0.3})`,
          opacity: personProgress > 0 ? 1 : 0,
        }}
      >
        {/* Cleaner figure */}
        <div className="relative">
          {/* Body */}
          <div className="w-10 h-20 bg-primary rounded-t-lg shadow-lg" />
          {/* Head */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-200 rounded-full border-2 border-amber-300" />
          {/* Hair/Cap */}
          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-orange-600 rounded-t-full" />
          {/* Arms */}
          <div className="absolute top-3 -left-4 w-8 h-3 bg-primary rounded-full rotate-12 shadow-md" />
          <div className="absolute top-3 -right-4 w-8 h-3 bg-primary rounded-full -rotate-12 shadow-md" />
          {/* Legs */}
          <div className="absolute -bottom-6 left-2 w-3 h-8 bg-blue-800 rounded-b-lg shadow-md" />
          <div className="absolute -bottom-6 right-2 w-3 h-8 bg-blue-800 rounded-b-lg shadow-md" />
          {/* Feet */}
          <div className="absolute -bottom-6 left-1 w-5 h-2 bg-black rounded-full" />
          <div className="absolute -bottom-6 right-1 w-5 h-2 bg-black rounded-full" />
          
          {/* Cleaning equipment */}
          <div 
            className="absolute top-2 -right-8 transition-all duration-500"
            style={{
              opacity: cleaningProgress,
              transform: `rotate(${cleaningProgress * 15}deg)`,
            }}
          >
            {/* Vacuum cleaner */}
            <div className="w-4 h-12 bg-gray-600 rounded-lg shadow-md" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-gray-700 rounded-lg" />
            {/* Vacuum cord */}
            <div className="absolute top-2 -left-3 w-8 h-1 bg-gray-400 rounded-full" />
          </div>
          
          {/* Cleaning bucket */}
          <div 
            className="absolute top-1 -left-8 transition-all duration-500"
            style={{
              opacity: cleaningProgress * 0.8,
              transform: `translateY(${cleaningProgress * -5}px)`,
            }}
          >
            <div className="w-5 h-6 bg-blue-600 rounded-b-lg" />
            <div className="absolute top-1 left-1 w-3 h-1 bg-blue-400 rounded" />
          </div>
        </div>
      </div>

      {/* Cleaning sparkles */}
      {cleaningProgress > 0 && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-yellow-400 text-2xl animate-ping"
              style={{
                left: `${40 + Math.sin(i) * 20}%`,
                top: `${60 + Math.cos(i) * 15}%`,
                animationDelay: `${i * 0.2}s`,
                opacity: cleaningProgress,
              }}
            >
              ✨
            </div>
          ))}
        </div>
      )}

      {/* Text overlay */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-40">
        <div 
          className="transition-all duration-1000"
          style={{
            opacity: scrollProgress > 0.2 ? 1 : 0,
            transform: `translateY(${scrollProgress > 0.2 ? 0 : 20}px)`,
          }}
        >
          <h3 className="text-2xl font-bold text-primary mb-2">
            Professional Cleaning Services
          </h3>
          <p className="text-neutral-600 max-w-md">
            {cleaningProgress > 0.5 
              ? "Transforming your home with expert care" 
              : personProgress > 0.5 
                ? "Our team arrives ready to work"
                : doorProgress > 0.5
                  ? "Welcome to exceptional cleaning"
                  : "Your trusted cleaning professionals"
            }
          </p>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute top-8 right-8 z-40">
        <div className="w-2 h-32 bg-neutral-200 rounded-full overflow-hidden">
          <div 
            className="w-full bg-primary transition-all duration-300 rounded-full"
            style={{
              height: `${scrollProgress * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HouseEntranceAnimation;