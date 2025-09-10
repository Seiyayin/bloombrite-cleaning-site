import { CheckCircle, FileText, Star } from 'lucide-react';

interface ServiceChecklistProps {
  serviceType: 'standard' | 'deep';
}

const ServiceChecklist = ({ serviceType }: ServiceChecklistProps) => {
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
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="mr-3 text-orange-500">{icon}</div>
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 text-sm">{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const title = serviceType === 'standard' ? 'Standard Cleaning Checklist' : 'Deep Cleaning Checklist';
  const subtitle = serviceType === 'standard' 
    ? 'Our regular cleaning service includes these essential tasks' 
    : 'Our comprehensive deep cleaning covers these detailed tasks';

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{subtitle}</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {serviceType === 'standard' ? (
          <>
            <TaskSection 
              title="General Tasks" 
              tasks={standardTasks.general}
              icon={<FileText className="w-5 h-5" />}
            />
            <TaskSection 
              title="Kitchen Cleaning" 
              tasks={standardTasks.kitchen}
              icon={<FileText className="w-5 h-5" />}
            />
            <TaskSection 
              title="Bathroom Cleaning" 
              tasks={standardTasks.bathrooms}
              icon={<FileText className="w-5 h-5" />}
            />
            <TaskSection 
              title="Living Areas" 
              tasks={standardTasks.livingAreas}
              icon={<FileText className="w-5 h-5" />}
            />
          </>
        ) : (
          <>
            <TaskSection 
              title="Whole House Deep Tasks" 
              tasks={deepCleaningTasks.wholeHouse}
              icon={<Star className="w-5 h-5" />}
            />
            <TaskSection 
              title="Kitchen Deep Cleaning" 
              tasks={deepCleaningTasks.kitchen}
              icon={<Star className="w-5 h-5" />}
            />
            <TaskSection 
              title="Bathroom Deep Cleaning" 
              tasks={deepCleaningTasks.bathrooms}
              icon={<Star className="w-5 h-5" />}
            />
            <TaskSection 
              title="Bedroom & Living Areas" 
              tasks={deepCleaningTasks.bedrooms}
              icon={<Star className="w-5 h-5" />}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceChecklist;