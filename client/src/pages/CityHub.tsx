import { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import CallToAction from '@/components/home/CallToAction';
import NotFound from '@/pages/not-found';
import { Sparkles } from 'lucide-react';
import cities from '@/data/pseo-cities.json';
import services from '@/data/pseo-services.json';
import joins from '@/data/pseo-join.json';

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

interface Service {
  id: string;
  name: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  benefits: string[];
  ideal_for: string;
  starting_price: string;
}

interface Join {
  cityId: string;
  serviceId: string;
}

const CityHub = () => {
  const [match, params] = useRoute('/mi/:city');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);

  if (!match || !params) {
    return <NotFound />;
  }

  const { city: citySlug } = params;
  const city = cities.find((c: City) => c.slug === citySlug);

  if (!city) {
    return <NotFound />;
  }

  // Get all services available in this city
  const cityServices = joins
    .filter((j: Join) => j.cityId === city.id)
    .map((j: Join) => services.find((s: Service) => s.id === j.serviceId))
    .filter((s): s is Service => s !== undefined);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: city.name, href: `/mi/${citySlug}/` }
  ];

  const pageTitle = `Professional Cleaning Services in ${city.fullName} | Bloombrite Cleaning`;
  const metaDescription = `Top-rated cleaning in ${city.name}, MI. House cleaning, deep cleaning, move-out & more. Trusted by local homeowners. Free quote.`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Bloombrite Cleaning - ${city.fullName}`,
    "description": `Professional cleaning services in ${city.fullName}`,
    "image": "https://www.bloombritecleaning.com/images/bloombrite-logo.png",
    "telephone": "(947) 465-4217",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": "MI",
      "postalCode": city.zipCodes[0],
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Michigan"
      }
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "97"
    }
  };

  return (
    <>
      <SeoHead
        title={pageTitle}
        description={metaDescription}
        canonicalPath={`/mi/${citySlug}/`}
        structuredData={structuredData}
      />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-orange-600 text-white -mt-16 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="city-hub-title">
                Professional Cleaning Services in {city.fullName}
              </h1>
              <p className="text-xl mb-8">
                Trusted, top-rated cleaning services for {city.name} homeowners and businesses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors" data-testid="button-get-quote">
                    Get Free Quote
                  </button>
                </Link>
                <a href="sms:(947) 465-4217">
                  <button className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors" data-testid="button-text-us">
                    Text (947) 465-4217
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="container mx-auto px-4 pt-8">
          <Breadcrumbs items={breadcrumbItems} />
        </section>

        {/* City Info */}
        <section className="py-12 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Serving {city.fullName}</h2>
              <p className="text-lg mb-6">
                {city.description} We're proud to serve all {city.name} neighborhoods, including areas near {city.landmarks.join(' and ')}.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Coverage Area</h3>
                  <p className="text-gray-600">{city.county}</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">ZIP Codes Served</h3>
                  <p className="text-gray-600">{city.zipCodes.join(', ')}</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Community Size</h3>
                  <p className="text-gray-600">{city.population} residents</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">Our Cleaning Services in {city.name}</h2>
              <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Choose from our comprehensive range of professional cleaning services, all available in {city.name}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityServices.map((service: Service) => (
                  <Link key={service.id} href={`/mi/${citySlug}/${service.slug}/`}>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all cursor-pointer group h-full" data-testid={`service-card-${service.slug}`}>
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Sparkles className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 text-sm">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Starting at {service.starting_price}</span>
                        <span className="text-sm text-primary font-medium group-hover:translate-x-1 transition-transform">
                          Learn More →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why {city.name} Residents Choose Bloombrite</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <h3 className="font-semibold mb-1">97+ Five-Star Reviews</h3>
                    <p className="text-gray-600">Trusted by homeowners across Metro Detroit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏠</span>
                  <div>
                    <h3 className="font-semibold mb-1">Local & Reliable</h3>
                    <p className="text-gray-600">Based in {city.county}, serving your community</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-semibold mb-1">Insured & Background-Checked</h3>
                    <p className="text-gray-600">Peace of mind with every service</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💰</span>
                  <div>
                    <h3 className="font-semibold mb-1">Transparent Pricing</h3>
                    <p className="text-gray-600">No hidden fees - free quotes always</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Cities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">We Also Serve Nearby Cities</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {cities
                  .filter((c: City) => c.id !== city.id)
                  .map((otherCity: City) => (
                    <Link key={otherCity.id} href={`/mi/${otherCity.slug}/`}>
                      <span className="inline-block bg-gray-100 hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition-colors cursor-pointer" data-testid={`link-city-${otherCity.slug}`}>
                        {otherCity.name}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
};

export default CityHub;
