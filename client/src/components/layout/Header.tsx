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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="container mx-auto px-4 py-0 flex items-center justify-between">
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
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`font-medium transition ${isActive('/')}`}>Home</Link>
          <div className="relative group">
            <button className={`flex items-center font-medium transition ${isActive('/services')}`}>
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
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
            <button className={`flex items-center font-medium transition ${isActive('/locations')}`}>
              Locations
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
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
          <Link href="/blog" className={`font-medium transition ${isActive('/blog')}`}>Blog</Link>
          <Link href="/reviews" className={`font-medium transition ${isActive('/reviews')}`}>Reviews</Link>
          <Link href="/faq" className={`font-medium transition ${isActive('/faq')}`}>FAQ</Link>
          <Link href="/careers" className={`font-medium transition ${isActive('/careers')}`}>Careers</Link>
          <Link href="/bitcoin-payments" className={`font-medium transition ${isActive('/bitcoin-payments')} text-orange-500 hover:text-orange-600`}>₿ Pay with Bitcoin</Link>
          <Link href="/contact" className={`font-medium transition ${isActive('/contact')}`}>Contact</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/quote" className="hidden md:block px-6 py-2 bg-accent hover:bg-orange-600 active:bg-orange-700 text-white font-semibold rounded-md transition shadow-sm">
            Get a Quote
          </Link>
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-neutral-800"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
