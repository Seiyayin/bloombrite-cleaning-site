// Enhanced performance optimization script
// Execute immediately for critical resource preloading and performance improvements
(function() {
  // Critical resource preloading
  const preloadLinks = [
    // Hero section critical images (WebP preferred)
    { href: '/Window cleaning.webp', as: 'image', type: 'image/webp', importance: 'high', fallback: '/Window cleaning.jpg' },
    { href: '/powerwashing.webp', as: 'image', type: 'image/webp', importance: 'high', fallback: '/powerwashing.jpg' },
    { href: '/living room deep cleaning.webp', as: 'image', type: 'image/webp', importance: 'high', fallback: '/living room deep cleaning.jpg' },
    { href: '/team.webp', as: 'image', type: 'image/webp', importance: 'high', fallback: '/team.jpg' },
    
    // Critical fonts with font-display: swap
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
  ];
  
  // Function to check WebP support
  function supportsWebP() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  
  const hasWebPSupport = supportsWebP();
  
  preloadLinks.forEach(link => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    
    // Use fallback for images if WebP not supported
    if (link.type === 'image/webp' && !hasWebPSupport && link.fallback) {
      preloadLink.href = link.fallback;
      preloadLink.type = 'image/jpeg';
    } else {
      preloadLink.href = link.href;
      if (link.type) preloadLink.type = link.type;
    }
    
    preloadLink.as = link.as;
    if (link.crossorigin) preloadLink.crossOrigin = link.crossorigin;
    if (link.importance) preloadLink.setAttribute('importance', link.importance);
    
    document.head.appendChild(preloadLink);
  });
  
  // DNS prefetch for external domains
  const dnsPrefetchDomains = [
    '//fonts.googleapis.com',
    '//www.google.com',
    '//maps.googleapis.com'
  ];
  
  dnsPrefetchDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
  
  // Defer non-critical CSS with improved loading
  document.querySelectorAll('link[rel="stylesheet"]:not([data-critical="true"])').forEach(link => {
    const media = link.media || 'all';
    link.media = 'print';
    link.setAttribute('onload', `this.media='${media}'; this.onload=null;`);
  });
  
  // Optimize image loading with Intersection Observer
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    }, { rootMargin: '50px' });
    
    // Observer will be applied to images when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
      });
    }
  }
  
  // Improve font loading performance
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      document.documentElement.className += ' fonts-loaded';
    });
  }
})();