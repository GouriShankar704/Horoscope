import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPointSection from "@/components/PainPointSection";
import ReportIncludesSection from "@/components/ReportIncludesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PaidServicesSection from "@/components/PaidServicesSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";

const Index = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCtaClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Free Numerology Report | Unlock Your Destiny - Gourav Samanta</title>
        <meta 
          name="description" 
          content="Get your FREE personalized numerology report. Discover your Life Path Number, Destiny Number, lucky colors & numbers. Expert guidance for career, relationships & life direction." 
        />
        <meta name="keywords" content="numerology, free numerology report, life path number, destiny number, name numerology, vedic numerology, numerology reading" />
        <link rel="canonical" href="https://gouravsamanta-numerology.com" />
        <meta property="og:title" content="Free Numerology Report | Unlock Your Destiny" />
        <meta property="og:description" content="Get your FREE personalized numerology report. Discover your Life Path, Destiny, and Soul Urge numbers." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header onCtaClick={handleCtaClick} />
        
        <main>
          <HeroSection onCtaClick={handleCtaClick} />
          <PainPointSection onCtaClick={handleCtaClick} />
          <ReportIncludesSection onCtaClick={handleCtaClick} />
          <HowItWorksSection />
          <AboutSection onCtaClick={handleCtaClick} />
          <TestimonialsSection />
          <PaidServicesSection />
          <FinalCtaSection onCtaClick={handleCtaClick} />
        </main>

        <Footer />
        
        <LeadPopup open={isPopupOpen} onOpenChange={setIsPopupOpen} />
      </div>
    </>
  );
};

export default Index;
