import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-12rem)]">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Environmental</span>
              <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Control Systems
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Professional climate control solutions for industrial, commercial, and specialized environments. 
              Precision engineering meets reliability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToProducts}
                size="lg" 
                className="touch-target bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 text-lg smooth-transition"
              >
                Explore Products
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg" 
                className="touch-target border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg smooth-transition"
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <Card className="glass p-6 border-0">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">24/7</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Always On</h3>
                <p className="text-white/80 text-sm">Continuous monitoring and support</p>
              </div>
            </Card>

            <Card className="glass p-6 border-0">
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">±1°</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Precision</h3>
                <p className="text-white/80 text-sm">Industry-leading accuracy</p>
              </div>
            </Card>

            <Card className="glass p-6 border-0">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">30%</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Efficiency</h3>
                <p className="text-white/80 text-sm">Energy cost reduction</p>
              </div>
            </Card>

            <Card className="glass p-6 border-0">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">10+</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                <p className="text-white/80 text-sm">Years of expertise</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;