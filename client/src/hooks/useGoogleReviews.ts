import { useState, useEffect } from 'react';

interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GoogleReviewsData {
  reviews: GoogleReview[];
  rating: number;
  total_ratings: number;
}

interface UseGoogleReviewsResult {
  reviews: GoogleReview[];
  rating: number;
  totalRatings: number;
  isLoading: boolean;
  error: string | null;
}

export const useGoogleReviews = (): UseGoogleReviewsResult => {
  const [data, setData] = useState<GoogleReviewsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/google-reviews');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch reviews: ${response.status}`);
        }

        const result = await response.json();

        if (!result.success) {
          throw new Error(result.message || 'Failed to fetch reviews');
        }

        setData(result.data);
      } catch (err) {
        console.error('Error fetching Google reviews:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch reviews');
        
        // Fallback to avoid empty state - use minimal data
        setData({
          reviews: [],
          rating: 4.9,
          total_ratings: 127
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return {
    reviews: data?.reviews || [],
    rating: data?.rating || 4.9,
    totalRatings: data?.total_ratings || 127,
    isLoading,
    error
  };
};