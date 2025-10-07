import { useEffect } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';

const LivoniaBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "Complete Cleaning Guide for Livonia's Ranch-Style Homes",
      excerpt: "Tailored cleaning strategies for Livonia's popular ranch-style homes, including efficient workflows for single-story layouts.",
      date: "December 20, 2024",
      author: "Bloombrite Cleaning Team",
      category: "Home Types",
      slug: "livonia-ranch-home-cleaning",
      image: "/images/living room deep cleaning.jpg"
    },
    {
      title: "Year-Round Cleaning Schedule for Livonia Families",
      excerpt: "A comprehensive seasonal cleaning calendar designed specifically for Livonia residents, accounting for local climate and lifestyle.",
      date: "December 15, 2024",
      author: "Bloombrite Cleaning Team",
      category: "Seasonal Planning",
      slug: "livonia-seasonal-cleaning-schedule",
      image: "/images/Kitchen deep cleaning.jpg"
    },
    {
      title: "Professional Cleaning Benefits for Livonia's Working Families",
      excerpt: "How professional residential cleaning services help Livonia's busy families maintain clean, healthy homes without the stress.",
      date: "December 10, 2024",
      author: "Bloombrite Cleaning Team",
      category: "Family Life",
      slug: "livonia-working-families-cleaning",
      image: "/images/bedroom-clean.jpg"
    }
  ];

  return (
    <>
      <SeoHead 
        title="Livonia MI Cleaning Blog: Ranch Home Tips, Seasonal Schedules | Bloombrite"
        description="Cleaning tutorials for Livonia ranch-style homes. Year-round maintenance schedules, family cleaning strategies, professional service benefits for working families in Michigan."
        canonicalPath="/blog/cities/livonia"
      />
      
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-primary to-orange-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Cleaning Guides for Livonia Families & Ranch-Style Homes
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Professional cleaning advice and guides specifically for Livonia families from your trusted residential cleaning services team
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
                      <Link href={`/blog/cities/livonia/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Link 
                        href={`/blog/cities/livonia/${post.slug}`}
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

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional House Cleaning Services in Livonia</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reliable residential cleaning services for Livonia's family-focused community. We make it easy for busy families to maintain clean, comfortable homes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-heart text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Family-Friendly Service</h3>
                <p className="text-gray-600">Safe, reliable cleaning services that work perfectly for Livonia's family-oriented community.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Time-Saving Solutions</h3>
                <p className="text-gray-600">Free up your weekends and evenings with professional cleaning that fits your busy schedule.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-home text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-gray-600">Deep understanding of Livonia homes and the cleaning challenges of Michigan living.</p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/locations/livonia"
                className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-orange-600 transition-colors"
              >
                View Livonia Cleaning Services
              </Link>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
};

export default LivoniaBlog;