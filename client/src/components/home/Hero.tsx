import { Link } from 'wouter';
import teamImage from '@/assets/team.jpg';

const Hero = () => {
  return (
    <section className="relative bg-white text-dark overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-800">
            <span className="text-primary">Professional Cleaning</span> Services in Michigan
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Transform your space with BloomBrite's expert cleaning services. Spotless results, guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/get-quote" className="px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-opacity-90 transition shadow-md text-center">
              Get a Free Quote
            </Link>
            <Link href="#services" className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-md hover:bg-primary hover:bg-opacity-10 transition shadow-sm text-center">
              Our Services
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <div className="flex items-center">
              <span className="text-yellow-400 text-xl mr-2">★</span>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-primary mr-2"></i>
              <span className="font-medium">100% Satisfaction</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-calendar-check text-primary mr-2"></i>
              <span className="font-medium">Easy Online Booking</span>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src={teamImage} 
              alt="BloomBrite Cleaning Team" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
              <p className="font-semibold">Meet our professional cleaning team</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Orange accent bar */}
      <div className="h-3 bg-primary w-full"></div>
    </section>
  );
};

export default Hero;
