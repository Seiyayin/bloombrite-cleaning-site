// This script preloads critical resources to improve performance
document.addEventListener('DOMContentLoaded', () => {
  // Preload largest contentful paint images
  const preloadLinks = [
    { href: '/Window cleaning.jpg', as: 'image' },
    { href: '/powerwashing.jpg', as: 'image' },
    { href: '/living room deep cleaning.jpg', as: 'image' },
  ];
  
  preloadLinks.forEach(link => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = link.href;
    preloadLink.as = link.as;
    document.head.appendChild(preloadLink);
  });
});