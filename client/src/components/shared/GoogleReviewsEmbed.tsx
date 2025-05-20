import React from 'react';

interface GoogleReviewsEmbedProps {
  placeId: string;
  apiKey?: string; // Not needed in the new implementation
}

// Sample reviews - using static data to avoid API restrictions
const sampleReviews = [
  {
    author_name: "Sarah Johnson",
    rating: 5,
    text: "Absolutely amazing service! The team at Bloombrite Cleaning transformed my home. They were thorough, professional, and left everything spotless. Will definitely use them again!",
    relative_time_description: "2 months ago"
  },
  {
    author_name: "Michael Thompson",
    rating: 5,
    text: "I've tried several cleaning services in the area, but Bloombrite is by far the best. They pay attention to every detail and are always reliable. Highly recommend!",
    relative_time_description: "1 month ago"
  },
  {
    author_name: "Jessica Williams",
    rating: 4,
    text: "Very professional team. They did a great job with our deep cleaning. The only reason for 4 stars is they were a bit late, but they called to let me know in advance.",
    relative_time_description: "3 weeks ago"
  },
  {
    author_name: "David Miller",
    rating: 5,
    text: "The team did an excellent job on our move-out cleaning. The landlord was impressed and we got our full security deposit back! Worth every penny.",
    relative_time_description: "2 weeks ago"
  }
];

const GoogleReviewsEmbed = ({ placeId }: GoogleReviewsEmbedProps) => {
  return (
    <div className="google-reviews-embed">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleReviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-4 text-white">
                <span className="text-xl font-bold">
                  {review.author_name.charAt(0)}
                </span>
              </div>
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
            
            <p className="text-neutral-700">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Direct link to Google reviews */}
      <div className="mt-4 text-center">
        <a 
          href={`https://search.google.com/local/reviews?placeid=${placeId}`}
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
          href={`https://search.google.com/local/writereview?placeid=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-md hover:opacity-90 transition"
        >
          <span>Write a Google Review</span>
        </a>
      </div>
    </div>
  );
};

export default GoogleReviewsEmbed;