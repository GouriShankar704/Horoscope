import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LeadPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const whyOptions = [
  "I want clarity about my career",
  "I am confused about my life direction",
  "I want to improve my relationship",
  "I want financial growth insight",
  "I want to check my name vibration score",
  "I want my life path number analysis",
  "Just curious about my numerology",
];

const LeadPopup = ({ open, onOpenChange }: LeadPopupProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    why: "",
    colorCode: "#6B3FA0",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "🌟 Report Request Received!",
      description: "Your personalized numerology report will be sent to your email shortly.",
    });

    setIsSubmitting(false);
    onOpenChange(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      why: "",
      colorCode: "#6B3FA0",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-lg bg-card border-border/50 backdrop-blur-xl animate-scale-in">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-5 w-5 text-muted-foreground" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader className="text-center space-y-3">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
            <Sparkles className="w-8 h-8 text-accent" />
          </div>
          <DialogTitle className="text-2xl md:text-3xl font-serif gradient-text">
            Get Your Free Numerology Report
          </DialogTitle>
          <p className="text-muted-foreground text-sm md:text-base">
            Enter your details below and unlock the secrets your numbers hold
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground/90">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-muted/50 border-border/50 focus:border-primary placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground/90">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-muted/50 border-border/50 focus:border-primary placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground/90">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-muted/50 border-border/50 focus:border-primary placeholder:text-muted-foreground/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="why" className="text-foreground/90">Why do you need guidance?</Label>
            <Select
              value={formData.why}
              onValueChange={(value) => setFormData({ ...formData, why: value })}
              required
            >
              <SelectTrigger className="bg-muted/50 border-border/50 focus:border-primary">
                <SelectValue placeholder="Select your reason" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border/50 z-50">
                {whyOptions.map((option) => (
                  <SelectItem key={option} value={option} className="hover:bg-primary/20 focus:bg-primary/20">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="colorCode" className="text-foreground/90">Select Your Favorite Color</Label>
            <div className="flex items-center gap-3">
              <input
                id="colorCode"
                type="color"
                value={formData.colorCode}
                onChange={(e) => setFormData({ ...formData, colorCode: e.target.value })}
                className="w-12 h-12 rounded-lg cursor-pointer border-2 border-border/50 bg-transparent"
              />
              <span className="text-sm text-muted-foreground">
                Selected: {formData.colorCode}
              </span>
            </div>
          </div>

          <Button
            type="submit"
            variant="hero"
            className="w-full mt-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">✨</span>
                Processing...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Get My Free Numerology Report
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground mt-4">
            🔒 Your information is 100% secure and will never be shared
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadPopup;
