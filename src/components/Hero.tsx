import { Button } from "@/components/ui/button";

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

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8 relative">
              {/* Product mockup */}
              <div className="bg-white rounded-lg shadow-lg p-6 relative">
                <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center relative">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">CLI-MAX</span>
                  </div>
                  {/* Control panel mockup */}
                  <div className="absolute top-4 right-4 w-16 h-12 bg-gray-800 rounded text-white text-xs flex items-center justify-center">
                    Display
                  </div>
                </div>
                {/* Quality badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              
              {/* Info callouts */}
              <div className="absolute -right-8 top-8 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <h4 className="font-semibold mb-2">European Quality</h4>
                <p className="text-sm text-muted-foreground">
                  One system, three functions. Let me show you how it works!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;