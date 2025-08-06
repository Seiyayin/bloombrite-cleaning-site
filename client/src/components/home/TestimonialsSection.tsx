import { Link } from 'wouter';
import TestimonialCard from '../shared/TestimonialCard';
import { testimonials } from '@/data/testimonials';

const TestimonialsSection = () => {
  // Display only the first 3 testimonials on the homepage
  const displayedTestimonials = testimonials.slice(0, 3);
  
  return (
    <section className="py-3 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-3">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about Bloombrite Cleaning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/reviews" className="inline-block px-8 py-3 bg-white text-primary border border-primary font-semibold rounded-md hover:bg-neutral-50 transition">
            Read More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
