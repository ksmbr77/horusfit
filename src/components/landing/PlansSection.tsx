import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crown, Sparkles, Percent } from "lucide-react";

const WHATSAPP_NUMBER = "5579999498196";

const plans = [
  {
    name: "Trimestral",
    price: "95",
    installments: "3x de",
    description: "Musculação + Aulas personalizadas",
    featured: false,
    badge: null,
    discount: "5% OFF",
  },
  {
    name: "Mensal",
    price: "100",
    installments: null,
    description: "Musculação + Aulas personalizadas",
    featured: true,
    badge: "MAIS ESCOLHIDO",
    discount: null,
  },
  {
    name: "Semestral",
    price: "90",
    installments: "6x de",
    description: "Musculação + Aulas personalizadas + Avaliação física",
    featured: false,
    badge: null,
    discount: "10% OFF",
  },
  {
    name: "Anual",
    price: "85",
    installments: "12x de",
    description: "Musculação + Aulas personalizadas + Avaliação física",
    featured: false,
    badge: null,
    discount: "15% OFF",
  },
];

const PlansSection = () => {
  const handlePlanClick = (planName: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planName} da Hórus Fit. Gostaria de mais informações!`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="planos" className="section-dark section-pattern py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-2">
            ESCOLHA SEU <span className="text-gradient">PLANO</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            Invista na sua saúde com a melhor estrutura de Sergipe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-6 md:p-8 ${plan.featured ? "card-plan-featured" : "card-plan"}`}
            >
              {/* Badge para plano em destaque */}
              {plan.featured && plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="badge-new flex items-center gap-1.5 text-xs px-3 py-1.5 whitespace-nowrap">
                    <Crown className="w-3.5 h-3.5" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Badge de desconto */}
              {plan.discount && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-primary/20 text-primary border border-primary/30 rounded-full flex items-center gap-1 text-xs font-semibold px-3 py-1.5 whitespace-nowrap">
                    <Percent className="w-3 h-3" />
                    {plan.discount}
                  </span>
                </div>
              )}

              <div className="text-center flex-1 flex flex-col justify-center pt-4 pb-4">
                {/* Nome do plano */}
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  {plan.name}
                </h3>
                
                {/* Parcelas (para trimestral/semestral) */}
                {plan.installments && (
                  <p className="text-muted-foreground text-sm mb-1">{plan.installments}</p>
                )}
                
                {/* Preço */}
                <div className="flex items-baseline justify-center gap-0.5 mb-4">
                  <span className="text-muted-foreground text-lg">R$</span>
                  <span className={`font-display text-5xl md:text-6xl leading-none ${plan.featured ? 'text-gradient' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-base">,00</span>
                </div>
                
                {/* Descrição do que inclui */}
                <p className="text-muted-foreground text-sm px-2 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <Button
                variant={plan.featured ? "cta" : "heroOutline"}
                size="lg"
                className="w-full mt-auto text-base py-6"
                onClick={() => handlePlanClick(plan.name)}
              >
                {plan.featured ? (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Garantir Vaga
                  </span>
                ) : (
                  "Escolher Plano"
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
