import { useEffect } from 'react';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';
import { WindowCleaningSchema } from '@/lib/schema';

const WindowCleaning = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead
        title="Window Cleaning Services | Bloombrite Cleaning"
        description="Professional window cleaning services in Michigan. We clean windows inside and out, including tracks, frames, and screens for a crystal-clear view."
        ogImage="/images/tall window cleaning.jpg"
      />

      <div className="pt-24 pb-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Window Cleaning Services</h1>
          <p className="text-xl text-center text-neutral-600 max-w-3xl mx-auto mb-12">
            Professional window cleaning for a crystal-clear view and enhanced curb appeal
          </p>

          <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="/images/tall window cleaning.jpg" 
                  alt="Window Cleaning Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-4">Professional Window Cleaning</h2>
                <p className="mb-5">
                  Our comprehensive window cleaning service removes dirt, dust, water spots, and grime 
                  from your windows inside and out. We pay attention to every detail, cleaning not only 
                  the glass but also the frames, sills, and tracks for a complete cleaning experience.
                </p>
                <p className="mb-5">
                  We use professional-grade equipment and eco-friendly cleaning solutions to ensure streak-free, 
                  crystal-clear results that let in maximum natural light and enhance your home's appearance.
                </p>
                <div className="bg-primary/10 p-4 rounded-md mb-5">
                  <h3 className="font-semibold mb-2">Starting at $160</h3>
                  <p className="text-sm">
                    *Price varies based on number of windows and home size
                  </p>
                </div>
                <a
                  href="https://clienthub.getjobber.com/client_hubs/954e0464-c2ca-4376-b2e2-3d401431c7bf/public/work_request/new?source=social_media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 bg-primary text-white text-center font-bold rounded-md hover:bg-primary/90 transition"
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
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>Interior and exterior window cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>Window track and sill cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>Window frame wiping and detailing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>Streak-free, spot-free finish</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>Screen cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>Eco-friendly cleaning solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>Removal of insect debris and cobwebs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">✓</span>
                    <span>Light fixture cleaning around entrances</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Additional Services</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">+</span>
                    <span>Hard water stain removal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">+</span>
                    <span>Window seal inspections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">+</span>
                    <span>High-reach window cleaning (over 2 stories)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">+</span>
                    <span>Skylight cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">+</span>
                    <span>Storm window cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">+</span>
                    <span>Glass door cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">+</span>
                    <span>Mirror cleaning throughout the home</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">+</span>
                    <span>Window cleaning maintenance plans</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Our Window Cleaning Gallery</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/images/Window cleaning.jpg" 
                  alt="Window cleaning in progress" 
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">Professional Equipment</h3>
                  <p className="text-sm text-neutral-600">
                    Our team uses professional-grade tools for a streak-free finish
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/images/tall window cleaning.jpg" 
                  alt="Tall window cleaning" 
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">Multi-Story Access</h3>
                  <p className="text-sm text-neutral-600">
                    We safely clean windows at any height for complete exterior cleaning
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/images/tracks cleaning.jpg" 
                  alt="Window track cleaning" 
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">Detail Cleaning</h3>
                  <p className="text-sm text-neutral-600">
                    Thorough cleaning of tracks and frames for complete window maintenance
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-center mb-10">Our Window Cleaning Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/images/window washing.jpg" 
                  alt="Window cleaning in progress" 
                  className="w-full h-60 object-cover rounded-md mb-6"
                />
                <h3 className="font-bold text-xl mb-2">Interior Window Cleaning</h3>
                <p>
                  Our interior window cleaning process begins with careful furniture protection. We then clean each 
                  window pane using professional-grade squeegees and microfiber cloths. We pay special attention to 
                  corners and edges for a truly spotless finish. Our technicians also carefully clean window sills, 
                  frames, and tracks to remove built-up dirt and dust.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/images/tracks cleaning.jpg" 
                  alt="Window track cleaning" 
                  className="w-full h-60 object-cover rounded-md mb-6"
                />
                <h3 className="font-bold text-xl mb-2">Track &amp; Detail Cleaning</h3>
                <p>
                  Window tracks and sills often accumulate dirt, dust, and debris that regular cleaning can't remove. 
                  Our specialized tools and cleaning solutions break down and remove this buildup, ensuring every part 
                  of your windows is clean. This detailed approach not only improves appearance but also helps windows 
                  function properly and prevents damage over time.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-16">
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">How often should I have my windows professionally cleaned?</h3>
                  <p>For most homes, we recommend professional window cleaning twice a year - typically in spring and fall. However, homes in areas with high pollen, near construction, or in dusty environments may benefit from quarterly cleaning. Regular window cleaning not only improves appearance but also extends the life of your windows by preventing etching and damage from environmental contaminants.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Do you clean screens and tracks as well?</h3>
                  <p>Yes, our standard window cleaning service includes cleaning the glass (inside and out), frames, sills, tracks, and screens. We believe in comprehensive window cleaning that addresses all components, not just the glass surfaces. This thorough approach ensures your windows look great, function properly, and last longer.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Can you remove hard water stains from my windows?</h3>
                  <p>Yes, we offer specialized hard water stain removal. These mineral deposits often appear as white or cloudy spots on exterior windows and shower doors. While light staining can typically be removed during standard cleaning, more severe mineral buildup requires specialized treatments with professional-grade products. We'll assess the staining during our service and recommend the appropriate treatment.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Do I need to remove curtains or blinds before you arrive?</h3>
                  <p>While not required, removing or raising blinds and tying back curtains before our arrival can help the process go more smoothly. If you're unable to do this preparation, our technicians can carefully work around your window treatments, but please note this may add some time to the service. We always take great care to protect all window coverings during our cleaning process.</p>
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

export default WindowCleaning;