import { Link } from 'wouter';

const Hero = () => {
  return (
    <section className="relative text-white overflow-hidden -mt-16">
      {/* Beautiful Kitchen Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      ></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-24 md:pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-orange-400">Professional House Cleaning Services</span> in Metro Detroit
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Transform your home with Bloombrite's expert <Link href="/services" className="text-orange-400 hover:text-orange-300 underline">residential cleaning services</Link> throughout the Metro Detroit area. From <Link href="/services/deep-cleaning" className="text-orange-400 hover:text-orange-300 underline">deep house cleaning</Link> to <Link href="/services/recurring-cleaning" className="text-orange-400 hover:text-orange-300 underline">weekly maintenance cleaning</Link>, our professional cleaning services deliver spotless results with guaranteed satisfaction.
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
          <div className="flex items-center justify-center gap-2 text-sm text-gray-200 mb-6">
            <span>💳 We accept all major payment methods</span>
            <span className="text-orange-400">|</span>
            <Link href="/bitcoin-payments" className="text-orange-400 hover:text-orange-300 font-medium">₿ Bitcoin payments accepted</Link>
          </div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center">
              <span className="text-yellow-400 text-xl mr-2">★</span>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center satisfaction-badge">
              <i className="fas fa-check-circle text-orange-400 mr-2"></i>
              <span className="font-medium">100% Satisfaction</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-calendar-check text-orange-400 mr-2"></i>
              <span className="font-medium">Easy Online Booking</span>
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
