import React, { useEffect, useRef, useState } from 'react';

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
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Sky and clouds */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-200 to-blue-100">
          <div 
            className="absolute top-10 left-10 w-16 h-8 bg-white rounded-full opacity-70 transition-transform duration-1000"
            style={{
              transform: `translateX(${scrollProgress * 100}px)`,
            }}
          />
          <div 
            className="absolute top-16 right-20 w-20 h-10 bg-white rounded-full opacity-60 transition-transform duration-1000"
            style={{
              transform: `translateX(${-scrollProgress * 80}px)`,
            }}
          />
        </div>
        
        {/* Ground */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-green-300 to-green-200" />
        
        {/* Pathway */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000"
          style={{
            width: `${Math.max(100, 300 - scrollProgress * 200)}px`,
            height: `${Math.max(50, 200 - scrollProgress * 150)}px`,
            background: 'linear-gradient(to top, #8B7355, #A0845C)',
            clipPath: 'polygon(40% 100%, 60% 100%, 70% 0%, 30% 0%)',
          }}
        />
      </div>

      {/* House structure */}
      <div className="relative z-10">
        {/* House base */}
        <div 
          className="relative bg-amber-100 border-4 border-amber-200 transition-all duration-1000"
          style={{
            width: '300px',
            height: '250px',
            transform: `scale(${0.8 + scrollProgress * 0.3})`,
          }}
        >
          {/* Roof */}
          <div 
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 transition-all duration-1000"
            style={{
              width: '0',
              height: '0',
              borderLeft: '180px solid transparent',
              borderRight: '180px solid transparent',
              borderBottom: '80px solid #8B4513',
              transform: `translateX(-50%) scale(${0.8 + scrollProgress * 0.3})`,
            }}
          />
          
          {/* Windows */}
          <div className="absolute top-8 left-8 w-16 h-16 bg-blue-200 border-4 border-blue-300">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-400" />
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-blue-400" />
          </div>
          <div className="absolute top-8 right-8 w-16 h-16 bg-blue-200 border-4 border-blue-300">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-400" />
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-blue-400" />
          </div>
          
          {/* Door frame */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-32 bg-amber-200 border-4 border-amber-300">
            {/* Door */}
            <div 
              className="absolute inset-1 bg-orange-800 transition-all duration-1000 origin-left"
              style={{
                transform: `rotateY(${doorProgress * -70}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Door handle */}
              <div className="absolute top-1/2 right-2 w-2 h-2 bg-yellow-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Person entering */}
      <div 
        className="absolute bottom-16 transition-all duration-1000 z-20"
        style={{
          left: `${50 - personProgress * 15}%`,
          transform: `translateX(-50%) scale(${0.6 + personProgress * 0.4})`,
          opacity: personProgress > 0 ? 1 : 0,
        }}
      >
        {/* Cleaner figure */}
        <div className="relative">
          {/* Body */}
          <div className="w-8 h-16 bg-primary rounded-t-lg" />
          {/* Head */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-200 rounded-full" />
          {/* Arms */}
          <div className="absolute top-2 -left-3 w-6 h-2 bg-primary rounded-full rotate-12" />
          <div className="absolute top-2 -right-3 w-6 h-2 bg-primary rounded-full -rotate-12" />
          {/* Legs */}
          <div className="absolute -bottom-4 left-1 w-2 h-6 bg-blue-800 rounded-b-lg" />
          <div className="absolute -bottom-4 right-1 w-2 h-6 bg-blue-800 rounded-b-lg" />
          
          {/* Cleaning equipment */}
          <div 
            className="absolute top-1 -right-6 transition-all duration-500"
            style={{
              opacity: cleaningProgress,
              transform: `rotate(${cleaningProgress * 10}deg)`,
            }}
          >
            {/* Vacuum cleaner */}
            <div className="w-3 h-8 bg-gray-600 rounded" />
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-2 bg-gray-700 rounded" />
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