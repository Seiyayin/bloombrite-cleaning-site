import { Link } from 'wouter';
import TestimonialCard from '../shared/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { useGoogleReviews } from '@/hooks/useGoogleReviews';

const TestimonialsSection = () => {
  const { reviews: googleReviews, rating, isLoading } = useGoogleReviews();
  
  // Display only the first 3 testimonials on the homepage
  const displayedTestimonials = testimonials.slice(0, 3);
  
  // Combine Google reviews with testimonials for more diverse content
  const combinedReviews = [
    ...googleReviews.slice(0, 1), // Show 1 Google review
    ...displayedTestimonials.slice(0, 2) // Show 2 testimonials
  ];
  
  return (
    <section className="py-1 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-1">
          <div className="flex justify-center items-center mb-4">
            <div className="text-yellow-400 text-2xl mr-2 flex">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <div className="text-lg font-bold">{rating.toFixed(1)} / 5</div>
          </div>
          <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about Bloombrite Cleaning.
          </p>
        </div>
        
        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-2 text-neutral-600">Loading reviews...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Display Google review first */}
            {googleReviews.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  {googleReviews[0].profile_photo_url ? (
                    <img 
                      src={googleReviews[0].profile_photo_url} 
                      alt={googleReviews[0].author_name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4 text-white">
                      <span className="text-xl font-bold">
                        {googleReviews[0].author_name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <div className="font-semibold">{googleReviews[0].author_name}</div>
                    <div className="text-sm text-neutral-500">{googleReviews[0].relative_time_description}</div>
                    <div className="text-xs text-blue-600 font-medium">Google Review</div>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-xl ${i < googleReviews[0].rating ? 'text-yellow-400' : 'text-neutral-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                
                <p className="text-neutral-700 italic line-clamp-4">"{googleReviews[0].text}"</p>
              </div>
            )}
            
            {/* Display testimonials */}
            {displayedTestimonials.slice(0, googleReviews.length > 0 ? 2 : 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Link href="/reviews" className="inline-block px-8 py-3 bg-white text-primary border border-primary font-semibold rounded-md hover:bg-neutral-50 transition">
            View All Customer Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
