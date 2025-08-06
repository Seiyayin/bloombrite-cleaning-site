import { Link } from 'wouter';

const MaintenanceSchedulingSection = () => {
  const schedulingOptions = [
    {
      frequency: "Weekly",
      description: "Perfect for busy families with children and pets",
      benefits: ["Consistent cleanliness", "More free time", "Priority scheduling"],
      price: "Starting at $120/week",
      popular: false
    },
    {
      frequency: "Biweekly", 
      description: "Our most popular choice for most Metro Detroit families",
      benefits: ["Great balance of clean & budget", "Regular maintenance", "Flexible scheduling"],
      price: "Starting at $140/visit",
      popular: true
    },
    {
      frequency: "Monthly",
      description: "Ideal for smaller homes or maintaining cleanliness",
      benefits: ["Budget-friendly option", "Deep cleaning focus", "Seasonal tasks"],
      price: "Starting at $160/visit",
      popular: false
    }
  ];

  return (
    <section className="py-6 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Maintenance Plans</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2">Choose Your Cleaning Schedule</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the maintenance cleaning schedule that fits your lifestyle and budget. All plans include the same professional service with flexible scheduling options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schedulingOptions.map((option, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow ${
                  option.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{option.frequency} Cleaning</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="text-primary text-xl font-semibold">{option.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {option.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/quote"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    option.popular
                      ? 'bg-primary text-white hover:bg-orange-600'
                      : 'bg-gray-100 text-gray-800 hover:bg-orange-50 hover:text-primary'
                  }`}
                >
                  Get Quote for {option.frequency} Service
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              All maintenance plans include the same professional cleaning standards with personalized service from your dedicated team.
            </p>
            <Link 
              href="/services/recurring-cleaning" 
              className="inline-block px-8 py-4 bg-white text-primary border-2 border-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Learn More About Maintenance Cleaning
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSchedulingSection;