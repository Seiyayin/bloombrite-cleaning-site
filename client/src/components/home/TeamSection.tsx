import React from 'react';
import { Link } from 'wouter';
import teamImage from '@/assets/team.jpg';
import yaneImage from '@/assets/yane.jpg';
import livingRoomImage from '@/assets/living room deep cleaning.jpg';

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our People</span>
          <h2 className="text-3xl font-bold mb-4 mt-2">Meet Our Team</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our dedicated cleaning professionals are the heart of Bloombrite Cleaning. With thorough training and a passion for excellence, they transform spaces into spotless environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                <img 
                  src={teamImage} 
                  alt="Bloombrite Cleaning Team" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
                  width="600"
                  height="400"
                  loading="eager"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Professional Team</h3>
                <p className="text-neutral-600 mb-4">
                  Our professional cleaning team brings expertise and dedication to every job. Each team member undergoes extensive training to ensure they deliver the Bloombrite standard of excellence.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Professionally trained staff</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Background checked and insured</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Attention to detail</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Expert Techniques</h3>
                <p className="text-neutral-600 mb-4">
                  We use advanced cleaning techniques and premium eco-friendly products to ensure your spaces aren't just clean, but healthy too.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Eco-friendly cleaning products</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Advanced cleaning equipment</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Specialized surface treatment</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                <img 
                  src={yaneImage} 
                  alt="Bloombrite Cleaning Specialist" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
                  width="600"
                  height="400"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Living spaces showcase */}
        <div className="mt-12 relative rounded-lg overflow-hidden shadow-lg">
          <img 
            src={livingRoomImage} 
            alt="Living Room Deep Cleaning" 
            className="w-full h-auto object-cover"
            width="1200"
            height="600"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
            <div className="p-6 md:p-8 text-white max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Transforming Living Spaces</h3>
              <p className="text-lg mb-4">
                We specialize in bringing new life to every type of space, from luxury homes to commercial properties.
              </p>
              <Link href="/services" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-opacity-90 transition">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;