import { Link } from 'wouter';
import ServiceCard from '../shared/ServiceCard';
import { services } from '@/data/services';

const ServicesSection = () => {
  // Display only the first 6 services on the homepage
  const displayedServices = services.slice(0, 3);
  
  return (
    <section id="services" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Professional Services</span>
          <h2 className="text-3xl font-bold mb-4 mt-2">Our Residential Cleaning Services</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We offer a variety of specialized residential cleaning services to meet your home's needs, from <Link href="/services/standard-cleaning" className="text-primary hover:underline">regular house cleaning</Link> to <Link href="/services/deep-cleaning" className="text-primary hover:underline">deep residential cleaning</Link>. Serving <Link href="/locations" className="text-primary hover:underline">Michigan communities</Link> with professional residential cleaning services.
          </p>
        </div>
        
        
        
        {/* Selected services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {services
            .filter(service => ["standard-cleaning", "deep-cleaning", "move-in-out-cleaning"].includes(service.id))
            .map(service => (
              <ServiceCard key={service.id} service={service} />
            ))
          }
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/services" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-opacity-90 transition shadow-md">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
