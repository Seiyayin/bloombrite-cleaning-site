import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
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
import NearMeSection from '@/components/home/NearMeSection';
import GeneralSeoContent from '@/components/shared/GeneralSeoContent';
import SeoHead from '@/components/shared/SeoHead';

import { LocalBusinessSchema } from '@/lib/schema';
import teamImage from '@/assets/team.jpg';

const Home = () => {
  // Scroll to top when the page loads and set body class for homepage
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('homepage');
    
    return () => {
      document.body.classList.remove('homepage');
    };
  }, []);

  return (
    <>
      <SeoHead 
        title="House Cleaning Wixom, Novi, Livonia MI | Maid Service | Bloombrite"
        description="Trusted house cleaning & maid service in Metro Detroit since 2019. Serving Wixom, Novi, Livonia, Milford, South Lyon, Commerce Township. Deep cleaning, recurring service, move-in/out. Book online or text (947) 465-4217."
        canonicalUrl="https://www.bloombritecleaning.com/"
        ogImage={teamImage}
      />
      <LocalBusinessSchema />
      
      <main>
        <Hero />
        <ServicesSection />
        <MaintenanceSchedulingSection />
        <CommercialSection />
        <TeamSection />
        <QuoteSection />
        <QuoteInfoSection />
        <TestimonialsSection />
        <GeneralSeoContent />
        <ServiceAreas />
        <NearMeSection />
        <FaqSection />
        <CallToAction />
      </main>
    </>
  );
};

export default Home;
