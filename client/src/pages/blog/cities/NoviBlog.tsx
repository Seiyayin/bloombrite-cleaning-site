import { useEffect } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';

const NoviBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "Ultimate Guide to Maintaining Clean Homes in Novi's Suburban Environment",
      excerpt: "Learn how to keep your Novi home spotless year-round with professional tips tailored to suburban living and Michigan's changing seasons.",
      date: "December 20, 2024",
      author: "Bloombrite Cleaning Team",
      category: "Local Tips",
      slug: "novi-suburban-cleaning-guide",
      image: "/images/bedroom-clean.jpg"
    },
    {
      title: "Spring Cleaning Services for Novi Families: What to Expect",
      excerpt: "Discover how professional spring cleaning services in Novi can help busy families tackle deep cleaning tasks efficiently and thoroughly.",
      date: "December 15, 2024",
      author: "Bloombrite Cleaning Team",
      category: "Seasonal Cleaning",
      slug: "novi-spring-cleaning-services",
      image: "/images/Kitchen deep cleaning.jpg"
    },
    {
      title: "Window Cleaning Tips for Novi's New Construction Homes",
      excerpt: "Special considerations and professional techniques for maintaining the large windows common in Novi's newer residential developments.",
      date: "December 10, 2024",
      author: "Bloombrite Cleaning Team",
      category: "Home Care",
      slug: "novi-window-cleaning-tips",
      image: "/images/window-cleaning-new.jpg"
    }
  ];

  return (
    <>
      <SeoHead 
        title="House Cleaning Tips & Guides for Novi Residents | Bloombrite Cleaning"
        description="Expert house cleaning tips, guides, and advice specifically for Novi homeowners. Professional residential cleaning services insights for Michigan's suburban communities."
      />
      
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-primary to-orange-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                House Cleaning Tips for Novi Homeowners
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Professional cleaning advice and guides specifically for Novi residents from your trusted residential cleaning services team
              </p>
            </div>
          </div>
        </section>

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
                      <Link href={`/blog/cities/novi/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Link 
                        href={`/blog/cities/novi/${post.slug}`}
                        className="text-primary font-medium hover:text-primary-dark transition-colors"
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

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional House Cleaning Services in Novi</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by Novi families for reliable residential cleaning services. We understand the unique needs of Novi's suburban homes and busy lifestyles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-home text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Suburban Home Specialists</h3>
                <p className="text-gray-600">Expert cleaning services tailored for Novi's larger homes and family lifestyles.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Family-Focused Service</h3>
                <p className="text-gray-600">Safe, reliable cleaning that works around your family's schedule and needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-leaf text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly Products</h3>
                <p className="text-gray-600">Green cleaning solutions that are safe for your Novi home and the environment.</p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/locations/novi"
                className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-orange-600 transition-colors"
              >
                View Novi Cleaning Services
              </Link>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
};

export default NoviBlog;