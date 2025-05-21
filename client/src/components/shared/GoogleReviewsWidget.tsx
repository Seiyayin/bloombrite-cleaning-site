import { useEffect, useRef, useState } from 'react';

// Define Google Maps types
declare global {
  interface Window {
    google: {
      maps: {
        Map: new (element: HTMLElement, options: any) => any;
        places: {
          PlacesService: new (map: any) => {
            getDetails: (request: { placeId: string }, callback: (place: any, status: string) => void) => void;
          };
          PlacesServiceStatus: {
            OK: string;
            [key: string]: string;
          };
        };
      };
    };
  }
}

interface GoogleReviewsWidgetProps {
  placeId: string;
}

interface GoogleReview {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  text?: string;
  relative_time_description?: string;
}

interface PlaceDetails {
  reviews?: GoogleReview[];
}

const GoogleReviewsWidget = ({ placeId }: GoogleReviewsWidgetProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load the Google Maps script if it hasn't been loaded yet
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const script = document.createElement('script');
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = fetchGoogleReviews;
        document.head.appendChild(script);
      } else {
        fetchGoogleReviews();
      }
    };

    const fetchGoogleReviews = () => {
      if (!mapRef.current || !window.google) return;

      try {
        // Create a hidden map (required for PlacesService)
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 0, lng: 0 },
          zoom: 1,
          disableDefaultUI: true
        });

        const request = { placeId };
        const service = new window.google.maps.places.PlacesService(map);
        
        service.getDetails(request, (place: PlaceDetails, status: string) => {
          setLoading(false);
          
          if (status === window.google.maps.places.PlacesServiceStatus.OK && place && place.reviews) {
            setReviews(place.reviews);
          } else {
            setError('Unable to load Google reviews. Please visit our Google Business Profile to see all reviews.');
          }
        });
      } catch (err) {
        setLoading(false);
        setError('Error loading reviews. Please try again later.');
        console.error('Error fetching Google reviews:', err);
      }
    };

    loadGoogleMapsScript();

    return () => {
      // Cleanup if needed
    };
  }, [placeId]);

  // Render loading state
  if (loading) {
    return (
      <div className="google-reviews-widget text-center py-8">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-primary/20 mb-4"></div>
          <div className="h-4 bg-neutral-200 rounded w-48 mb-4"></div>
          <div className="h-2 bg-neutral-200 rounded w-32 mb-6"></div>
          <div className="h-24 bg-neutral-100 rounded w-full max-w-md"></div>
        </div>
        <p className="mt-4 text-neutral-500">Loading reviews...</p>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="google-reviews-widget text-center py-8">
        <p className="text-neutral-700">{error}</p>
        <a 
          href="https://g.co/kgs/3LWj5Wx"
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 mt-4 bg-primary text-white font-semibold rounded-md hover:opacity-90 transition"
        >
          <span>See All Reviews on Google</span>
        </a>
      </div>
    );
  }

  return (
    <div className="google-reviews-widget">
      {/* Hidden map element required for Places API */}
      <div ref={mapRef} style={{ display: 'none' }}></div>
      
      {/* Reviews Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="google-review bg-neutral-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              {review.profile_photo_url && (
                <img 
                  src={review.profile_photo_url} 
                  alt={review.author_name} 
                  className="w-10 h-10 rounded-full mr-3"
                />
              )}
              <div>
                <div className="font-semibold">{review.author_name}</div>
                {review.relative_time_description && (
                  <div className="text-sm text-neutral-500">{review.relative_time_description}</div>
                )}
              </div>
            </div>
            
            <div className="flex text-accent mb-2">
              {[...Array(5)].map((_, i) => (
                <i key={i} className={i < review.rating ? 'fas fa-star' : 'far fa-star'}></i>
              ))}
            </div>
            
            {review.text && (
              <p className="text-neutral-700 italic">"{review.text}"</p>
            )}
          </div>
        ))}
      </div>

      {/* Google Reviews Link */}
      <div className="mt-4 text-center">
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
  );
};

export default GoogleReviewsWidget;