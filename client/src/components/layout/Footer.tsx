import { Link } from 'wouter';
import OptimizedImage from '@/components/shared/OptimizedImage';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary-light"></i>
                <span className="text-neutral-300">Wixom, MI</span>
              </li>
              <li className="flex">
                <i className="fab fa-google mt-1 mr-3 text-primary-light"></i>
                <a href="https://g.co/kgs/3LWj5Wx" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition">Google Business Profile</a>
              </li>
              <li className="flex">
                <i className="fas fa-sms mt-1 mr-3 text-primary-light"></i>
                <a href="sms:9474654217" className="text-neutral-300 hover:text-white transition">(947) 465-4217</a>
              </li>
              <li className="flex">
                <i className="fas fa-envelope mt-1 mr-3 text-primary-light"></i>
                <a href="mailto:sales@bloombritecleaning.com" className="text-neutral-300 hover:text-white transition">sales@bloombritecleaning.com</a>
              </li>
              <li className="flex">
                <i className="fas fa-clock mt-1 mr-3 text-primary-light"></i>
                <div className="text-neutral-300">
                  <p className="font-semibold">Available 24/7</p>
                  <p>Text us anytime for your cleaning needs</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link href="/" className="block">
                <OptimizedImage 
                  src="/images/bloombrite-logo.png" 
                  alt="Bloombrite Cleaning - Professional House Cleaning Services" 
                  className="h-16 w-auto"
                  width={300}
                  height={150}
                />
              </Link>
            </div>
            <p className="text-neutral-300 mb-6">
              Professional cleaning services that bring a fresh, clean shine to homes and businesses throughout Metro Detroit.
            </p>
            
            {/* BBB Accredited Business Badge */}
            <div className="mb-6">
              <a 
                href="https://www.bbb.org/us/mi/wixom/profile/cleaning-services/bloombrite-cleaning-home-services-0372-90064208" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
                aria-label="BBB Accredited Business - Click to verify BBB accreditation and to see a BBB report"
              >
                <OptimizedImage 
                  src="/images/bbb-accredited-business.png" 
                  alt="BBB Accredited Business - Bloombrite Cleaning" 
                  className="h-16 w-auto"
                  width={150}
                  height={100}
                />
              </a>
            </div>
            
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
              <li><Link href="/service-areas" className="text-neutral-300 hover:text-white transition">Service Areas</Link></li>
              <li><Link href="/locations" className="text-neutral-300 hover:text-white transition">Locations</Link></li>
              <li><Link href="/reviews" className="text-neutral-300 hover:text-white transition">Reviews</Link></li>
              <li><Link href="/faq" className="text-neutral-300 hover:text-white transition">FAQ</Link></li>
              <li><Link href="/contact" className="text-neutral-300 hover:text-white transition">Contact</Link></li>
              <li><Link href="/quote" className="text-neutral-300 hover:text-white transition">Get a Quote</Link></li>
              <li><Link href="/bitcoin-payments" className="text-orange-400 hover:text-orange-300 transition">₿ Pay with Bitcoin</Link></li>
              <li><Link href="/accessibility" className="text-neutral-300 hover:text-white transition">Accessibility</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/general-cleaning" className="text-neutral-300 hover:text-white transition">General Cleaning</Link></li>
              <li><Link href="/services/deep-cleaning" className="text-neutral-300 hover:text-white transition">Deep Cleaning</Link></li>
              <li><Link href="/services/recurring-cleaning" className="text-neutral-300 hover:text-white transition">Recurring Cleaning</Link></li>
              <li><Link href="/services/move-in-out-cleaning" className="text-neutral-300 hover:text-white transition">Move-In/Out Cleaning</Link></li>
              <li><Link href="/services/window-cleaning" className="text-neutral-300 hover:text-white transition">Window Cleaning</Link></li>
              <li><Link href="/services/power-washing" className="text-neutral-300 hover:text-white transition">Power Washing</Link></li>
              <li><Link href="/services/carpet-cleaning" className="text-neutral-300 hover:text-white transition">Carpet Cleaning</Link></li>
              <li><Link href="/services/office-cleaning" className="text-neutral-300 hover:text-white transition">Office Cleaning</Link></li>
              <li><Link href="/services/airbnb-cleaning" className="text-neutral-300 hover:text-white transition">Airbnb Cleaning</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-neutral-300 hover:text-white transition">Cleaning Blog</Link></li>
              <li><Link href="/blog/cities" className="text-neutral-300 hover:text-white transition">Local Cleaning Guides</Link></li>
              <li><Link href="/blog/cities/wixom" className="text-neutral-300 hover:text-white transition">Wixom Blog</Link></li>
              <li><Link href="/blog/cities/novi" className="text-neutral-300 hover:text-white transition">Novi Blog</Link></li>
              <li><Link href="/blog/cities/livonia" className="text-neutral-300 hover:text-white transition">Livonia Blog</Link></li>
              <li><Link href="/blog/cities/west-bloomfield" className="text-neutral-300 hover:text-white transition">West Bloomfield Blog</Link></li>
              <li><Link href="/checklist" className="text-neutral-300 hover:text-white transition">Cleaning Checklist</Link></li>
              <li><Link href="/careers" className="text-neutral-300 hover:text-white transition">Careers & Jobs</Link></li>
              <li><Link href="/blog/inside-appliance-cleaning" className="text-neutral-300 hover:text-white transition">Appliance Cleaning Guide</Link></li>
              <li><Link href="/blog/novi-house-cleaning-guide" className="text-neutral-300 hover:text-white transition">Novi Guide</Link></li>
              <li><Link href="/blog/memorial-day-cleaning" className="text-neutral-300 hover:text-white transition">Memorial Day Cleaning</Link></li>
            </ul>
          </div>
          
          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Locations</h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              <div>
                <Link href="/locations/wixom" className="text-neutral-300 hover:text-white transition block">Wixom Cleaning Services</Link>
              </div>
              <div>
                <Link href="/locations/novi" className="text-neutral-300 hover:text-white transition block">Novi Cleaning Services</Link>
              </div>
              <div>
                <Link href="/locations/farmington-hills" className="text-neutral-300 hover:text-white transition block">Farmington Hills Cleaning Services</Link>
              </div>
              <div>
                <Link href="/locations/livonia" className="text-neutral-300 hover:text-white transition block">Livonia Cleaning Services</Link>
              </div>
              <div>
                <Link href="/locations/milford" className="text-neutral-300 hover:text-white transition block">Milford Cleaning Services</Link>
              </div>
              <div>
                <Link href="/locations/commerce-township" className="text-neutral-300 hover:text-white transition block">Commerce Township Cleaning Services</Link>
              </div>
              <div>
                <Link href="/locations/south-lyon" className="text-neutral-300 hover:text-white transition block">South Lyon Cleaning Services</Link>
              </div>
              <div>
                <Link href="/locations/walled-lake" className="text-neutral-300 hover:text-white transition block">Walled Lake Cleaning Services</Link>
              </div>
              <div>
                <Link href="/locations/west-bloomfield" className="text-neutral-300 hover:text-white transition block">West Bloomfield Cleaning Services</Link>
              </div>
              <div>
                <Link href="/locations/keego-harbor" className="text-neutral-300 hover:text-white transition block">Keego Harbor Cleaning Services</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-0 border-t border-neutral-800 text-center text-neutral-400 text-sm">
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
