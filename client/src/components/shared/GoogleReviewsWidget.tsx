import { useEffect, useRef } from 'react';

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Google Maps script if it hasn't been loaded yet
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeWidget;
      document.head.appendChild(script);
    } else {
      initializeWidget();
    }

    function initializeWidget() {
      if (!containerRef.current || !window.google) return;

      const mapDiv = document.createElement('div');
      containerRef.current.appendChild(mapDiv);

      const map = new window.google.maps.Map(mapDiv, {
        center: { lat: 0, lng: 0 },
        zoom: 1,
        disableDefaultUI: true
      });

      const request = {
        placeId: placeId
      };

      const service = new window.google.maps.places.PlacesService(map);
      service.getDetails(request, (place: PlaceDetails, status: string) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && place && place.reviews) {
          // Create a container for reviews
          const reviewsContainer = document.createElement('div');
          reviewsContainer.className = 'google-reviews-container';
          containerRef.current?.appendChild(reviewsContainer);

          // Remove the map div as we don't need to display it
          mapDiv.style.display = 'none';

          // Display each review
          place.reviews.forEach((review: GoogleReview) => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'google-review bg-neutral-50 p-6 rounded-lg shadow-md mb-4';
            
            // Author info
            const authorElement = document.createElement('div');
            authorElement.className = 'flex items-center mb-2';
            
            // Author image
            if (review.profile_photo_url) {
              const authorImage = document.createElement('img');
              authorImage.src = review.profile_photo_url;
              authorImage.alt = review.author_name;
              authorImage.className = 'w-10 h-10 rounded-full mr-3';
              authorElement.appendChild(authorImage);
            }
            
            // Author name and time
            const authorInfo = document.createElement('div');
            const authorName = document.createElement('div');
            authorName.className = 'font-semibold';
            authorName.textContent = review.author_name;
            authorInfo.appendChild(authorName);
            
            if (review.relative_time_description) {
              const timeElement = document.createElement('div');
              timeElement.className = 'text-sm text-neutral-500';
              timeElement.textContent = review.relative_time_description;
              authorInfo.appendChild(timeElement);
            }
            
            authorElement.appendChild(authorInfo);
            reviewElement.appendChild(authorElement);
            
            // Rating
            const ratingElement = document.createElement('div');
            ratingElement.className = 'flex text-accent mb-2';
            for (let i = 0; i < 5; i++) {
              const star = document.createElement('i');
              star.className = i < review.rating ? 'fas fa-star' : 'far fa-star';
              ratingElement.appendChild(star);
            }
            reviewElement.appendChild(ratingElement);
            
            // Text
            if (review.text) {
              const textElement = document.createElement('p');
              textElement.className = 'text-neutral-700 italic';
              textElement.textContent = `"${review.text}"`;
              reviewElement.appendChild(textElement);
            }
            
            reviewsContainer.appendChild(reviewElement);
          });
        } else {
          // Show error message if reviews can't be loaded
          const errorElement = document.createElement('div');
          errorElement.className = 'text-center p-6';
          errorElement.textContent = 'Unable to load Google reviews. Please visit our Google Business Profile to see all reviews.';
          containerRef.current?.appendChild(errorElement);
        }
      });
    }

    return () => {
      // Cleanup if needed
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [placeId]);

  return (
    <div className="google-reviews-widget">
      <div ref={containerRef} className="google-reviews-container space-y-4"></div>
    </div>
  );
};

export default GoogleReviewsWidget;