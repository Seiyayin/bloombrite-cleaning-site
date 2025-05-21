import React, { useEffect } from 'react';

/**
 * Component that preloads critical resources to improve page load performance
 * This component addresses several Core Web Vitals issues:
 * - Eliminates render-blocking resources
 * - Reduces LCP (Largest Contentful Paint) time
 * - Preloads critical images
 */
const ResourcePreloader = () => {
  useEffect(() => {
    // Preload critical images
    const preloadCriticalImages = () => {
      const imagesToPreload = [
        '/powerwashing.jpg',
        '/Window cleaning.jpg',
      ];
      
      imagesToPreload.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.type = 'image/jpeg';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };
    
    // Lazy load non-critical JavaScript
    const deferNonCriticalJS = () => {
      // Add any non-critical scripts here that should be loaded after the page renders
      const nonCriticalScripts = [];
      
      nonCriticalScripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        document.body.appendChild(script);
      });
    };
    
    // Optimize CSS loading
    const optimizeCSSLoading = () => {
      // Find all stylesheets
      const styleLinks = document.querySelectorAll('link[rel="stylesheet"]');
      
      // Convert non-critical stylesheets to preload
      styleLinks.forEach((link, index) => {
        if (index > 0) { // First stylesheet is critical
          const href = link.getAttribute('href');
          if (href) {
            link.setAttribute('rel', 'preload');
            link.setAttribute('as', 'style');
            link.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
          }
        }
      });
    };
    
    // Execute optimizations
    preloadCriticalImages();
    deferNonCriticalJS();
    optimizeCSSLoading();
    
    // Clean up
    return () => {
      // Clean up any listeners if needed
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default ResourcePreloader;