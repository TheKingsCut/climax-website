import React from "react";
import { Button } from "@/components/ui/button";

const Industries = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const industries = [
    {
      icon: "https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Meat_Curing.gif",
      title: "Meat Curing & Charcuterie",
      details: ["Holds 12–15 °C & 73–78 % RH (±2 %); dry-down curve shortens cure by up to 20 %; food-grade coils limit mould."],
      isCustomIcon: true
    },
    {
      icon: "https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Musical_Instrument_01.gif",
      title: "Musical Instruments",
      details: ["Keeps 45–55 % RH (±3 %); inverter fans < 45 dB; cloud logs meet insurer requirements."],
      isCustomIcon: true
    },
    {
      icon: "https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Electronics_Manufacturing_01.gif",
      title: "Electronics Manufacturing", 
      details: ["40–60 % RH band cuts ESD rejects > 60 %; ±0.5 °C temp stability; ISO 7–8 HEPA-ready."],
      isCustomIcon: true
    },
    {
      icon: "https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Food_Processing_01.gif",
      title: "Food Processing",
      details: ["Chilled 2–8 °C low-dew air extends shelf life; IPX4 wash-down coils; heat-reclaim pre-heats wash water."],
      isCustomIcon: true
    },
    {
      icon: "https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Plant_Cultivation.gif",
      title: "Plant Cultivation",
      details: ["VPD day/night set-points boost yield 10–15 %; condensate recovery reduces water use."],
      isCustomIcon: true
    },
    {
      icon: "https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Wine_Beverage_01.gif",
      title: "Wine & Beverage", 
      details: ["Cellar 12–16 °C & 65–75 % RH; laminar flow keeps corks hydrated; night-setback < 1 kWh/h."],
      isCustomIcon: true
    }
  ];

  const stats = [
    { number: "10+", label: "Industries Served" },
    { number: "6000+", label: "Installations" },
    { number: "<48h", label: "Parts Dispatch" },
    { number: "AI 24/7", label: "Support" }
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
            return (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <img src={industry.icon} alt={industry.title} className="w-16 h-16" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">{industry.title}</h3>
                <ul className="space-y-2">
                  {industry.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-muted-foreground text-center">
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
          <Button 
            onClick={scrollToContact}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Discuss Your Application
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Industries;