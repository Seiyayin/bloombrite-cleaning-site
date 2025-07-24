import { useEffect } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';
// Import images
const kitchenImage = "/images/Kitchen deep cleaning.jpg";
const livingRoomImage = "/images/living room deep cleaning.jpg";
const bathroomImage = "/images/bathroom-tile-brushing.jpg";
const windowImage = "/images/window-washing.jpg";
const postConstructionImage = "/images/post-construction-2.jpg";

const BlogOverview = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Featured blog post
  const featuredPost = {
    title: "Memorial Day Cleaning Guide: Prepare Your Home for Summer Gatherings",
    excerpt: "Get your home ready for Memorial Day weekend parties with our comprehensive cleaning checklist. Professional tips for indoor and outdoor spaces to impress your guests.",
    date: "May 10, 2024",
    author: "BloomBrite Cleaning Team",
    slug: "memorial-day-cleaning",
    image: livingRoomImage
  };

  // Blog posts list
  const blogPosts = [
    {
      title: "Complete House Cleaning Guide for Novi, Michigan Homeowners",
      excerpt: "Comprehensive guide to house cleaning for Novi residents. Professional tips, seasonal cleaning schedules, and local cleaning service recommendations.",
      date: "January 21, 2025",
      author: "BloomBrite Cleaning Team",
      category: "Cleaning Tips",
      slug: "novi-house-cleaning-guide",
      image: kitchenImage
    },
    {
      title: "The Complete Guide to Inside Appliance Cleaning",
      excerpt: "Learn professional techniques for deep cleaning inside appliances including refrigerators, ovens, dishwashers, and microwaves to extend their life and improve performance.",
      date: "April 15, 2024",
      author: "BloomBrite Cleaning Team",
      category: "Home Care",
      slug: "inside-appliance-cleaning",
      image: kitchenImage
    },
    {
      title: "7 Professional Secrets for Spotless Bathrooms",
      excerpt: "Learn the techniques our professionals use to tackle even the toughest bathroom cleaning challenges.",
      date: "March 22, 2024",
      author: "BloomBrite Cleaning Team",
      category: "Cleaning Tips",
      slug: "bathroom-cleaning-secrets",
      image: bathroomImage,
      comingSoon: true
    },
    {
      title: "Window Cleaning: How to Achieve Streak-Free Results",
      excerpt: "Professional window cleaning techniques to get crystal clear, streak-free windows that make your home shine.",
      date: "March 8, 2024",
      author: "BloomBrite Cleaning Team",
      category: "Cleaning Tips",
      slug: "streak-free-window-cleaning",
      image: windowImage,
      comingSoon: true
    },
    {
      title: "Complete Guide to Post-Construction Cleaning",
      excerpt: "Everything you need to know about cleaning up after renovation or construction projects, from dust management to final touches.",
      date: "February 20, 2024",
      author: "BloomBrite Cleaning Team",
      category: "Specialized Cleaning",
      slug: "post-construction-cleaning",
      image: postConstructionImage,
      comingSoon: true
    }
  ];

  // Blog categories
  const categories = [
    "All",
    "Home Care",
    "Cleaning Tips",
    "Seasonal Cleaning",
    "Specialized Cleaning",
    "Commercial Cleaning"
  ];

  return (
    <>
      <SeoHead 
        title="Cleaning Tips & Guides | Bloombrite Cleaning Blog"
        description="Professional cleaning tips, guides, and advice for homeowners in Metro Detroit. Learn the secrets of keeping your home spotless from Bloombrite Cleaning experts."
      />
      
      <main className="bg-white">
        {/* Blog Header */}
        <section className="pt-20 pb-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Bloombrite Cleaning Blog</h1>
              <p className="text-xl text-neutral-600 mb-10">
                Professional cleaning tips, guides, and advice from our experts
              </p>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
                {categories.map((category, index) => (
                  <button 
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm md:text-base transition ${
                      index === 0 
                        ? 'bg-primary text-white' 
                        : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto mb-8">
                <input 
                  type="text" 
                  placeholder="Search blog posts..." 
                  className="w-full px-5 py-3 pl-12 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <svg 
                  className="absolute left-4 top-3.5 h-5 w-5 text-neutral-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        Seasonal Cleaning
                      </span>
                      <span className="ml-4 text-neutral-500 text-sm">{featuredPost.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                    <p className="text-neutral-600 mb-6">{featuredPost.excerpt}</p>
                  </div>
                  <div className="mt-4">
                    <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center text-primary font-medium hover:underline">
                      Read Full Article
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Latest Posts */}
        <section className="py-12 bg-neutral-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow transition hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition hover:scale-105"
                    />
                    {post.comingSoon && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-primary text-white px-4 py-2 rounded-md font-medium">Coming Soon</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-neutral-500 text-xs">{post.date}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 hover:text-primary transition">
                      {!post.comingSoon ? (
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      ) : (
                        post.title
                      )}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4">{post.excerpt}</p>
                    {!post.comingSoon && (
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                      >
                        Read more
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-primary text-sm font-medium text-white"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50"
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </section>
        
        {/* Subscribe Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
                Get the latest cleaning tips, seasonal offers, and home care advice delivered straight to your inbox.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-5 py-3 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition shadow-sm">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-neutral-500 mt-4">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* City-Specific Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Local Cleaning Tips by City</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get cleaning advice tailored to your specific Michigan community. Our local experts share city-specific tips and insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Link href="/blog/cities/wixom" className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors hover:shadow-lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Wixom</h3>
                  <p className="text-gray-600 text-sm">House cleaning tips for Wixom homeowners</p>
                  <span className="text-primary font-medium text-sm mt-2 inline-block">View Tips →</span>
                </div>
              </Link>
              
              <Link href="/blog/cities/novi" className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors hover:shadow-lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-home text-white"></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Novi</h3>
                  <p className="text-gray-600 text-sm">Suburban home cleaning guides</p>
                  <span className="text-primary font-medium text-sm mt-2 inline-block">View Tips →</span>
                </div>
              </Link>
              
              <Link href="/blog/cities/west-bloomfield" className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors hover:shadow-lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-gem text-white"></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">West Bloomfield</h3>
                  <p className="text-gray-600 text-sm">Luxury home cleaning advice</p>
                  <span className="text-primary font-medium text-sm mt-2 inline-block">View Tips →</span>
                </div>
              </Link>
              
              <Link href="/blog/cities/livonia" className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors hover:shadow-lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Livonia</h3>
                  <p className="text-gray-600 text-sm">Family-focused cleaning tips</p>
                  <span className="text-primary font-medium text-sm mt-2 inline-block">View Tips →</span>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <Link 
                href="/blog/cities"
                className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-orange-600 transition-colors"
              >
                View All City Guides
              </Link>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
    </>
  );
};

export default BlogOverview;