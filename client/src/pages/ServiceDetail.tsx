import { useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';
import { ServiceSchema } from '@/lib/schema';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

const ServiceDetail = () => {
  const [, params] = useRoute('/services/:slug');
  const slug = params?.slug || '';
  
  // Find the service by slug
  const service = services.find((s) => s.slug === slug);
  
  // If service not found, redirect
  useEffect(() => {
    if (!service) {
      // Redirect to services page if service not found
      window.location.href = '/services';
    }
  }, [service]);
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!service) return null;
  
  // Get service areas as strings
  const serviceAreas = locations.map(location => location.name);
  
  return (
    <>
      <SeoHead 
        title={`${service.title} | BloomBrite Cleaning Services`}
        description={service.metaDescription}
        ogImage={service.imageUrl}
      />
      <ServiceSchema 
        name={service.title}
        description={service.metaDescription}
        url={window.location.href}
        image={service.imageUrl}
        price={service.startingPrice}
        areaServed={serviceAreas}
      />
      
      <main>
        {/* Service Banner */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              {service.shortDescription}
            </p>
            <div className="mt-8">
              <span className="inline-block bg-accent text-white px-4 py-2 rounded-full font-semibold">
                Starting at {service.startingPrice}
              </span>
            </div>
          </div>
        </section>
        
        {/* Service Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-auto"
                  />
                </div>
                
                <h2 className="text-2xl font-bold mb-4">About This Service</h2>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: service.description }} />
                
                <h2 className="text-2xl font-bold mt-12 mb-4">What's Included</h2>
                <ul className="space-y-4">
                  {service.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {service.additionalServices && service.additionalServices.length > 0 && (
                  <>
                    <h2 className="text-2xl font-bold mt-12 mb-4">Additional Services</h2>
                    <ul className="space-y-4">
                      {service.additionalServices.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <i className="fas fa-plus-circle text-primary mt-1 mr-3"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              
              <div className="lg:w-1/3">
                <div className="bg-neutral-50 p-6 rounded-lg shadow-md sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Book This Service</h3>
                  <p className="mb-6">
                    Ready to experience the BloomBrite difference? Book your {service.title.toLowerCase()} service today and enjoy a cleaner, healthier space.
                  </p>
                  <Link 
                    href="/get-quote" 
                    className="block w-full py-3 px-4 bg-accent hover:bg-accent-dark text-white text-center font-semibold rounded-md transition"
                  >
                    Get a Free Quote
                  </Link>
                  <div className="mt-6 text-center">
                    <span className="text-sm text-neutral-600">or call us at</span>
                    <a href="tel:1234567890" className="block mt-1 font-semibold text-primary hover:underline">
                      (123) 456-7890
                    </a>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <h4 className="font-semibold mb-3">Why Customers Love Us</h4>
                    <div className="flex items-center mb-2">
                      <div className="text-accent">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className="ml-2">4.9 out of 5</span>
                    </div>
                    <p className="italic text-sm text-neutral-600">
                      "BloomBrite consistently delivers exceptional cleaning services. Their attention to detail is amazing."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Services */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Might Like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services
                .filter(s => s.id !== service.id)
                .slice(0, 3)
                .map(relatedService => (
                  <div key={relatedService.id} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">{relatedService.title}</h3>
                    <p className="text-neutral-600 mb-4">{relatedService.shortDescription}</p>
                    <Link 
                      href={`/services/${relatedService.slug}`} 
                      className="text-primary font-medium hover:text-primary-dark flex items-center"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
    </>
  );
};

export default ServiceDetail;
