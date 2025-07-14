import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Partners = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Comparison Table */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">System Comparison</h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="font-semibold text-foreground">
                <div className="h-16 flex items-center">
                  <span className="text-lg font-bold">Comparison Factor</span>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-lg p-4 border-2 border-black h-16 flex flex-col justify-center items-start">
                  <h3 className="font-bold text-black text-lg">Traditional Separate Systems</h3>
                  <p className="text-black text-sm">Complex & Costly</p>
                </div>
              </div>
              <div>
                <div className="bg-primary rounded-lg p-4 h-16 flex flex-col justify-center items-start">
                  <h3 className="font-bold text-white text-lg">Cli-Max Integrated Solution</h3>
                  <p className="text-white text-sm">Smart & Efficient</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 font-semibold text-foreground">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <img src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Instilation_Complexity_01.gif" alt="Installation Complexity" className="w-12 h-12" />
                    </div>
                    <span>Installation Complexity</span>
                  </div>
                <div className="bg-gray-100 p-4 rounded-lg text-gray-700 font-medium">
                  Four separate units + field piping
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-orange-700 font-medium">
                  All-in-one package; power, water, CAT-5—1-day commission
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 font-semibold text-foreground">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <img src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Maintenance_01.gif" alt="Maintenance" className="w-12 h-12" />
                    </div>
                    <span>Maintenance</span>
                  </div>
                <div className="bg-gray-100 p-4 rounded-lg text-gray-700 font-medium">
                  Multiple contracts & spares
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-orange-700 font-medium">
                  Single vendor & cloud diagnostics
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 font-semibold text-foreground">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <img src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Energy_Efficency_02.gif" alt="Energy Efficiency" className="w-12 h-12" />
                    </div>
                    <span>Energy Efficiency</span>
                  </div>
                <div className="bg-gray-100 p-4 rounded-lg text-gray-700 font-medium">
                  Duplicate compressors + heaters
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-orange-700 font-medium">
                  Up to 40–60 % kWh savings
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 font-semibold text-foreground">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <img src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Control_Integration_01.gif" alt="Control Integration" className="w-12 h-12" />
                    </div>
                    <span>Control Integration</span>
                  </div>
                <div className="bg-gray-100 p-4 rounded-lg text-gray-700 font-medium">
                  Separate PLCs & thermostats
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-orange-700 font-medium">
                  Unified Siemens PLC with Modbus/TCP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation CTA - Centered Section */}
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Experience the Cli-Max Difference?</h3>
          <Button 
            onClick={scrollToContact}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </Button>
        </div>

        {/* Partner with Cli-Max */}
        <div id="partner-with-cli-max" className="scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Partner with Cli-Max
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Become a Cli-Max partner and open the door to fresh, high-margin revenue in precision climate control.
            </p>
          </div>

          {/* Partner Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/High_Margins_01.gif" alt="High Margins" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">High Margins</h3>
              <p className="text-muted-foreground text-sm">
                20–35 % dealer margin
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Premium_Products_01.gif" alt="Premium Products" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Premium Products</h3>
              <p className="text-muted-foreground text-sm">
                CE-certified, low-GWP units
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Full_Support_01.gif" alt="Full Support" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Full Support</h3>
              <p className="text-muted-foreground text-sm">
                AI-assisted 24 / 7 phone-line to HQ, remote commissioning, parts hubs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Partnership_Approach_01.gif" alt="Partnership Approach" className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Partnership Approach</h3>
              <p className="text-muted-foreground text-sm">
                exclusivity, co-marketing, QBRs
              </p>
            </div>
          </div>

          {/* Partner Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">HVAC Contractors</h3>
              <p className="text-base text-muted-foreground mb-6">
                Grow your revenue with an all-in-one climate package that drops into place faster than any multi-vendor stack.
              </p>
              <ul className="text-base text-muted-foreground space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  <span>40 % faster installs – one pre-charged unit instead of four separate coils, pumps and ducts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  <span>Factory training + live co-install on your first project, then AI 24 / 7 phone support for every job after that.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  <span>Qualified Cli-Max leads sent straight to certified contractors in your territory.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Consulting Engineers</h3>
              <p className="text-base text-muted-foreground mb-6">
                Win bids with a spec that slashes plant-room space, meets 2030 F-Gas rules and boosts system COP.
              </p>
              <ul className="text-base text-muted-foreground space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  <span>BIM/Revit families, load-calc sheets and editable CSI specs ready to drop into your drawing set.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  <span>Direct line to Cli-Max design engineers for atypical footprints or high latent loads—no gatekeepers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  <span>CPD-eligible webinars on VPD, low-GWP refrigerants and integrated climate control (ECSA accreditation pending).</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Equipment Distributors</h3>
              <p className="text-base text-muted-foreground mb-6">
                Add a premium European-engineered brand without tying up capital in slow-moving stock.
              </p>
              <ul className="text-base text-muted-foreground space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  <span>Factory-direct shipments—door-to-door lead time 4–6 weeks; critical spares held locally for &lt; 48 h dispatch.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  <span>Exclusive territory rights plus sales-incentive rebates and joint marketing funds for trade shows & digital campaigns.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1">•</span>
                  <span>High-margin consumables (filters, pads, probes) create steady repeat sales after each install.</span>
                </li>
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
                <p className="text-sm text-muted-foreground">Factory training + live co-install on your first project, then AI 24/7 phone support for every job after that.</p>
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
              <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">Answer in <span className="tracking-tighter">20sec</span></div>
              <div className="text-muted-foreground">AI voice agent picks up now—escalates to a human only if you need one.</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">First-install on us</div>
              <div className="text-muted-foreground">We co-commission your debut project (remote or on-site) at no extra cost.</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2"><span className="tracking-tighter">30-day</span> pledge</div>
              <div className="text-muted-foreground">If the unit can't hold spec in the first month, we fix it at our expense.</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2"><span className="tracking-tighter">48h</span> parts promise</div>
              <div className="text-muted-foreground">Critical spares leave our SA stockroom within two business days—or shipping is free.</div>
            </div>
          </div>

          {/* Partner CTA */}
          <div className="text-center">
            <div className="text-center mb-4">
              <Button 
                onClick={scrollToContact}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 transition-all duration-300 transform hover:scale-105"
              >
                Apply for Partnership
              </Button>
            </div>
            <p className="text-muted-foreground">
              Questions? WhatsApp us on <a href="https://wa.me/27647576648" target="_blank" rel="noopener noreferrer" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">+27 (64) 757 6648</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;