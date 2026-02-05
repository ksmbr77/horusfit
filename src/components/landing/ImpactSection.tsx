import { motion } from "framer-motion";
import { Dumbbell, Globe, Trophy, MapPin } from "lucide-react";

const impactItems = [
  {
    icon: Dumbbell,
    title: "Equipamentos Importados",
    description: "EUA e Kuwait",
  },
  {
    icon: Globe,
    title: "Padrão Internacional",
    description: "Em Infraestrutura",
  },
  {
    icon: Trophy,
    title: "Centro de Treinamento",
    description: "Nível Atleta",
  },
  {
    icon: MapPin,
    title: "Única em Tobias Barreto",
    description: "Pioneirismo Local",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
            O QUE NOS <span className="text-gradient">DIFERENCIA</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Estrutura de nível atleta aberta ao público
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-premium group text-center py-6 px-4"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="font-display text-sm md:text-lg text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
