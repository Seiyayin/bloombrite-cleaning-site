import { FC, ReactNode } from 'react';

interface SchemaOrgProps {
  children: any;
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
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
    "description": "Professional cleaning services available 24/7 for homes and businesses in Michigan, including residential cleaning, commercial cleaning, deep cleaning, move-in/out cleaning, and more."
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};

// Deep Cleaning Service Schema
export const DeepCleaningSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Deep Cleaning",
    "name": "Deep Cleaning Services",
    "url": "https://www.bloombritecleaning.com/services/deep-cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bloombrite Cleaning",
      "telephone": "734-489-9908",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2207 Evergreen St",
        "addressLocality": "Wixom",
        "addressRegion": "MI",
        "postalCode": "48393",
        "addressCountry": "US"
      }
    },
    "description": "Our thorough deep cleaning service addresses hard-to-reach areas and deeply embedded dirt. Perfect for spring cleaning, special occasions, or when your home needs a fresh start.",
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Wixom, MI"
      },
      {
        "@type": "City",
        "name": "Novi, MI"
      },
      {
        "@type": "City",
        "name": "Livonia, MI"
      }
    ],
    "serviceOutput": {
      "@type": "Thing",
      "name": "Clean home",
      "description": "A spotless, sanitized home with attention to details like baseboards, ceiling fans, inside cabinets, behind appliances, and other typically overlooked areas."
    },
    "termsOfService": "24-hour satisfaction guarantee with free touch-ups if needed"
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};

// Move-In/Out Cleaning Service Schema
export const MoveInOutCleaningSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Move-In/Out Cleaning",
    "name": "Move-In/Out Cleaning Services",
    "url": "https://www.bloombritecleaning.com/services/move-in-out-cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bloombrite Cleaning",
      "telephone": "734-489-9908",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2207 Evergreen St",
        "addressLocality": "Wixom",
        "addressRegion": "MI",
        "postalCode": "48393",
        "addressCountry": "US"
      }
    },
    "description": "Comprehensive move-in/move-out cleaning service that ensures your property is spotless for new tenants or helps you reclaim your security deposit when moving out. We clean empty properties from top to bottom.",
    "offers": {
      "@type": "Offer",
      "price": "350",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Wixom, MI"
      },
      {
        "@type": "City",
        "name": "Novi, MI"
      },
      {
        "@type": "City",
        "name": "Livonia, MI"
      }
    ],
    "serviceOutput": {
      "@type": "Thing",
      "name": "Move-ready property",
      "description": "A completely cleaned property with spotless appliances, sanitized bathrooms, clean interior windows, detailed kitchen cleaning, and immaculate floors - ready for new occupants or final inspection."
    },
    "termsOfService": "Landlord/rental property management approved cleaning checklist followed"
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
