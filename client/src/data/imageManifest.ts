// Auto-generated image manifest
// This manifest maps image paths to their optimized versions and metadata

export interface ImageVariant {
  width: number;
  url: string;
  format: 'webp' | 'jpg' | 'png';
}

export interface ImageInfo {
  width: number;
  height: number;
  webp: ImageVariant[];
  fallback: ImageVariant[];
}

// Core images used throughout the site - includes files that actually exist with proper variants
export const imageManifest: Record<string, ImageInfo> = {
  '/images/bloombrite-logo.png': {
    width: 300,
    height: 150,
    webp: [],
    fallback: [{ width: 300, url: '/images/bloombrite-logo.png', format: 'png' }]
  },
  '/images/Kitchen deep cleaning.jpg': {
    width: 1200,
    height: 800,
    webp: [{ width: 1200, url: '/images/Kitchen deep cleaning.webp', format: 'webp' }],
    fallback: [{ width: 1200, url: '/images/Kitchen deep cleaning.jpg', format: 'jpg' }]
  },
  '/images/team-optimized.webp': {
    width: 1000,
    height: 600,
    webp: [{ width: 1000, url: '/images/team-optimized.webp', format: 'webp' }],
    fallback: [{ width: 1000, url: '/images/team.jpg', format: 'jpg' }]
  },
  '/images/team.jpg': {
    width: 1000,
    height: 600,
    webp: [{ width: 1000, url: '/images/team.webp', format: 'webp' }],
    fallback: [{ width: 1000, url: '/images/team.jpg', format: 'jpg' }]
  },
  '/images/living room deep cleaning.jpg': {
    width: 1000,
    height: 750,
    webp: [
      { width: 480, url: '/images/living room deep cleaning-480w.webp', format: 'webp' },
      { width: 768, url: '/images/living room deep cleaning-768w.webp', format: 'webp' },
      { width: 1200, url: '/images/living room deep cleaning-1200w.webp', format: 'webp' },
      { width: 1600, url: '/images/living room deep cleaning-1600w.webp', format: 'webp' },
      { width: 1000, url: '/images/living room deep cleaning.webp', format: 'webp' }
    ],
    fallback: [
      { width: 480, url: '/images/living room deep cleaning-480w.jpg', format: 'jpg' },
      { width: 768, url: '/images/living room deep cleaning-768w.jpg', format: 'jpg' },
      { width: 1200, url: '/images/living room deep cleaning-1200w.jpg', format: 'jpg' },
      { width: 1600, url: '/images/living room deep cleaning-1600w.jpg', format: 'jpg' },
      { width: 1000, url: '/images/living room deep cleaning.jpg', format: 'jpg' }
    ]
  },
  '/images/bedroom-clean.jpg': {
    width: 800,
    height: 600,
    webp: [{ width: 800, url: '/images/bedroom-clean.webp', format: 'webp' }],
    fallback: [{ width: 800, url: '/images/bedroom-clean.jpg', format: 'jpg' }]
  },
  '/images/kitchen-main.jpg': {
    width: 800,
    height: 600,
    webp: [
      { width: 480, url: '/images/kitchen-main-480w.webp', format: 'webp' },
      { width: 768, url: '/images/kitchen-main-768w.webp', format: 'webp' },
      { width: 800, url: '/images/kitchen-main.webp', format: 'webp' }
    ],
    fallback: [
      { width: 480, url: '/images/kitchen-main-480w.jpg', format: 'jpg' },
      { width: 768, url: '/images/kitchen-main-768w.jpg', format: 'jpg' },
      { width: 800, url: '/images/kitchen-main.jpg', format: 'jpg' }
    ]
  },
  '/images/kitchen-post.jpg': {
    width: 800,
    height: 600,
    webp: [
      { width: 480, url: '/images/kitchen-post-480w.webp', format: 'webp' },
      { width: 768, url: '/images/kitchen-post-768w.webp', format: 'webp' },
      { width: 1200, url: '/images/kitchen-post-1200w.webp', format: 'webp' },
      { width: 1600, url: '/images/kitchen-post-1600w.webp', format: 'webp' },
      { width: 800, url: '/images/kitchen-post.webp', format: 'webp' }
    ],
    fallback: [
      { width: 480, url: '/images/kitchen-post-480w.jpg', format: 'jpg' },
      { width: 768, url: '/images/kitchen-post-768w.jpg', format: 'jpg' },
      { width: 1200, url: '/images/kitchen-post-1200w.jpg', format: 'jpg' },
      { width: 1600, url: '/images/kitchen-post-1600w.jpg', format: 'jpg' },
      { width: 800, url: '/images/kitchen-post.jpg', format: 'jpg' }
    ]
  },
  '/images/window-cleaning.jpg': {
    width: 800,
    height: 600,
    webp: [
      { width: 480, url: '/images/window-cleaning-480w.webp', format: 'webp' },
      { width: 768, url: '/images/window-cleaning-768w.webp', format: 'webp' },
      { width: 1200, url: '/images/window-cleaning-1200w.webp', format: 'webp' },
      { width: 800, url: '/images/window-cleaning.webp', format: 'webp' }
    ],
    fallback: [
      { width: 480, url: '/images/window-cleaning-480w.jpg', format: 'jpg' },
      { width: 768, url: '/images/window-cleaning-768w.jpg', format: 'jpg' },
      { width: 1200, url: '/images/window-cleaning-1200w.jpg', format: 'jpg' },
      { width: 800, url: '/images/window-cleaning.jpg', format: 'jpg' }
    ]
  },
  '/images/window-washing.jpg': {
    width: 800,
    height: 600,
    webp: [
      { width: 480, url: '/images/window-washing-480w.webp', format: 'webp' },
      { width: 768, url: '/images/window-washing-768w.webp', format: 'webp' },
      { width: 1200, url: '/images/window-washing-1200w.webp', format: 'webp' },
      { width: 1600, url: '/images/window-washing-1600w.webp', format: 'webp' },
      { width: 800, url: '/images/window-washing.webp', format: 'webp' }
    ],
    fallback: [
      { width: 480, url: '/images/window-washing-480w.jpg', format: 'jpg' },
      { width: 768, url: '/images/window-washing-768w.jpg', format: 'jpg' },
      { width: 1200, url: '/images/window-washing-1200w.jpg', format: 'jpg' },
      { width: 1600, url: '/images/window-washing-1600w.jpg', format: 'jpg' },
      { width: 800, url: '/images/window-washing.jpg', format: 'jpg' }
    ]
  },
  '/images/Window cleaning.jpg': {
    width: 800,
    height: 600,
    webp: [],
    fallback: [{ width: 800, url: '/images/Window cleaning.jpg', format: 'jpg' }]
  },
  '/images/power washing.jpg': {
    width: 800,
    height: 600,
    webp: [],
    fallback: [{ width: 800, url: '/images/power washing.jpg', format: 'jpg' }]
  },
  '/images/stove-cleaning.jpg': {
    width: 800,
    height: 600,
    webp: [],
    fallback: [{ width: 800, url: '/images/stove-cleaning.jpg', format: 'jpg' }]
  },
  '/images/bbb-accredited-business.png': {
    width: 150,
    height: 100,
    webp: [],
    fallback: [{ width: 150, url: '/images/bbb-accredited-business.png', format: 'png' }]
  }
};

export default imageManifest;