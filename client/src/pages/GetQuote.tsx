import { useEffect } from 'react';
import QuoteSection from '@/components/home/QuoteSection';
import SeoHead from '@/components/shared/SeoHead';

// Schema markup for quote page
const QuotePageSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Get a Free Quote - Bloombrite Cleaning",
        "description": "Request a free, personalized quote for residential or commercial cleaning services in Michigan",
        "url": "https://bloombritecleaning.com/quote",
        "mainEntity": {
          "@type": "Service",
          "name": "Free Cleaning Quote",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Bloombrite Cleaning",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Wixom",
              "addressRegion": "MI",
              "addressCountry": "US"
            },
            "telephone": "+1-734-489-9908",
            "url": "https://bloombritecleaning.com"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "Free consultation and quote for cleaning services"
          }
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://bloombritecleaning.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Get Quote",
              "item": "https://bloombritecleaning.com/quote"
            }
          ]
        }
      })
    }}
  />
);

const GetQuote = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="Get a Free Quote | Bloombrite Cleaning"
        description="Request a free, personalized quote for your residential or commercial cleaning needs in Michigan. Fast, easy, and no-obligation estimates from Bloombrite Cleaning."
        canonicalUrl="https://bloombritecleaning.com/quote"
      />
      <QuotePageSchema />
      
      <main>
        {/* Quote Banner */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Get a Free Cleaning Quote</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Fill out the form below to receive a personalized quote for your cleaning needs. We'll get back to you promptly with a detailed estimate.
            </p>
          </div>
        </section>
        
        {/* Quote Form Section */}
        <QuoteSection />
        
        {/* Additional Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What to Expect</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light text-primary rounded-full mb-4">
                    <i className="fas fa-clipboard-list text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Detailed Quote</h3>
                  <p className="text-neutral-600">
                    Receive a comprehensive quote based on your specific cleaning requirements and home size.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light text-primary rounded-full mb-4">
                    <i className="fas fa-clock text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                  <p className="text-neutral-600">
                    We'll respond to your quote request within 24 hours during regular business hours.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light text-primary rounded-full mb-4">
                    <i className="fas fa-handshake text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No Obligation</h3>
                  <p className="text-neutral-600">
                    Our quotes are free with no obligation or pressure to book our services.
                  </p>
                </div>
              </div>
              
              {/* Our Quote Process */}
              <div className="mt-12 bg-primary/5 p-8 rounded-lg border-l-4 border-primary mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-center">Our Simple Quote Process</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 font-bold">
                      1
                    </div>
                    <h4 className="font-semibold mb-2">Submit Request</h4>
                    <p className="text-neutral-600">
                      Complete our simple quote form with details about your cleaning needs.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 font-bold">
                      2
                    </div>
                    <h4 className="font-semibold mb-2">Receive Quote</h4>
                    <p className="text-neutral-600">
                      We'll send you a detailed quote within about 1 hour during business hours.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 font-bold">
                      3
                    </div>
                    <h4 className="font-semibold mb-2">Approve Quote</h4>
                    <p className="text-neutral-600">
                      Review and approve your quote if it meets your needs and budget.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 font-bold">
                      4
                    </div>
                    <h4 className="font-semibold mb-2">Confirmation</h4>
                    <p className="text-neutral-600">
                      Receive a confirmation text with your scheduled cleaning date and time.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-neutral-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions About Quotes</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold">How do you determine pricing?</h4>
                    <p className="mt-2 text-neutral-600">
                      Our pricing is based on several factors including the size of your home, type of cleaning service required, frequency of service, and any special requests. We provide transparent pricing with no hidden fees.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Do I need to be home for an estimate?</h4>
                    <p className="mt-2 text-neutral-600">
                      For most standard services, we can provide quotes based on the information you provide. For larger or more complex jobs, we may recommend an in-home assessment at your convenience.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">How long is my quote valid?</h4>
                    <p className="mt-2 text-neutral-600">
                      Quotes are typically valid for 30 days from the date issued, giving you time to make your decision without rush.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GetQuote;
