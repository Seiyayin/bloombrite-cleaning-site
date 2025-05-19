import { Link } from 'wouter';
import ServiceCard from '../shared/ServiceCard';
import { services } from '@/data/services';
import bathroomImage from '@/assets/bathroom tile brushing.jpg';
import bathroomGlassImage from '@/assets/hard water bathroom glass.jpg';
import kitchenImage from '@/assets/Kitchen deep cleaning.jpg';

const ServicesSection = () => {
  // Display only the first 6 services on the homepage
  const displayedServices = services.slice(0, 3);
  
  return (
    <section id="services" className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Professional Services</span>
          <h2 className="text-3xl font-bold mb-4 mt-2">Our Cleaning Services</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We offer a variety of specialized cleaning services to meet your needs, from regular maintenance to deep cleaning.
          </p>
        </div>
        
        {/* Featured service with image */}
        <div className="mb-16 bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Bathroom Deep Cleaning</h3>
              <p className="text-neutral-600 mb-6">
                Our bathroom deep cleaning service ensures every surface shines, from tiles to fixtures. 
                We remove hard water stains, soap scum, and sanitize all surfaces for a fresh, clean bathroom.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Tile & grout cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Shower door treatment for hard water stains</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Complete fixture cleaning & polishing</span>
                </li>
              </ul>
              <Link href="/services/bathroom-cleaning" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-opacity-90 transition">
                Learn More
              </Link>
            </div>
            <div className="relative h-full">
              <div className="grid grid-cols-2 gap-1 h-full">
                <img 
                  src={bathroomImage} 
                  alt="Bathroom Tile Cleaning" 
                  className="w-full h-64 object-cover"
                />
                <img 
                  src={bathroomGlassImage} 
                  alt="Shower Glass Cleaning" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-sm">
                <p>Our professional cleaners are trained in specialized bathroom cleaning techniques</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Power Washing Feature */}
        <div className="mb-16 bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 relative h-full">
              <img 
                src="/src/assets/window washing.jpg" 
                alt="Power Washing Services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-sm">
                <p>Restore your home's exterior with our professional power washing</p>
              </div>
            </div>
            <div className="order-1 md:order-2 p-8">
              <h3 className="text-2xl font-bold mb-4">Power Washing Services</h3>
              <p className="text-neutral-600 mb-6">
                Our professional power washing service removes dirt, grime, mold, and mildew from your home's exterior surfaces. 
                Restore the appearance of driveways, decks, patios, and siding with our specialized equipment and techniques.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Professional-grade equipment with adjustable pressure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Eco-friendly cleaning solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Surface-specific techniques to prevent damage</span>
                </li>
              </ul>
              <Link href="/services/power-washing" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-opacity-90 transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Carpet Cleaning Feature */}
        <div className="mb-16 bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Carpet Cleaning Services</h3>
              <p className="text-neutral-600 mb-6">
                Our professional carpet cleaning service uses hot water extraction technology to remove deep stains, 
                allergens, and odors from your carpets. Extend the life of your carpets and enjoy a healthier home environment.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Hot water extraction (steam cleaning)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Eco-friendly, non-toxic cleaning solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Stain treatment and deodorizing</span>
                </li>
              </ul>
              <Link href="/services/carpet-cleaning" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-opacity-90 transition">
                Learn More
              </Link>
            </div>
            <div className="relative h-full">
              <img 
                src="/src/assets/living room deep cleaning.jpg" 
                alt="Carpet Cleaning Services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-sm">
                <p>Deep cleaning for fresher, healthier carpets</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Kitchen cleaning feature */}
        <div className="mb-16 bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 items-center">
            <div className="order-2 md:order-1 relative h-full">
              <img 
                src={kitchenImage} 
                alt="Kitchen Deep Cleaning" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-sm">
                <p>We tackle even the most challenging kitchen cleaning tasks</p>
              </div>
            </div>
            <div className="order-1 md:order-2 p-8">
              <h3 className="text-2xl font-bold mb-4">Kitchen Deep Cleaning</h3>
              <p className="text-neutral-600 mb-6">
                Our kitchen cleaning service tackles grease, grime, and food residue to leave your cooking space spotless.
                We clean appliances inside and out, sanitize countertops, and ensure your kitchen is hygienic.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Appliance cleaning (inside & out)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Cabinet degreasing and polishing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Floor and grout deep cleaning</span>
                </li>
              </ul>
              <Link href="/services/kitchen-cleaning" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-opacity-90 transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Other services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
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
