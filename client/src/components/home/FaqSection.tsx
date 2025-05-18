import { useState } from 'react';
import { Link } from 'wouter';
import { faqs } from '@/data/faqs';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Display only the first 5 FAQs on the homepage
  const displayedFaqs = faqs.slice(0, 5);
  
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Find answers to our most commonly asked questions about our cleaning services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {displayedFaqs.map((faq, index) => (
            <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden">
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
        
        <div className="mt-12 text-center">
          <Link href="/faq" className="inline-block px-8 py-3 bg-white text-primary border border-primary font-semibold rounded-md hover:bg-neutral-50 transition">
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
