interface TestimonialProps {
  testimonial: {
    id: number;
    rating: number;
    text: string;
    author: {
      name: string;
      location: string;
      avatarUrl: string;
    };
  };
}

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    
    // Full stars
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    // Half star
    if (rating % 1 !== 0) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }
    
    return stars;
  };
  
  return (
    <div className="bg-neutral-50 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-orange-50 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="text-accent">
          {renderStars(testimonial.rating)}
        </div>
        <span className="ml-2 font-semibold">{testimonial.rating.toFixed(1)}</span>
      </div>
      <p className="text-neutral-700 mb-6 italic">
        "{testimonial.text}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-neutral-300 overflow-hidden mr-4">
          <img 
            src={testimonial.author.avatarUrl} 
            alt={testimonial.author.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.author.name}</h4>
          <p className="text-sm text-neutral-600">{testimonial.author.location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
