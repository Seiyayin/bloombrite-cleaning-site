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
import NoviSeoContent from '@/components/shared/NoviSeoContent';
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
        title="#1 House Cleaning Services in Novi, Michigan | Bloombrite Cleaning"
        description="Top-rated house cleaning services in Novi, Wixom, and West Bloomfield, Michigan. Professional residential cleaning, deep cleaning, move-in/out cleaning. Serving 500+ Novi area families with eco-friendly cleaning solutions and 100% satisfaction guarantee. Get your free quote today!"
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
        <NoviSeoContent />
        <ServiceAreas />
        <FaqSection />
        <CallToAction />
      </main>
    </>
  );
};

export default Home;
