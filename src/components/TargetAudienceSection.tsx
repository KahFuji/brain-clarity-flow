import { motion } from "framer-motion";
import { Check } from "lucide-react";

const audiencePoints = [
  { text: "Mentes NeuroDIFERENTES que querem fazer de 2026 o ano da Virada." },
  { text: "Buscam Leveza, não apenas Produtividade." },
  { text: "Precisam dominar a Impulsividade." },
  { text: "Querem Silêncio para Dormir." },
  { text: "Sabem que têm Potencial." },
  { bold: "Vivem a Paralisia da Liberdade:", text: " para empreendedores e autônomos que têm flexibilidade, mas travam sem a cobrança externa." },
];

const TargetAudienceSection = () => {
  return (
    <section className="bg-dark-green-section py-20 px-4">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Para quem é o{" "}
            <span className="text-secondary">Desafoga TDAH</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {audiencePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card-light flex items-start gap-4 ${
                index === audiencePoints.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="check-icon flex-shrink-0 mt-1">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-card-foreground font-medium leading-relaxed">
                {point.bold && <strong>{point.bold}</strong>}
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeWh2p5NW3OMSoM8NS-w2jFuADZxr4a-QGB1HVaBbZTGkcbQw/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary animate-zoom-pulse inline-block"
          >
            ENTRE PARA A LISTA DE ESPERA
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
