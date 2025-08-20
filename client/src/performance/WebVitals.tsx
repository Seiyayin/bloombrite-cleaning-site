import { useEffect } from 'react';

// Performance monitoring component
const WebVitals = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', Math.round(lastEntry.startTime));
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            console.log('FID:', Math.round(entry.processingStart - entry.startTime));
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });

        // Cumulative Layout Shift (CLS) 
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          console.log('CLS:', Math.round(clsValue * 1000) / 1000);
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });

        // Time to First Byte (TTFB)
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const ttfb = navigation.responseStart - navigation.requestStart;
          console.log('TTFB:', Math.round(ttfb));
        });

      } catch (error) {
        console.log('Performance monitoring not supported');
      }
    }
  }, []);

  return null;
};

export default WebVitals;