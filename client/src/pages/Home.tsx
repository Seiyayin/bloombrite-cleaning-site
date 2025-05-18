import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ServicesSection from '@/components/home/ServicesSection';
import QuoteSection from '@/components/home/QuoteSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ServiceAreas from '@/components/home/ServiceAreas';
import FaqSection from '@/components/home/FaqSection';
import CallToAction from '@/components/home/CallToAction';
import SeoHead from '@/components/shared/SeoHead';
import { LocalBusinessSchema } from '@/lib/schema';

const Home = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="BloomBrite Cleaning | Professional Cleaning Services in Michigan"
        description="BloomBrite Cleaning offers top-quality residential and commercial cleaning services in Wixom, Novi, Livonia and surrounding areas in Michigan."
        ogImage="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac"
      />
      <LocalBusinessSchema />
      
      <main>
        <Hero />
        <Features />
        <ServicesSection />
        <QuoteSection />
        <TestimonialsSection />
        <ServiceAreas />
        <FaqSection />
        <CallToAction />
      </main>
    </>
  );
};

export default Home;
