import { Link } from 'wouter';
// Use optimized WebP image for better performance
const heroImage = '/images/Kitchen deep cleaning.webp';

const Hero = () => {
  return (
    <section className="relative text-white overflow-hidden -mt-16">
      {/* Optimized Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('${heroImage}')`,
          willChange: 'transform'
        }}
      ></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-24 md:pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-orange-400">Professional House Cleaning & Commercial Cleaning</span> in Novi, Wixom, Milford & South Lyon
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Expert residential and commercial cleaning services in Novi, Milford, Wixom, and South Lyon with guaranteed satisfaction.
          </p>
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
          <div className="flex items-center justify-center">
            <span className="text-yellow-400 text-xl mr-2">★</span>
            <span className="font-medium text-gray-200">4.9/5 Rating • 100% Satisfaction</span>
          </div>
        </div>
      </div>
      
      {/* Orange accent bar */}
      <div className="h-1 bg-primary w-full"></div>
    </section>
  );
};

export default Hero;
