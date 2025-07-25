import { useState } from 'react';
import { Link } from 'wouter';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showLocationsDropdown, setShowLocationsDropdown] = useState(false);

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  const toggleLocationsDropdown = () => {
    setShowLocationsDropdown(!showLocationsDropdown);
  };

  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white px-4 pt-2 pb-4 shadow-inner`}>
      <div className="space-y-3">
        <Link href="/" className="block py-2 font-medium" onClick={onClose}>Home</Link>
        <div className="mobile-dropdown">
          <button 
            className="flex items-center justify-between w-full py-2 font-medium"
            onClick={toggleServicesDropdown}
          >
            Services
            <svg className={`w-4 h-4 transition-transform ${showServicesDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div className={`pl-4 space-y-2 ${showServicesDropdown ? 'block' : 'hidden'}`}>
            <Link href="/services/standard-cleaning" className="block py-2" onClick={onClose}>Standard Cleaning</Link>
            <Link href="/services/deep-cleaning" className="block py-2" onClick={onClose}>Deep Cleaning</Link>
            <Link href="/services/recurring-cleaning" className="block py-2" onClick={onClose}>Recurring Cleaning</Link>
            <Link href="/services/move-in-out-cleaning" className="block py-2" onClick={onClose}>Move-In/Out Cleaning</Link>
            <Link href="/services/office-cleaning" className="block py-2" onClick={onClose}>Office Cleaning</Link>
            <Link href="/services/airbnb-cleaning" className="block py-2" onClick={onClose}>Airbnb Cleaning</Link>
            <Link href="/services/oven-cleaning" className="block py-2" onClick={onClose}>Oven Cleaning</Link>
          </div>
        </div>
        <div className="mobile-dropdown">
          <button 
            className="flex items-center justify-between w-full py-2 font-medium"
            onClick={toggleLocationsDropdown}
          >
            Locations
            <svg className={`w-4 h-4 transition-transform ${showLocationsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div className={`pl-4 space-y-2 ${showLocationsDropdown ? 'block' : 'hidden'}`}>
            <Link href="/locations/wixom" className="block py-2" onClick={onClose}>Wixom, MI</Link>
            <Link href="/locations/novi" className="block py-2" onClick={onClose}>Novi, MI</Link>
            <Link href="/locations/livonia" className="block py-2" onClick={onClose}>Livonia, MI</Link>
            <Link href="/locations/milford" className="block py-2" onClick={onClose}>Milford, MI</Link>
            <Link href="/locations/commerce-township" className="block py-2" onClick={onClose}>Commerce Township, MI</Link>
            <Link href="/locations/farmington-hills" className="block py-2" onClick={onClose}>Farmington Hills, MI</Link>
            <Link href="/locations/south-lyon" className="block py-2" onClick={onClose}>South Lyon, MI</Link>
            <Link href="/locations/walled-lake" className="block py-2" onClick={onClose}>Walled Lake, MI</Link>
            <Link href="/locations/west-bloomfield" className="block py-2" onClick={onClose}>West Bloomfield, MI</Link>
            <Link href="/locations/keego-harbor" className="block py-2" onClick={onClose}>Keego Harbor, MI</Link>
          </div>
        </div>
        <Link href="/blog" className="block py-2 font-medium" onClick={onClose}>Blog</Link>
        <Link href="/reviews" className="block py-2 font-medium" onClick={onClose}>Reviews</Link>
        <Link href="/faq" className="block py-2 font-medium" onClick={onClose}>FAQ</Link>
        <Link href="/careers" className="block py-2 font-medium" onClick={onClose}>Careers</Link>
        <Link href="/bitcoin-payments" className="block py-2 font-medium text-orange-500" onClick={onClose}>₿ Pay with Bitcoin</Link>
        <Link href="/contact" className="block py-2 font-medium" onClick={onClose}>Contact</Link>
        <Link href="/quote" className="block mt-4 text-center bg-accent text-white font-semibold py-3 rounded-md" onClick={onClose}>Get a Quote</Link>
      </div>
    </div>
  );
};

export default MobileMenu;
