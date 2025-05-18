import { FC } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

const SeoHead: FC<SeoHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
}) => {
  // Set the document title
  document.title = title;
  
  // Find or create meta description tag
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);
  
  // Handle canonical URL
  if (canonicalUrl) {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }
  
  // Handle Open Graph tags
  const ogTags = [
    { property: 'og:title', content: ogTitle || title },
    { property: 'og:description', content: ogDescription || description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonicalUrl || window.location.href },
  ];
  
  if (ogImage) {
    ogTags.push({ property: 'og:image', content: ogImage });
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
  
  return null;
};

export default SeoHead;
