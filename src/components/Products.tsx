import unitImage02 from "@/assets/unit-image-02.png";
import unitImage10 from "@/assets/unit-image-10.png";
import unitImage12 from "@/assets/unit-image-12.png";

const Products = () => {
  const products = [
    {
      name: "Inverter Water Cooled MAX 3.0 Combo",
      capacity: "7-60 kW",
      badge: "Most Popular",
      description: "Intelligent control, highly-efficient technology, CE certification, and remote monitoring capabilities.",
      applications: ["Food processing", "Electronics manufacturing"],
      image: unitImage10
    },
    {
      name: "Air Cooled MAX 3.0 Combo", 
      capacity: "7-60 kW",
      badge: "",
      description: "Outdoor installation ready, weather-resistant construction, quiet operation with advanced noise reduction technology.",
      applications: ["Meat curing", "Medical instruments", "Wine storage"],
      image: unitImage02
    },
    {
      name: "Air Cooled Chiller MAX 3.0 HFO",
      capacity: "60-250 kW", 
      badge: "",
      description: "Eco-friendly HFO refrigerant, modular design for scalability, advanced diagnostics for predictive maintenance.",
      applications: ["Large facilities", "Industrial processes", "Data centers"],
      image: unitImage12
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Professional-grade environmental control systems engineered for reliability, efficiency, and 
            precise performance across diverse applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Product Image */}
              <div className="relative bg-gray-100 h-64 flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain rounded"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <div className="text-primary font-semibold mb-4">Capacity: {product.capacity}</div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                  <ul className="space-y-1">
                    {product.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 font-semibold text-foreground">Features</th>
                <th className="text-center py-4 font-semibold text-foreground">Water Cooled</th>
                <th className="text-center py-4 font-semibold text-foreground">Air Cooled Combo</th>
                <th className="text-center py-4 font-semibold text-foreground">Air Cooled Chiller</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-4 font-medium">Capacity Range</td>
                <td className="text-center py-4">7-60 kW</td>
                <td className="text-center py-4">7-60 kW</td>
                <td className="text-center py-4">60-250 kW</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 font-medium">Installation</td>
                <td className="text-center py-4">Indoor</td>
                <td className="text-center py-4">Outdoor</td>
                <td className="text-center py-4">Outdoor</td>
              </tr>
              <tr>
                <td className="py-4 font-medium">Best For</td>
                <td className="text-center py-4">Precision applications</td>
                <td className="text-center py-4">General purpose</td>
                <td className="text-center py-4">Large facilities</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need Help Choosing the Right System?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded font-semibold">
              Get Technical Consultation
            </button>
            <button className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white px-8 py-3 rounded font-semibold">
              Download Specifications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;