import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";

interface HeaderProps {
  onCtaClick: () => void;
}

const Header = ({ onCtaClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Why Numerology", href: "#why-numerology" },
    { name: "What You Get", href: "#what-you-get" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-serif font-bold gradient-text hidden sm:block">
              Gourav Samanta
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="mystic" size="sm" onClick={onCtaClick}>
              <Sparkles className="w-4 h-4" />
              Get Free Report
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/30 animate-slide-in-bottom">
            <div className="container px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-foreground/80 hover:text-foreground py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="mystic" className="w-full mt-4" onClick={() => {
                onCtaClick();
                setIsMobileMenuOpen(false);
              }}>
                <Sparkles className="w-4 h-4" />
                Get Free Report
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
