import { Button } from "@/components/ui/button";
import unitImage from "@/assets/unit-image-10.png";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      const offsetTop = element.offsetTop - 200; // Account for sticky header and product nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Centered Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            ENVIRONMENTAL
            <br />
            <span className="text-foreground">CONTROL SYSTEMS</span>
          </h1>
          
          <h2 className="text-2xl text-primary font-semibold mb-8">
            HVAC engineered for controlled-environment agriculture
          </h2>
        </div>

        {/* Central Video */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-4xl">
            <div className="relative aspect-video">
              <video 
                className="w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/RENDERS/CLIMAX-360/CLIMAX_360_01.webm" type="video/webm" />
                {/* Fallback image */}
                <img 
                  src={unitImage} 
                  alt="Cli-Max Environmental Control System" 
                  className="w-full h-full object-contain"
                />
              </video>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            One System. Three Functions. Zero Compromise.
          </h2>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Precision Heating */}
          <div className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-primary/15 cursor-pointer">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <img 
                src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Precision_Heating_01.gif" 
                alt="Precision Heating" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Integrated Heating</h3>
            <p className="text-sm text-muted-foreground mb-3">
              electric or heat-pump heating delivered through the same coil set.
            </p>
          </div>

          {/* Efficient Cooling */}
          <div className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-primary/15 cursor-pointer">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <img 
                src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Efficient_Cooling_01.gif" 
                alt="Efficient Cooling" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Efficient Cooling</h3>
            <p className="text-sm text-muted-foreground mb-3">
              water-cooled EER &gt; 4.5 for class-leading kWh/BTU performance.
            </p>
          </div>

          {/* Smart Dehumidification */}
          <div className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-primary/15 cursor-pointer">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <img 
                src="https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Smart_Dehumidification_01.gif" 
                alt="Smart Dehumidification" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Smart Dehumidification</h3>
            <p className="text-sm text-muted-foreground mb-3">
              moisture removal with free hot-water recovery for reuse.
            </p>
          </div>
        </div>


        {/* Description and CTAs */}
        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            We know—it's basically a big, plain white box. Not exactly showroom art. But inside that sheet-metal slab is a climate-control tank: inverter compressors, bullet-proof coils and a brain that holds temp and humidity steady while sipping power. We run these units in our own facilities because, when crops and product quality are on the line, pretty finishes don't pay the bills—reliability does.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToProducts}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-lg font-semibold"
            >
              LEARN MORE
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white px-8 py-3 text-lg font-semibold"
            >
              GET QUOTE
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-0">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">60 %</div>
              <div className="text-sm text-muted-foreground">Energy Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">R8M</div>
              <div className="text-sm text-muted-foreground">SA Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">±0.5°C</div>
              <div className="text-sm text-muted-foreground">Temp Precision</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;