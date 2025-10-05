import { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import CallToAction from '@/components/home/CallToAction';
import NotFound from '@/pages/not-found';
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

const PseoPage = () => {
  const [match, params] = useRoute('/mi/:city/:service');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);

  if (!match || !params) {
    return <NotFound />;
  }

  const { city: citySlug, service: serviceSlug } = params;

  // Find the city and service data
  const city = cities.find((c: City) => c.slug === citySlug);
  const service = services.find((s: Service) => s.slug === serviceSlug);

  // Check if this city-service combination exists in the join table
  const combinationExists = joins.some(
    (j: Join) => j.cityId === city?.id && j.serviceId === service?.id
  );

  if (!city || !service || !combinationExists) {
    return <NotFound />;
  }

  // SEO content
  const pageTitle = `${service.title} in ${city.name}, MI | Bloombrite Cleaning`;
  const metaDescription = `Trusted ${service.name.toLowerCase()} in ${city.name}, MI. Insured, detail-oriented cleaners. Book Bloombrite today.`;
  const canonicalUrl = `https://www.bloombritecleaning.com/mi/${citySlug}/${serviceSlug}/`;

  // Breadcrumbs
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: city.name, href: `/mi/${citySlug}/` },
    { label: service.name, href: `/mi/${citySlug}/${serviceSlug}/` }
  ];

  // JSON-LD Structured Data
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Bloombrite Cleaning",
      "description": `Professional ${service.name.toLowerCase()} services in ${city.fullName}`,
      "image": "https://www.bloombritecleaning.com/images/bloombrite-logo.png",
      "telephone": "(947) 465-4217",
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
        "latitude": 42.555663,
        "longitude": -83.4414784
      },
      "areaServed": {
        "@type": "City",
        "name": city.name,
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Michigan"
        }
      },
      "priceRange": "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": service.title,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Bloombrite Cleaning"
      },
      "areaServed": {
        "@type": "City",
        "name": city.name,
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Michigan"
        }
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": service.starting_price.replace('$', '')
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `https://www.bloombritecleaning.com${item.href}`
      }))
    }
  ];

  return (
    <>
      <SeoHead
        title={pageTitle}
        description={metaDescription}
        canonicalUrl={canonicalUrl}
        structuredData={structuredData}
      />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-orange-600 text-white -mt-16 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="pseo-page-title">
                {service.title} in {city.name}, MI
              </h1>
              <p className="text-xl mb-8">
                Trusted, detail-oriented {service.name.toLowerCase()} for {city.name} homeowners {service.category === 'commercial' ? 'and businesses' : ''}. Professional service you can rely on.
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

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Service Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Professional {service.title} in {city.fullName}</h2>
                <p className="text-lg mb-6">
                  Bloombrite Cleaning is proud to serve {city.name} with professional {service.name.toLowerCase()} services. {city.description}
                </p>
                <p className="text-lg mb-6">
                  {service.description} Our experienced team understands the unique needs of {city.name} {service.category === 'commercial' ? 'businesses and properties' : 'homes and families'}, delivering exceptional results with every visit.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-neutral-50 rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6">Why {city.name} Residents Choose Bloombrite</h2>
                <div className="grid md:grid-cols-2 gap-4">
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
                      <p className="text-gray-600">Starting at {service.starting_price} - Free quotes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">What's Included in Our {service.title}</h2>
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary text-xl">✓</span>
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ideal For */}
              <div className="bg-blue-50 border-l-4 border-primary p-6 mb-12">
                <h3 className="font-bold text-xl mb-2">Ideal For:</h3>
                <p className="text-lg">{service.ideal_for}</p>
              </div>

              {/* Serving Areas */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Serving All of {city.fullName}</h2>
                <p className="text-lg mb-4">
                  We proudly serve all neighborhoods throughout {city.name}, including areas near {city.landmarks.join(' and ')}. Whether you're in {city.zipCodes.map(zip => `ZIP ${zip}`).join(', ')}, Bloombrite Cleaning is here to help.
                </p>
                <p className="text-lg">
                  With a population of approximately {city.population} residents, {city.name} is a vibrant community that deserves the best in professional cleaning services. Our local team is familiar with {city.name} properties and committed to delivering exceptional results.
                </p>
              </div>

              {/* Other Services */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Other Services We Offer in {city.name}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {services
                    .filter((s: Service) => s.id !== service.id)
                    .slice(0, 4)
                    .map((otherService: Service) => {
                      const otherCombination = joins.find(
                        (j: Join) => j.cityId === city.id && j.serviceId === otherService.id
                      );
                      if (!otherCombination) return null;

                      return (
                        <Link
                          key={otherService.id}
                          href={`/mi/${citySlug}/${otherService.slug}/`}
                        >
                          <div className="border border-gray-200 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all cursor-pointer" data-testid={`link-service-${otherService.slug}`}>
                            <h3 className="font-semibold text-lg mb-2">{otherService.title}</h3>
                            <p className="text-gray-600 text-sm">{otherService.description.substring(0, 100)}...</p>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>

              {/* Other Cities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">We Also Serve Nearby Cities</h2>
                <div className="flex flex-wrap gap-3">
                  {cities
                    .filter((c: City) => c.id !== city.id)
                    .map((otherCity: City) => {
                      const otherCombination = joins.find(
                        (j: Join) => j.cityId === otherCity.id && j.serviceId === service.id
                      );
                      if (!otherCombination) return null;

                      return (
                        <Link
                          key={otherCity.id}
                          href={`/mi/${otherCity.slug}/${serviceSlug}/`}
                        >
                          <span className="inline-block bg-gray-100 hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition-colors cursor-pointer" data-testid={`link-city-${otherCity.slug}`}>
                            {otherCity.name}
                          </span>
                        </Link>
                      );
                    })}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 rounded-lg p-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="text-4xl text-primary">"</div>
                  <div>
                    <p className="text-lg italic mb-4">
                      "Bloombrite Cleaning did an outstanding job with our {service.name.toLowerCase()} in {city.name}. The team was professional, thorough, and left our {service.category === 'commercial' ? 'office' : 'home'} looking spotless. Highly recommend!"
                    </p>
                    <div className="flex items-center gap-1 text-yellow-500 mb-2">
                      ⭐⭐⭐⭐⭐
                    </div>
                    <p className="text-gray-600">— {city.name} Customer</p>
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

export default PseoPage;
