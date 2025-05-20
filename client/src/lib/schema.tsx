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

// Power Washing Service Schema
export const PowerWashingSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Power Washing",
    "name": "Power Washing Services",
    "url": "https://www.bloombritecleaning.com/services/power-washing",
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
    "description": "Professional power washing services for home exteriors, driveways, decks, and patios in Michigan. We remove dirt, grime, mold, and mildew to restore your property's appearance.",
    "offers": {
      "@type": "Offer",
      "price": "180",
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
      "name": "Clean exterior surfaces",
      "description": "Beautifully cleaned and restored exterior surfaces free from dirt, mold, mildew, and stains."
    },
    "keywords": "power washing, pressure washing, exterior cleaning, driveway cleaning, deck cleaning, patio cleaning, house washing, Michigan"
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};

// Window Cleaning Service Schema
export const WindowCleaningSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Window Cleaning",
    "name": "Window Cleaning Services",
    "url": "https://www.bloombritecleaning.com/services/window-cleaning",
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
    "description": "Professional window cleaning services for interior and exterior windows, including tracks, frames, and screens. We deliver streak-free, crystal-clear results to enhance your home's appearance and natural light.",
    "offers": {
      "@type": "Offer",
      "price": "160",
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
      "name": "Clean, streak-free windows",
      "description": "Crystal-clear windows that enhance natural light and curb appeal, with clean tracks, frames, and screens."
    },
    "keywords": "window cleaning, window washing, streak-free windows, window track cleaning, screen cleaning, Michigan window cleaners",
    "tool": {
      "@type": "HowTo",
      "name": "Window Cleaning Process",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Interior and exterior glass cleaning",
          "text": "Professional cleaning of all window panes with streak-free results"
        },
        {
          "@type": "HowToStep",
          "name": "Track and sill cleaning",
          "text": "Detailed cleaning of all window tracks and sills to remove dirt and debris"
        },
        {
          "@type": "HowToStep",
          "name": "Frame cleaning",
          "text": "Thorough wiping and detailing of window frames"
        },
        {
          "@type": "HowToStep",
          "name": "Screen cleaning",
          "text": "Removal and cleaning of all window screens"
        }
      ]
    }
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};

// Carpet Cleaning Service Schema
export const CarpetCleaningSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Carpet Cleaning",
    "name": "Carpet Cleaning Services",
    "url": "https://www.bloombritecleaning.com/services/carpet-cleaning",
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
    "description": "Professional carpet cleaning services using hot water extraction technology to remove deep stains, allergens, and odors while extending the life of your carpets.",
    "offers": {
      "@type": "Offer",
      "price": "150",
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
      "name": "Clean, fresh carpets",
      "description": "Thoroughly cleaned carpets free from deep dirt, stains, allergens, and odors with extended lifespan."
    },
    "keywords": "carpet cleaning, steam cleaning, carpet stain removal, allergen removal, carpet odor removal, hot water extraction, Michigan",
    "tool": {
      "@type": "HowTo",
      "name": "Carpet Cleaning Process",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Pre-inspection",
          "text": "Identify problem areas and determine appropriate cleaning method"
        },
        {
          "@type": "HowToStep",
          "name": "Pre-treatment",
          "text": "Apply specialized solutions to break down dirt and stains"
        },
        {
          "@type": "HowToStep",
          "name": "Hot water extraction",
          "text": "Deep clean with professional-grade equipment to remove dirt and cleaning solution"
        },
        {
          "@type": "HowToStep",
          "name": "Stain treatment",
          "text": "Apply specialized treatments for stubborn stains"
        },
        {
          "@type": "HowToStep",
          "name": "Grooming",
          "text": "Final grooming of carpet fibers to accelerate drying and enhance appearance"
        }
      ]
    }
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
      "name": "Bloombrite Cleaning"
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
    "name": "Bloombrite Cleaning",
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
