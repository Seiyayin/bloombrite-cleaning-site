import { useEffect } from 'react';
import { Link } from 'wouter';
import SeoHead from '@/components/shared/SeoHead';
import CallToAction from '@/components/home/CallToAction';
import { CheckCircle, Clock, Star, FileText } from 'lucide-react';

const Checklist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const standardTasks = {
    general: [
      "Dust all surfaces including shelves, tables, and decorative items",
      "Wipe down all light switches and door handles",
      "Empty all trash bins and replace liners",
      "Vacuum all carpets and area rugs",
      "Vacuum and mop all hard surface floors",
      "Make beds and tidy up rooms",
      "Organize and put items in their proper places"
    ],
    kitchen: [
      "Clean and sanitize all countertops",
      "Wipe down exterior of all appliances",
      "Clean microwave inside and out",
      "Clean stovetop and range surface",
      "Spot wipe cabinet faces and handles",
      "Clean and shine sink and faucet",
      "Take out trash and recycling",
      "General kitchen organization and tidying"
    ],
    bathrooms: [
      "Clean and disinfect toilet inside and out",
      "Scrub and sanitize sink and countertops",
      "Clean shower/tub and remove soap scum",
      "Wipe and polish mirrors",
      "Mop bathroom floors thoroughly",
      "Empty trash and replace liners"
    ],
    livingAreas: [
      "Dust all furniture and surfaces",
      "Vacuum upholstered furniture",
      "Clean glass surfaces and windows",
      "Organize books, magazines, and decor",
      "Dust entertainment centers and electronics",
      "Spot clean walls and doors"
    ]
  };

  const deepCleaningTasks = {
    wholeHouse: [
      "Clean ceiling fans and light fixtures",
      "Dust and wipe air vents and registers",
      "Wash walls and baseboards",
      "Clean window sills and ledges",
      "Wash interior windows",
      "Deep clean light fixtures and replace bulbs",
      "Organize closets and storage areas"
    ],
    kitchen: [
      "Deep clean inside oven, refrigerator, and microwave",
      "Remove and clean stovetop grates and drip pans",
      "Clean range hood and replace filters",
      "Wipe inside and outside of all cabinets",
      "Clean dishwasher interior and filter",
      "Descale and sanitize garbage disposal",
      "Clean behind and under appliances",
      "Organize pantry and discard expired items"
    ],
    bathrooms: [
      "Scrub grout and tile surfaces",
      "Deep clean toilet including behind and around base",
      "Clean exhaust fan and vent",
      "Organize medicine cabinet and drawers",
      "Descale showerheads and faucets",
      "Clean mirrors and remove water spots",
      "Deep clean bathroom fixtures and hardware"
    ],
    bedrooms: [
      "Clean window treatments (wash curtains, dust blinds)",
      "Vacuum under beds and furniture",
      "Clean lampshades and light fixtures",
      "Organize drawers and closets",
      "Dust picture frames and artwork",
      "Clean upholstery and mattresses",
      "Wipe down all surfaces and furniture"
    ]
  };

  const TaskSection = ({ title, tasks, icon }: { title: string; tasks: string[]; icon: React.ReactNode }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <div className="mr-3 text-orange-500">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <SeoHead 
        title="What's Included? Standard & Deep Cleaning Task Lists | Bloombrite Michigan"
        description="Complete room-by-room cleaning checklist. Standard vs deep clean comparison. See exactly what's included in our professional cleaning services."
        canonicalPath="/checklist/"
      />
      
      <main>
        {/* Header Banner */}
        <section className="bg-primary text-white -mt-16 pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Room-by-Room Cleaning Checklist: Everything We Clean</h1>
            <p className="text-xl max-w-3xl mx-auto">
              See exactly what's included in our <Link href="/services" className="text-orange-400 hover:text-orange-300 underline">professional cleaning services</Link>. 
              We follow a detailed checklist to ensure every task is completed to perfection.
            </p>
          </div>
        </section>

        {/* Service Types Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Choose Your Cleaning Service</h2>
                <p className="text-lg text-gray-600">
                  Each service type includes specific tasks designed to meet your cleaning needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Standard Cleaning</h3>
                  <p className="text-gray-600 mb-6">
                    Regular maintenance cleaning that keeps your home consistently clean and tidy. 
                    Perfect for weekly, biweekly, or monthly service.
                  </p>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-orange-500">Starting at $160</span>
                    <p className="text-sm text-gray-500">Biweekly service</p>
                  </div>
                  <Link 
                    href="/services/general-cleaning" 
                    className="inline-block mt-4 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                  >
                    View Standard Cleaning Service
                  </Link>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Deep Cleaning</h3>
                  <p className="text-gray-600 mb-6">
                    Comprehensive cleaning that tackles areas not covered in regular cleaning. 
                    Perfect for move-in/out, seasonal cleaning, or getting back on track.
                  </p>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-orange-500">Starting at $250</span>
                    <p className="text-sm text-gray-500">One-time service</p>
                  </div>
                  <Link 
                    href="/services/deep-cleaning" 
                    className="inline-block mt-4 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                  >
                    View Deep Cleaning Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Standard Cleaning Checklist */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Standard Cleaning Checklist</h2>
                <p className="text-lg text-gray-600">
                  Our regular cleaning service includes these essential tasks to maintain your home
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <TaskSection 
                  title="General Tasks" 
                  tasks={standardTasks.general}
                  icon={<FileText className="w-6 h-6" />}
                />
                <TaskSection 
                  title="Kitchen Cleaning" 
                  tasks={standardTasks.kitchen}
                  icon={<FileText className="w-6 h-6" />}
                />
                <TaskSection 
                  title="Bathroom Cleaning" 
                  tasks={standardTasks.bathrooms}
                  icon={<FileText className="w-6 h-6" />}
                />
                <TaskSection 
                  title="Living Areas" 
                  tasks={standardTasks.livingAreas}
                  icon={<FileText className="w-6 h-6" />}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Deep Cleaning Checklist */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Deep Cleaning Checklist</h2>
                <p className="text-lg text-gray-600">
                  Our comprehensive deep cleaning goes beyond standard cleaning to tackle every detail
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <TaskSection 
                  title="Whole House Deep Tasks" 
                  tasks={deepCleaningTasks.wholeHouse}
                  icon={<Star className="w-6 h-6" />}
                />
                <TaskSection 
                  title="Kitchen Deep Cleaning" 
                  tasks={deepCleaningTasks.kitchen}
                  icon={<Star className="w-6 h-6" />}
                />
                <TaskSection 
                  title="Bathroom Deep Cleaning" 
                  tasks={deepCleaningTasks.bathrooms}
                  icon={<Star className="w-6 h-6" />}
                />
                <TaskSection 
                  title="Bedroom & Living Areas" 
                  tasks={deepCleaningTasks.bedrooms}
                  icon={<Star className="w-6 h-6" />}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quality Guarantee */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Quality Guarantee</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Detailed Checklist</h3>
                  <p className="text-gray-600">
                    Every team member follows our comprehensive checklist to ensure consistent quality
                  </p>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">100% Satisfaction</h3>
                  <p className="text-gray-600">
                    If you're not completely satisfied, we'll return to make it right at no charge
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
                  <p className="text-gray-600">
                    Professional, trained staff who arrive on time and complete every task
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
};

export default Checklist;