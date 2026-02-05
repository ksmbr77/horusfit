import { motion } from "framer-motion";
import heroImage from "@/assets/hero-gym.jpg";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5579999498196";

const WhySection = () => {
  const handleCTA = () => {
    const message = encodeURIComponent("Olá! Quero conhecer a Hórus Fit!");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="py-12 md:py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 md:mb-6">
              POR QUE <span className="text-gradient">HÓRUS FIT?</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                Pela primeira vez em Tobias Barreto, você tem acesso a uma infraestrutura que antes só existia em capitais.
              </p>
              <p>
                A <strong className="text-foreground">Hórus Fit</strong> é um Centro de Treinamento com equipamentos importados dos <strong className="text-primary">Estados Unidos</strong> e <strong className="text-primary">Kuwait</strong>.
              </p>
              <p className="text-foreground font-medium">
                Os melhores equipamentos do país, agora em Sergipe.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <Button variant="hero" size="lg" onClick={handleCTA}>
                Quero Conhecer
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={heroImage} 
                alt="Hórus Fit Interior" 
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-xl" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 card-premium p-3 md:p-4 shadow-glow"
            >
              <div className="font-display text-2xl md:text-3xl text-gradient">+50</div>
              <div className="text-muted-foreground text-xs">Equipamentos</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
