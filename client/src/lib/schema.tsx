import { FC, ReactNode } from 'react';

interface SchemaOrgProps {
  children: ReactNode;
}

const SchemaOrg: FC<SchemaOrgProps> = ({ children }) => {
  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(children) }}
    />
  );
};

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BloomBrite Cleaning",
    "image": "",
    "url": "https://www.bloombritecleaning.com",
    "telephone": "(123) 456-7890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Clean Street",
      "addressLocality": "Wixom",
      "addressRegion": "MI",
      "postalCode": "48393",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.5267,
      "longitude": -83.5302
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/bloombritecleaning",
      "https://www.instagram.com/bloombritecleaning",
      "https://twitter.com/bloombriteclean"
    ],
    "priceRange": "$$",
    "description": "Professional cleaning services for homes and businesses in Michigan, including standard cleaning, deep cleaning, move-in/out cleaning, and more."
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};

export const ServiceSchema = ({ 
  name, 
  description, 
  url, 
  image,
  price,
  areaServed,
}: {
  name: string,
  description: string,
  url: string,
  image: string,
  price: string,
  areaServed: string[],
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "BloomBrite Cleaning"
    },
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "url": url,
    "image": image,
    "offers": {
      "@type": "Offer",
      "price": price.replace(/\D/g, ''),
      "priceCurrency": "USD"
    }
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};

export const ReviewSchema = ({ reviews }: { reviews: any[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BloomBrite Cleaning",
    "review": reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewBody": review.text
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length,
      "reviewCount": reviews.length
    }
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};

export const FAQSchema = ({ faqs }: { faqs: any[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};
