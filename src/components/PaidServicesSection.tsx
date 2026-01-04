import { FileText, Building, Heart, Crown, Sparkles, TrendingUp } from "lucide-react";

const PaidServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Name Correction",
      desc: "Align your name vibrations for success and prosperity",
      popular: false,
    },
    {
      icon: Building,
      title: "Business Name Analysis",
      desc: "Choose the perfect name for your business venture",
      popular: true,
    },
    {
      icon: Heart,
      title: "Compatibility Report",
      desc: "Detailed love and relationship compatibility analysis",
      popular: false,
    },
    {
      icon: Crown,
      title: "Premium Life Report",
      desc: "Comprehensive 50+ page detailed numerology analysis",
      popular: true,
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      desc: "In-depth career path and business success strategies",
      popular: false,
    },
    {
      icon: Sparkles,
      title: "Annual Prediction",
      desc: "Month-by-month forecast for your year ahead",
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark to-background" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-12 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-sm text-accent">
            <Crown className="w-4 h-4" />
            Premium Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            <span className="text-foreground">Go Deeper with </span>
            <span className="gradient-text">Premium Readings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take your numerology journey further with personalized premium services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`cosmic-card p-6 relative group hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 ${
                service.popular ? "border-accent/30" : ""
              }`}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-xs font-semibold text-primary-foreground">
                  Popular
                </div>
              )}

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-accent/30 transition-all">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          * Start with your free report and upgrade anytime for deeper insights
        </p>
      </div>
    </section>
  );
};

export default PaidServicesSection;
