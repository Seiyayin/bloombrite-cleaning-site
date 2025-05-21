/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bloombritecleaning.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/404', '/thank-you'], // pages to exclude
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://bloombritecleaning.com/server-sitemap.xml', // Optional: for dynamic paths created at build time
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // Generate URLs for service pages
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};