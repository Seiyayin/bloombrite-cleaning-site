import { Link } from 'wouter';
import teamImage from '@/assets/team.jpg';

const Hero = () => {
  return (
    <section className="relative bg-white text-dark overflow-hidden">
      <div className="container mx-auto px-4 py-2 md:py-3 relative z-10 grid md:grid-cols-2 gap-8 items-center" style={{ minHeight: '300px' }}>
        <div className="md:col-span-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-800">
            <span className="text-primary">Professional House Cleaning Services</span> in Metro Detroit | Top-Rated Residential Cleaning Experts
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Transform your home with Bloombrite's expert <Link href="/services" className="text-primary hover:underline">residential cleaning services</Link> throughout the Metro Detroit area. From <Link href="/services/deep-cleaning" className="text-primary hover:underline">deep house cleaning</Link> to <Link href="/services/recurring-cleaning" className="text-primary hover:underline">weekly maintenance cleaning</Link>, our professional cleaning services deliver spotless results with guaranteed satisfaction across all our service areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://clienthub.getjobber.com/client_hubs/954e0464-c2ca-4376-b2e2-3d401431c7bf/public/work_request/new?source=social_media" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-orange-600 active:bg-orange-700 transition shadow-md text-center"
            >
              Get a Free Quote
            </a>
            <Link href="/services" className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-md hover:bg-orange-50 hover:text-orange-700 active:bg-primary active:bg-opacity-20 transition shadow-sm text-center">
              View All Services
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-start gap-2 text-sm text-gray-600 mb-4">
            <span>💳 We accept all major payment methods</span>
            <span className="text-orange-500">|</span>
            <Link href="/bitcoin-payments" className="text-orange-500 hover:text-orange-600 font-medium">₿ Bitcoin payments accepted</Link>
          </div>
          <div className="mt-4 flex items-center gap-6 flex-wrap">
            <div className="flex items-center">
              <span className="text-yellow-400 text-xl mr-2">★</span>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center satisfaction-badge">
              <i className="fas fa-check-circle text-primary mr-2 order-marker"></i>
              <span className="font-medium">100% Satisfaction</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-calendar-check text-primary mr-2"></i>
              <span className="font-medium">Easy Online Booking</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="relative rounded-lg overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
            <img 
              src="/images/team.jpg" 
              alt="Bloombrite Cleaning Team" 
              className="w-full h-full object-cover"
              width="800"
              height="600"
              loading="eager"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
              <p className="font-semibold">Meet our professional cleaning team</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Orange accent bar */}
      <div className="h-1 bg-primary w-full"></div>
    </section>
  );
};

export default Hero;
