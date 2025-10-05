import { FC, useEffect, useMemo } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const SeoHead: FC<SeoHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  structuredData,
}) => {
  // Memoize SEO data to prevent unnecessary updates
  const seoData = useMemo(() => ({
    title,
    description,
    canonicalUrl,
    ogTitle: ogTitle || title,
    ogDescription: ogDescription || description,
    ogImage,
    ogUrl: canonicalUrl || (typeof window !== 'undefined' ? window.location.href : ''),
    structuredData
  }), [title, description, canonicalUrl, ogTitle, ogDescription, ogImage, structuredData]);

  useEffect(() => {
    // Set the document title immediately (critical for LCP)
    document.title = seoData.title;
    
    // Batch non-critical SEO updates to prevent render blocking
    requestAnimationFrame(() => {
      // Find or create meta description tag
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', seoData.description);
      
      // Handle canonical URL
      if (seoData.canonicalUrl) {
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
          canonicalLink = document.createElement('link');
          canonicalLink.setAttribute('rel', 'canonical');
          document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', seoData.canonicalUrl);
      }
      
      // Handle Open Graph tags
      const ogTags = [
        { property: 'og:title', content: seoData.ogTitle },
        { property: 'og:description', content: seoData.ogDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: seoData.ogUrl },
      ];
      
      if (seoData.ogImage) {
        ogTags.push({ property: 'og:image', content: seoData.ogImage });
      }
      
      ogTags.forEach(({ property, content }) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      });
      
      // Handle structured data (JSON-LD)
      const scriptId = 'structured-data-jsonld';
      let structuredDataScript = document.querySelector(`script#${scriptId}`);
      
      if (seoData.structuredData) {
        if (!structuredDataScript) {
          structuredDataScript = document.createElement('script');
          structuredDataScript.setAttribute('id', scriptId);
          structuredDataScript.setAttribute('type', 'application/ld+json');
          document.head.appendChild(structuredDataScript);
        }
        structuredDataScript.textContent = JSON.stringify(seoData.structuredData);
      } else if (structuredDataScript) {
        structuredDataScript.remove();
      }
    });
  }, [seoData]);
  
  return null;
};

export default SeoHead;
