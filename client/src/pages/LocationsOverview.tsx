import { useEffect } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';
import { locations } from '@/data/locations';

const LocationsOverview = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="Service Areas in Michigan | Bloombrite Cleaning"
        description="Bloombrite Cleaning provides professional cleaning services in Wixom, Novi, Livonia, Milford, Commerce Township, Farmington Hills, South Lyon, and Walled Lake. Local experts for residential and commercial cleaning with customized plans for each Michigan community."
      />
      
      <main>
        {/* Locations Banner */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Service Areas</h1>
            <p className="text-xl max-w-3xl mx-auto">
              BloomBrite Cleaning proudly serves these Michigan communities and surrounding areas with our professional cleaning services.
            </p>
          </div>
        </section>
        
        {/* Locations List */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <Link 
                  key={location.id} 
                  href={`/locations/${location.slug}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="h-40 bg-neutral-200 overflow-hidden">
                    <img 
                      src={location.imageUrl} 
                      alt={`${location.name} area`}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">{location.name}</h2>
                    <p className="text-sm text-neutral-600 mb-2">
                      <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
                      Zip Codes: {location.zipCodes}
                    </p>
                    <p className="text-neutral-600 mb-4">{location.shortDescription}</p>
                    <div className="flex justify-end">
                      <span className="text-primary font-medium hover:text-primary-dark flex items-center">
                        Learn More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Coverage Map */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Coverage Area</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                We provide professional cleaning services throughout the western suburbs of Detroit. If you don't see your location listed, please contact us to check if we serve your area.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188299.99830998048!2d-83.69704415820313!3d42.51771008775301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824a6c3fd421d93%3A0xd5705a7c5e9a88ea!2sNovi%2C%20MI!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="BloomBrite Cleaning Service Areas Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
    </>
  );
};

export default LocationsOverview;
