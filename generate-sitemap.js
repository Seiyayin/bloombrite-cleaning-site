// This script generates a sitemap for the Bloombrite Cleaning website

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL of the website
const SITE_URL = 'https://bloombritecleaning.com';

// List of all pages (both static and dynamic)
const pages = [
  '/',
  '/services',
  '/locations',
  '/reviews',
  '/contact',
  '/quote',
  '/faq',
  '/accessibility',
  // Service pages
  '/services/window-cleaning',
  '/services/power-washing',
  '/services/carpet-cleaning',
  '/services/deep-cleaning',
  '/services/move-in-out-cleaning',
  '/services/standard-cleaning',
  // Location pages
  '/locations/wixom',
  '/locations/novi',
  '/locations/farmington-hills',
  '/locations/west-bloomfield',
  '/locations/northville',
  '/locations/plymouth',
  '/locations/livonia',
  '/locations/canton',
  // Blog pages
  '/blog',
  '/blog/cities',
  '/blog/cities/wixom',
  '/blog/cities/novi',
  '/blog/cities/west-bloomfield',
  '/blog/cities/livonia',
  '/blog/novi-house-cleaning-guide',
  '/blog/inside-appliance-cleaning',
  '/blog/memorial-day-cleaning',
  // Career pages
  '/careers',
];

// Excluded pages
const excludedPages = [
  '/404',
  '/thank-you',
];

// Generate sitemap XML
function generateSitemap() {
  const today = new Date().toISOString();
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add URLs
  pages.forEach(page => {
    if (!excludedPages.includes(page)) {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${SITE_URL}${page}</loc>\n`;
      sitemap += `    <lastmod>${today}</lastmod>\n`;
      sitemap += `    <changefreq>${page === '/' ? 'daily' : 'weekly'}</changefreq>\n`;
      sitemap += `    <priority>${page === '/' ? '1.0' : '0.8'}</priority>\n`;
      sitemap += '  </url>\n';
    }
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
}

// Generate robots.txt
function generateRobotsTxt() {
  let robotsTxt = 'User-agent: *\n';
  robotsTxt += 'Allow: /\n\n';
  robotsTxt += `Sitemap: ${SITE_URL}/sitemap.xml`;
  
  return robotsTxt;
}

// Save the files
const publicDir = path.join(__dirname, 'public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap.xml
fs.writeFileSync(
  path.join(publicDir, 'sitemap.xml'),
  generateSitemap()
);
console.log('✅ sitemap.xml has been generated successfully');

// Write robots.txt
fs.writeFileSync(
  path.join(publicDir, 'robots.txt'),
  generateRobotsTxt()
);
console.log('✅ robots.txt has been generated successfully');