import { useEffect } from 'react';
import SeoHead from '@/components/shared/SeoHead';
import { PowerWashingSchema } from '@/lib/schema';
import CallToAction from '@/components/home/CallToAction';
import { services } from '@/data/services';

const PowerWashingPage = () => {
  const service = services.find(s => s.id === "power-washing");

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) return null;

  return (
    <>
      <SeoHead
        title="Power Washing Services | Bloombrite Cleaning"
        description="Professional power washing services for home exteriors, driveways, decks, and patios in Michigan. Remove dirt, grime, mold, and mildew to restore your property's appearance."
        ogImage={service.imageUrl}
      />
      <PowerWashingSchema />

      <div className="-mt-16 pt-28 pb-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Power Washing Services</h1>
          <p className="text-xl text-center text-neutral-600 max-w-3xl mx-auto mb-12">
            Professional power washing to restore the beauty of your home's exterior surfaces
          </p>

          <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="/images/powerwashing.jpg" 
                  alt="Power Washing Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-4">Expert Power Washing</h2>
                <p className="mb-5">
                  Our Power Washing service delivers professional-grade cleaning for your home's exterior 
                  surfaces, effectively removing dirt, grime, mold, mildew, and stains that regular cleaning 
                  can't address. Power washing not only improves your property's appearance but also helps 
                  maintain its value and prevent damage.
                </p>
                <p className="mb-5">
                  We use commercial-grade equipment with adjustable pressure settings tailored to each 
                  surface type, ensuring effective cleaning without damage. Our environmentally friendly 
                  cleaning solutions break down stubborn dirt and contaminants while being safe for your 
                  landscaping and pets.
                </p>
                <div className="bg-primary/10 p-4 rounded-md mb-5">
                  <h3 className="font-semibold mb-2">Starting at $320</h3>
                  <p className="text-sm">
                    *Price varies based on property size and condition
                  </p>
                </div>
                <a
                  href="https://clienthub.getjobber.com/client_hubs/954e0464-c2ca-4376-b2e2-3d401431c7bf/public/work_request/new?source=social_media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 bg-primary text-white text-center font-bold rounded-md hover:bg-orange-600 active:bg-orange-700 transition"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">What's Included</h2>
                <ul className="space-y-3">
                  {service.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Additional Services</h2>
                <ul className="space-y-3">
                  {service.additionalServices.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-16">
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">Our Power Washing Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/images/powerwashing.jpg" 
                    alt="Power Washing Equipment" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-primary/5">
                    <h3 className="font-bold">Professional Equipment</h3>
                    <p className="text-sm">Our professional-grade equipment ensures thorough cleaning of all surfaces</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/images/powerwashing2.jpg" 
                    alt="Siding Power Washing" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-primary/5">
                    <h3 className="font-bold">Siding Restoration</h3>
                    <p className="text-sm">Remove years of dirt, mold and mildew from your home's exterior</p>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Why Choose Our Power Washing Service</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Professional Equipment</h3>
                    <p>We use commercial-grade equipment with adjustable pressure settings for safe and effective cleaning.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Eco-Friendly Solutions</h3>
                    <p>Our cleaning solutions are effective yet safe for your landscaping, plants, and pets.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Surface-Specific Techniques</h3>
                    <p>We adjust our approach for different surfaces to prevent damage while ensuring thorough cleaning.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Comprehensive Service</h3>
                    <p>From pre-treatment to final inspection, we provide complete care for your property's exterior.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-16">
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">How often should I have my home's exterior power washed?</h3>
                  <p>Most homeowners benefit from annual power washing, typically in spring after winter or before a painting project. However, homes in areas with high humidity, heavy tree coverage, or near water may need service twice a year to prevent mold and mildew buildup.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Is power washing safe for all exterior surfaces?</h3>
                  <p>Not all surfaces can withstand the same pressure levels. Our technicians adjust the pressure settings specifically for each surface type, from durable concrete driveways to more delicate siding. For very sensitive surfaces, we use soft washing techniques with lower pressure and specialized cleaning solutions.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Will power washing damage my plants or landscaping?</h3>
                  <p>We take precautions to protect your landscaping by using eco-friendly cleaning solutions and covering sensitive plants. Our technicians are trained to direct water flow away from plantings and we rinse any areas where cleaning solutions might have drifted.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">How long does a power washing service take?</h3>
                  <p>The duration depends on the size of the area being cleaned and its condition. A typical house exterior might take 2-4 hours, while a driveway or deck might take 1-2 hours. We'll provide a time estimate when we give you a quote.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
};

export default PowerWashingPage;