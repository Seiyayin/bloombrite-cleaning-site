import { useEffect } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import CallToAction from '@/components/home/CallToAction';
import { MapPin, Star } from 'lucide-react';
import cities from '@/data/pseo-cities.json';

interface City {
  id: string;
  name: string;
  slug: string;
  fullName: string;
  zipCodes: string[];
  county: string;
  landmarks: string[];
  population: string;
  description: string;
}

const ServiceAreas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Bloombrite Cleaning Service Areas",
    "description": "Professional cleaning services across Metro Detroit, Michigan",
    "numberOfItems": cities.length,
    "itemListElement": cities.map((city: City, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Place",
        "name": city.fullName,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressRegion": "MI",
          "postalCode": city.zipCodes[0]
        }
      }
    }))
  };

  return (
    <>
      <SeoHead
        title="Service Areas | Professional Cleaning in Metro Detroit, MI"
        description="Bloombrite Cleaning serves Wixom, Novi, Milford, Commerce Township, South Lyon, and surrounding Metro Detroit areas. View all our service locations."
        canonicalUrl="https://www.bloombritecleaning.com/service-areas/"
        structuredData={structuredData}
      />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-orange-600 text-white -mt-16 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="page-title">
                Our Service Areas in Metro Detroit
              </h1>
              <p className="text-xl mb-8">
                Professional cleaning services across Oakland County and surrounding Michigan communities
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="container mx-auto px-4 pt-8">
          <Breadcrumbs items={breadcrumbItems} />
        </section>

        {/* Service Areas Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Where We Serve</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Bloombrite Cleaning proudly serves homes and businesses throughout Metro Detroit. 
                  Select your city to see available cleaning services in your area.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city: City) => (
                  <Link key={city.id} href={`/mi/${city.slug}/`}>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all cursor-pointer group" data-testid={`city-card-${city.slug}`}>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {city.fullName}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {city.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {city.county}
                            </span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {city.population} residents
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-primary font-medium">
                            View Services
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Why Choose Section */}
              <div className="mt-16 bg-neutral-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Why Metro Detroit Trusts Bloombrite</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="font-bold mb-2">97+ Five-Star Reviews</h3>
                    <p className="text-gray-600">Trusted by hundreds of Metro Detroit homeowners</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">Locally Owned & Operated</h3>
                    <p className="text-gray-600">Based in Oakland County, serving our community</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold mb-2">Insured & Professional</h3>
                    <p className="text-gray-600">Background-checked teams, quality guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
};

export default ServiceAreas;
