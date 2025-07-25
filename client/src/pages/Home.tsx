import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ServicesSection from '@/components/home/ServicesSection';
import MaintenanceSchedulingSection from '@/components/home/MaintenanceSchedulingSection';
import CommercialSection from '@/components/home/CommercialSection';
import TeamSection from '@/components/home/TeamSection';
import QuoteSection from '@/components/home/QuoteSection';
import QuoteInfoSection from '@/components/home/QuoteInfoSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ServiceAreas from '@/components/home/ServiceAreas';
import FaqSection from '@/components/home/FaqSection';
import CallToAction from '@/components/home/CallToAction';
import GeneralSeoContent from '@/components/shared/GeneralSeoContent';
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
        title="Professional House Cleaning Services in Metro Detroit | Bloombrite Cleaning"
        description="Professional house cleaning services in Wixom, Novi, West Bloomfield, Livonia, and surrounding Metro Detroit areas. Expert residential cleaning, deep cleaning, move-in/out cleaning, weekly, biweekly, and monthly maintenance cleaning services with 100% satisfaction guarantee."
        ogImage={teamImage} // Using your actual team image for social sharing
      />
      <LocalBusinessSchema />
      
      <main>
        <Hero />
        <Features />
        <ServicesSection />
        <MaintenanceSchedulingSection />
        <CommercialSection />
        <TeamSection />
        <QuoteSection />
        <QuoteInfoSection />
        <TestimonialsSection />
        <GeneralSeoContent />
        <ServiceAreas />
        <FaqSection />
        <CallToAction />
      </main>
    </>
  );
};

export default Home;
