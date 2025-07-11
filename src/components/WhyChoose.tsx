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
            More than just environmental control – we deliver complete solutions backed by European 
            engineering and local expertise.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <img 
                src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Quality_Badge_01.gif" 
                alt="European Quality Badge" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">European Quality</h3>
            <p className="text-muted-foreground text-sm">
              CE certification, European engineering standards, and full regulatory compliance for 
              demanding applications.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Energy Efficiency</h3>
            <p className="text-muted-foreground text-sm">
              Up to 40% energy savings with inverter technology and intelligent control systems.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Headphones className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Local Support</h3>
            <p className="text-muted-foreground text-sm">
              South African technical team providing 24/7 service, maintenance, and training support.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Proven Results</h3>
            <p className="text-muted-foreground text-sm">
              R8 million in successful installations across diverse industries and applications.
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
                "The Cli-Max system transformed our meat curing operation. Precise humidity control has reduced our waste by 50% and improved product quality significantly. The ROI was achieved in just 18 months."
              </blockquote>
              <div className="text-right">
                <div className="font-semibold text-foreground">Johan Steyn</div>
                <div className="text-muted-foreground">Premium Biltong Co.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">99%</div>
            <div className="text-muted-foreground">Humidity Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">50%</div>
            <div className="text-muted-foreground">Waste Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-muted-foreground">Monitoring</div>
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