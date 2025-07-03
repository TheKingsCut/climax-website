import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const stats = [
    { number: "500+", label: "Installations" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
    { number: "10+", label: "Years Experience" },
  ];

  const certifications = [
    "ISO 9001 Certified",
    "Energy Star Partner",
    "LEED Approved",
    "ASHRAE Member",
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Cli-Max</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leading the industry in environmental control systems with innovative solutions 
            that deliver precision, reliability, and efficiency for critical applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Precision Environmental Control
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For over a decade, Cli-Max has been at the forefront of environmental control technology. 
                We specialize in designing, manufacturing, and maintaining climate control systems that 
                meet the most demanding requirements across various industries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to innovation and quality has made us the trusted partner for businesses 
                that cannot compromise on environmental precision - from data centers and laboratories 
                to manufacturing facilities and clean rooms.
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Certifications & Standards
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="justify-center py-2 px-3 text-sm"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 lg:p-8 text-center glass border-0 hover:scale-105 smooth-transition">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 lg:mt-24">
          <Card className="glass p-8 lg:p-12 text-center border-0">
            <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-4 italic">
              "Our mission is to provide cutting-edge environmental control solutions that enable 
              our clients to maintain optimal conditions for their critical operations."
            </blockquote>
            <cite className="text-muted-foreground">— Cli-Max Engineering Team</cite>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;