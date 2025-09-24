import { Link } from 'wouter';
import ServiceCard from '../shared/ServiceCard';
import { services } from '@/data/services';

const ServicesSection = () => {
  // Display only the first 6 services on the homepage
  const displayedServices = services.slice(0, 3);
  
  return (
    <section id="services" className="py-1 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-1">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Professional Services</span>
          <h2 className="text-3xl font-bold mb-2 mt-1">Our Professional Residential Cleaning Services</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We offer specialized residential cleaning services throughout Metro Detroit communities, from <Link href="/services/general-cleaning" className="text-primary hover:underline">regular house cleaning</Link> to <Link href="/services/deep-cleaning" className="text-primary hover:underline">deep residential cleaning</Link>. We provide <Link href="/services/recurring-cleaning" className="text-primary hover:underline">weekly cleaning service, biweekly cleaning service, and monthly cleaning service</Link> with professional cleaning services trusted by families in <Link href="/locations" className="text-primary hover:underline">Wixom, Novi, West Bloomfield, and surrounding areas</Link> with 100% satisfaction guarantee.
          </p>
        </div>
        
        
        
        {/* Selected services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services
            .filter(service => ["general-cleaning", "deep-cleaning", "move-in-out-cleaning", "recurring-cleaning"].includes(service.id))
            .map(service => (
              <ServiceCard key={service.id} service={service} />
            ))
          }
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/services" className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-md hover:bg-orange-600 active:bg-orange-700 transition shadow-md">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
