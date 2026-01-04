import { Waves, Hash, Lightbulb, Infinity } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Hash,
      title: "Your Name & Birth Date",
      desc: "Every letter in your name and every number in your birth date carries a unique vibration.",
    },
    {
      icon: Waves,
      title: "Vibrational Analysis",
      desc: "These vibrations create patterns that influence your personality, decisions, and life events.",
    },
    {
      icon: Lightbulb,
      title: "Pattern Recognition",
      desc: "Numerology decodes these patterns to reveal your strengths, challenges, and life cycles.",
    },
    {
      icon: Infinity,
      title: "Life Guidance",
      desc: "Understanding your numbers helps you make aligned choices and navigate life with clarity.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-cosmic-dark" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/20 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-accent/20 rounded-full animate-pulse delay-500" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            <span className="gradient-text">How Numerology Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The ancient science of numbers reveals the hidden patterns in your life
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="cosmic-card p-6 text-center h-full">
                <div className="flex flex-col items-center gap-4">
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="text-lg font-serif font-semibold text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
