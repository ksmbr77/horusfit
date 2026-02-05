import { motion } from "framer-motion";
import horusLogo from "@/assets/horus-logo.png";
import { Instagram, MapPin, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10 md:py-14">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {/* Logo & Social */}
          <div className="text-center md:text-left">
            <img src={horusLogo} alt="Hórus Fit" className="w-24 md:w-28 mx-auto md:mx-0 mb-3" />
            <p className="text-muted-foreground text-sm mb-4">
              Centro de Treinamento de Tobias Barreto/SE
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://instagram.com/horusfittb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linktr.ee/contatohorusfit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Linktree"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-base md:text-lg text-foreground mb-3 flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-primary" />
              Localização
            </h4>
            <p className="text-muted-foreground text-sm">
              Bairro Centenário (Duccati)
              <br />
              Tobias Barreto/SE
            </p>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-base md:text-lg text-foreground mb-3 flex items-center gap-2 justify-center md:justify-start">
              <Clock className="w-4 h-4 text-primary" />
              Horários
            </h4>
            <div className="text-muted-foreground text-sm space-y-1">
              <p><strong className="text-foreground">Seg-Sex:</strong> 5h às 23h</p>
              <p><strong className="text-foreground">Sáb:</strong> 6h às 12h / 13h às 17h</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-border mt-8 pt-6 text-center"
        >
          <p className="text-muted-foreground text-xs">
            © 2026 Hórus Fit Academia. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            WhatsApp: (79) 99949-8196 | @horusfittb
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
