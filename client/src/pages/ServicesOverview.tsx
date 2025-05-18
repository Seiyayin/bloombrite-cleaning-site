import { useEffect } from 'react';
import { Link } from 'wouter';
import ServiceCard from '@/components/shared/ServiceCard';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';
import { services } from '@/data/services';

const ServicesOverview = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="Our Services | BloomBrite Cleaning"
        description="Explore our full range of professional cleaning services including standard cleaning, deep cleaning, move-in/out cleaning, office cleaning, and more."
      />
      
      <main>
        {/* Services Banner */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Cleaning Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional cleaning services tailored to your needs. Explore our options below and find the perfect solution for your home or office.
            </p>
          </div>
        </section>
        
        {/* Services List */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose BloomBrite Cleaning?</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                When you choose us for your cleaning needs, you're selecting a service dedicated to quality, reliability, and customer satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-neutral-600">
                  If you're not completely satisfied with our service, we'll return and make it right at no additional cost.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Insured & Bonded</h3>
                <p className="text-neutral-600">
                  Our company is fully insured and bonded for your peace of mind. Your property is always protected.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-heart"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer-Focused</h3>
                <p className="text-neutral-600">
                  We listen to your specific needs and preferences to deliver a personalized cleaning experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
    </>
  );
};

export default ServicesOverview;
