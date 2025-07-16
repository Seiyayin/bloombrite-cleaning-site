import { useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import SeoHead from '@/components/shared/SeoHead';
import { useLocation, Link } from 'wouter';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Valid email address is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [, setLocation] = useLocation();

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log('Contact form submitted:', data);
    setLocation('/thank-you');
  };

  return (
    <>
      <SeoHead 
        title="Contact Us | Bloombrite Cleaning Michigan"
        description="Contact Bloombrite Cleaning for professional residential and commercial cleaning services in Wixom, Novi, Livonia, Milford, Commerce Township, Farmington Hills, South Lyon, and Walled Lake. Get a free quote, schedule a cleaning, or ask about our satisfaction guarantee."
      />
      
      <main>
        {/* Contact Banner */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Have questions about our <Link href="/services" className="text-white hover:text-accent underline">cleaning services</Link> or ready to book? We serve <Link href="/locations" className="text-white hover:text-accent underline">Michigan communities</Link> with professional residential and commercial cleaning. Get your <Link href="/quote" className="text-white hover:text-accent underline">free quote</Link> today.
            </p>
          </div>
        </section>
        
        {/* Contact Information & Form */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary-light p-3 rounded-full text-primary">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">Our Office</h3>
                        <p className="text-neutral-600 mt-1">123 Clean Street<br />Wixom, MI 48393</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary-light p-3 rounded-full text-primary">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-neutral-600 mt-1">
                          <a href="tel:9474654217" className="hover:text-primary">(947) 465-4217</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary-light p-3 rounded-full text-primary">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-neutral-600 mt-1">
                          <a href="mailto:info@bloombritecleaning.com" className="hover:text-primary">info@bloombritecleaning.com</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary-light p-3 rounded-full text-primary">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">Business Hours</h3>
                        <div className="text-neutral-600 mt-1">
                          <p>Monday-Friday: 8AM-6PM</p>
                          <p>Saturday: 9AM-4PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <h3 className="font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://www.facebook.com/bloombritecleaning" className="bg-neutral-100 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.instagram.com/bloombritecleaning" className="bg-neutral-100 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://twitter.com/bloombriteclean" className="bg-neutral-100 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/bloombrite-cleaning" className="bg-neutral-100 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="(947) 465-4217" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="Inquiry about services" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="How can we help you?" 
                                rows={6} 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-md transition"
                      >
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Location Map */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
            
            <div className="bg-neutral-50 p-4 rounded-lg shadow-md">
              <div className="rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.4795262730494!2d-83.535!3d42.525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824a6c3fd421d93%3A0xd5705a7c5e9a88ea!2sWixom%2C%20MI%2048393!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="BloomBrite Cleaning Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
