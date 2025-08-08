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

// Enhanced LocalBusiness Schema for Local Packs and Map Searches
export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "name": "Bloombrite Cleaning",
    "alternateName": "BloomBrite Cleaning Services",
    "image": [
      "https://www.bloombritecleaning.com/images/team.jpg",
      "https://www.bloombritecleaning.com/images/kitchen-main.jpg",
      "https://www.bloombritecleaning.com/images/window-cleaning.jpg"
    ],
    "logo": "https://www.bloombritecleaning.com/bloombrite%20logo.png",
    "url": "https://www.bloombritecleaning.com",
    "telephone": "947-465-4217",
    "email": "sales@bloombritecleaning.com",
    "description": "Professional residential and commercial cleaning services in Metro Detroit. We provide general cleaning, deep cleaning, move-in/out cleaning, weekly cleaning service, biweekly cleaning service, monthly cleaning service, office cleaning, power washing, window cleaning, and specialized cleaning services with guaranteed satisfaction.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2207 Evergreen St",
      "addressLocality": "Wixom",
      "addressRegion": "Michigan",
      "postalCode": "48393",
      "addressCountry": "United States"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.554479,
      "longitude": -83.540862
    },
    "hasMap": "https://www.google.com/maps/place/Wixom,+MI+48393",
    "priceRange": "$150-$500",
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Online Payment"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "16:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Wixom",
        "containedInPlace": { "@type": "State", "name": "Michigan" }
      },
      {
        "@type": "City", 
        "name": "Novi",
        "containedInPlace": { "@type": "State", "name": "Michigan" }
      },
      {
        "@type": "City",
        "name": "Livonia", 
        "containedInPlace": { "@type": "State", "name": "Michigan" }
      },
      {
        "@type": "City",
        "name": "Milford",
        "containedInPlace": { "@type": "State", "name": "Michigan" }
      },
      {
        "@type": "City",
        "name": "Commerce Township",
        "containedInPlace": { "@type": "State", "name": "Michigan" }
      },
      {
        "@type": "City",
        "name": "Farmington Hills",
        "containedInPlace": { "@type": "State", "name": "Michigan" }
      },
      {
        "@type": "City",
        "name": "South Lyon",
        "containedInPlace": { "@type": "State", "name": "Michigan" }
      },
      {
        "@type": "City",
        "name": "Walled Lake",
        "containedInPlace": { "@type": "State", "name": "Michigan" }
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 42.554479,
        "longitude": -83.540862
      },
      "geoRadius": "25000"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah M." },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "BloomBrite consistently delivers exceptional cleaning services. Their attention to detail is amazing and they always leave my home spotless. Highly recommend!"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "General Cleaning",
            "description": "Regular maintenance cleaning for homes including weekly, biweekly, and monthly options"
          },
          "price": "160",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Deep Cleaning",
            "description": "Comprehensive deep cleaning service"
          },
          "price": "250",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Power Washing",
            "description": "Exterior surface power washing"
          },
          "price": "320",
          "priceCurrency": "USD"
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/bloombritecleaning",
      "https://www.google.com/maps?cid=ChIJ8dw6RE6mJIgRsdro9IDycLk"
    ]
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};

// Enhanced Service Schema for Rich Snippets
export const ServiceSchema = ({ 
  serviceName, 
  serviceType, 
  description, 
  price, 
  url, 
  duration,
  features 
}: { 
  serviceName: string;
  serviceType: string;
  description: string;
  price: string;
  url: string;
  duration?: string;
  features?: string[];
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": ["Service", "Product"],
    "serviceType": serviceType,
    "name": serviceName,
    "description": description,
    "url": url,
    "image": [
      "https://www.bloombritecleaning.com/images/kitchen-main.jpg",
      "https://www.bloombritecleaning.com/images/window-cleaning.jpg",
      "https://www.bloombritecleaning.com/images/team.jpg"
    ],
    "provider": {
      "@type": ["LocalBusiness", "CleaningService"],
      "name": "Bloombrite Cleaning",
      "telephone": "947-465-4217",
      "email": "sales@bloombritecleaning.com",
      "url": "https://www.bloombritecleaning.com",
      "logo": "https://www.bloombritecleaning.com/bloombrite%20logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2207 Evergreen St",
        "addressLocality": "Wixom",
        "addressRegion": "Michigan",
        "postalCode": "48393",
        "addressCountry": "United States"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 42.554479,
        "longitude": -83.540862
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "Bloombrite Cleaning"
      },
      "validFrom": "2025-01-01",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": price,
        "priceCurrency": "USD",
        "valueAddedTaxIncluded": false
      }
    },
    "category": "Cleaning Services",
    "areaServed": [
      "Wixom, Michigan",
      "Novi, Michigan", 
      "Livonia, Michigan",
      "Milford, Michigan",
      "Commerce Township, Michigan",
      "Farmington Hills, Michigan",
      "South Lyon, Michigan",
      "Walled Lake, Michigan"
    ],
    "serviceOutput": {
      "@type": "Thing",
      "name": "Clean Property",
      "description": `Professional ${serviceType.toLowerCase()} resulting in spotless, sanitized surfaces and improved indoor air quality.`
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Homeowners and Business Owners"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Service Guarantee",
        "value": "100% Satisfaction Guaranteed"
      },
      {
        "@type": "PropertyValue",
        "name": "Insurance",
        "value": "Fully Bonded and Insured"
      },
      {
        "@type": "PropertyValue",
        "name": "Eco-Friendly",
        "value": "Green Cleaning Products Available"
      }
    ]
  };

  if (duration) {
    schema.duration = duration;
  }

  if (features && features.length > 0) {
    schema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": serviceName,
      "itemListElement": features.map((feature, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
    };
  }

  return <SchemaOrg>{schema}</SchemaOrg>;
};

// Deep Cleaning Service Schema
export const DeepCleaningSchema = () => {
  return ServiceSchema({
    serviceName: "Deep Cleaning Services",
    serviceType: "Deep Cleaning",
    description: "Comprehensive deep cleaning service that addresses hard-to-reach areas and deeply embedded dirt. Perfect for spring cleaning, special occasions, or when your home needs a fresh start.",
    price: "250",
    url: "https://www.bloombritecleaning.com/services/deep-cleaning",
    duration: "PT4H",
    features: [
      "Detailed dusting of all surfaces including vents and baseboards",
      "Interior oven and refrigerator cleaning",
      "Bathroom deep scrubbing and scale removal", 
      "Window and blind cleaning",
      "Floor deep cleaning and sanitizing"
    ]
  });
};

// Move-In/Out Cleaning Service Schema
export const MoveInOutCleaningSchema = () => {
  return ServiceSchema({
    serviceName: "Move-In/Out Cleaning Services",
    serviceType: "Move-In/Out Cleaning",
    description: "Comprehensive cleaning for when you're moving in or out of a property, ensuring a fresh start or security deposit return.",
    price: "250",
    url: "https://www.bloombritecleaning.com/services/move-in-out-cleaning",
    duration: "PT5H",
    features: [
      "Everything included in Deep Cleaning service",
      "Intensive kitchen cleaning including inside all appliances",
      "Complete interior window and track cleaning",
      "Cleaning inside all cabinets, drawers, and closets",
      "Thorough cleaning of all light fixtures and ceiling fans"
    ]
  });
};

// Power Washing Service Schema
export const PowerWashingSchema = () => {
  return ServiceSchema({
    serviceName: "Power Washing Services",
    serviceType: "Power Washing",
    description: "Professional power washing services to restore the appearance of your home's exterior surfaces, driveways, decks, and patios.",
    price: "320",
    url: "https://www.bloombritecleaning.com/services/power-washing",
    duration: "PT3H",
    features: [
      "Professional-grade power washing equipment",
      "Environmentally friendly cleaning solutions",
      "Adjustable pressure settings for different surfaces",
      "Removal of dirt, grime, mold, and mildew",
      "Pre-treatment of heavily soiled areas"
    ]
  });
};

// Window Cleaning Service Schema
export const WindowCleaningSchema = () => {
  return ServiceSchema({
    serviceName: "Window Cleaning Services",
    serviceType: "Window Cleaning",
    description: "Professional interior and exterior window cleaning services to let more light into your home and improve curb appeal.",
    price: "220",
    url: "https://www.bloombritecleaning.com/services/window-cleaning",
    duration: "PT2H",
    features: [
      "Interior and exterior window cleaning",
      "Screen cleaning and inspection",
      "Window sill and track cleaning",
      "Streak-free professional results",
      "Safety equipment for high windows"
    ]
  });
};

// Carpet Cleaning Service Schema
export const CarpetCleaningSchema = () => {
  return ServiceSchema({
    serviceName: "Carpet Cleaning Services",
    serviceType: "Carpet Cleaning", 
    description: "Professional deep carpet cleaning to remove stains, odors, and allergens, extending the life of your carpet.",
    price: "200",
    url: "https://www.bloombritecleaning.com/services/carpet-cleaning",
    duration: "PT3H",
    features: [
      "Steam cleaning with powerful extraction",
      "Pre-treatment of stains and high-traffic areas",
      "Pet odor and stain removal",
      "Allergen removal and sanitization",
      "Fast-drying professional equipment"
    ]
  });
};

// Enhanced Review Schema for Rich Snippets
export const ReviewSchema = ({ reviews }: { reviews: any[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bloombrite Cleaning",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5"
      },
      "reviewBody": review.text,
      "datePublished": review.date || "2024-01-01"
    }))
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};

// Enhanced FAQ Schema for Rich Snippets  
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

// Breadcrumb Schema for Better Navigation
export const BreadcrumbSchema = ({ items }: { items: Array<{ name: string; url: string }> }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};

// Website Schema for Site-wide SEO
export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bloombrite Cleaning",
    "alternateName": "BloomBrite Cleaning Services",
    "url": "https://www.bloombritecleaning.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.bloombritecleaning.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://www.facebook.com/bloombritecleaning"
    ]
  };

  return <SchemaOrg>{schema}</SchemaOrg>;
};