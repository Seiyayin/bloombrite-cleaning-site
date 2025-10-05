import { useEffect } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import { CarpetCleaningSchema } from '@/lib/schema';
import CallToAction from '@/components/home/CallToAction';
import { services } from '@/data/services';

const CarpetCleaningPage = () => {
  const service = services.find(s => s.id === "carpet-cleaning");

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) return null;

  return (
    <>
      <SeoHead
        title="Carpet Cleaning Services | Bloombrite Cleaning"
        description="Professional carpet cleaning in Michigan. Remove deep stains, allergens, and odors using hot water extraction technology. Extend carpet life."
        canonicalUrl="https://www.bloombritecleaning.com/services/carpet-cleaning"
        ogImage={service.imageUrl}
      />
      <CarpetCleaningSchema />

      <div className="-mt-16 pt-28 pb-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Carpet Cleaning Services</h1>
          <p className="text-xl text-center text-neutral-600 max-w-3xl mx-auto mb-12">
            Professional deep carpet cleaning to remove stains, allergens, and extend carpet life
          </p>

          <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={service.imageUrl} 
                  alt="Carpet Cleaning Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-4">Deep Carpet Cleaning</h2>
                <p className="mb-5">
                  Our Carpet Cleaning service uses hot water extraction (steam cleaning) technology to deep 
                  clean carpets, removing embedded dirt, allergens, stains, and odors that regular vacuuming 
                  can't eliminate. This professional-grade cleaning not only improves the appearance of your 
                  carpets but also contributes to a healthier indoor environment.
                </p>
                <p className="mb-5">
                  Our trained technicians follow a thorough process that includes pre-treatment of spots and 
                  heavily soiled areas, powerful extraction cleaning, and quick drying techniques. We use 
                  eco-friendly cleaning solutions that are effective yet safe for your family and pets.
                </p>
                <div className="bg-primary/10 p-4 rounded-md mb-5">
                  <h3 className="font-semibold mb-2">Starting at {service.startingPrice}</h3>
                  <p className="text-sm">
                    *Price varies based on square footage and carpet condition
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
              <h2 className="text-2xl font-bold mb-6">Our Carpet Cleaning Process</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Pre-Inspection</h3>
                    <p>We begin with a thorough assessment of your carpets, identifying heavily soiled areas, stains, and damage. This helps us determine the best cleaning approach for your specific carpet type and condition.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Pre-Treatment</h3>
                    <p>We apply specialized cleaning solutions to break down embedded dirt and stains. For heavily soiled areas and spots, we use targeted pre-treatments designed to address specific stain types.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Hot Water Extraction</h3>
                    <p>Using our professional-grade equipment, we deep clean your carpets with hot water and cleaning agents, then immediately extract the solution, removing dirt, allergens, and cleaning products. This method cleans deep into carpet fibers for thorough results.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Stain Treatment</h3>
                    <p>We apply specialized treatments for stubborn stains that didn't fully respond to the initial cleaning process, using techniques specific to the stain type.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Final Grooming</h3>
                    <p>We groom the carpet fibers to accelerate drying time and leave them looking well-maintained. This step helps prevent matting and restores the carpet's appearance.</p>
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
                  <h3 className="font-bold mb-2">How long will it take for my carpets to dry after cleaning?</h3>
                  <p>Typically, carpets dry within 6-12 hours after our cleaning service. However, drying time can vary based on humidity, temperature, air circulation, and carpet thickness. We use quick-dry techniques to minimize drying time, and we recommend running fans and/or air conditioning to accelerate the process.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">How often should I have my carpets professionally cleaned?</h3>
                  <p>For most homes, we recommend professional carpet cleaning every 12-18 months. However, homes with pets, children, allergies, or high traffic may benefit from more frequent cleaning—every 6-9 months. Regular professional cleaning extends carpet life and maintains a healthier indoor environment.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Are your carpet cleaning solutions safe for pets and children?</h3>
                  <p>Yes, we use eco-friendly, non-toxic cleaning solutions that are safe for families and pets. Our products effectively clean and deodorize carpets without harsh chemicals. We're happy to discuss any specific concerns about sensitivities or allergies before cleaning.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Can you remove all stains from my carpet?</h3>
                  <p>While our professional equipment and techniques can remove most stains, some permanent stains (like certain dyes, chemical damage, or very old stains) may not be completely removable. During our pre-inspection, we'll identify potentially problematic stains and set realistic expectations about what can be achieved.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Services Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Related Cleaning Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/deep-cleaning">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer" data-testid="link-deep-cleaning-service">
                  <h3 className="font-bold text-xl mb-3 text-primary">Deep Cleaning</h3>
                  <p className="text-neutral-600 mb-4">
                    Pair your carpet cleaning with our comprehensive deep cleaning service to refresh your entire home from top to bottom.
                  </p>
                  <span className="text-primary font-semibold">Learn More →</span>
                </div>
              </Link>
              <Link href="/services/move-in-out-cleaning">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer" data-testid="link-move-cleaning-service">
                  <h3 className="font-bold text-xl mb-3 text-primary">Move-In/Out Cleaning</h3>
                  <p className="text-neutral-600 mb-4">
                    Moving? Our move-in/out cleaning includes carpet cleaning to ensure a fresh start or leave your space spotless.
                  </p>
                  <span className="text-primary font-semibold">Learn More →</span>
                </div>
              </Link>
              <Link href="/services">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer" data-testid="link-all-services">
                  <h3 className="font-bold text-xl mb-3 text-primary">All Services</h3>
                  <p className="text-neutral-600 mb-4">
                    Explore our complete range of professional cleaning services for your home or business in Metro Detroit.
                  </p>
                  <span className="text-primary font-semibold">View All →</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </>
  );
};

export default CarpetCleaningPage;