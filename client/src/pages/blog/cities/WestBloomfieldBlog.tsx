import { useEffect } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';

const WestBloomfieldBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: "Luxury Home Cleaning Guide for West Bloomfield Properties",
      excerpt: "Specialized cleaning techniques and considerations for maintaining West Bloomfield's upscale homes, from marble surfaces to custom finishes.",
      date: "December 20, 2024",
      author: "Bloombrite Cleaning Team",
      category: "Luxury Cleaning",
      slug: "west-bloomfield-luxury-home-cleaning",
      image: "/images/stove-cleaning.jpg"
    },
    {
      title: "Seasonal Maintenance for West Bloomfield Lakefront Homes",
      excerpt: "How lake proximity affects your home's cleaning needs and what West Bloomfield homeowners should know about seasonal maintenance.",
      date: "December 15, 2024",
      author: "Bloombrite Cleaning Team",
      category: "Seasonal Tips",
      slug: "west-bloomfield-lakefront-cleaning",
      image: "/images/living room deep cleaning.jpg"
    },
    {
      title: "Professional Window Cleaning for West Bloomfield's Large Windows",
      excerpt: "Expert techniques for maintaining the expansive windows common in West Bloomfield homes, ensuring crystal-clear views year-round.",
      date: "December 10, 2024",
      author: "Bloombrite Cleaning Team",
      category: "Specialized Services",
      slug: "west-bloomfield-window-cleaning",
      image: "/images/window-cleaning-new.jpg"
    }
  ];

  return (
    <>
      <SeoHead 
        title="West Bloomfield MI Blog: Luxury Home Care, Lakefront Maintenance | Bloombrite"
        description="Upscale home cleaning guides for West Bloomfield. Marble care, lakefront seasonal maintenance, premium window cleaning, luxury property care tips."
        canonicalPath="/blog/cities/west-bloomfield"
      />
      
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-primary to-orange-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Luxury & Lakefront Home Cleaning Articles for West Bloomfield MI
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Specialized cleaning advice for West Bloomfield's luxury homes and lakefront properties from your professional residential cleaning services experts
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
                      <Link href={`/blog/cities/west-bloomfield/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Link 
                        href={`/blog/cities/west-bloomfield/${post.slug}`}
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
              <h2 className="text-3xl font-bold mb-4">Luxury House Cleaning Services in West Bloomfield</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized residential cleaning services for West Bloomfield's upscale homes. We understand the unique requirements of luxury properties and lakefront homes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-gem text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Luxury Home Expertise</h3>
                <p className="text-gray-600">Specialized techniques for high-end finishes, custom surfaces, and luxury appliances.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-water text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lakefront Property Care</h3>
                <p className="text-gray-600">Understanding the unique cleaning needs of West Bloomfield's beautiful lakefront homes.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Service Standards</h3>
                <p className="text-gray-600">White-glove service with attention to detail that matches your home's luxury standards.</p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/locations/west-bloomfield"
                className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-orange-600 transition-colors"
              >
                View West Bloomfield Cleaning Services
              </Link>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
};

export default WestBloomfieldBlog;