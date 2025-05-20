import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link href="/" className="block">
                <img 
                  src="/src/assets/bloombrite logo.png" 
                  alt="Bloombrite Cleaning" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>
            <p className="text-neutral-300 mb-6">
              Professional cleaning services that bring a fresh, clean shine to homes and businesses throughout Michigan.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/bloombritecleaning" className="text-white hover:text-primary-light transition" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/bloombritecleaning" className="text-white hover:text-primary-light transition" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/bloombriteclean" className="text-white hover:text-primary-light transition" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/bloombrite-cleaning" className="text-white hover:text-primary-light transition" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-neutral-300 hover:text-white transition">Home</Link></li>
              <li><Link href="/services" className="text-neutral-300 hover:text-white transition">Services</Link></li>
              <li><Link href="/locations" className="text-neutral-300 hover:text-white transition">Locations</Link></li>
              <li><Link href="/reviews" className="text-neutral-300 hover:text-white transition">Reviews</Link></li>
              <li><Link href="/faq" className="text-neutral-300 hover:text-white transition">FAQ</Link></li>
              <li><Link href="/contact" className="text-neutral-300 hover:text-white transition">Contact</Link></li>
              <li><Link href="/get-quote" className="text-neutral-300 hover:text-white transition">Get a Quote</Link></li>
              <li><Link href="/accessibility" className="text-neutral-300 hover:text-white transition">Accessibility</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/standard-cleaning" className="text-neutral-300 hover:text-white transition">Standard Cleaning</Link></li>
              <li><Link href="/services/deep-cleaning" className="text-neutral-300 hover:text-white transition">Deep Cleaning</Link></li>
              <li><Link href="/services/recurring-cleaning" className="text-neutral-300 hover:text-white transition">Recurring Cleaning</Link></li>
              <li><Link href="/services/move-in-out-cleaning" className="text-neutral-300 hover:text-white transition">Move-In/Out Cleaning</Link></li>
              <li><Link href="/services/office-cleaning" className="text-neutral-300 hover:text-white transition">Office Cleaning</Link></li>
              <li><Link href="/services/airbnb-cleaning" className="text-neutral-300 hover:text-white transition">Airbnb Cleaning</Link></li>
              <li><Link href="/services/oven-cleaning" className="text-neutral-300 hover:text-white transition">Oven Cleaning</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary-light"></i>
                <span className="text-neutral-300">2207 Evergreen St, Wixom, MI 48393</span>
              </li>
              <li className="flex">
                <i className="fas fa-phone-alt mt-1 mr-3 text-primary-light"></i>
                <a href="tel:7344899908" className="text-neutral-300 hover:text-white transition">(734) 489-9908</a>
              </li>
              <li className="flex">
                <i className="fas fa-envelope mt-1 mr-3 text-primary-light"></i>
                <a href="mailto:sales@bloombritecleaning.com" className="text-neutral-300 hover:text-white transition">sales@bloombritecleaning.com</a>
              </li>
              <li className="flex">
                <i className="fas fa-clock mt-1 mr-3 text-primary-light"></i>
                <div className="text-neutral-300">
                  <p className="font-semibold">Available 24/7</p>
                  <p>Call us anytime for your cleaning needs</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-800 text-center text-neutral-400 text-sm">
          <p className="mb-4">&copy; {new Date().getFullYear()} <span className="text-primary">Bloombrite</span> <span className="text-accent">Cleaning</span>. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
