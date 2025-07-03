import { Button } from "@/components/ui/button";
import unitImage from "@/assets/unit-image-10.png";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              ENVIRONMENTAL
              <br />
              <span className="text-foreground">CONTROL SYSTEMS</span>
            </h1>
            
            <h2 className="text-2xl text-primary font-semibold mb-8">
              HVAC Solutions for Every Application
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Professional-grade environmental control systems that combine heating, cooling, and 
              dehumidification in one integrated solution. European quality with local South African 
              support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToAbout}
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
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">R8M</div>
                <div className="text-sm text-muted-foreground">Proven Sales</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">CE</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div className="bg-white rounded-lg p-8 relative">
              {/* Video Container */}
              <div className="bg-white rounded-lg shadow-lg relative aspect-video">
                <video 
                  className="w-full h-full object-contain rounded"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/path-to-your-360-video.mp4" type="video/mp4" />
                  {/* Fallback image */}
                  <img 
                    src={unitImage} 
                    alt="Cli-Max Environmental Control System" 
                    className="w-full h-full object-contain rounded"
                  />
                </video>
                {/* Quality badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Pills - Moved from About section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Precision Heating */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Precision Heating</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Advanced heating technology maintains exact temperature control for optimal environmental conditions.
            </p>
            <div className="bg-primary/5 rounded-lg p-2">
              <div className="text-primary font-semibold text-sm">5°C to 40°C Range</div>
            </div>
          </div>

          {/* Efficient Cooling */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Efficient Cooling</h3>
            <p className="text-sm text-muted-foreground mb-3">
              High-performance cooling system with intelligent load management for stable temperatures.
            </p>
            <div className="bg-primary/5 rounded-lg p-2">
              <div className="text-primary font-semibold text-sm">7-60 kW Range</div>
            </div>
          </div>

          {/* Smart Dehumidification */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Smart Dehumidification</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Integrated moisture control prevents humidity fluctuations that damage sensitive products.
            </p>
            <div className="bg-primary/5 rounded-lg p-2">
              <div className="text-primary font-semibold text-sm">32% RH Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;