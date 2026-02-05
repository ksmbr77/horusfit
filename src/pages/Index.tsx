import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ImpactSection from "@/components/landing/ImpactSection";
import GallerySection from "@/components/landing/GallerySection";
import PlansSection from "@/components/landing/PlansSection";
import DifferentialsSection from "@/components/landing/DifferentialsSection";
import WhySection from "@/components/landing/WhySection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ImpactSection />
      <div id="galeria">
        <GallerySection />
      </div>
      <PlansSection />
      <DifferentialsSection />
      <WhySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
