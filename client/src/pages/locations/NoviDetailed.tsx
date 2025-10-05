import { useEffect } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';

const NoviDetailed = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "name": "Bloombrite Cleaning - Novi",
    "description": "Professional house cleaning services in Novi, MI. Residential cleaning, deep cleaning, move-in/out cleaning, and more. Serving Novi and surrounding areas.",
    "url": "https://www.bloombritecleaning.com/locations/novi",
    "telephone": "(947) 465-4217",
    "email": "info@bloombritecleaning.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Novi",
      "addressRegion": "MI",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.4808",
      "longitude": "-83.4755"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Novi",
        "addressRegion": "MI"
      },
      {
        "@type": "City", 
        "name": "Northville",
        "addressRegion": "MI"
      },
      {
        "@type": "City",
        "name": "Farmington Hills", 
        "addressRegion": "MI"
      }
    ],
    "serviceType": [
      "House Cleaning Services",
      "Residential Cleaning",
      "Deep Cleaning Services",
      "Move-In Cleaning",
      "Move-Out Cleaning",
      "Recurring Cleaning Services",
      "Standard Cleaning",
      "Office Cleaning"
    ],
    "priceRange": "$160-$250",
    "openingHours": "Mo-Sa 08:00-18:00",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <SeoHead 
        title="House Cleaning Services in Novi, MI | Professional Residential Cleaning | Bloombrite"
        description="Top-rated house cleaning in Novi, MI. Professional residential, deep cleaning, move-in/out services. Get your free quote today!"
        structuredData={structuredData}
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-orange-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                #1 House Cleaning Services in Novi, Michigan
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Professional residential cleaning services for Novi homes. Trusted by 500+ Novi families for spotless, reliable house cleaning with 100% satisfaction guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://clienthub.getjobber.com/client_hubs/954e0464-c2ca-4376-b2e2-3d401431c7bf/public/work_request/new?source=social_media" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 bg-white text-primary font-bold rounded-md hover:bg-gray-100 transition shadow-lg text-center text-lg"
                >
                  Get Free Quote - Novi Residents
                </a>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-primary transition shadow-lg text-center text-lg">
                  View All Cleaning Services
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-white/90">Novi Homes Cleaned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">4.9★</div>
                  <div className="text-white/90">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-white/90">Satisfaction Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Novi */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Novi Residents Choose Bloombrite Cleaning
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We understand Novi's unique community and provide house cleaning services tailored to your suburban lifestyle and home needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-home text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Novi Suburban Home Specialists</h3>
                <p className="text-gray-600">Expert cleaning for Novi's larger homes, multiple bedrooms, and family-focused layouts. We know how to efficiently clean suburban properties.</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Family-Safe Cleaning Products</h3>
                <p className="text-gray-600">Eco-friendly, non-toxic cleaning solutions perfect for Novi families with children and pets. Safe, effective, and environmentally responsible.</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Novi Scheduling</h3>
                <p className="text-gray-600">Convenient scheduling that works around Novi school districts, work commutes to Detroit, and your family's busy lifestyle.</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fully Insured & Bonded</h3>
                <p className="text-gray-600">Complete peace of mind for Novi homeowners with full insurance coverage and bonded cleaning professionals.</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-star text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Novi References</h3>
                <p className="text-gray-600">Hundreds of satisfied Novi customers who recommend our house cleaning services to their neighbors and friends.</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-leaf text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Green Cleaning Methods</h3>
                <p className="text-gray-600">Environmentally conscious cleaning practices that protect Novi's beautiful natural surroundings and your family's health.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Novi-Specific Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                House Cleaning Services for Novi Residents
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive residential cleaning services designed for Novi's diverse housing community
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-home text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Regular House Cleaning in Novi</h3>
                    <p className="text-gray-600 mb-4">
                      Weekly, bi-weekly, or monthly residential cleaning services for Novi homes. Perfect for busy families and professionals.
                    </p>
                    <ul className="text-gray-600 space-y-1 mb-4">
                      <li>• Kitchen and bathroom deep cleaning</li>
                      <li>• Dusting all surfaces and furniture</li>
                      <li>• Vacuuming carpets and hardwood floors</li>
                      <li>• Mopping and sanitizing</li>
                    </ul>
                    <p className="text-primary font-semibold">Starting at $160 for Novi homes</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-sparkles text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Deep Cleaning Services - Novi</h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive deep house cleaning for Novi residents. Perfect for spring cleaning or first-time service.
                    </p>
                    <ul className="text-gray-600 space-y-1 mb-4">
                      <li>• Inside oven and refrigerator cleaning</li>
                      <li>• Baseboards and window sills</li>
                      <li>• Light fixtures and ceiling fans</li>
                      <li>• Cabinet fronts and interior cleaning</li>
                    </ul>
                    <p className="text-primary font-semibold">Starting at $250 for Novi homes</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-boxes text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Move-In/Out Cleaning - Novi</h3>
                    <p className="text-gray-600 mb-4">
                      Specialized cleaning for Novi residents moving to or from their homes. Get your deposit back or welcome a spotless new home.
                    </p>
                    <ul className="text-gray-600 space-y-1 mb-4">
                      <li>• Complete interior cleaning</li>
                      <li>• Cabinet interior and exterior</li>
                      <li>• Appliance cleaning inside and out</li>
                      <li>• Window cleaning (interior)</li>
                    </ul>
                    <p className="text-primary font-semibold">Custom pricing for Novi moves</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-building text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Office Cleaning in Novi</h3>
                    <p className="text-gray-600 mb-4">
                      Professional office cleaning services for Novi businesses. Keep your workplace spotless and professional.
                    </p>
                    <ul className="text-gray-600 space-y-1 mb-4">
                      <li>• Daily, weekly, or monthly service</li>
                      <li>• Restroom sanitization</li>
                      <li>• Trash removal and recycling</li>
                      <li>• Floor care and maintenance</li>
                    </ul>
                    <p className="text-primary font-semibold">Commercial rates available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Novi Neighborhoods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Serving All Novi Neighborhoods
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional house cleaning services throughout Novi and surrounding communities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <h3 className="font-semibold text-lg mb-2">Central Novi</h3>
                <p className="text-gray-600">Downtown Novi area, City Center, Novi Town Center vicinity</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <h3 className="font-semibold text-lg mb-2">North Novi</h3>
                <p className="text-gray-600">Beck Road, West Park Drive, Meadowbrook area</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <h3 className="font-semibold text-lg mb-2">South Novi</h3>
                <p className="text-gray-600">Nine Mile Road, Ten Mile Road neighborhoods</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <h3 className="font-semibold text-lg mb-2">East Novi</h3>
                <p className="text-gray-600">Novi Road corridor, Haggerty Road area</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <h3 className="font-semibold text-lg mb-2">West Novi</h3>
                <p className="text-gray-600">Wixom Road, Napier Road neighborhoods</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <h3 className="font-semibold text-lg mb-2">Novi Surroundings</h3>
                <p className="text-gray-600">Northville, Farmington Hills, Wixom borders</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Novi Residents Say About Our House Cleaning Services
              </h2>
              <p className="text-xl text-gray-600">
                Real reviews from your Novi neighbors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                  <span className="font-semibold">Sarah M. - Novi Resident</span>
                </div>
                <p className="text-gray-600 mb-4">
                  "Bloombrite has been cleaning our Novi home for over a year. They're always professional, thorough, and work around our family's schedule. Highly recommend!"
                </p>
                <p className="text-primary font-medium">Regular House Cleaning Service</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                  <span className="font-semibold">Mike & Jennifer L. - Novi</span>
                </div>
                <p className="text-gray-600 mb-4">
                  "When we moved to our new Novi home, Bloombrite did an amazing deep cleaning. The house was spotless and move-in ready. Excellent attention to detail!"
                </p>
                <p className="text-primary font-medium">Move-In Deep Cleaning</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-xl mr-2">★★★★★</div>
                  <span className="font-semibold">David R. - Central Novi</span>
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional, reliable, and reasonably priced. They've been cleaning our Novi office for 6 months. Always consistent quality work."
                </p>
                <p className="text-primary font-medium">Office Cleaning Service</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions - Novi House Cleaning
              </h2>
              <p className="text-xl text-gray-600">
                Common questions from Novi residents about our cleaning services
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">How much does house cleaning cost in Novi?</h3>
                <p className="text-gray-600">Our standard house cleaning services in Novi start at $160, while deep cleaning starts at $250. Pricing depends on your home's size, condition, and specific needs. We provide free quotes for all Novi residents.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Do you serve all areas of Novi?</h3>
                <p className="text-gray-600">Yes! We provide house cleaning services throughout all of Novi, including downtown, north and south Novi neighborhoods, and surrounding areas like Northville and Farmington Hills.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">How often should I schedule house cleaning in Novi?</h3>
                <p className="text-gray-600">Most Novi families choose bi-weekly or monthly cleaning services. We recommend weekly cleaning for busy families with children or pets, and monthly service for smaller homes or less frequent needs.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Are your cleaning products safe for families and pets?</h3>
                <p className="text-gray-600">Absolutely! We use eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment. Perfect for Novi families who prioritize health and safety.</p>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
};

export default NoviDetailed;