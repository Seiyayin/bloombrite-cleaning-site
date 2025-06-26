import { useEffect } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="Thank You | BloomBrite Cleaning"
        description="Thank you for contacting BloomBrite Cleaning. We appreciate your interest in our professional cleaning services in Michigan."
      />
      
      <main className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-light text-primary rounded-full mb-6">
              <i className="fas fa-check-circle text-3xl"></i>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h1>
            
            <p className="text-lg text-neutral-600 mb-6">
              Your message has been successfully submitted. We appreciate your interest in BloomBrite Cleaning services.
            </p>
            
            <p className="text-neutral-600 mb-8">
              One of our team members will contact you shortly to discuss your cleaning needs and answer any questions you may have.
            </p>
            
            <div className="bg-neutral-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
              <p className="text-neutral-600">
                We typically respond to all inquiries within 24 hours during business days. If you need immediate assistance, please don't hesitate to call us.
              </p>
              <div className="mt-4">
                <a href="tel:7344899908" className="inline-flex items-center text-primary font-medium hover:underline">
                  <i className="fas fa-phone-alt mr-2"></i>
                  (734) 489-9908
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild>
                <Link href="/" className="px-8 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition shadow-sm">
                  Return to Home
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/services" className="px-8 py-2 bg-white text-primary border border-primary font-semibold rounded-md hover:bg-neutral-50 transition shadow-sm">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ThankYou;
