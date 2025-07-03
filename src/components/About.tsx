

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