import { useEffect } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';

const CityBlogIndex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cityBlogs = [
    {
      name: "Wixom",
      slug: "wixom",
      description: "House cleaning tips and guides for Wixom homeowners",
      postCount: "3 articles",
      image: "/images/living room deep cleaning.jpg",
      highlights: ["Complete cleaning checklists", "Seasonal cleaning guides", "Local cleaning tips"]
    },
    {
      name: "Novi",
      slug: "novi",
      description: "Residential cleaning advice for Novi's suburban families",
      postCount: "3 articles",
      image: "/images/bedroom-clean.jpg",
      highlights: ["Suburban home cleaning", "Family-focused tips", "New construction care"]
    },
    {
      name: "West Bloomfield",
      slug: "west-bloomfield",
      description: "Luxury home cleaning guides for West Bloomfield properties",
      postCount: "3 articles",
      image: "/images/stove-cleaning.jpg",
      highlights: ["Luxury home care", "Lakefront property tips", "Premium cleaning standards"]
    },
    {
      name: "Livonia",
      slug: "livonia",
      description: "Professional cleaning tips for Livonia families",
      postCount: "3 articles",
      image: "/images/Kitchen deep cleaning.jpg",
      highlights: ["Ranch-style homes", "Family cleaning schedules", "Working family solutions"]
    }
  ];

  return (
    <>
      <SeoHead 
        title="Michigan City Cleaning Guides: Wixom, Novi, Livonia, West Bloomfield | Bloombrite"
        description="Location-specific house cleaning tutorials. Guides tailored for Wixom, Novi, Livonia, West Bloomfield homes. Local climate tips, seasonal maintenance, service area resources."
        canonicalPath="/blog/cities/"
      />
      
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-primary to-orange-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                City-Specific Cleaning Guides for Metro Detroit Communities
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Get city-specific cleaning advice from Michigan's trusted residential cleaning services professionals. Tips tailored to your local community's unique needs.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cityBlogs.map((city, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={city.image} 
                      alt={`${city.name} house cleaning services`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-2xl font-bold text-gray-800">{city.name}</h2>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {city.postCount}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{city.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-800 mb-2">Featured Topics:</h3>
                      <ul className="space-y-1">
                        {city.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-center">
                            <i className="fas fa-check text-primary mr-2"></i>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link 
                        href={`/blog/cities/${city.slug}`}
                        className="inline-flex items-center px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
                      >
                        View {city.name} Tips
                        <i className="fas fa-arrow-right ml-2"></i>
                      </Link>
                      <Link 
                        href={`/locations/${city.slug}`}
                        className="text-primary font-medium hover:text-primary-dark transition-colors"
                      >
                        Our {city.name} Services
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional House Cleaning Services Across Michigan</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                No matter which city you call home, Bloombrite Cleaning provides expert residential cleaning services with local expertise and personalized care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
                <p className="text-gray-600 text-sm">We understand each community's unique needs and preferences.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-home text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">All Home Types</h3>
                <p className="text-gray-600 text-sm">From luxury homes to family ranches, we clean them all.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calendar text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600 text-sm">Convenient appointment times that work for your schedule.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-leaf text-white text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-gray-600 text-sm">Safe, green cleaning products for your family and pets.</p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/locations"
                className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-orange-600 transition-colors mr-4"
              >
                View All Service Areas
              </Link>
              <Link 
                href="/blog"
                className="inline-block px-8 py-4 border-2 border-primary text-primary font-bold rounded-md hover:bg-orange-50 transition-colors"
              >
                Back to Main Blog
              </Link>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
};

export default CityBlogIndex;