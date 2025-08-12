import { useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';
import ServiceCard from '@/components/shared/ServiceCard';
import { locations } from '@/data/locations';
import { services } from '@/data/services';

const LocationDetail = () => {
  const [, params] = useRoute('/locations/:slug');
  const [match] = useRoute('/:slug');
  const slug = params?.slug || '';
  
  // Find the location by slug, handling both /locations/:slug and /:slug routes
  const location = locations.find((l) => l.slug === slug || l.slug === `${slug}`);
  
  // If location not found, redirect
  useEffect(() => {
    if (!location) {
      // Redirect to locations page if location not found
      window.location.href = '/locations';
    }
  }, [location]);
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!location) return null;
  
  // Show top services
  const topServices = services.slice(0, 3);
  
  return (
    <>
      <SeoHead 
        title={`${location.name.split(',')[0]} House Cleaning Services | Bloombrite Cleaning`}
        description={`Bloombrite Cleaning offers top-rated home cleaning in ${location.name}. 100+ 5-star Google reviews. Book your free quote today!`}
        ogImage={location.imageUrl}
      />
      
      <main>
        {/* Location Banner */}
        <section className="relative bg-primary text-white py-20">
          <div className="absolute inset-0 bg-black opacity-40" style={{ backgroundImage: `url(${location.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl font-bold mb-4">Professional Maid Services & Cleaning in {location.name}</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional, reliable maid services and cleaning solutions for homes and businesses in {location.name} and surrounding areas. Searching for "maid services near me" in {location.name}? We're your local cleaning experts.
            </p>
            <div className="mt-8">
              <Link href="/quote" className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-md hover:bg-orange-600 active:bg-orange-700 transition shadow-md">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>
        
        {/* Location Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold mb-6">Professional Maid Services & Cleaning in {location.name}</h2>
                <div className="prose max-w-none mb-6" dangerouslySetInnerHTML={{ __html: location.description }} />
                <p className="text-lg text-neutral-600 mb-6">
                  Our <Link href="/services/general-cleaning" className="text-primary hover:underline">maid services and residential cleaning</Link> and <Link href="/services/office-cleaning" className="text-primary hover:underline">commercial cleaning solutions</Link> are designed to meet the unique needs of {location.name} residents and businesses. We offer weekly cleaning service, biweekly cleaning service, and monthly cleaning service options with our professional maid services. From <Link href="/services/deep-cleaning" className="text-primary hover:underline">deep cleaning</Link> to <Link href="/services/window-cleaning" className="text-primary hover:underline">window cleaning</Link>, we provide comprehensive maid services and care for your property.
                </p>
                
                <div className="my-12 bg-neutral-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Areas We Serve in {location.name}</h3>
                  <p className="mb-4">Our cleaning services are available throughout {location.name} including the following zip codes:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {location.zipCodes.split(',').map((zipCode, idx) => (
                      <div key={idx} className="bg-white p-2 text-center rounded">
                        {zipCode.trim()}
                      </div>
                    ))}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-6">Our Top Services in {location.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {topServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
                
                <div className="bg-primary-light bg-opacity-10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Why {location.name} Residents Choose BloomBrite Cleaning</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                      <span>Locally owned and operated with knowledge of {location.name} neighborhoods</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                      <span>Fully bonded and insured professional cleaners</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                      <span>Flexible scheduling to fit your busy lifestyle</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                      <span>Eco-friendly cleaning products available upon request</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                      <span>100% satisfaction guarantee</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <div className="bg-neutral-50 p-6 rounded-lg shadow-md sticky top-24">
                  <h3 className="text-xl font-bold mb-4">Book a Cleaning in {location.name}</h3>
                  <p className="mb-6">
                    Ready to experience the BloomBrite difference? Book your cleaning service in {location.name} today.
                  </p>
                  <Link 
                    href="/quote" 
                    className="block w-full py-3 px-4 bg-accent hover:bg-orange-600 active:bg-orange-700 text-white text-center font-semibold rounded-md transition"
                  >
                    Get a Free Quote
                  </Link>
                  <div className="mt-6 text-center">
                    <span className="text-sm text-neutral-600">or call us at</span>
                    <a href="tel:9474654217" className="block mt-1 font-semibold text-primary hover:underline">
                      (947) 465-4217
                    </a>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <h4 className="font-semibold mb-3">Local Reviews</h4>
                    <div className="flex items-center mb-2">
                      <div className="text-accent">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className="ml-2">5.0</span>
                    </div>
                    <p className="italic text-sm text-neutral-600">
                      "BloomBrite does an amazing job with our bi-weekly cleaning. Their team is always professional and thorough. Highly recommend to anyone in {location.name}!"
                    </p>
                    <p className="text-right text-sm mt-2">- {location.name} Resident</p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <h4 className="font-semibold mb-3">Service Area</h4>
                    <div className="rounded-lg overflow-hidden">
                      <iframe 
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47075.0!2d-83.5!3d42.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824a6c3fd421d93%3A0xd5705a7c5e9a88ea!2s${encodeURIComponent(location.name)}%2C%20MI!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus`}
                        width="100%" 
                        height="200" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                        title={`Map of ${location.name}`}
                      ></iframe>
                    </div>
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

export default LocationDetail;
