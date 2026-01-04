import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

const FinalCtaSection = ({ onCtaClick }: FinalCtaSectionProps) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-3xl" />
      
      {/* Starfield */}
      <div className="absolute inset-0 starfield opacity-30" />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Decorative element */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-glow">
              <Sparkles className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight">
            <span className="text-foreground">Take the First Step Toward a </span>
            <span className="gradient-text">Better, Clearer & Happier Life</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your numbers are waiting to reveal their secrets. Don't let another day pass 
            without understanding your true potential.
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              variant="hero"
              size="xl"
              onClick={onCtaClick}
              className="group"
            >
              <Sparkles className="w-5 h-5" />
              Get My Free Numerology Report Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="text-accent">✓</span> 100% Free
            </span>
            <span className="flex items-center gap-2">
              <span className="text-accent">✓</span> No Credit Card Required
            </span>
            <span className="flex items-center gap-2">
              <span className="text-accent">✓</span> Instant Results
            </span>
            <span className="flex items-center gap-2">
              <span className="text-accent">✓</span> 5000+ Happy Clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
