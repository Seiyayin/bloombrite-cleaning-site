// Script to submit updated URLs to IndexNow
// This can be run after build/deploy to notify search engines of changes

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const INDEXNOW_ENABLED = process.env.INDEXNOW_ENABLED === 'true';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const API_URL = process.env.API_URL || 'http://localhost:5000';

async function submitToIndexNow() {
  if (!INDEXNOW_ENABLED) {
    console.log('⏭️  IndexNow is disabled. Set INDEXNOW_ENABLED=true to enable.');
    return;
  }

  if (!INDEXNOW_KEY) {
    console.error('❌ IndexNow key not configured. Set INDEXNOW_KEY environment variable.');
    process.exit(1);
  }

  try {
    // Read the list of URLs to submit (can be customized)
    const urlsFile = path.join(__dirname, 'indexnow-urls.json');
    
    let urls = [];
    if (fs.existsSync(urlsFile)) {
      urls = JSON.parse(fs.readFileSync(urlsFile, 'utf8'));
    } else {
      // Default: submit all URLs from sitemap
      console.log('📄 No indexnow-urls.json found, extracting URLs from sitemap...');
      const sitemapPath = path.join(__dirname, 'public/sitemap.xml');
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
      
      // Extract URLs from sitemap
      const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
      urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
    }

    if (urls.length === 0) {
      console.log('ℹ️  No URLs to submit');
      return;
    }

    console.log(`📤 Submitting ${urls.length} URLs to IndexNow...`);

    // Submit to the IndexNow API endpoint
    const response = await fetch(`${API_URL}/api/indexnow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ urls })
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅', result.message);
    } else {
      console.error('❌', result.message);
      if (result.details) console.error('Details:', result.details);
    }

  } catch (error) {
    console.error('❌ Error submitting to IndexNow:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

// Run the script
submitToIndexNow();
