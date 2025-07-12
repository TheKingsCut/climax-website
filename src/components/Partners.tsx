import { Percent, Diamond, Headphones, Handshake, Quote, Settings, Wrench, Zap, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Comparison Table */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">System Comparison</h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center font-semibold text-foreground">
                <div className="h-16 flex items-center justify-center">
                  <span className="text-lg font-bold">Comparison Factor</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
                  <h3 className="font-bold text-red-700 text-lg">Traditional Separate Systems</h3>
                  <p className="text-red-600 text-sm mt-1">Complex & Costly</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4 border-2 border-orange-200">
                  <h3 className="font-bold text-orange-700 text-lg">Cli-Max Integrated Solution</h3>
                  <p className="text-orange-600 text-sm mt-1">Smart & Efficient</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 font-semibold text-foreground">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Settings className="w-5 h-5 text-blue-600" />
                  </div>
                  <span>Installation Complexity</span>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-red-700 font-medium">
                  Multiple systems, complex integration
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-orange-700 font-medium">
                  Single system, simple installation
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 font-semibold text-foreground">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-green-600" />
                  </div>
                  <span>Maintenance</span>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-red-700 font-medium">
                  Multiple service contracts
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-orange-700 font-medium">
                  One comprehensive service
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 font-semibold text-foreground">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-yellow-600" />
                  </div>
                  <span>Energy Efficiency</span>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-red-700 font-medium">
                  Higher operating costs
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-orange-700 font-medium">
                  Up to 40% energy savings
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 font-semibold text-foreground">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-purple-600" />
                  </div>
                  <span>Control Integration</span>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-red-700 font-medium">
                  Separate control systems
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-orange-700 font-medium">
                  Unified intelligent control
                </div>
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
              "As the lead grower of a major cannabis facility, maintaining optimal temperature, humidity, and air quality is critical to our productivity and the overall health of our plants. Since installing four Cli-Max units, we've seen a remarkable improvement in climate control, enabling perfect conditions for indoor cultivation while supporting our commitment to sustainability. Cli-Max's advanced technology keeps temperatures stable during high heat and throughout the day/night cycle, including lights-off periods, with peak fluctuations in humidity and temperature kept to a minimum. The system stabilizes quickly within 30 minutes of cycle changes, and flexible ducting ensures even airflow across the canopy, preventing microclimates. Not only do the units operate quietly, minimizing distractions for our team, but the installation was smooth, and the support from Grow Pro has been exceptional. I highly recommend Cli-Max for any business looking to enhance their work environment and realize cost savings."
            </blockquote>
            <div className="text-right">
              <div className="font-semibold text-foreground">W. A. van Rooyen</div>
              <div className="text-muted-foreground">Lead Grower, CEN Cultures</div>
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