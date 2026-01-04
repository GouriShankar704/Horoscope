import { Button } from "@/components/ui/button";
import { HelpCircle, Compass, Brain, Heart, Wallet, Target } from "lucide-react";

interface PainPointSectionProps {
  onCtaClick: () => void;
}

const PainPointSection = ({ onCtaClick }: PainPointSectionProps) => {
  const painPoints = [
    { icon: Compass, text: "Career Confusion" },
    { icon: Heart, text: "Relationship Struggles" },
    { icon: Wallet, text: "Money Blocks" },
    { icon: Brain, text: "Decision Paralysis" },
    { icon: Target, text: "Life Direction" },
    { icon: HelpCircle, text: "Mental Peace" },
  ];

  return (
    <section id="why-numerology" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cosmic-dark to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4 section-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-foreground">Clarity Chahiye? </span>
              <span className="gradient-text">Answers Chahiye?</span>
            </h2>
            <p className="text-2xl md:text-3xl font-serif text-accent">
              Your Numbers Can Guide You.
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 py-8 section-fade-in delay-200">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="cosmic-card p-5 md:p-6 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <point.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-foreground/90 font-medium text-sm md:text-base">
                    {point.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto section-fade-in delay-300">
            People struggle with confusion in career, relationships, money flow, mental peace, 
            decisions, and life direction. Your personal numbers — <strong className="text-foreground">Life Path, 
            Destiny, Soul Urge</strong> — reveal your blueprint and provide the clarity you seek.
          </p>

          {/* CTA */}
          <div className="pt-6 section-fade-in delay-400">
            <Button variant="mystic" size="lg" onClick={onCtaClick}>
              Discover Your Numbers Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;
