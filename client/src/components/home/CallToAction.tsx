import { Link } from 'wouter';

const CallToAction = () => {
  return (
    <section className="py-1 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready for a Cleaner, Healthier Space?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Experience the Bloombrite difference today. Our professional cleaning team is ready to transform your <Link href="/services/standard-cleaning" className="text-white hover:text-accent underline">home</Link> or <Link href="/services/office-cleaning" className="text-white hover:text-accent underline">office</Link> with our comprehensive <Link href="/services" className="text-white hover:text-accent underline">cleaning services</Link>.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/quote" className="px-8 py-4 bg-accent text-white font-bold rounded-md hover:bg-orange-600 active:bg-orange-700 transition shadow-md">
            Get Your Free Quote
          </Link>
          <a href="tel:9474654217" className="px-8 py-4 bg-white text-primary font-bold rounded-md hover:bg-orange-50 hover:text-orange-700 active:bg-neutral-100 transition shadow-md">
            Call (947) 465-4217
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
