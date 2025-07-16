const QuoteSection = () => {
  return (
    <section id="quote" className="py-20 bg-neutral-50">
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
                  <p>Quick response within 1 hour</p>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle mt-1 mr-3 text-accent"></i>
                  <p>Available 7 days a week</p>
                </div>
              </div>
              <div className="mt-8 bg-white/10 p-5 rounded-md">
                <p className="font-semibold mb-3">Why choose Bloombrite Cleaning?</p>
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
              
              {/* Quote Process */}
              <div className="mb-8 bg-neutral-50 p-5 rounded-md">
                <h4 className="font-semibold mb-3 text-primary">Our Simple Quote Process:</h4>
                <ol className="space-y-3">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">1</div>
                    <p><span className="font-medium">Submit Request</span> - Fill out our simple quote form</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">2</div>
                    <p><span className="font-medium">Receive Quote</span> - Get your quote within about 1 hour</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">3</div>
                    <p><span className="font-medium">Approve Quote</span> - Review and approve if it meets your needs</p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">4</div>
                    <p><span className="font-medium">Confirmation</span> - Receive a confirmation text with your scheduled cleaning date</p>
                  </li>
                </ol>
              </div>
              
              <a 
                href="https://clienthub.getjobber.com/client_hubs/954e0464-c2ca-4376-b2e2-3d401431c7bf/public/work_request/new?source=social_media" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 bg-primary text-white font-bold rounded-md hover:bg-orange-600 active:bg-orange-700 transition shadow-md text-center"
              >
                Request Your Quote Now
              </a>
              
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <p className="font-semibold mb-3">For immediate assistance:</p>
                <div className="flex items-center mb-3">
                  <i className="fas fa-phone text-primary mr-3"></i>
                  <a href="tel:9474654217" className="hover:text-primary">(947) 465-4217</a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-primary mr-3"></i>
                  <a href="mailto:sales@bloombritecleaning.com" className="hover:text-primary">sales@bloombritecleaning.com</a>
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
