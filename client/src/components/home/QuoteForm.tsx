import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// Removed unnecessary import

// Form validation schema
const quoteFormSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  phone: z.string().min(10, { message: 'Valid phone number is required' }),
  service: z.string().min(1, { message: 'Please select a service' }),
  address: z.string().min(5, { message: 'Address is required' }),
  city: z.string().min(2, { message: 'City is required' }),
  zip: z.string().min(5, { message: 'Valid ZIP code is required' }),
  message: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema)
  });

  const services = [
    'General Cleaning',
    'Deep Cleaning',
    'Move-In/Out Cleaning',
    'Weekly Cleaning Service',
    'Biweekly Cleaning Service', 
    'Monthly Cleaning Service',
    'Recurring Cleaning',
    'Office Cleaning',
    'Post-Construction Cleaning',
    'Airbnb Cleaning',
    'Other'
  ];

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Submit the form data to your backend
      const response = await fetch('/api/quote', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit quote request');
      }
      
      // Show success message
      setSubmitSuccess(true);
      reset(); // Clear the form
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting quote form:', error);
      setSubmitError('There was a problem submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="font-medium">Success!</h3>
              <p className="mt-1 text-sm">Your quote request has been submitted. We'll get back to you within an hour with a detailed quote.</p>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Error</h3>
                  <p className="mt-1 text-sm">{submitError}</p>
                </div>
              </div>
            </div>
          )}
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={`w-full px-4 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`w-full px-4 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className={`w-full px-4 py-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
              <select
                id="service"
                {...register('service')}
                className={`w-full px-4 py-2 border rounded-md ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
            </div>
            
            {/* Service Address */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-3 mt-4">Service Address</h3>
            </div>
            
            <div className="col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Street Address *</label>
              <input
                type="text"
                id="address"
                {...register('address')}
                className={`w-full px-4 py-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
            </div>
            
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City *</label>
              <input
                type="text"
                id="city"
                {...register('city')}
                className={`w-full px-4 py-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
            </div>
            
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code *</label>
              <input
                type="text"
                id="zip"
                {...register('zip')}
                className={`w-full px-4 py-2 border rounded-md ${errors.zip ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.zip && <p className="mt-1 text-sm text-red-600">{errors.zip.message}</p>}
            </div>
            
            {/* Preferred Schedule */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-3 mt-4">Preferred Schedule (Optional)</h3>
            </div>
            
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
              <input
                type="date"
                id="preferredDate"
                {...register('preferredDate')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
              <select
                id="preferredTime"
                {...register('preferredTime')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select a time</option>
                <option value="Morning (8am-12pm)">Morning (8am-12pm)</option>
                <option value="Afternoon (12pm-4pm)">Afternoon (12pm-4pm)</option>
                <option value="Evening (4pm-8pm)">Evening (4pm-8pm)</option>
              </select>
            </div>
            
            {/* Additional Information */}
            <div className="col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
              <textarea
                id="message"
                {...register('message')}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Please share any additional details or specific requests..."
              ></textarea>
            </div>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-opacity-90 transition shadow-md disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default QuoteForm;