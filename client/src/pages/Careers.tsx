import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import SeoHead from '@/components/shared/SeoHead';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const employeeApplicationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  address: z.string().min(5, 'Please enter your full address'),
  city: z.string().min(2, 'Please enter your city'),
  state: z.string().min(2, 'Please enter your state'),
  zipCode: z.string().min(5, 'Please enter a valid zip code'),
  experience: z.enum(['none', '1-2-years', '3-5-years', '5plus-years'], {
    required_error: 'Please select your experience level'
  }),
  previousCleaning: z.string().optional(),
  availability: z.enum(['full-time', 'part-time', 'weekends', 'flexible'], {
    required_error: 'Please select your availability'
  }),
  transportation: z.boolean(),
  backgroundCheck: z.boolean(),
  references: z.string().optional(),
  whyJoin: z.string().min(50, 'Please tell us more about why you want to join our team (at least 50 characters)'),
  additionalInfo: z.string().optional()
});

type EmployeeApplicationForm = z.infer<typeof employeeApplicationSchema>;

const Careers = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<EmployeeApplicationForm>({
    resolver: zodResolver(employeeApplicationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      previousCleaning: '',
      references: '',
      whyJoin: '',
      additionalInfo: '',
      transportation: false,
      backgroundCheck: false
    }
  });



  const onSubmit = async (data: EmployeeApplicationForm) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/employee-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted Successfully!",
          description: "Thank you for your interest in joining our team. We'll review your application and get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SeoHead 
        title="Join Our Team - Career Opportunities | Bloombrite Cleaning"
        description="Join the Bloombrite Cleaning team! We're hiring experienced cleaning professionals in Michigan. Apply now for house cleaning jobs with competitive pay and flexible schedules."
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-orange-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Professional Cleaning Team
              </h1>
              <p className="text-xl mb-8">
                Be part of Michigan's premier residential cleaning services company. We offer competitive pay, flexible schedules, and a supportive work environment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-dollar-sign text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Competitive Pay</h3>
                  <p className="text-white/90">Earn good wages with opportunities for raises and bonuses</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-clock text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
                  <p className="text-white/90">Work hours that fit your lifestyle and commitments</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-users text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Supportive Team</h3>
                  <p className="text-white/90">Join a friendly, professional team that values your contribution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Work With Bloombrite Cleaning?</h2>
              <p className="text-xl text-gray-600">Discover the benefits of joining our cleaning team</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <i className="fas fa-shield-alt text-primary text-3xl mb-4"></i>
                <h3 className="font-semibold text-lg mb-2">Job Security</h3>
                <p className="text-gray-600">Steady work with a growing company and loyal customer base</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <i className="fas fa-graduation-cap text-primary text-3xl mb-4"></i>
                <h3 className="font-semibold text-lg mb-2">Training Provided</h3>
                <p className="text-gray-600">Complete training on professional cleaning techniques and safety</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <i className="fas fa-car text-primary text-3xl mb-4"></i>
                <h3 className="font-semibold text-lg mb-2">Transportation</h3>
                <p className="text-gray-600">Travel between client locations as part of your work day</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <i className="fas fa-heart text-primary text-3xl mb-4"></i>
                <h3 className="font-semibold text-lg mb-2">Job Satisfaction</h3>
                <p className="text-gray-600">Make a difference in people's lives with quality cleaning services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Apply to Join Our Team</h2>
                <p className="text-xl text-gray-600">
                  Fill out the application below and we'll review your information within 24-48 hours.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your first name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your last name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} />
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
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="(123) 456-7890" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Address Information */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">Address Information</h3>
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Street Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main Street" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City *</FormLabel>
                              <FormControl>
                                <Input placeholder="Wixom" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State *</FormLabel>
                              <FormControl>
                                <Input placeholder="MI" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="zipCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Zip Code *</FormLabel>
                              <FormControl>
                                <Input placeholder="48393" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Work Experience */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">Work Experience</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Cleaning Experience *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your experience level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="none">No professional experience</SelectItem>
                                  <SelectItem value="1-2-years">1-2 years</SelectItem>
                                  <SelectItem value="3-5-years">3-5 years</SelectItem>
                                  <SelectItem value="5plus-years">5+ years</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="availability"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Availability *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your availability" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="full-time">Full-time (40+ hours/week)</SelectItem>
                                  <SelectItem value="part-time">Part-time (20-30 hours/week)</SelectItem>
                                  <SelectItem value="weekends">Weekends only</SelectItem>
                                  <SelectItem value="flexible">Flexible schedule</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="previousCleaning"
                        render={({ field }) => (
                          <FormItem className="mt-4">
                            <FormLabel>Previous Cleaning Experience (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your previous cleaning experience, including any specialized training or certifications..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Requirements */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">Requirements</h3>
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="transportation"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  I have reliable transportation and a valid driver's license
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="backgroundCheck"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  I am able to pass a background check and drug screening
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* References and Additional Info */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">Additional Information</h3>
                      <FormField
                        control={form.control}
                        name="references"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>References (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please provide contact information for 2-3 professional references..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="whyJoin"
                        render={({ field }) => (
                          <FormItem className="mt-4">
                            <FormLabel>Why do you want to join our cleaning team? *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us why you're interested in working with Bloombrite Cleaning and what you would bring to our team..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem className="mt-4">
                            <FormLabel>Additional Information (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any additional information you'd like us to know about your application..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-orange-600 text-white font-bold text-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <i className="fas fa-spinner fa-spin mr-2"></i>
                            Submitting Application...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane mr-2"></i>
                            Submit Application
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Questions About Employment?</h2>
              <p className="text-xl text-gray-600 mb-8">
                If you have any questions about working with Bloombrite Cleaning, feel free to contact us directly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <i className="fas fa-phone text-primary text-2xl mb-2"></i>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-600">(947) 465-4217</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-envelope text-primary text-2xl mb-2"></i>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-600">info@bloombritecleaning.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Careers;