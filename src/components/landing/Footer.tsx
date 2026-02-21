import { motion } from "framer-motion";
import { forwardRef } from "react";
import horusLogo from "@/assets/horus-logo.png";
import flyAgencyLogo from "@/assets/fly-agency-logo.png";
import { Instagram, MapPin, Clock, ExternalLink } from "lucide-react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="bg-background border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* Logo & Social */}
          <div className="text-center sm:text-left">
            <img src={horusLogo} alt="Hórus Fit" className="w-20 md:w-24 mx-auto sm:mx-0 mb-3" />
            <p className="text-muted-foreground text-sm mb-4">
              Centro de Treinamento de Tobias Barreto/SE
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
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
          <div className="text-center sm:text-left">
            <h4 className="font-display text-base md:text-lg text-foreground mb-2 flex items-center gap-2 justify-center sm:justify-start">
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
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h4 className="font-display text-base md:text-lg text-foreground mb-2 flex items-center gap-2 justify-center sm:justify-start">
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
          className="border-t border-border mt-6 pt-5 text-center"
        >
          <p className="text-muted-foreground text-xs">
            © 2026 Hórus Fit Academia. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            WhatsApp: (79) 99949-8196 | @horusfittb
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-muted-foreground text-xs">Desenvolvido por</span>
            <img src={flyAgencyLogo} alt="Fly Agency Digital" className="h-6 md:h-8 inline-block" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
