const Features = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose BloomBrite Cleaning?</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Experience the difference of our professional cleaning services, tailored to your needs and schedule.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light text-primary rounded-full mb-4">
              <i className="fas fa-award text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Staff</h3>
            <p className="text-neutral-600">
              Our cleaners are thoroughly vetted, professionally trained, and insured for your peace of mind.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-light text-secondary rounded-full mb-4">
              <i className="fas fa-leaf text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly Products</h3>
            <p className="text-neutral-600">
              We use environmentally safe cleaning products that are effective yet gentle on your home and family.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light text-primary rounded-full mb-4">
              <i className="fas fa-calendar-alt text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-neutral-600">
              Book one-time or recurring services at times that fit your busy lifestyle, with easy online scheduling.
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-light text-secondary rounded-full mb-4">
              <i className="fas fa-shield-alt text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Satisfaction Guarantee</h3>
            <p className="text-neutral-600">
              If you're not completely satisfied, we'll come back and make it right at no additional cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
