import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users, Star } from "lucide-react";
import gouravImage from "@/assets/gourav-samanta.jpg";

interface AboutSectionProps {
  onCtaClick: () => void;
}

const AboutSection = ({ onCtaClick }: AboutSectionProps) => {
  const credentials = [
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Users, value: "5000+", label: "Lives Transformed" },
    { icon: BookOpen, value: "15+", label: "Numerology Systems" },
    { icon: Star, value: "4.9", label: "Client Rating" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-background to-cosmic-dark" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image/Avatar side */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Glow behind avatar */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 rounded-full blur-2xl scale-110" />
              
              {/* Avatar container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/30 overflow-hidden cosmic-card">
                <img 
                  src={gouravImage} 
                  alt="Gourav Samanta - Numerology Expert" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating stats */}
              <div className="absolute -right-4 top-1/4 cosmic-card px-4 py-2 animate-float">
                <span className="text-accent font-bold">★ 4.9</span>
              </div>
              <div className="absolute -left-4 bottom-1/4 cosmic-card px-4 py-2 animate-float delay-500">
                <span className="text-accent font-bold">5000+</span>
                <span className="text-xs text-muted-foreground ml-1">Clients</span>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-sm text-accent">
              <Award className="w-4 h-4" />
              Your Trusted Guide
            </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            <span className="text-foreground">Meet Your </span>
            <span className="gradient-text">Numerology Expert</span>
          </h2>

          <h3 className="text-2xl font-serif text-accent">Gourav Samanta</h3>

            <p className="text-muted-foreground leading-relaxed">
              With over a decade of experience in Vedic Numerology, I have helped thousands 
              of individuals across the globe discover their true potential. My approach combines 
              ancient wisdom with modern interpretation, providing practical guidance that 
              creates real transformation in people's lives.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My mission is to make the profound wisdom of numerology accessible to everyone. 
              Whether you're seeking career guidance, relationship clarity, or life direction — 
              your numbers hold the answers you're looking for.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              {credentials.map((cred, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
                    <cred.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-xl font-bold text-foreground">{cred.value}</div>
                  <div className="text-xs text-muted-foreground">{cred.label}</div>
                </div>
              ))}
            </div>

            <Button variant="mystic" size="lg" onClick={onCtaClick}>
              Get My Personal Reading
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
