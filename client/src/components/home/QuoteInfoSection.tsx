import { Link } from "wouter";

const QuoteInfoSection = () => {
  return (
    <section className="py-1 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Ready to Get Started?</h2>
          <p className="text-xl text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
            Get your personalized quote today and discover why homeowners throughout Michigan trust Bloombrite Cleaning.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light text-primary rounded-full mb-4">
                <i className="fas fa-clipboard-list text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Quote</h3>
              <p className="text-neutral-600">
                Receive a comprehensive quote based on your specific cleaning requirements and home size.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light text-primary rounded-full mb-4">
                <i className="fas fa-clock text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
              <p className="text-neutral-600">
                We'll respond to your quote request within 24 hours during regular business hours.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light text-primary rounded-full mb-4">
                <i className="fas fa-handshake text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Obligation</h3>
              <p className="text-neutral-600">
                Our quotes are free with no obligation or pressure to book our services.
              </p>
            </div>
          </div>
          
          {/* Our Quote Process */}
          <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Our Simple Quote Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-2">Submit Request</h4>
                <p className="text-neutral-600">
                  Complete our simple quote form with details about your cleaning needs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-2">Receive Quote</h4>
                <p className="text-neutral-600">
                  We'll send you a detailed quote within about 1 hour during business hours.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-2">Approve Quote</h4>
                <p className="text-neutral-600">
                  Review and approve your quote if it meets your needs and budget.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 font-bold">
                  4
                </div>
                <h4 className="font-semibold mb-2">Confirmation</h4>
                <p className="text-neutral-600">
                  Receive a confirmation text with your scheduled cleaning date and time.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link href="/quote" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-orange-600 active:bg-orange-700 transition shadow-md mr-4">
              Get Your Free Quote
            </Link>
            <a 
              href="sms:9474654217" 
              className="inline-block px-8 py-4 bg-white text-primary border border-primary font-bold rounded-md hover:bg-orange-50 hover:text-orange-700 active:bg-neutral-100 transition shadow-md"
            >
              Text (947) 465-4217
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteInfoSection;