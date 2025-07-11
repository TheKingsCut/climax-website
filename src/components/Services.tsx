import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Wrench, Shield, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "System Design & Installation",
      description: "Custom environmental control solutions tailored to your specific requirements and industry standards.",
      features: ["Site assessment", "Custom design", "Professional installation", "System commissioning"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Service",
      description: "Comprehensive maintenance programs to ensure optimal performance and extend system lifespan.",
      features: ["Preventive maintenance", "Emergency repairs", "Parts replacement", "Performance optimization"]
    }
  ];

  const warranties = [
    {
      icon: Shield,
      title: "Standard Warranty",
      description: "All our environmental control systems come with a comprehensive 1-year warranty included at no additional cost.",
      features: ["Full parts coverage", "Labor included", "Emergency support", "Performance guarantee"]
    },
    {
      icon: Clock,
      title: "Extended Warranty",
      description: "Extend your peace of mind with warranty coverage up to 5 years for maximum protection and value.",
      features: ["Up to 5 years coverage", "Priority service", "Preventive maintenance", "Cost predictability"]
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
            Comprehensive environmental control services from initial design to ongoing support, 
            backed by industry-leading warranties.
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
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="h-full border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
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
                const IconComponent = warranty.icon;
                return (
                  <Card key={index} className="h-full border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
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