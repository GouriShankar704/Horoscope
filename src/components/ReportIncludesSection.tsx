import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Target, 
  User, 
  Heart, 
  Palette, 
  Shield, 
  Briefcase, 
  Users, 
  Calendar, 
  Gem 
} from "lucide-react";

interface ReportIncludesSectionProps {
  onCtaClick: () => void;
}

const ReportIncludesSection = ({ onCtaClick }: ReportIncludesSectionProps) => {
  const reportItems = [
    { icon: Target, title: "Life Path Number", desc: "Your core life purpose" },
    { icon: Sparkles, title: "Destiny Number", desc: "Your life's mission" },
    { icon: User, title: "Personality Number", desc: "How others see you" },
    { icon: Heart, title: "Soul Urge Number", desc: "Your inner desires" },
    { icon: Palette, title: "Lucky Numbers & Colors", desc: "Your fortunate vibrations" },
    { icon: Shield, title: "Strengths & Weaknesses", desc: "Know yourself deeply" },
    { icon: Briefcase, title: "Career & Money Guidance", desc: "Financial prosperity path" },
    { icon: Users, title: "Relationship Insights", desc: "Love & compatibility" },
    { icon: Calendar, title: "12-Month Prediction", desc: "Your year ahead" },
    { icon: Gem, title: "Personalized Remedies", desc: "Practical solutions" },
  ];

  return (
    <section id="what-you-get" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-12 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-sm text-accent">
            <Gem className="w-4 h-4" />
            Comprehensive Analysis
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            <span className="text-foreground">Your Free Report Includes </span>
            <span className="gradient-text">10 Powerful Insights</span>
          </h2>
        </div>

        {/* Grid of items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {reportItems.map((item, index) => (
            <div
              key={index}
              className="cosmic-card p-5 text-center group hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-accent/30 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" onClick={onCtaClick}>
            <Sparkles className="w-5 h-5" />
            Get All 10 Insights Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReportIncludesSection;
