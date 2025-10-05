import { Link } from 'wouter';
import { FaFacebook, FaGoogle, FaTiktok } from 'react-icons/fa';
import heroImage from '@assets/generated_images/Beautiful_modern_kitchen_interior_08df50e4.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${heroImage}')`,
            willChange: 'transform'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Centered content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 min-h-screen flex flex-col items-center justify-center text-center gap-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
          ★★★★★ MOST TRUSTED IN METRO DETROIT • FAST, FRIENDLY, AFFORDABLE
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Affordable House Cleaning & Maid Services - Novi, Wixom, Livonia MI
        </h1>

        <p className="text-base md:text-xl text-white/85 max-w-4xl">
          Bloombrite Cleaning provides top-rated residential and commercial cleaning across Metro Detroit, including Novi, Wixom, Farmington Hills, and Livonia. Our licensed, insured cleaners specialize in deep cleaning, move-in/move-out cleaning, recurring maid service, and office cleaning. Affordable pricing, eco-friendly products, and same-day service available.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="https://clienthub.getjobber.com/client_hubs/954e0464-c2ca-4376-b2e2-3d401431c7bf/public/work_request/new?source=social_media" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="rounded-full px-6 py-3 font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition"
            data-testid="get-quote-now-button"
            title="Get free cleaning quote for Metro Detroit house cleaning services"
            aria-label="Get A Cleaning Quote - Professional house cleaning services in Metro Detroit"
          >
            👉 Get A Cleaning Quote
          </a>
          <a href="tel:9474654217" className="rounded-full px-6 py-3 font-semibold border border-white/50 text-white hover:bg-white hover:text-black transition" data-testid="phone-button" aria-label="Call us now">
            (947) 465-4217
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-white/90">
          <a href="https://www.google.com/search?q=Bloombrite+Cleaning" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" data-testid="google-link" aria-label="Find us on Google">
            <FaGoogle className="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com/BloombriteCleaning" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" data-testid="facebook-link" aria-label="Follow us on Facebook">
            <FaFacebook className="w-8 h-8" />
          </a>
          <a href="https://www.tiktok.com/@bloombrite.cleani" target="_blank" rel="noopener noreferrer" className="hover:opacity-80" data-testid="tiktok-link" aria-label="Follow us on TikTok">
            <FaTiktok className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
