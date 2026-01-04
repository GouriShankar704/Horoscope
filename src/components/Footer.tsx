import { Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Numerology", href: "#how-it-works" },
    { name: "What You Get", href: "#what-you-get" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Premium Services", href: "#services" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Disclaimer", href: "#" },
    { name: "Refund Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-cosmic-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container relative z-10 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-serif font-bold gradient-text">Gourav Samanta</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Unlock the power of numbers and transform your life with personalized numerology guidance.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary/50 border border-border/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground hover:text-accent" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span>contact@gouravsamanta.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Gourav Samanta Numerology. All rights reserved.</p>
          <p className="text-xs">
            Disclaimer: Numerology readings are for guidance purposes only and should not replace professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
