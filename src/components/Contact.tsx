import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, User, MessageCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().optional(),
  reason: z.string().min(1, "Please select a reason for contact"),
  industry: z.string().min(1, "Industry application is required"),
  projectDetails: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      reason: '',
      industry: '',
      projectDetails: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error: any) {
      console.error('Error sending contact form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Reach out to our tech team—tell us your challenge, and we'll craft a climate-control solution built just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            className="mt-1"
                            {...field}
                          />
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
                        <FormLabel className="text-foreground">Email Address *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@company.com"
                            className="mt-1"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Company Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your company name"
                            className="mt-1"
                            {...field}
                          />
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
                        <FormLabel className="text-foreground">Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+27 11 123 4567"
                            className="mt-1"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Reason for Contact *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="How can we help?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="quote">Quote Request</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="information">More Information</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Industry/Application *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="meat-processing">Meat Processing</SelectItem>
                          <SelectItem value="food-beverage">Food & Beverage</SelectItem>
                          <SelectItem value="pharmaceuticals">Pharmaceuticals</SelectItem>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="textiles">Textiles</SelectItem>
                          <SelectItem value="agriculture">Agriculture</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Project Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Tell us about your project requirements, space size, and specific needs..."
                          className="mt-1"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 transition-all duration-300 transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  We'll reply to your message within 24 hours.
                </p>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-orange-500">
                    <Phone className="w-5 h-5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+27 (64) 757 6648</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-orange-500">
                    <Mail className="w-5 h-5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">hello@cli-max.co.za</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-orange-500">
                    <MapPin className="w-5 h-5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">8 Hillside Road, Parktown, Gauteng 2193</p>
                    </div>
                  </div>

                  <a href="https://wa.me/27647576648" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-orange-500 hover:text-orange-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <div>
                      <h4 className="font-semibold text-foreground">WhatsApp</h4>
                      <p className="text-muted-foreground">+27 (64) 757 6648</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-6">Operations</h3>
                
                <div className="space-y-4">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <img 
                      src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/TEAM%20/Courtney_BW_01.jpg"
                      alt="Courtney Mckay"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">Courtney Mckay</h4>
                      <p className="text-sm text-muted-foreground">Operations Manager</p>
                      <p className="text-sm text-orange-500">courtney@cli-max.co.za</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-6">Company Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-foreground">Cli-Max</strong> is a division of <strong className="text-foreground">GrowPro (Pty) Ltd</strong></p>
                  <p>Company Registration: 2022/781791/07</p>
                  <p>8 Hillside Road, Parktown, Gauteng 2193</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;