import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add preload hints for critical resources
const addPreloadHints = () => {
  const criticalImages = [
    '/Window cleaning.jpg',
    '/powerwashing.jpg',
    '/living room deep cleaning.jpg'
  ];
  
  criticalImages.forEach(imageSrc => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = imageSrc;
    link.as = 'image';
    document.head.appendChild(link);
  });
};

// Execute preload hints
if (typeof window !== 'undefined') {
  addPreloadHints();
}

createRoot(document.getElementById("root")!).render(<App />);
