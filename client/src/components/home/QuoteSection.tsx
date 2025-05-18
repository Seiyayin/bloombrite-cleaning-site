import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

const quoteFormSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Valid email address is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  service: z.string().min(1, 'Please select a service'),
  location: z.string().min(1, 'Please select your location'),
  message: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

const QuoteSection = () => {
  const [, setLocation] = useLocation();

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      location: '',
      message: '',
    },
  });

  const onSubmit = (data: QuoteFormValues) => {
    console.log('Quote request submitted:', data);
    setLocation('/thank-you');
  };

  return (
    <section id="get-quote" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 bg-primary text-white">
              <h2 className="text-3xl font-bold mb-6">Get a Personalized Quote</h2>
              <p className="mb-6">
                Fill out our quick form to receive a customized quote for your cleaning needs. We'll provide a detailed estimate based on your specific requirements.
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
              <div className="mt-8 bg-primary-dark p-4 rounded-md">
                <p className="font-semibold">For immediate assistance:</p>
                <div className="flex items-center mt-2">
                  <i className="fas fa-phone mr-2"></i>
                  <a href="tel:1234567890" className="hover:underline">(123) 456-7890</a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-6">Your Information</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.id} value={service.id}>
                                {service.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your location..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {locations.map((location) => (
                              <SelectItem key={location.id} value={location.id}>
                                {location.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide any specific requirements or questions..." 
                            rows={3} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="mt-6 w-full px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-md transition shadow-sm"
                  >
                    Submit Quote Request
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
