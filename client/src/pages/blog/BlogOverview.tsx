import { useEffect } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import teamImage from '@/assets/team.jpg';

// Sample blog data
const blogPosts = [
  {
    id: 'inside-appliance-cleaning',
    title: 'The Complete Guide to Inside Appliance Cleaning',
    excerpt: 'Learn professional tips and techniques for deep cleaning inside appliances to extend their life and improve performance.',
    date: 'May 15, 2024',
    author: 'BloomBrite Cleaning Team',
    imageUrl: '/src/assets/kitchen deep cleaning.jpg',
    category: 'Cleaning Guides'
  },
  {
    id: 'memorial-day-cleaning',
    title: 'Memorial Day Cleaning Guide: Prepare Your Home for Summer Gatherings',
    excerpt: 'Get your home ready for Memorial Day weekend and summer entertaining with our comprehensive cleaning checklist.',
    date: 'May 10, 2024',
    author: 'BloomBrite Cleaning Team',
    imageUrl: '/src/assets/living room deep cleaning.jpg',
    category: 'Seasonal Cleaning'
  },
  {
    id: 'spring-cleaning-checklist',
    title: 'Ultimate Spring Cleaning Checklist for 2024',
    excerpt: 'Refresh your home this spring with our comprehensive room-by-room cleaning guide.',
    date: 'April 5, 2024',
    author: 'BloomBrite Cleaning Team',
    imageUrl: '/src/assets/yane.jpg',
    category: 'Seasonal Cleaning'
  }
];

const BlogOverview = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SeoHead 
        title="Cleaning Tips & Guides | BloomBrite Cleaning Blog"
        description="Discover professional cleaning tips, seasonal guides, and expert advice from BloomBrite Cleaning to keep your home spotless and healthy."
        ogImage={teamImage}
      />
      
      <main>
        {/* Blog Banner */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">BloomBrite Cleaning Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional cleaning tips, seasonal guides, and expert advice to keep your home spotless and healthy.
            </p>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                  <Link href={`/blog/${post.id}`}>
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-neutral-500 mb-2">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <h2 className="text-xl font-bold mb-3 hover:text-primary transition">{post.title}</h2>
                    </Link>
                    <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                    <Link 
                      href={`/blog/${post.id}`} 
                      className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        
        {/* Subscribe Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Cleaning Tips</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Get the latest cleaning tips, seasonal guides, and exclusive offers delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary sm:w-72"
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-opacity-90 transition"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-neutral-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogOverview;