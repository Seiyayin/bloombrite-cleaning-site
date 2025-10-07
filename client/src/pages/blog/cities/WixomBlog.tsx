import { useEffect } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';

const WixomBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "Complete House Cleaning Checklist for Wixom Homeowners",
      excerpt: "A comprehensive room-by-room cleaning checklist specifically tailored for Wixom homes, including seasonal cleaning tips for Michigan's climate.",
      date: "December 20, 2024",
      author: "Bloombrite Cleaning Team",
      category: "Local Tips",
      slug: "wixom-house-cleaning-checklist",
      image: "/images/living room deep cleaning.jpg"
    },
    {
      title: "Why Professional House Cleaning is Essential in Wixom's Four Seasons",
      excerpt: "Learn how Wixom's unique seasonal changes affect your home and why professional cleaning services are crucial for maintaining a healthy living environment.",
      date: "December 15, 2024",
      author: "Bloombrite Cleaning Team",
      category: "Seasonal Cleaning",
      slug: "wixom-seasonal-cleaning-guide",
      image: "/images/Kitchen deep cleaning.jpg"
    },
    {
      title: "Top 5 Benefits of Regular House Cleaning Services in Wixom",
      excerpt: "Discover why Wixom residents choose professional residential cleaning services and how regular cleaning improves your home's value and your family's health.",
      date: "December 10, 2024",
      author: "Bloombrite Cleaning Team",
      category: "Home Care",
      slug: "benefits-house-cleaning-wixom",
      image: "/images/bedroom-clean.jpg"
    }
  ];

  return (
    <>
      <SeoHead 
        title="Wixom MI Cleaning Blog: 4-Season Guide, Benefits, Checklists | Bloombrite"
        description="Cleaning guides for Wixom MI homeowners. Room-by-room checklists, seasonal tips, professional service benefits, Michigan climate strategies."
        canonicalPath="/blog/cities/wixom/"
      />
      
      <main className="min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary to-orange-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Complete Cleaning Resources for Wixom MI Residents
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Professional cleaning advice and guides specifically for Wixom residents from your local residential cleaning services experts
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="ml-4 text-gray-500 text-sm">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                      <Link href={`/blog/cities/wixom/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Link 
                        href={`/blog/cities/wixom/${post.slug}`}
                        className="text-primary font-medium hover:text-primary-dark transition-colors"
                        aria-label={`Read full article: ${post.title}`}
                      >
                        Read Full Article →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Local Services Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional House Cleaning Services in Wixom</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Looking for reliable residential cleaning services in Wixom? Our professional team provides comprehensive house cleaning services for Wixom homeowners.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-home text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Regular House Cleaning</h3>
                <p className="text-gray-600">Weekly, bi-weekly, or monthly residential cleaning services tailored to your Wixom home's needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-sparkles text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Deep Cleaning Services</h3>
                <p className="text-gray-600">Comprehensive deep house cleaning services for spring cleaning or move-in preparation in Wixom.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calendar-check text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Convenient scheduling options that fit your busy Wixom lifestyle and work schedule.</p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/locations/wixom"
                className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-orange-600 transition-colors"
              >
                View Wixom Cleaning Services
              </Link>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
};

export default WixomBlog;