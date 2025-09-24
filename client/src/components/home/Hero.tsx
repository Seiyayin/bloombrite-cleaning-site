import { Link } from 'wouter';
import heroImage from '@assets/generated_images/Beautiful_modern_kitchen_interior_08df50e4.png';

const Hero = () => {
  return (
    <section className="relative text-white overflow-hidden min-h-screen flex items-center">
      {/* Beautiful Kitchen Background with Enhanced Text Readability */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), url('${heroImage}')`,
          willChange: 'transform'
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Rating Pill */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur rounded-full px-4 py-2 mb-6">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">★</span>
              ))}
            </div>
            <span className="text-white font-medium text-sm uppercase tracking-wide">
              Most Trusted in Metro Detroit • Fast, Friendly, Affordable
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 drop-shadow-lg">
            <span className="text-white drop-shadow-md">Trusted Cleaning Experts</span><br />
            <span className="text-white drop-shadow-md">for the Metro Detroit Area.</span>
          </h1>
          
          {/* Three Feature Points */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center text-white">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">Locally owned and operated</span>
            </div>
            <div className="flex items-center text-white">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Serving Metro Detroit + 90 minute radius</span>
            </div>
            <div className="flex items-center text-white">
              <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Same day service available</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://clienthub.getjobber.com/client_hubs/954e0464-c2ca-4376-b2e2-3d401431c7bf/public/work_request/new?source=social_media" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full transition shadow-lg text-center"
              data-testid="get-quote-now-button"
            >
              GET A QUOTE NOW
            </a>
            <a href="tel:9474654217" className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition shadow-lg text-center flex items-center justify-center" data-testid="phone-button" aria-label="Call us now">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (947) 465-4217
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
