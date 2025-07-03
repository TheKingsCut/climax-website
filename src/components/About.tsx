import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Wrench, Target } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Installations", icon: Target },
    { number: "99.9%", label: "Uptime", icon: Award },
    { number: "24/7", label: "Support", icon: Wrench },
    { number: "10+", label: "Years Experience", icon: Users },
  ];

  const certifications = [
    "ISO 9001 Certified",
    "Energy Star Partner", 
    "LEED Approved",
    "ASHRAE Member",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Cli-Max</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leading the industry in environmental control systems with innovative solutions 
            that deliver precision, reliability, and efficiency for critical applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Precision Environmental Control
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                For over a decade, Cli-Max has been at the forefront of environmental control technology. 
                We specialize in designing, manufacturing, and maintaining climate control systems that 
                meet the most demanding requirements across various industries.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our commitment to innovation and quality has made us the trusted partner for businesses 
                that cannot compromise on environmental precision - from data centers and laboratories 
                to manufacturing facilities and clean rooms.
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6">
                Certifications & Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="justify-center py-3 px-4 text-sm font-medium"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="p-8 text-center border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="p-12 text-center bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 italic">
            "Our mission is to provide cutting-edge environmental control solutions that enable 
            our clients to maintain optimal conditions for their critical operations."
          </blockquote>
          <cite className="text-muted-foreground text-lg">— Cli-Max Engineering Team</cite>
        </Card>
      </div>
    </section>
  );
};

export default About;