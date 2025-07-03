import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Wrench, Monitor, Headphones } from "lucide-react";

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
    },
    {
      icon: Monitor,
      title: "Remote Monitoring",
      description: "Advanced monitoring systems provide real-time data and alerts for proactive system management.",
      features: ["24/7 monitoring", "Real-time alerts", "Performance analytics", "Predictive maintenance"]
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Expert technical support available around the clock to address any issues or questions.",
      features: ["24/7 hotline", "Remote diagnostics", "On-site support", "Training programs"]
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
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive environmental control services from initial design to ongoing support. 
            We're with you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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