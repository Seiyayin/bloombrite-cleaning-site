import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./performance/critical.css";

// Enhanced preload hints with WebP support
const addPreloadHints = () => {
  // Check WebP support
  const supportsWebP = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  const hasWebPSupport = supportsWebP();
  
  const criticalImages = [
    {
      webp: '/Kitchen Deep Cleaning_1755668325844.webp',
      fallback: '/Kitchen Deep Cleaning_1755668325844.png'
    },
    {
      webp: '/Window cleaning.webp',
      fallback: '/Window cleaning.jpg'
    },
    {
      webp: '/powerwashing.webp', 
      fallback: '/powerwashing.jpg'
    }
  ];
  
  criticalImages.forEach(({ webp, fallback }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = hasWebPSupport ? webp : fallback;
    link.as = 'image';
    link.type = hasWebPSupport ? 'image/webp' : 'image/jpeg';
    document.head.appendChild(link);
  });

  // Preload critical API endpoints
  const criticalAPI = document.createElement('link');
  criticalAPI.rel = 'prefetch';
  criticalAPI.href = '/api/google-reviews';
  document.head.appendChild(criticalAPI);
};

// Execute preload hints
if (typeof window !== 'undefined') {
  addPreloadHints();
  
  // Remove all performance monitoring to prevent plugin errors
}

createRoot(document.getElementById("root")!).render(<App />);
