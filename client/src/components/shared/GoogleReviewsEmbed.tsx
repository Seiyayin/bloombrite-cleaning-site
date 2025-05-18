import { useEffect, useState } from 'react';

interface GoogleReviewsEmbedProps {
  placeId: string;
  apiKey: string;
}

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url?: string;
  relative_time_description?: string;
}

const GoogleReviewsEmbed = ({ placeId, apiKey }: GoogleReviewsEmbedProps) => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load the Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      try {
        // Create a dummy map element (required by Places API but won't be displayed)
        const mapDiv = document.createElement('div');
        mapDiv.style.display = 'none';
        document.body.appendChild(mapDiv);
        
        // Initialize the map (required for PlacesService)
        const map = new window.google.maps.Map(mapDiv, {
          center: { lat: 0, lng: 0 },
          zoom: 1
        });
        
        // Create a PlacesService instance
        const service = new window.google.maps.places.PlacesService(map);
        
        // Request the place details including reviews
        service.getDetails(
          {
            placeId: placeId,
            fields: ['reviews', 'name', 'rating']
          },
          (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && place?.reviews) {
              setReviews(place.reviews);
            } else {
              setError('Could not load reviews at this time. Please check back later.');
            }
            setLoading(false);
          }
        );
      } catch (err) {
        setError('Error loading Google Reviews.');
        setLoading(false);
      }
    };
    
    script.onerror = () => {
      setError('Error loading Google Maps API.');
      setLoading(false);
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Clean up if component unmounts
      const mapDiv = document.querySelector('div[style="display: none;"]');
      if (mapDiv) document.body.removeChild(mapDiv);
    };
  }, [placeId, apiKey]);

  // Display different UI states
  if (loading) {
    return (
      <div className="google-reviews-embed py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-neutral-600">Loading reviews...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="google-reviews-embed py-8">
        <div className="bg-red-50 border border-red-100 rounded-lg p-6 text-center">
          <p className="text-red-600">{error}</p>
          <p className="mt-2 text-neutral-600">
            In the meantime, you can read our reviews directly on Google.
          </p>
          <a
            href={`https://search.google.com/local/reviews?placeid=${placeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition"
          >
            <span>View Our Google Reviews</span>
          </a>
        </div>
      </div>
    );
  }

  // Render the reviews
  return (
    <div className="google-reviews-embed">
      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {review.profile_photo_url ? (
                  <img 
                    src={review.profile_photo_url} 
                    alt={`${review.author_name}'s profile`} 
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center mr-4">
                    <span className="text-neutral-500">
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
              
              <p className="text-neutral-700">{review.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-neutral-50 rounded-lg">
          <p className="text-neutral-600">No reviews available at this time.</p>
        </div>
      )}

      {/* Call to action for leaving a review */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
        <p className="mb-4">Your feedback helps others learn about our business. Thank you for taking the time to share your experience!</p>
        <a 
          href={`https://search.google.com/local/writereview?placeid=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition"
        >
          <span>Write a Google Review</span>
        </a>
      </div>
    </div>
  );
};

export default GoogleReviewsEmbed;