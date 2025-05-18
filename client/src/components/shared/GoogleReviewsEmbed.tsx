import { useEffect, useRef } from 'react';

interface GoogleReviewsEmbedProps {
  placeId: string;
  apiKey: string;
}

const GoogleReviewsEmbed = ({ placeId, apiKey }: GoogleReviewsEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // If needed, you can add additional functionality here
  }, [placeId, apiKey]);

  return (
    <div className="google-reviews-embed">
      <div className="rounded-lg overflow-hidden shadow-md">
        <iframe
          ref={iframeRef}
          src={`https://widgets.sociablekit.com/google-reviews/iframe/152266?width=100%25&gpr-header-color=%2347A857&gpr-review-height=100px&gpr-theme-prim-color=%2347A857&embed-avt-border=true&embed-badge-type=star&embed-display-link=true&embed-show-shareable=true&embed-badge-border-color=%23FB8800&embed-badge-inner-color=%23FB8800&embed-badge-outer-color=%23FB8800&embed-more-review=true&embed-filter-min-rating=4&embed-open-new=true&hide-reviews=false&embed-popup=true&place-id=${placeId}`}
          width="100%"
          height="600px"
          style={{ border: 'none' }}
          title="Google Reviews for BloomBrite Cleaning"
          loading="lazy"
        ></iframe>
      </div>

      {/* Alternative option using Google's own widget */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
        <p className="mb-4">Your feedback helps others learn about our business. Thank you for taking the time to share your experience!</p>
        <a 
          href={`https://search.google.com/local/writereview?placeid=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition"
        >
          <i className="fab fa-google text-xl mr-2"></i>
          <span>Write a Google Review</span>
        </a>
      </div>
    </div>
  );
};

export default GoogleReviewsEmbed;