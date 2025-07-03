import { Heart, Music, Cpu, UtensilsCrossed, Leaf, Wine } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Heart,
      title: "Meat Curing & Charcuterie",
      details: ["Stable 75% RH control", "Temperature stable", "Quality consistency"]
    },
    {
      icon: Music,
      title: "Musical Instruments",
      details: ["40-55% RH control", "Temperature protection", "Insurance compliance"]
    },
    {
      icon: Cpu,
      title: "Electronics Manufacturing", 
      details: ["ESD prevention", "Quality control", "Yield improvement"]
    },
    {
      icon: UtensilsCrossed,
      title: "Food Processing",
      details: ["Food safety", "Shelf life extension", "Quality assurance"]
    },
    {
      icon: Leaf,
      title: "Cannabis Cultivation",
      details: ["Optimal growing conditions", "Yield maximization", "Quality control"]
    },
    {
      icon: Wine,
      title: "Wine & Beverage", 
      details: ["Fermentation control", "Storage optimization", "Quality consistency"]
    }
  ];

  const stats = [
    { number: "10+", label: "Industries Served" },
    { number: "1000+", label: "Installations" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Professionals Across Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From precision manufacturing to artisanal crafts, our environmental control systems deliver 
            reliable performance where it matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">{industry.title}</h3>
                <ul className="space-y-2">
                  {industry.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't See Your Industry?
          </h3>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded font-semibold">
            Discuss Your Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;