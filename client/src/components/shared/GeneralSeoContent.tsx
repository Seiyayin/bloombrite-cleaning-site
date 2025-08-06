import { Link } from 'wouter';

const GeneralSeoContent = () => {
  return (
    <section className="py-1 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
              Why Choose Bloombrite for House Cleaning in Metro Detroit?
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by families across Metro Detroit for reliable, professional residential cleaning services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">Local Metro Detroit Expertise</h3>
              <p className="text-gray-600 mb-4">
                We understand Metro Detroit's suburban lifestyle and the unique cleaning needs of local homes. Our team knows how to handle everything from winter salt damage to spring deep cleaning.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Experience with Metro Detroit's four-season climate challenges</li>
                <li>• Familiar with local home styles and layouts</li>
                <li>• Serving Metro Detroit communities for over 5 years</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">Family-Focused Service</h3>
              <p className="text-gray-600 mb-4">
                Our house cleaning services are designed around busy Metro Detroit families. We use eco-friendly products safe for children and pets, and offer flexible scheduling.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Non-toxic, family-safe cleaning products</li>
                <li>• Flexible scheduling around school and work</li>
                <li>• Insured and bonded cleaning professionals</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-orange-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Comprehensive Metro Detroit House Cleaning Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Regular Cleaning Services</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• <Link href="/services/standard-cleaning" className="text-primary hover:underline">Standard residential cleaning</Link></li>
                  <li>• <Link href="/services/recurring-cleaning" className="text-primary hover:underline">Weekly maintenance cleaning</Link></li>
                  <li>• <Link href="/services/recurring-cleaning" className="text-primary hover:underline">Biweekly maintenance cleaning</Link></li>
                  <li>• <Link href="/services/recurring-cleaning" className="text-primary hover:underline">Monthly maintenance cleaning</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Specialized Cleaning</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• <Link href="/services/deep-cleaning" className="text-primary hover:underline">Deep residential cleaning</Link></li>
                  <li>• <Link href="/services/move-in-out-cleaning" className="text-primary hover:underline">Move-in/out cleaning</Link></li>
                  <li>• <Link href="/services/recurring-cleaning" className="text-primary hover:underline">Maintenance cleaning plans</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Ready to Experience Metro Detroit's Best House Cleaning Service?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of satisfied Metro Detroit homeowners who trust Bloombrite for their residential cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://clienthub.getjobber.com/client_hubs/954e0464-c2ca-4376-b2e2-3d401431c7bf/public/work_request/new?source=social_media" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 bg-primary text-white font-bold rounded-md hover:bg-orange-600 transition shadow-lg text-center"
              >
                Get Free Quote
              </a>
              <Link href="/locations" className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-md hover:bg-orange-50 transition shadow-lg text-center">
                View All Service Areas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralSeoContent;