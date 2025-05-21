// This script preloads critical resources to improve performance
// Execute immediately (not waiting for DOMContentLoaded) to start loading critical resources early
(function() {
  // Add preload hints for critical fonts and largest contentful paint images
  const preloadLinks = [
    // Critical images for hero and first visible sections
    { href: '/assets/team.jpg', as: 'image', type: 'image/jpeg', importance: 'high' },
    { href: '/Window cleaning.jpg', as: 'image', type: 'image/jpeg', importance: 'high' },
    { href: '/powerwashing.jpg', as: 'image', type: 'image/jpeg', importance: 'high' },
    { href: '/living room deep cleaning.jpg', as: 'image', type: 'image/jpeg', importance: 'high' },
    
    // Preload critical fonts
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
  ];
  
  preloadLinks.forEach(link => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = link.href;
    preloadLink.as = link.as;
    
    if (link.type) preloadLink.type = link.type;
    if (link.crossorigin) preloadLink.crossOrigin = link.crossorigin;
    if (link.importance) preloadLink.setAttribute('importance', link.importance);
    
    document.head.appendChild(preloadLink);
  });
  
  // Defer non-critical CSS
  document.querySelectorAll('link[rel="stylesheet"]:not([data-critical="true"])').forEach(link => {
    link.setAttribute('media', 'print');
    link.setAttribute('onload', "this.media='all'");
  });
})();