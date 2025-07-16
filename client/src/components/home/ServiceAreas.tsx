import { Link } from 'wouter';
import { locations } from '@/data/locations';

const ServiceAreas = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Bloombrite Cleaning proudly serves these Michigan communities and surrounding areas.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {locations.map((location) => (
            <Link 
              key={location.id} 
              href={`/locations/${location.slug}`}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-orange-50 transition-all duration-300 text-center group"
            >
              <h3 className="font-semibold mb-2">{location.name}</h3>
              <p className="text-sm text-neutral-600">{location.zipCodes}</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/locations" className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-orange-600 active:bg-orange-700 transition shadow-sm">
            View All Service Areas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
