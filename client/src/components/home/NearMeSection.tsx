import { Link } from 'wouter';

const NearMeSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Professional Cleaning Services Near Me in Metro Detroit
          </h2>
          
          <div className="prose prose-lg max-w-none mb-8 text-gray-700">
            <p className="mb-4">
              When you search for "cleaning near me" in Metro Detroit, Bloombrite Cleaning is your trusted local choice. We understand that finding reliable <strong>house cleaning near Novi</strong>, <strong>move-out cleaners near Wixom</strong>, <strong>commercial cleaning services near Milford</strong>, or a dependable <strong>cleaning company near South Lyon, MI</strong> can be challenging. That's why homeowners and businesses throughout the Metro Detroit area turn to our professional team for all their residential and commercial cleaning needs.
            </p>
            
            <p className="mb-6">
              Whether you're looking for regular maintenance cleaning, deep cleaning services, or specialized commercial cleaning services, our experienced team serves Novi, Wixom, Milford, South Lyon, and surrounding neighborhoods with the same commitment to excellence that has earned us over 97 five-star reviews. From West Bloomfield to Livonia, Commerce Township to Farmington Hills, we're the cleaning service near you that delivers exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Always Available</h3>
              <p className="text-gray-600 text-sm">
                Flexible scheduling including evenings and weekends to fit your busy lifestyle
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Fully Flexible</h3>
              <p className="text-gray-600 text-sm">
                Weekly, biweekly, monthly, or one-time cleaning services tailored to your needs
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Completely Trusted</h3>
              <p className="text-gray-600 text-sm">
                Bonded, insured, and background-checked team members you can count on
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/quote" className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 text-lg">
              Get Your Free Quote Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearMeSection;