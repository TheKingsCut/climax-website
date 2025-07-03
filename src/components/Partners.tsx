import { Percent, Diamond, Headphones, Handshake, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Comparison Table */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Comparison</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center font-semibold text-foreground">
                <div className="h-12"></div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-red-600 mb-4">Traditional Separate Systems</h3>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-orange-500 mb-4">Cli-Max Integrated Solution</h3>
              </div>
            </div>
            
            <div className="space-y-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 border-b border-gray-200">
                <div className="font-medium text-foreground">Installation Complexity</div>
                <div className="text-red-600">Multiple systems, complex integration</div>
                <div className="text-orange-500">Single system, simple installation</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 border-b border-gray-200">
                <div className="font-medium text-foreground">Maintenance</div>
                <div className="text-red-600">Multiple service contracts</div>
                <div className="text-orange-500">One comprehensive service</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 border-b border-gray-200">
                <div className="font-medium text-foreground">Energy Efficiency</div>
                <div className="text-red-600">Higher operating costs</div>
                <div className="text-orange-500">Up to 40% savings</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
                <div className="font-medium text-foreground">Control Integration</div>
                <div className="text-red-600">Separate control systems</div>
                <div className="text-orange-500">Unified intelligent control</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Experience the Cli-Max Difference?</h3>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Schedule a Consultation
            </Button>
          </div>
        </div>

        {/* Partner with Cli-Max */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Partner with Cli-Max
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Join our growing network of successful partners and unlock new revenue opportunities in the 
              environmental control market.
            </p>
          </div>

          {/* Partner Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Percent className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">High Margins</h3>
              <p className="text-muted-foreground text-sm">
                20-30% margins on premium European-quality products with strong market demand.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Diamond className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Premium Products</h3>
              <p className="text-muted-foreground text-sm">
                CE-certified, high-quality systems that differentiate you from competitors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Full Support</h3>
              <p className="text-muted-foreground text-sm">
                Training, marketing materials, technical support, and dedicated account management.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Partnership Approach</h3>
              <p className="text-muted-foreground text-sm">
                Long-term relationships built on mutual success and shared expertise.
              </p>
            </div>
          </div>

          {/* Partner Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">HVAC Contractors</h3>
              <p className="text-muted-foreground mb-6">
                Expand your service offerings with integrated environmental control solutions. Perfect for existing 
                HVAC professionals looking to enter specialized markets.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Installation training provided</li>
                <li>• Technical support included</li>
                <li>• Marketing materials supplied</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Consulting Engineers</h3>
              <p className="text-muted-foreground mb-6">
                Specify cutting-edge environmental control technology for your clients. Access technical resources and design 
                support.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Design support available</li>
                <li>• Technical documentation</li>
                <li>• Project consultation</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Equipment Distributors</h3>
              <p className="text-muted-foreground mb-6">
                Add premium European products to your portfolio. Benefit from exclusive territory rights and 
                comprehensive support.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Territory protection</li>
                <li>• Inventory support</li>
                <li>• Sales training programs</li>
              </ul>
            </div>
          </div>

          {/* Partnership Process */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-12">Partnership Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h4 className="font-semibold text-foreground mb-2">Apply</h4>
                <p className="text-sm text-muted-foreground">Submit your application and business information for evaluation.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h4 className="font-semibold text-foreground mb-2">Evaluate</h4>
                <p className="text-sm text-muted-foreground">We assess your market fit and business capabilities.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h4 className="font-semibold text-foreground mb-2">Train</h4>
                <p className="text-sm text-muted-foreground">Complete comprehensive training on products and systems.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
                <h4 className="font-semibold text-foreground mb-2">Launch</h4>
                <p className="text-sm text-muted-foreground">Begin selling with full support and resources.</p>
              </div>
            </div>
          </div>

          {/* Partner Testimonial */}
          <div className="bg-white rounded-lg p-8 mb-16 border-l-4 border-orange-500">
            <Quote className="w-8 h-8 text-orange-500 mb-4" />
            <blockquote className="text-lg italic text-foreground mb-6">
              "Partnering with Cli-Max has been transformational for our business. The premium products and exceptional support have helped us double our revenue in specialized HVAC applications."
            </blockquote>
            <div className="text-right">
              <div className="font-semibold text-foreground">Mark Thompson</div>
              <div className="text-muted-foreground">Technical Solutions Corp</div>
            </div>
          </div>

          {/* Partner Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-muted-foreground">Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">28%</div>
              <div className="text-muted-foreground">Average Margin</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">800+</div>
              <div className="text-muted-foreground">Installations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">99%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>

          {/* Partner CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Apply for Partnership
              </Button>
              <Button variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white px-8 py-3">
                Download Partner Information
              </Button>
            </div>
            <p className="text-muted-foreground">
              Questions? Call us at <span className="text-orange-500 font-semibold">+27 11 123 4567</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;