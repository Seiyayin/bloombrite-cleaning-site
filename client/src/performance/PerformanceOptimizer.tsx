import { memo, useEffect } from 'react';

// Component for schema markup optimization
const SchemaOptimizer = memo(() => {
  useEffect(() => {
    // Add structured data for local business
    const schema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "CleaningService"],
      "name": "Bloombrite Cleaning",
      "alternateName": "BloomBrite Cleaning Services",
      "description": "Professional house cleaning services in Metro Detroit, Michigan. Bloombrite Cleaning offers general house cleaning, deep cleaning, move-in/out cleaning, recurring maid services (weekly, biweekly, monthly), office cleaning, and specialized residential cleaning with 97+ five-star reviews and guaranteed satisfaction.",
      "url": "https://www.bloombritecleaning.com",
      "telephone": "947-465-4217",
      "email": "sales@bloombritecleaning.com",
      "logo": "https://www.bloombritecleaning.com/bloombrite%20logo.png",
      "image": [
        "https://www.bloombritecleaning.com/images/team.jpg",
        "https://www.bloombritecleaning.com/images/kitchen-main.jpg",
        "https://www.bloombritecleaning.com/images/window-cleaning.jpg"
      ],
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
      "paymentAccepted": ["Cash", "Credit Card", "Check", "Online Payment", "Bitcoin"],
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
        "Wixom, Michigan",
        "Novi, Michigan",
        "Livonia, Michigan", 
        "Milford, Michigan",
        "Commerce Township, Michigan",
        "Farmington Hills, Michigan",
        "South Lyon, Michigan",
        "Walled Lake, Michigan",
        "West Bloomfield, Michigan",
        "Keego Harbor, Michigan"
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
        "reviewCount": "97",
        "bestRating": "5",
        "worstRating": "1"
      },
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

    // Create and append schema script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.head.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null;
});

SchemaOptimizer.displayName = 'SchemaOptimizer';

export default SchemaOptimizer;