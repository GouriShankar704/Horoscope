import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      feedback: "The numerology report was incredibly accurate! It helped me understand why I was facing certain career blocks. After following the remedies, I got promoted within 3 months.",
      highlight: "Got promoted in 3 months",
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      feedback: "I was skeptical at first, but the insights about my personality and relationships were spot on. Vivek's guidance helped save my marriage.",
      highlight: "Saved my relationship",
    },
    {
      name: "Anita Patel",
      location: "Bangalore",
      rating: 5,
      feedback: "The name vibration analysis revealed why my business was struggling. After the name correction, my revenue doubled in 6 months!",
      highlight: "Revenue doubled",
    },
    {
      name: "Suresh Menon",
      location: "Chennai",
      rating: 5,
      feedback: "Finally understood my life purpose through my Life Path Number. The 12-month prediction has been amazingly accurate so far.",
      highlight: "Found life purpose",
    },
    {
      name: "Kavitha Reddy",
      location: "Hyderabad",
      rating: 5,
      feedback: "The compatibility analysis helped me make the right decision about my engagement. Forever grateful for this guidance!",
      highlight: "Made right life decision",
    },
    {
      name: "Amit Joshi",
      location: "Pune",
      rating: 5,
      feedback: "The lucky numbers and colors guidance has brought positive energy into my life. I feel more confident and aligned with my path.",
      highlight: "Positive transformation",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            <span className="gradient-text">Real Stories, Real Transformations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from people whose lives have been transformed through numerology guidance
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="cosmic-card p-6 hover:border-accent/40 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                "{testimonial.feedback}"
              </p>

              {/* Highlight badge */}
              <div className="inline-flex px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs text-accent mb-4">
                ✨ {testimonial.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
