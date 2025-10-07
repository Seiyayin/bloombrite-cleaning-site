import { Helmet } from 'react-helmet-async';

const clamp = (s: string | undefined, max = 160): string => {
  if (!s) return '';
  const t = s.trim().replace(/\s+/g, ' ');
  return t.length <= max ? t : t.slice(0, max - 1).trimEnd() + '…';
};

const abs = (path?: string): string => {
  const base = 'https://www.bloombritecleaning.com';
  if (!path) return base + '/';
  const p = path.endsWith('/') ? path : path + '/';
  return base + p;
};

interface SeoHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  urlPath?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SeoHead({ 
  title, 
  description, 
  canonicalPath, 
  ogImage, 
  urlPath,
  structuredData 
}: SeoHeadProps) {
  const desc = clamp(description, 160);
  const url = abs(urlPath || canonicalPath || '/');

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {desc && <meta name="description" content={desc} />}
      {canonicalPath && <link rel="canonical" href={abs(canonicalPath)} />}

      {/* Open Graph only (NO Twitter) */}
      <meta property="og:type" content="website" />
      {title && <meta property="og:title" content={title} />}
      {desc && <meta property="og:description" content={desc} />}
      <meta property="og:url" content={url} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
