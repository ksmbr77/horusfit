import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crown, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "5579999498196";

const plans = [
  {
    name: "Mensal",
    price: "100",
    period: "",
    total: "Musculação + Aulas personalizadas",
    featured: true,
    badge: "MAIS ESCOLHIDO",
  },
  {
    name: "Trimestral",
    price: "95",
    period: "",
    total: "3x de R$95,00",
    subtitle: "Musculação + Aulas personalizadas",
    featured: false,
  },
  {
    name: "Semestral",
    price: "90",
    period: "",
    total: "6x de R$90,00",
    subtitle: "Musculação + aulas personalizadas + avaliação física",
    featured: false,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col ${plan.featured ? "card-plan-featured order-first sm:order-none sm:col-span-2 lg:col-span-1" : "card-plan"}`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="badge-new flex items-center gap-1.5 text-xs px-3 py-1 whitespace-nowrap">
                    <Crown className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center flex-1 flex flex-col justify-center pt-4">
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {plan.name}
                </h3>
                
                {!plan.featured && plan.total && (
                  <p className="text-muted-foreground text-xs mb-1">{plan.total}</p>
                )}
                
                <div className="flex items-baseline justify-center gap-0.5 mb-2">
                  <span className="text-muted-foreground text-base">R$</span>
                  <span className={`font-display text-5xl sm:text-6xl leading-none ${plan.featured ? 'text-gradient' : 'text-foreground'}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">,00</span>
                </div>
                
                <p className="text-muted-foreground text-xs px-2">
                  {plan.featured ? plan.total : (plan as any).subtitle}
                </p>
              </div>

              <Button
                variant={plan.featured ? "cta" : "heroOutline"}
                size="lg"
                className="w-full mt-auto"
                onClick={() => handlePlanClick(plan.name)}
              >
                {plan.featured ? (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Garantir Vaga
                  </span>
                ) : (
                  "Escolher"
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
