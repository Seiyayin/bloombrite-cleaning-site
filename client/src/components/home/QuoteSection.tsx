const QuoteSection = () => {
  return (
    <section id="get-quote" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 bg-primary text-white">
              <h2 className="text-3xl font-bold mb-6">Get a Personalized Quote</h2>
              <p className="mb-6">
                Let us provide you with a customized quote for your cleaning needs. We'll create a detailed estimate based on your specific requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-check-circle mt-1 mr-3 text-accent"></i>
                  <p>No obligation quote</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle mt-1 mr-3 text-accent"></i>
                  <p>Customized to your specific needs</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle mt-1 mr-3 text-accent"></i>
                  <p>Quick response time</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle mt-1 mr-3 text-accent"></i>
                  <p>Available 7 days a week</p>
                </div>
              </div>
              <div className="mt-8 bg-white/10 p-5 rounded-md">
                <p className="font-semibold mb-3">Why choose BloomBrite Cleaning?</p>
                <div className="flex items-start mb-2">
                  <i className="fas fa-star text-yellow-400 mt-1 mr-3"></i>
                  <p>Professional, insured cleaning team</p>
                </div>
                <div className="flex items-start mb-2">
                  <i className="fas fa-star text-yellow-400 mt-1 mr-3"></i>
                  <p>Eco-friendly cleaning products</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-star text-yellow-400 mt-1 mr-3"></i>
                  <p>100% satisfaction guarantee</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
              <p className="text-neutral-600 mb-8">
                Click the button below to fill out our quick form and receive a personalized quote for your cleaning needs through our secure client portal.
              </p>
              
              <a 
                href="https://clienthub.getjobber.com/client_hubs/954e0464-c2ca-4376-b2e2-3d401431c7bf/public/work_request/new?source=social_media" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 bg-primary text-white font-bold rounded-md hover:bg-opacity-90 transition shadow-md text-center"
              >
                Request a Quote
              </a>
              
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <p className="font-semibold mb-3">For immediate assistance:</p>
                <div className="flex items-center mb-3">
                  <i className="fas fa-phone text-primary mr-3"></i>
                  <a href="tel:1234567890" className="hover:text-primary">(123) 456-7890</a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-primary mr-3"></i>
                  <a href="mailto:info@bloombritecleaning.com" className="hover:text-primary">info@bloombritecleaning.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
