import { useEffect } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import { CheckCircle, Shield, Clock, Zap } from 'lucide-react';
import bitcoinLogo from '@/assets/bitcoin-logo.svg';

const BitcoinPayments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Secure & Private",
      description: "Bitcoin transactions are cryptographically secure and protect your privacy"
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Fast Processing",
      description: "Instant payment confirmation for faster service scheduling"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
      title: "Lower Fees",
      description: "Reduced transaction fees compared to traditional payment methods"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "24/7 Availability",
      description: "Make payments anytime, even outside business hours"
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Request Service",
      description: "Contact us for your cleaning service quote through our standard process"
    },
    {
      step: "2",
      title: "Choose Bitcoin Payment",
      description: "Let us know you'd like to pay with Bitcoin when booking your service"
    },
    {
      step: "3",
      title: "Receive Bitcoin Address",
      description: "We'll provide our Bitcoin wallet address and exact payment amount"
    },
    {
      step: "4",
      title: "Send Payment",
      description: "Transfer Bitcoin from your wallet using the provided address and amount"
    },
    {
      step: "5",
      title: "Confirmation & Service",
      description: "Once payment is confirmed, we'll schedule your cleaning service"
    }
  ];

  return (
    <>
      <SeoHead 
        title="Pay with Bitcoin for House Cleaning Services in Metro Detroit | Bloombrite Cleaning"
        description="Pay for professional house cleaning services with Bitcoin in Metro Detroit. Secure, fast, and private cryptocurrency payments accepted for residential cleaning, deep cleaning, window cleaning, and all cleaning services in Wixom, Novi, West Bloomfield, and surrounding areas."
      />
      
      <main className="bg-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <img src={bitcoinLogo} alt="Bitcoin Logo" className="w-16 h-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Pay with <span className="text-orange-500">Bitcoin</span> for Professional Cleaning Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Bloombrite Cleaning now accepts Bitcoin payments for all our professional house cleaning services in Metro Detroit. Enjoy secure, fast, and private cryptocurrency payments for your residential cleaning needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://clienthub.getjobber.com/client_hubs/954e0464-c2ca-4376-b2e2-3d401431c7bf/public/work_request/new?source=social_media" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition shadow-lg text-center"
                >
                  Get Quote & Pay with Bitcoin
                </a>
                <Link href="/services" className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-md hover:bg-orange-50 transition shadow-lg text-center">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Pay with Bitcoin?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Bitcoin payments offer numerous advantages for our Metro Detroit house cleaning customers
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How Bitcoin Payments Work</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Simple steps to pay for your Metro Detroit house cleaning services with Bitcoin
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services That Accept Bitcoin */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">All Services Accept Bitcoin</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Pay with Bitcoin for any of our professional cleaning services in Metro Detroit
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl hover:bg-orange-50 transition-colors">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Residential Cleaning</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <Link href="/services/standard-cleaning" className="text-orange-500 hover:underline">Standard house cleaning</Link></li>
                    <li>• <Link href="/services/deep-cleaning" className="text-orange-500 hover:underline">Deep cleaning services</Link></li>
                    <li>• <Link href="/services/recurring-cleaning" className="text-orange-500 hover:underline">Recurring cleaning</Link></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl hover:bg-orange-50 transition-colors">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Specialized Services</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <Link href="/services/move-in-out-cleaning" className="text-orange-500 hover:underline">Move-in/out cleaning</Link></li>
                    <li>• <Link href="/services/window-cleaning" className="text-orange-500 hover:underline">Window cleaning</Link></li>
                    <li>• <Link href="/services/post-construction-cleaning" className="text-orange-500 hover:underline">Post-construction cleaning</Link></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl hover:bg-orange-50 transition-colors">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Additional Services</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• <Link href="/services/power-washing" className="text-orange-500 hover:underline">Power washing</Link></li>
                    <li>• <Link href="/services/gutter-cleaning" className="text-orange-500 hover:underline">Gutter cleaning</Link></li>
                    <li>• <Link href="/services/commercial-cleaning" className="text-orange-500 hover:underline">Commercial cleaning</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas for Bitcoin Payments */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Bitcoin Payments Accepted in All Service Areas</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We accept Bitcoin payments for house cleaning services throughout our Metro Detroit service areas
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Link href="/locations/wixom" className="text-center p-4 bg-white rounded-lg hover:bg-orange-50 transition-colors shadow-sm">
                  <h3 className="font-semibold text-gray-800">Wixom</h3>
                  <p className="text-sm text-gray-600">Bitcoin payments accepted</p>
                </Link>
                <Link href="/locations/novi" className="text-center p-4 bg-white rounded-lg hover:bg-orange-50 transition-colors shadow-sm">
                  <h3 className="font-semibold text-gray-800">Novi</h3>
                  <p className="text-sm text-gray-600">Bitcoin payments accepted</p>
                </Link>
                <Link href="/locations/west-bloomfield" className="text-center p-4 bg-white rounded-lg hover:bg-orange-50 transition-colors shadow-sm">
                  <h3 className="font-semibold text-gray-800">West Bloomfield</h3>
                  <p className="text-sm text-gray-600">Bitcoin payments accepted</p>
                </Link>
                <Link href="/locations/livonia" className="text-center p-4 bg-white rounded-lg hover:bg-orange-50 transition-colors shadow-sm">
                  <h3 className="font-semibold text-gray-800">Livonia</h3>
                  <p className="text-sm text-gray-600">Bitcoin payments accepted</p>
                </Link>
              </div>
              
              <div className="text-center mt-8">
                <Link href="/locations" className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition">
                  View All Service Areas
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Bitcoin Payment FAQ</h2>
                <p className="text-xl text-gray-600">
                  Common questions about paying with Bitcoin for cleaning services
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Do you accept other cryptocurrencies?</h3>
                  <p className="text-gray-600">Currently, we only accept Bitcoin (BTC) for payments. We may add support for other cryptocurrencies in the future.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">How long does Bitcoin payment confirmation take?</h3>
                  <p className="text-gray-600">Bitcoin transactions typically confirm within 10-30 minutes. We'll schedule your cleaning service once payment is confirmed on the blockchain.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">What if the Bitcoin price changes between quote and payment?</h3>
                  <p className="text-gray-600">We provide the exact Bitcoin amount at the time of booking. The USD price is locked when we send you the payment details.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Can I get a refund in Bitcoin?</h3>
                  <p className="text-gray-600">Yes, if a refund is needed, we can process it in Bitcoin to the same wallet address you paid from, subject to our standard refund policy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Pay with Bitcoin?</h2>
              <p className="text-xl mb-8 opacity-90">
                Experience the future of payments with our professional Metro Detroit house cleaning services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://clienthub.getjobber.com/client_hubs/954e0464-c2ca-4376-b2e2-3d401431c7bf/public/work_request/new?source=social_media" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 bg-white text-orange-500 font-bold rounded-md hover:bg-gray-100 transition shadow-lg text-center"
                >
                  Get Quote & Pay with Bitcoin
                </a>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-orange-500 transition shadow-lg text-center">
                  Contact Us About Bitcoin Payments
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BitcoinPayments;