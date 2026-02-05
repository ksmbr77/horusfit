import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";

const WHATSAPP_NUMBER = "5579999498196";

// Validation schema
const formSchema = z.object({
  name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  whatsapp: z.string().trim().min(10, "WhatsApp inválido").max(20, "WhatsApp inválido"),
  plan: z.string().min(1, "Selecione um plano"),
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    plan: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate form
    const result = formSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    
    setIsLoading(true);
    
    // Format message for WhatsApp (properly encoded)
    const message = encodeURIComponent(
      `Olá! Meu nome é ${formData.name.trim()}.\n\nTenho interesse no ${formData.plan} da Hórus Fit.\n\nMeu WhatsApp: ${formData.whatsapp.trim()}`
    );
    
    // Open WhatsApp
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    
    toast.success("Redirecionando para o WhatsApp...");
    setIsLoading(false);
  };

  return (
    <section id="contato" className="section-dark section-pattern py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-6 md:mb-8">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-2">
              FAÇA PARTE DA <span className="text-gradient">HISTÓRIA</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Garanta sua vaga agora!
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="card-premium space-y-4"
          >
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nome Completo
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-muted border-border focus:border-primary"
                maxLength={100}
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="whatsapp" className="block text-sm font-medium text-foreground mb-2">
                WhatsApp
              </label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="(79) 99999-9999"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="bg-muted border-border focus:border-primary"
                maxLength={20}
              />
              {errors.whatsapp && <p className="text-destructive text-xs mt-1">{errors.whatsapp}</p>}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="plan" className="block text-sm font-medium text-foreground mb-2">
                Plano de Interesse
              </label>
              <Select onValueChange={(value) => setFormData({ ...formData, plan: value })}>
                <SelectTrigger className="bg-muted border-border focus:border-primary">
                  <SelectValue placeholder="Selecione um plano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Plano Mensal - R$100/mês">Plano Mensal - R$100/mês</SelectItem>
                  <SelectItem value="Plano Trimestral - R$90/mês">Plano Trimestral - R$90/mês</SelectItem>
                  <SelectItem value="Plano Semestral - R$80/mês">Plano Semestral - R$80/mês</SelectItem>
                </SelectContent>
              </Select>
              {errors.plan && <p className="text-destructive text-xs mt-1">{errors.plan}</p>}
            </div>

            <Button
              type="submit"
              variant="cta"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Falar no WhatsApp"}
            </Button>

            <p className="text-center text-muted-foreground text-xs">
              Você será redirecionado para o WhatsApp
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
