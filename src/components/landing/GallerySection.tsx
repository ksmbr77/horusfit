import { motion } from "framer-motion";
import equipment1 from "@/assets/equipment-1.jpg";
import equipment2 from "@/assets/equipment-2.jpg";
import equipment3 from "@/assets/equipment-3.jpg";

const galleryImages = [
  {
    src: equipment1,
    alt: "Equipamentos Premium",
    title: "Equipamentos de Ponta",
  },
  {
    src: equipment2,
    alt: "Área de Pesos",
    title: "Área de Musculação",
  },
  {
    src: equipment3,
    alt: "Ambiente Treino",
    title: "Ambiente Profissional",
  },
];

const GallerySection = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
            EXPERIÊNCIA <span className="text-gradient">HÓRUS FIT</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Estrutura que transforma seus treinos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-base md:text-lg text-foreground">
                  {image.title}
                </h3>
              </div>
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <a 
            href="https://instagram.com/horusfittb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
          >
            <span>Ver mais no Instagram @horusfittb</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
