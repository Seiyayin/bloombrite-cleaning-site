import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import MobileMenu from './MobileMenu';
import OptimizedImage from '@/components/shared/OptimizedImage';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path ? 'text-primary' : 'hover:text-primary';
  };

  const getNavLinkClasses = (path: string) => {
    const isCurrentPage = location === path || (path === '/services' && location.startsWith('/services')) || (path === '/locations' && location.startsWith('/locations'));
    const baseClasses = 'font-medium transition';
    
    if (location === '/') {
      return `${baseClasses} text-white hover:text-yellow-400 drop-shadow-lg ${isCurrentPage ? 'text-yellow-400' : ''}`;
    } else {
      return `${baseClasses} text-gray-800 hover:text-primary ${isCurrentPage ? 'text-primary' : ''}`;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${location === '/' ? 'absolute top-0 left-0 w-full z-50 bg-transparent' : 'sticky top-0 z-50 bg-white'}`}>
      <div className="container mx-auto px-4 py-3">
        <nav className={`flex items-center justify-between ${location === '/' ? 'bg-transparent' : 'backdrop-blur rounded-full shadow-lg bg-white/95 border border-neutral-200 px-4 md:px-6 py-2 md:py-3'}`}>
        <Link href="/" className="block">
          <OptimizedImage 
            src="/images/bloombrite-logo.png" 
            alt="Bloombrite Cleaning - Professional House Cleaning Services" 
            className="h-12 w-auto"
            width={300}
            height={150}
            priority={true}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
          <Link href="/" className={getNavLinkClasses('/')}>Home</Link>
          <div className="relative group">
            <button className={`flex items-center ${getNavLinkClasses('/services')}`}>
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
              <div className="py-2 px-4 space-y-2">
                <Link href="/services/general-cleaning" className="block py-2 hover:text-primary transition">General Cleaning</Link>
                <Link href="/services/deep-cleaning" className="block py-2 hover:text-primary transition">Deep Cleaning</Link>
                <Link href="/services/recurring-cleaning" className="block py-2 hover:text-primary transition">Recurring Cleaning</Link>
                <Link href="/services/move-in-out-cleaning" className="block py-2 hover:text-primary transition">Move-In/Out Cleaning</Link>
                <Link href="/services/maid-services" className="block py-2 hover:text-primary transition">Maid Services</Link>
                <Link href="/services/office-cleaning" className="block py-2 hover:text-primary transition">Office Cleaning</Link>
                <Link href="/services/airbnb-cleaning" className="block py-2 hover:text-primary transition">Airbnb Cleaning</Link>
                <Link href="/services/oven-cleaning" className="block py-2 hover:text-primary transition">Oven Cleaning</Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className={`flex items-center ${getNavLinkClasses('/locations')}`}>
              Locations
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
              <div className="py-2 px-4 space-y-2">
                <Link href="/locations/wixom" className="block py-2 hover:text-primary transition">Wixom, MI</Link>
                <Link href="/locations/novi" className="block py-2 hover:text-primary transition">Novi, MI</Link>
                <Link href="/locations/livonia" className="block py-2 hover:text-primary transition">Livonia, MI</Link>
                <Link href="/locations/milford" className="block py-2 hover:text-primary transition">Milford, MI</Link>
                <Link href="/locations/commerce-township" className="block py-2 hover:text-primary transition">Commerce Township, MI</Link>
                <Link href="/locations/farmington-hills" className="block py-2 hover:text-primary transition">Farmington Hills, MI</Link>
                <Link href="/locations/south-lyon" className="block py-2 hover:text-primary transition">South Lyon, MI</Link>
                <Link href="/locations/walled-lake" className="block py-2 hover:text-primary transition">Walled Lake, MI</Link>
                <Link href="/locations/west-bloomfield" className="block py-2 hover:text-primary transition">West Bloomfield, MI</Link>
                <Link href="/locations/keego-harbor" className="block py-2 hover:text-primary transition">Keego Harbor, MI</Link>
              </div>
            </div>
          </div>
          <Link href="/blog" className={getNavLinkClasses('/blog')}>Blog</Link>
          <Link href="/reviews" className={getNavLinkClasses('/reviews')}>Reviews</Link>
          <Link href="/faq" className={getNavLinkClasses('/faq')}>FAQ</Link>
          <Link href="/careers" className={getNavLinkClasses('/careers')}>Careers</Link>
          <Link href="/bitcoin-payments" className={`font-medium transition ${location === '/' ? 'text-yellow-400 hover:text-yellow-300 drop-shadow-lg' : 'text-orange-500 hover:text-orange-600'} ${location === '/bitcoin-payments' ? 'text-orange-600' : ''}`}>₿ Pay with Bitcoin</Link>
          <Link href="/contact" className={getNavLinkClasses('/contact')}>Contact</Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <a href="tel:9474654217" className={`hidden md:block px-4 py-2 font-medium rounded-full transition ${location === '/' ? 'border-2 border-white text-white hover:bg-white hover:text-black drop-shadow-lg' : 'border border-gray-300 hover:border-primary hover:text-primary text-gray-700'}`} data-testid="call-now-button" aria-label="Call us now">
            CALL NOW
          </a>
          <Link href="/quote" className="hidden md:block px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition shadow-sm" data-testid="get-quote-button">
            GET A QUOTE
          </Link>
          <button 
            onClick={toggleMobileMenu}
            className={`md:hidden ${location === '/' ? 'text-white drop-shadow-lg' : 'text-neutral-800'}`}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
