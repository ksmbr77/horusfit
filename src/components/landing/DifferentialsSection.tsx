import { motion } from "framer-motion";
import { Sparkles, Globe2, MapPin, Clock } from "lucide-react";

const differentials = [
  {
    icon: Sparkles,
    title: "Equipamentos Premium",
    description: "Máquinas de última geração importadas dos EUA e Kuwait.",
  },
  {
    icon: Globe2,
    title: "Estrutura Internacional",
    description: "Padrão de Centro de Treinamento profissional.",
  },
  {
    icon: MapPin,
    title: "Localização",
    description: "Bairro Centenário (Duccati), Tobias Barreto/SE.",
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description: "Seg-Sex: 5h às 23h | Sáb: 6h às 17h",
  },
];

const DifferentialsSection = () => {
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
            DIFERENCIAIS <span className="text-gradient">HÓRUS FIT</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-premium flex gap-4 items-start"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base md:text-lg text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
