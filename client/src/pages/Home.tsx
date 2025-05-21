import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ServicesSection from '@/components/home/ServicesSection';
import CommercialSection from '@/components/home/CommercialSection';
import TeamSection from '@/components/home/TeamSection';
import QuoteSection from '@/components/home/QuoteSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ServiceAreas from '@/components/home/ServiceAreas';
import FaqSection from '@/components/home/FaqSection';
import CallToAction from '@/components/home/CallToAction';
import SeoHead from '@/components/shared/SeoHead';
import { LocalBusinessSchema } from '@/lib/schema';
import teamImage from '@/assets/team.jpg';

const Home = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="Bloombrite Cleaning | Professional Cleaning Services in Michigan"
        description="Bloombrite Cleaning provides expert cleaning services in Wixom, Novi, Livonia, Milford, Commerce Township, Farmington Hills, South Lyon, and Walled Lake. Residential & commercial cleaning, deep cleaning, move-in/out cleaning, window cleaning, and power washing with guaranteed satisfaction."
        ogImage={teamImage} // Using your actual team image for social sharing
      />
      <LocalBusinessSchema />
      
      <main>
        <Hero />
        <Features />
        <ServicesSection />
        <CommercialSection />
        <TeamSection />
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
