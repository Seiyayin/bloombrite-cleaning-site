import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';
import { FAQSchema } from '@/lib/schema';
import { faqs } from '@/data/faqs';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="Frequently Asked Questions | Bloombrite Cleaning"
        description="Find answers about Bloombrite Cleaning's professional services in Wixom, Novi, Livonia, Milford, Commerce Township, Farmington Hills, South Lyon and Walled Lake. Learn about our cleaning process, pricing, booking options, and satisfaction guarantee for residential and commercial cleaning."
      />
      <FAQSchema faqs={faqs} />
      
      <main>
        {/* FAQ Banner */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Find answers to our most commonly asked questions about our cleaning services.
            </p>
          </div>
        </section>
        
        {/* FAQ Categories */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* About Our Services */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">About Our Services</h2>
                <div className="space-y-6">
                  {faqs.filter(faq => faq.category === 'services').map((faq, index) => (
                    <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
                      <button 
                        className="w-full flex items-center justify-between bg-neutral-50 p-6 text-left font-semibold focus:outline-none"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={activeIndex === index}
                        aria-controls={`faq-answer-${index}`}
                      >
                        <span>{faq.question}</span>
                        <i className={`fas fa-chevron-down text-primary transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}></i>
                      </button>
                      <div 
                        id={`faq-answer-${index}`}
                        className={`px-6 pt-0 pb-6 ${activeIndex === index ? 'block' : 'hidden'}`}
                      >
                        <p className="text-neutral-600">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Booking & Scheduling */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">Booking & Scheduling</h2>
                <div className="space-y-6">
                  {faqs.filter(faq => faq.category === 'booking').map((faq, index) => (
                    <div key={index + 100} className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
                      <button 
                        className="w-full flex items-center justify-between bg-neutral-50 p-6 text-left font-semibold focus:outline-none"
                        onClick={() => toggleFaq(index + 100)}
                        aria-expanded={activeIndex === index + 100}
                        aria-controls={`faq-answer-${index + 100}`}
                      >
                        <span>{faq.question}</span>
                        <i className={`fas fa-chevron-down text-primary transition-transform ${activeIndex === index + 100 ? 'rotate-180' : ''}`}></i>
                      </button>
                      <div 
                        id={`faq-answer-${index + 100}`}
                        className={`px-6 pt-0 pb-6 ${activeIndex === index + 100 ? 'block' : 'hidden'}`}
                      >
                        <p className="text-neutral-600">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Pricing & Payment */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">Pricing & Payment</h2>
                <div className="space-y-6">
                  {faqs.filter(faq => faq.category === 'pricing').map((faq, index) => (
                    <div key={index + 200} className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
                      <button 
                        className="w-full flex items-center justify-between bg-neutral-50 p-6 text-left font-semibold focus:outline-none"
                        onClick={() => toggleFaq(index + 200)}
                        aria-expanded={activeIndex === index + 200}
                        aria-controls={`faq-answer-${index + 200}`}
                      >
                        <span>{faq.question}</span>
                        <i className={`fas fa-chevron-down text-primary transition-transform ${activeIndex === index + 200 ? 'rotate-180' : ''}`}></i>
                      </button>
                      <div 
                        id={`faq-answer-${index + 200}`}
                        className={`px-6 pt-0 pb-6 ${activeIndex === index + 200 ? 'block' : 'hidden'}`}
                      >
                        <p className="text-neutral-600">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Other Questions */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Other Questions</h2>
                <div className="space-y-6">
                  {faqs.filter(faq => faq.category === 'other').map((faq, index) => (
                    <div key={index + 300} className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
                      <button 
                        className="w-full flex items-center justify-between bg-neutral-50 p-6 text-left font-semibold focus:outline-none"
                        onClick={() => toggleFaq(index + 300)}
                        aria-expanded={activeIndex === index + 300}
                        aria-controls={`faq-answer-${index + 300}`}
                      >
                        <span>{faq.question}</span>
                        <i className={`fas fa-chevron-down text-primary transition-transform ${activeIndex === index + 300 ? 'rotate-180' : ''}`}></i>
                      </button>
                      <div 
                        id={`faq-answer-${index + 300}`}
                        className={`px-6 pt-0 pb-6 ${activeIndex === index + 300 ? 'block' : 'hidden'}`}
                      >
                        <p className="text-neutral-600">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Still Have Questions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
              Can't find the answer you're looking for? Please contact us for more information.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition shadow-md">
                Contact Us
              </Link>
              <a href="tel:7344899908" className="px-8 py-4 bg-white text-primary border border-primary font-bold rounded-md hover:bg-neutral-50 transition shadow-md">
                Call (734) 489-9908
              </a>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
    </>
  );
};

export default Faq;
