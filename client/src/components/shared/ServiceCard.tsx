import { Link } from 'wouter';
import OptimizedImage from './OptimizedImage';

interface ServiceProps {
  service: {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    imageUrl: string;
    startingPrice: string;
  };
}

const ServiceCard = ({ service }: ServiceProps) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <div className="bg-neutral-200 overflow-hidden" style={{ aspectRatio: '16/9', height: '240px' }}>
        <OptimizedImage
          src={service.imageUrl}
          alt={`${service.title} service`}
          className="w-full h-full object-cover transition-transform hover:scale-105"
          width={640}
          height={360}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-neutral-600 mb-4">
          {service.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Starting at {service.startingPrice}</span>
          <Link href={`/services/${service.slug}`} className="text-primary font-medium hover:text-primary-dark flex items-center" aria-label={`Learn more about ${service.title} service`}>
            View {service.title} Details
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
