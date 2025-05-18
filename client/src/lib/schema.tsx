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
    "name": "Bloombrite Cleaning",
    "image": "https://www.bloombritecleaning.com/logo.png", 
    "url": "https://www.bloombritecleaning.com",
    "telephone": "734-489-9908",
    "email": "sales@bloombritecleaning.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2207 Evergreen St",
      "addressLocality": "Wixom",
      "addressRegion": "MI",
      "postalCode": "48393",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.554479,
      "longitude": -83.540862
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Metro Detroit, MI"
    },
    "sameAs": [
      "https://www.facebook.com/bloombritecleaning",
      "https://www.google.com/maps?cid=ChIJ8dw6RE6mJIgRsdro9IDycLk"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "82"
    },
    "description": "Professional cleaning services for homes and businesses in Michigan, including residential cleaning, commercial cleaning, deep cleaning, move-in/out cleaning, and more."
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
