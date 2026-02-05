import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gym.jpg";
import horusLogo from "@/assets/horus-logo.png";

const WHATSAPP_NUMBER = "5579999498196";

const HeroSection = () => {
  const handleCTA = () => {
    const message = encodeURIComponent("Olá! Tenho interesse em treinar na Hórus Fit. Gostaria de mais informações!");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hórus Fit Academia" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 md:py-0">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="badge-new mb-6"
          >
            🏋️ INAUGURADA JANEIRO 2026
          </motion.span>

          {/* Logo */}
          <motion.img
            src={horusLogo}
            alt="Hórus Fit"
            className="w-32 sm:w-40 md:w-48 lg:w-56 mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />

          {/* Headline - Improved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-2 md:space-y-3 mb-4 md:mb-6"
          >
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground leading-tight">
              A FORÇA ESTÁ DENTRO DE VOCÊ
            </h1>
            <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gradient leading-tight">
              AGORA COM A ESTRUTURA QUE VOCÊ MERECE
            </p>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            O primeiro Centro de Treinamento padrão internacional de Tobias Barreto/SE
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button 
              variant="hero" 
              size="xl"
              onClick={handleCTA}
              className="w-full sm:w-auto min-w-0 sm:min-w-[220px]"
            >
              Quero Treinar na Hórus
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg"
              onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto"
            >
              Ver Planos
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          >
            <motion.div 
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
