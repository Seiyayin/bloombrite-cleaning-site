import { useEffect } from 'react';
import TestimonialCard from '@/components/shared/TestimonialCard';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';
import { ReviewSchema } from '@/lib/schema';
import { testimonials } from '@/data/testimonials';
import { useGoogleReviews } from '@/hooks/useGoogleReviews';


const Reviews = () => {
  const { reviews: googleReviews, rating, totalRatings, isLoading, error } = useGoogleReviews();
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="5-Star Customer Reviews & Testimonials | Bloombrite Cleaning Michigan"
        description="Read verified Google reviews from Metro Detroit homeowners. See why families trust Bloombrite for deep cleaning, move-in/out service, and recurring maid service."
        canonicalUrl="https://www.bloombritecleaning.com/reviews"
      />
      <ReviewSchema reviews={testimonials} />
      
      <main>
        {/* Reviews Banner */}
        <section className="bg-primary text-white -mt-16 pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Real Reviews from Metro Detroit Homeowners & Businesses</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about Bloombrite Cleaning.
            </p>
            <div className="mt-8 flex justify-center items-center">
              <div className="text-yellow-400 text-4xl mr-3 flex">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className="text-2xl font-bold">{rating.toFixed(1)} / 5</div>
            </div>
            <p className="mt-2">Based on {totalRatings + testimonials.length} verified customer reviews</p>
          </div>
        </section>
        
        {/* Google Reviews Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Google Reviews</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                See what our customers are saying about us on Google.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                  <p className="mt-2 text-neutral-600">Loading reviews...</p>
                </div>
              ) : error ? (
                <div className="text-center py-8">
                  <p className="text-neutral-600">Unable to load Google reviews at this time.</p>
                  <p className="text-sm text-neutral-500 mt-2">Please check our testimonials below.</p>
                </div>
              ) : (
                <div className="google-reviews-embed">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {googleReviews.length > 0 ? googleReviews.map((review, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-4">
                          {review.profile_photo_url ? (
                            <img 
                              src={review.profile_photo_url} 
                              alt={review.author_name}
                              className="w-12 h-12 rounded-full mr-4"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4 text-white">
                              <span className="text-xl font-bold">
                                {review.author_name.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div>
                            <div className="font-semibold">{review.author_name}</div>
                            <div className="text-sm text-neutral-500">{review.relative_time_description}</div>
                          </div>
                        </div>
                        
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <span 
                              key={i} 
                              className={`text-xl ${i < review.rating ? 'text-yellow-400' : 'text-neutral-300'}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-neutral-700 italic">"{review.text}"</p>
                      </div>
                    )) : (
                      <div className="col-span-2 text-center py-8">
                        <p className="text-neutral-600">No Google reviews available at this time.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            
              {/* Direct link to Google reviews */}
              <div className="mt-8 text-center">
                <a 
                  href="https://g.co/kgs/3LWj5Wx"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-md hover:opacity-90 transition"
                >
                  <span>See All Reviews on Google</span>
                </a>
              </div>
            
              {/* Call to action for leaving a review */}
              <div className="mt-8 bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
                <p className="mb-4">Your feedback helps others learn about our business. Thank you for taking the time to share your experience!</p>
                <a 
                  href="https://g.co/kgs/3LWj5Wx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-md hover:opacity-90 transition"
                >
                  <span>Write a Google Review</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* BloomBrite Reviews List */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">More Customer Testimonials</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Here are some additional testimonials from our satisfied customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Write a Review */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Share Your Experience</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8">
              We value your feedback! If you've used our services, please consider sharing your experience to help others.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://g.co/kgs/3LWj5Wx"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 transition"
              >
                <i className="fab fa-google text-2xl mr-3 text-[#4285F4]"></i>
                <span>Review on Google</span>
              </a>
              
              <a 
                href="https://www.facebook.com/bloombritecleaning/reviews/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 transition"
              >
                <i className="fab fa-facebook text-2xl mr-3 text-[#1877F2]"></i>
                <span>Review on Facebook</span>
              </a>
              
              <a 
                href="https://www.yelp.com/biz/bloombrite-cleaning" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white border border-neutral-300 rounded-md hover:bg-neutral-50 transition"
              >
                <i className="fab fa-yelp text-2xl mr-3 text-[#FF1A1A]"></i>
                <span>Review on Yelp</span>
              </a>
            </div>
          </div>
        </section>
        
        {/* Testimonial Video - Optional */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Hear From Our Customers</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Watch what our clients have to say about their experience with BloomBrite Cleaning.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <div className="flex items-center justify-center bg-neutral-200 h-full">
                  <div className="text-center p-8">
                    <i className="fas fa-video text-4xl text-neutral-400 mb-4"></i>
                    <p className="text-neutral-600">Video testimonials coming soon!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
    </>
  );
};

export default Reviews;
