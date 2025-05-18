import { Link } from 'wouter';

const CallToAction = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready for a Cleaner, Healthier Space?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Experience the BloomBrite difference today. Our professional cleaning team is ready to transform your home or office.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/get-quote" className="px-8 py-4 bg-accent text-white font-bold rounded-md hover:bg-accent-dark transition shadow-md">
            Get Your Free Quote
          </Link>
          <a href="tel:1234567890" className="px-8 py-4 bg-white text-primary font-bold rounded-md hover:bg-neutral-50 transition shadow-md">
            Call (123) 456-7890
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
