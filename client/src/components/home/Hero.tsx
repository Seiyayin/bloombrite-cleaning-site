import { Link } from 'wouter';
import heroImage from '@assets/generated_images/Beautiful_modern_kitchen_interior_08df50e4.png';

const Hero = () => {
  return (
    <section className="relative text-white overflow-hidden -mt-16">
      {/* Beautiful Kitchen Background with Enhanced Text Readability */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('${heroImage}')`,
          willChange: 'transform'
        }}
      ></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-24 md:pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
            <span className="text-orange-400 drop-shadow-md">Professional House Cleaning & Commercial Cleaning</span> in Novi, Wixom, Milford & South Lyon
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-md font-medium">
            Expert residential and commercial cleaning services in Novi, Milford, Wixom, South Lyon, Bloomfield Hills, Livonia, Farmington Hills and throughout Oakland County with guaranteed satisfaction.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://clienthub.getjobber.com/client_hubs/954e0464-c2ca-4376-b2e2-3d401431c7bf/public/work_request/new?source=social_media" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 active:bg-orange-700 transition shadow-lg text-center"
            >
              Get a Free Quote
            </a>
            <Link href="/services" className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-bold rounded-md hover:bg-orange-400 hover:text-white transition shadow-lg text-center">
              View All Services
            </Link>
          </div>
          <div className="flex items-center justify-center mb-6">
            <span className="text-yellow-400 text-xl mr-2">★</span>
            <span className="font-medium text-gray-200">4.9/5 Rating • 100% Satisfaction</span>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-gray-300 text-sm mr-2">Follow us:</span>
            <a
              href="https://share.google/ljLXM2kTuLhatz3r1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors duration-200"
              aria-label="View our Google Business Profile"
            >
              <i className="fab fa-google text-2xl"></i>
            </a>
            <a
              href="https://www.tiktok.com/@bloombrite.cleani?_t=ZT-8zb9vTx6sAf&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors duration-200"
              aria-label="Follow us on TikTok"
            >
              <i className="fab fa-tiktok text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Orange accent bar */}
      <div className="h-1 bg-primary w-full"></div>
    </section>
  );
};

export default Hero;
