import { MapPin, Phone, Mail, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Optimize Your Environment?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Get in touch with our technical team for expert consultation and customized solutions for your 
            specific application requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-6">Request Free Consultation</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company" className="text-foreground">Company Name</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+27 11 123 4567"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="industry" className="text-foreground">Industry/Application</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
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
              </div>

              <div>
                <Label htmlFor="details" className="text-foreground">Project Details</Label>
                <Textarea
                  id="details"
                  rows={4}
                  placeholder="Tell us about your project requirements, space size, and specific needs..."
                  className="mt-1"
                />
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                We'll reply to your message within 24 hours.
              </p>
            </form>
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
                      <p className="text-muted-foreground">Johannesburg, South Africa</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-6">Operations</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-orange-500" />
                    <div>
                      <h4 className="font-semibold text-foreground">Courtney Mckay</h4>
                      <p className="text-sm text-muted-foreground">Operations Manager</p>
                      <p className="text-sm text-orange-500">courtney@cli-max.co.za</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-6">Quick Response Promise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Reply to your message within 24 hours</li>
                  <li>• Technical consultation within 48 hours of first contact</li>
                  <li>• Detailed proposal within 72 hours of Technical Consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;