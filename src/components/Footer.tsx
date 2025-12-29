import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-dark-section py-12 px-4 border-t border-border">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-muted-foreground text-sm">
            © 2025 KAHFUJII SERVIÇOS EDUCACIONAIS LTDA
          </p>
          <p className="text-muted-foreground/70 text-xs">
            CNPJ: 60479702/0001-21
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-secondary transition-colors text-sm"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-secondary transition-colors text-sm"
            >
              Política de Privacidade
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
