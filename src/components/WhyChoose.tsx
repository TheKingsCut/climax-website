import { Award, Zap, Headphones, TrendingUp, Quote } from "lucide-react";

const WhyChoose = () => {
  return (
    <section className="pt-8 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Cli-Max?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            More than just environmental control – we deliver complete solutions Built to CE-certified European standards and backed by local support.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <img 
                src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Quality_Badge_01.gif" 
                alt="European Quality Badge" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">European Quality</h3>
            <p className="text-muted-foreground text-sm">
              CE-certified engineering with low-GWP HFO-1234yf refrigerant.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <img 
                src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Energy_Effeciency_01.gif" 
                alt="Energy Efficiency" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Energy Efficiency</h3>
            <p className="text-muted-foreground text-sm">
              Up to 80 % energy savings with FAO-2 fresh-air modules; water-cooled PRO5 delivers EER &gt; 4.5.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <img 
                src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Local_Support_01.gif" 
                alt="Local Support" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Local Support</h3>
            <p className="text-muted-foreground text-sm">
              South-African technical team providing 24 / 7 service, maintenance and training.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <img 
                src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Proven_Results_01.gif" 
                alt="Proven Results" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Proven Results</h3>
            <p className="text-muted-foreground text-sm">
              6 000 + systems operating worldwide in CEA facilities.
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-lg p-8 mb-16 relative">
          <div className="flex items-start gap-6">
            <div className="w-1 bg-orange-500 rounded-full h-24 flex-shrink-0"></div>
            <div className="flex-1">
              <Quote className="w-8 h-8 text-orange-500 mb-4" />
              <blockquote className="text-lg italic text-foreground mb-6">
                "As a Director of Hydro Crop (PTY) Ltd I am pleased to provide Grow Pro a product testimonial based on our review and recent order of Cli-MAX climate control units. Hydro Crop is a SAHPRA licensed cannabis cultivation facility located in the Vaal Dam area, currently undergoing an extensive refit and upgrade. We have reviewed the Cli-MAX technology and performance, including inspecting the units in operation in a commercial indoor cannabis grow. I personally have been active in the South African cannabis industry since inception and confirm we as a business are convinced with Cli-MAX both on performance and value for money. Finally, in addition to the technical performance and value for money a key factor has been the deep understanding of cannabis cultivation by the Grow Pro team. Their ability to support Hydro Crop and correctly specify Cli-MAX units for stable and optimal cultivation has given us a high degree of confidence for our facility upgrade. We look forward to our Cli-MAX units arriving in South Africa and updating this testimonial once we are in production."
              </blockquote>
              <div className="text-right">
                <div className="font-semibold text-foreground">Greg da Costa</div>
                <div className="text-muted-foreground">Director, Hydro Crop (PTY) Ltd.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">±2% RH</div>
            <div className="text-muted-foreground">Humidity Stability</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">15%</div>
            <div className="text-muted-foreground">Yield Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">AI 24/7</div>
            <div className="text-muted-foreground">support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">18mo</div>
            <div className="text-muted-foreground">ROI Period</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;