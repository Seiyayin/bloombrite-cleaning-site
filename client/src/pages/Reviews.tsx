import { useEffect } from 'react';
import TestimonialCard from '@/components/shared/TestimonialCard';
import GoogleReviewsEmbed from '@/components/shared/GoogleReviewsEmbed';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';
import { ReviewSchema } from '@/lib/schema';
import { testimonials } from '@/data/testimonials';

const Reviews = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Your Google API key and Place ID
  const googleApiKey = 'AIzaSyBJcszhgIhOQPMjadpJ3M8srAlgZNpjFmw';
  // Your actual Google Place ID
  const googlePlaceId = 'ChIJ8dw6RE6mJIgRsdro9IDycLk';

  return (
    <>
      <SeoHead 
        title="Customer Reviews | Bloombrite Cleaning Michigan"
        description="Read 5-star reviews of Bloombrite Cleaning's services in Wixom, Novi, Livonia, Milford, Commerce Township, Farmington Hills, South Lyon, and Walled Lake. Our customers love our reliable residential and commercial cleaning, deep cleaning, move-in/out cleaning, and window cleaning services."
      />
      <ReviewSchema reviews={testimonials} />
      
      <main>
        {/* Reviews Banner */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about BloomBrite Cleaning.
            </p>
            <div className="mt-8 flex justify-center items-center">
              <div className="text-accent text-4xl mr-3">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="text-2xl font-bold">4.9 / 5</div>
            </div>
            <p className="mt-2">Based on {testimonials.length} verified customer reviews</p>
          </div>
        </section>
        
        {/* Google Reviews Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Google Reviews</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                See our latest Google reviews from real customers who have experienced our cleaning services.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {/* Google Reviews Embed */}
              <GoogleReviewsEmbed placeId={googlePlaceId} apiKey={googleApiKey} />
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
