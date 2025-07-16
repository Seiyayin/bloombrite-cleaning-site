import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ServicesSection from '@/components/home/ServicesSection';
import CommercialSection from '@/components/home/CommercialSection';
import TeamSection from '@/components/home/TeamSection';
import QuoteSection from '@/components/home/QuoteSection';
import QuoteInfoSection from '@/components/home/QuoteInfoSection';
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
        title="Bloombrite Cleaning Services | Professional House Cleaning in Michigan"
        description="Bloombrite Cleaning Services provides expert residential cleaning services and house cleaning services in Wixom, Novi, Livonia, Milford, Commerce Township, Farmington Hills, South Lyon, Walled Lake, West Bloomfield, and Keego Harbor. Professional residential cleaning services, house cleaning services, deep cleaning services, move-in/out cleaning services, window cleaning services, and power washing services with guaranteed satisfaction."
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
        <QuoteInfoSection />
        <TestimonialsSection />
        <ServiceAreas />
        <FaqSection />
        <CallToAction />
      </main>
    </>
  );
};

export default Home;
