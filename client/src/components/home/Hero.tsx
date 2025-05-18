import { Link } from 'wouter';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-shadow mb-6">
            Professional Cleaning Services in Michigan
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Transform your space with BloomBrite's expert cleaning services. Spotless results, guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/get-quote" className="px-8 py-4 bg-accent text-white font-bold rounded-md hover:bg-accent-dark transition shadow-md text-center">
              Get a Free Quote
            </Link>
            <Link href="#services" className="px-8 py-4 bg-white text-primary font-bold rounded-md hover:bg-neutral-50 transition shadow-md text-center">
              Our Services
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-6 flex-wrap">
            <div className="flex items-center">
              <span className="text-accent text-xl mr-2">★</span>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-accent mr-2"></i>
              <span className="font-medium">100% Satisfaction</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-calendar-check text-accent mr-2"></i>
              <span className="font-medium">Easy Online Booking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
