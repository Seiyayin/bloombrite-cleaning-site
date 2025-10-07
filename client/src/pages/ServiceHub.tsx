import { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import CallToAction from '@/components/home/CallToAction';
import NotFound from '@/pages/not-found';
import { MapPin } from 'lucide-react';
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

const ServiceHub = () => {
  const [match, params] = useRoute('/services/:service');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);

  if (!match || !params) {
    return <NotFound />;
  }

  const { service: serviceSlug } = params;
  const service = services.find((s: Service) => s.slug === serviceSlug);

  if (!service) {
    return <NotFound />;
  }

  // Get all cities offering this service
  const serviceCities = joins
    .filter((j: Join) => j.serviceId === service.id)
    .map((j: Join) => cities.find((c: City) => c.id === j.cityId))
    .filter((c): c is City => c !== undefined);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.name, href: `/services/${serviceSlug}/` }
  ];

  const pageTitle = `${service.title} Across Metro Detroit, MI | Bloombrite Cleaning`;
  const metaDescription = `Professional ${service.name.toLowerCase()} available across Metro Detroit. Serving ${serviceCities.map(c => c.name).join(', ')} and more. Top-rated, insured cleaners. Free quote.`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Bloombrite Cleaning",
      "telephone": "(947) 465-4217"
    },
    "areaServed": serviceCities.map((city: City) => ({
      "@type": "City",
      "name": city.name,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Michigan"
      }
    })),
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": service.starting_price.replace('$', '')
    }
  };

  return (
    <>
      <SeoHead
        title={pageTitle}
        description={metaDescription}
        canonicalPath={`/services/${serviceSlug}/`}
        structuredData={structuredData}
      />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-orange-600 text-white -mt-16 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="service-hub-title">
                {service.title} Across Metro Detroit
              </h1>
              <p className="text-xl mb-8">
                Professional {service.name.toLowerCase()} services available in {serviceCities.length} cities across Michigan
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

        {/* Service Info */}
        <section className="py-12 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">About Our {service.title}</h2>
              <p className="text-lg mb-6">{service.description}</p>
              <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6">
                <h3 className="font-bold text-xl mb-2">Ideal For:</h3>
                <p className="text-lg">{service.ideal_for}</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What's Included</h2>
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <ul className="grid md:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary text-xl">✓</span>
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-primary">Starting at {service.starting_price}</p>
                <p className="text-gray-600 mt-2">Free quotes - no hidden fees</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">Cities We Serve</h2>
              <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Select your city to learn more about our {service.name.toLowerCase()} services in your area
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceCities.map((city: City) => (
                  <Link key={city.id} href={`/mi/${city.slug}/${serviceSlug}/`}>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all cursor-pointer group" data-testid={`city-card-${city.slug}`}>
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {city.fullName}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {service.title} in {city.name}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {city.county}
                            </span>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              ZIP {city.zipCodes[0]}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-primary font-medium">
                            View Details
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Other Cleaning Services</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {services
                  .filter((s: Service) => s.id !== service.id)
                  .map((otherService: Service) => (
                    <Link key={otherService.id} href={`/services/${otherService.slug}/`}>
                      <span className="inline-block bg-gray-100 hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition-colors cursor-pointer" data-testid={`link-service-${otherService.slug}`}>
                        {otherService.name}
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

export default ServiceHub;
