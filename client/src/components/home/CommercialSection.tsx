import React from 'react';
import { Link } from 'wouter';
import livingRoomImage from '@/assets/living room deep cleaning.jpg';
import kitchenImage from '@/assets/kitchen-post-cleaned.jpg';

const CommercialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Business Solutions</span>
          <h2 className="text-3xl font-bold mb-4 mt-2">Commercial Cleaning Services</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Create a clean, healthy work environment for your employees and clients with our professional commercial cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Office Cleaning */}
          <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-80">
              <img 
                src={livingRoomImage} 
                alt="Office Cleaning Services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Office Cleaning</h3>
                  <p>Professional cleaning services for offices of all sizes</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Reception areas and lobbies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Workstations and employee areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Meeting rooms and common spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Kitchen and break rooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">♻</span>
                  <span>Environmentally responsible cleaning products</span>
                </li>
              </ul>
              <Link href="/services/office-cleaning" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-opacity-90 transition">
                Learn More
              </Link>
            </div>
          </div>

          {/* Commercial Spaces */}
          <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-80">
              <img 
                src={kitchenImage} 
                alt="Commercial Space Cleaning" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Commercial Spaces</h3>
                  <p>Specialized cleaning for retail, restaurants, and more</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Retail stores and showrooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Restaurants and food service areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Medical offices and healthcare facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Schools and educational institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">♻</span>
                  <span>Specialized cleaning protocols for each industry</span>
                </li>
              </ul>
              <Link href="/services/commercial-cleaning" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-opacity-90 transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Commercial Benefits & CTA */}
        <div className="bg-neutral-900 text-white rounded-lg overflow-hidden shadow-xl">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Choose <span className="text-primary">Bloombrite</span> for Commercial Cleaning?</h3>
                <p className="mb-6 text-neutral-300">
                  Our commercial cleaning services are designed with your business in mind. We understand the importance of maintaining a clean, professional environment for your employees and customers.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                      <i className="fas fa-clock text-white"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Flexible Scheduling</h4>
                      <p className="text-neutral-300">After-hours cleaning to avoid business disruption</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                      <i className="fas fa-user-shield text-white"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Fully Insured & Bonded</h4>
                      <p className="text-neutral-300">Professional staff with liability coverage</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-4">
                      <i className="fas fa-leaf text-white"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Eco-Conscious Approach</h4>
                      <p className="text-neutral-300">Green cleaning products and sustainable practices</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="inline-block bg-white text-neutral-900 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3">Request a Commercial Quote</h4>
                  <p className="mb-6 text-neutral-600">
                    Get a customized quote for your business needs. We offer competitive rates and flexible contracts.
                  </p>
                  <a 
                    href="https://clienthub.getjobber.com/client_hubs/954e0464-c2ca-4376-b2e2-3d401431c7bf/public/work_request/new?source=social_media" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-opacity-90 transition"
                  >
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialSection;