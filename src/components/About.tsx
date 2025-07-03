const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            One System. Three Functions. Zero Compromise.
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Integrated heating, cooling, and dehumidification in a single professional-grade unit. Simplify 
            your installations while delivering superior performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Precision Heating */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🌡️</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Precision Heating</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Advanced heating technology maintains exact temperature control for optimal environmental 
              conditions. Energy-efficient operation reduces costs while maintaining optimal performance.
            </p>
            <div className="bg-primary/5 rounded-lg p-4">
              <div className="text-primary font-semibold">Temperature Range 5°C to 40°C</div>
            </div>
          </div>

          {/* Efficient Cooling */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">❄️</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Efficient Cooling</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              High-performance cooling system with intelligent load management. Maintains stable temperatures even under 
              varying environmental conditions.
            </p>
            <div className="bg-primary/5 rounded-lg p-4">
              <div className="text-primary font-semibold">Cooling Capacity 7-60 kW Range</div>
            </div>
          </div>

          {/* Smart Dehumidification */}
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💧</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Smart Dehumidification</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Integrated moisture control prevents humidity fluctuations that damage sensitive products. Provides 
              optimal conditions optimal conditions automatically.
            </p>
            <div className="bg-primary/5 rounded-lg p-4">
              <div className="text-primary font-semibold">Humidity Control 32% RH Accuracy</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-200 rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Why Choose Separate Systems When One Does It All?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
            Reduce complexity, maintenance costs, and installation time while improving performance and 
            energy efficiency. Our integrated approach delivers superior results with simplified operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded font-semibold">
              View Technical Specifications
            </button>
            <button className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white px-8 py-3 rounded font-semibold">
              Calculate Your Savings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;