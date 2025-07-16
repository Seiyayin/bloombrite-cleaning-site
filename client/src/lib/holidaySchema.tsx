import React from 'react';

interface SchemaOrgProps {
  children: any;
}

const SchemaOrg: React.FC<SchemaOrgProps> = ({ children }) => {
  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(children) }}
    />
  );
};

// Memorial Day Cleaning Service Schema
export const MemorialDayCleaningSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Memorial Day Cleaning Service",
    "name": "Memorial Day Cleaning Services",
    "url": "https://www.bloombritecleaning.com/blog/memorial-day-cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bloombrite Cleaning",
      "telephone": "947-465-4217",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2207 Evergreen St",
        "addressLocality": "Wixom",
        "addressRegion": "MI",
        "postalCode": "48393",
        "addressCountry": "US"
      }
    },
    "description": "Complete Memorial Day cleaning service to prepare your home for holiday gatherings and summer entertaining. Indoor and outdoor cleaning solutions available 24/7.",
    "offers": {
      "@type": "Offer",
      "price": "250",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-05-30",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "Bloombrite Cleaning"
      }
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
      "name": "Clean, party-ready home",
      "description": "A spotless home with clean living spaces, kitchen, bathrooms, and outdoor areas ready for Memorial Day entertaining."
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "termsOfService": "15% discount when booked before May 25, 2024. 100% satisfaction guarantee."
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};

// Holiday Cleaning Service Schema (Generic)
export const HolidayCleaningSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Holiday Cleaning Service",
    "name": "Holiday Cleaning Services",
    "url": "https://www.bloombritecleaning.com/services/holiday-cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bloombrite Cleaning",
      "telephone": "947-465-4217",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2207 Evergreen St",
        "addressLocality": "Wixom",
        "addressRegion": "MI",
        "postalCode": "48393",
        "addressCountry": "US"
      }
    },
    "description": "Specialized cleaning services for all major holidays including Memorial Day, Fourth of July, Labor Day, Thanksgiving, and Christmas. Prepare your home for entertaining with our professional cleaning team.",
    "offers": {
      "@type": "Offer",
      "price": "250",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "Bloombrite Cleaning"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Metro Detroit, MI"
    },
    "serviceOutput": {
      "@type": "Thing",
      "name": "Holiday-ready home",
      "description": "A completely cleaned home ready for holiday entertaining, with special attention to entertaining spaces, guest areas, and holiday-specific needs."
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "termsOfService": "Special pricing available for holiday packages. 100% satisfaction guarantee."
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};

// Appliance Cleaning Service Schema
export const ApplianceCleaningSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Appliance Cleaning Service",
    "name": "Inside Appliance Cleaning",
    "url": "https://www.bloombritecleaning.com/blog/inside-appliance-cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bloombrite Cleaning",
      "telephone": "947-465-4217",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2207 Evergreen St",
        "addressLocality": "Wixom",
        "addressRegion": "MI",
        "postalCode": "48393",
        "addressCountry": "US"
      }
    },
    "description": "Professional cleaning service for the inside of appliances including refrigerators, ovens, dishwashers, and microwaves. Extends appliance life and improves performance.",
    "offers": {
      "@type": "Offer",
      "price": "150",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "Bloombrite Cleaning"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Metro Detroit, MI"
    },
    "serviceOutput": {
      "@type": "Thing",
      "name": "Clean, sanitary appliances",
      "description": "Spotless, sanitized kitchen appliances that operate more efficiently and have longer lifespans due to professional cleaning."
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "termsOfService": "20% off Appliance Deep Cleaning package through May 30th. 100% satisfaction guarantee."
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};