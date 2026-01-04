import { Button } from "@/components/ui/button";
import { Sparkles, Star, Heart, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-cosmic-bg.jpg";
import zodiacWheel from "@/assets/zodiac-wheel.png";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  const highlights = [
    { icon: Star, text: "100% Personalized" },
    { icon: Sparkles, text: "Instant Guidance" },
    { icon: Heart, text: "Name Vibrations" },
    { icon: TrendingUp, text: "Practical Remedies" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Starfield overlay */}
      <div className="absolute inset-0 starfield opacity-40" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-sm text-accent">
              <Sparkles className="w-4 h-4" />
              <span>Free Personalized Report</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight">
              <span className="text-foreground">Unlock Your </span>
              <span className="gradient-text">Destiny</span>
              <br />
              <span className="text-foreground">with a </span>
              <span className="gradient-text">FREE</span>
              <br />
              <span className="text-foreground">Numerology Report</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Understand your Career, Money, Relationships & Life Path — using your Name and Birth Date.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/30 text-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-4 h-4 text-accent" />
                  <span className="text-foreground/90">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                variant="hero"
                size="xl"
                onClick={onCtaClick}
                className="w-full sm:w-auto"
              >
                <Sparkles className="w-5 h-5" />
                Get My Free Numerology Report
              </Button>
            </div>
          </div>

          {/* Right - Zodiac Wheel */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/30 blur-[80px] rounded-full scale-75" />
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-90 animate-pulse" />
              <img
                src={zodiacWheel}
                alt="Mystical zodiac wheel representing numerology and cosmic energies"
                className="w-[400px] xl:w-[500px] h-auto animate-spin-slow relative z-10 drop-shadow-[0_0_40px_rgba(139,92,246,0.5)] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
