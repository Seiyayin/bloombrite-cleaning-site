import { Link } from 'wouter';
import ServiceCard from '../shared/ServiceCard';
import { services } from '@/data/services';

const ServicesSection = () => {
  // Display only the first 6 services on the homepage
  const displayedServices = services.slice(0, 6);
  
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Cleaning Services</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We offer a variety of specialized cleaning services to meet your needs, from regular maintenance to deep cleaning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/services" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition shadow-md">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
