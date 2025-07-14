import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const services = [
    {
      icon: "https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/System_Design_01.gif",
      title: "System Design & Installation",
      description: "Custom environmental control solutions tailored to your specific requirements and industry standards.",
      features: [
        "Detailed site survey & heat-load calculation",
        "BIM-ready drawings & schedules", 
        "Cli-Max coordinates certified local installers",
        "Factory-trained commissioning & operator training"
      ]
    },
    {
      icon: "https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Maintenance_Service_01.gif",
      title: "Maintenance & Service",
      description: "Comprehensive maintenance programs to ensure optimal performance and extend system lifespan.",
      features: [
        "Industry-standard SLA response times via local partners & Cli-Max HQ",
        "24 / 7 AI-assisted phone support + remote diagnostics",
        "Regional spare-parts hubs for fast dispatch",
        "PM plans aligned with ISO / ASHRAE guidelines"
      ]
    }
  ];

  const warranties = [
    {
      icon: "https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Warranty_1year_01.gif",
      title: "Standard Warranty (1 Year)",
      description: "All our environmental control systems come with a comprehensive 1-year warranty included at no additional cost.",
      features: [
        "Parts cover + unlimited remote support",
        "Labour for warranty repairs (travel at cost)",
        "Performance guarantee when certified-installed"
      ]
    },
    {
      icon: "https://kbnrphtmumnzxxcxahir.supabase.co/storage/v1/object/public/assets/ICONS/Warranty_5year_01.gif",
      title: "Extended Warranty (Up to 5 Years)",
      description: "Extend your peace of mind with warranty coverage up to 5 years for maximum protection and value.",
      features: [
        "Parts + labour to 3 or 5 years",
        "Annual on-site PM visit",
        "Priority parts & discounted upgrades",
        "Transferable coverage"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services and Warranties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With us, the help starts at first sketch and never stops—and we back every step with warranties that actually mean something.
          </p>
        </div>

        <Tabs defaultValue="services" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="warranties">Warranties</TabsTrigger>
          </TabsList>
          
          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                return (
                  <Card key={index} className="h-full border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <img src={service.icon} alt={service.title} className="h-12 w-12" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="warranties">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {warranties.map((warranty, index) => {
                return (
                  <Card key={index} className="h-full border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <img src={warranty.icon} alt={warranty.title} className="h-12 w-12" />
                      </div>
                      <CardTitle className="text-xl">{warranty.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {warranty.description}
                      </p>
                      <ul className="space-y-2">
                        {warranty.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to get started?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your environmental control needs and discover how we can help optimize your facility.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;