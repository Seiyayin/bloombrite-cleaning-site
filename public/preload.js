// Optimized critical resource preloading
(function() {
  // DNS prefetch
  ['fonts.googleapis.com', 'fonts.gstatic.com'].forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = '//' + domain;
    document.head.appendChild(link);
  });
  
  // Preload hero image only
  const heroImg = document.createElement('link');
  heroImg.rel = 'preload';
  heroImg.href = '/Kitchen Deep Cleaning_1755668325844.png';
  heroImg.as = 'image';
  document.head.appendChild(heroImg);
  
  // Preconnect to fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preconnect';
  fontLink.href = 'https://fonts.googleapis.com';
  fontLink.crossOrigin = '';
  document.head.appendChild(fontLink);
})();