import { motion } from "framer-motion";
import { X, Check, Sparkles, Users, Bot } from "lucide-react";

const painCosts = [
  { text: "Custo financeiro (multas, juros, oportunidades perdidas)", type: "pain" },
  { text: "Custo social (vergonha, julgamento, isolamento)", type: "pain" },
  { text: "Custo emocional (frustração, ansiedade, baixa autoestima)", type: "pain" },
];

const includes = [
  { icon: Bot, text: "Assistente 24/7 no WhatsApp" },
  { icon: Sparkles, text: "Copiloto de Potencial - Raio-X Semanal" },
  { icon: Users, text: "Tribo dos Founders - Comunidade Exclusiva" },
];

const PriceAnchoringSection = () => {
  return (
    <section className="bg-light-section py-20 px-4">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-card-foreground mb-4">
            Quanto custa o{" "}
            <span className="text-primary">Desafoga TDAH</span>?
          </h2>
          <p className="text-lg text-card-foreground/70">
            Antes, pense no custo de NÃO ter organização...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-card-foreground mb-6">
              O preço da desorganização:
            </h3>
            {painCosts.map((cost, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className="x-icon flex-shrink-0 mt-1">
                  <X className="w-4 h-4" />
                </div>
                <p className="text-card-foreground/80">{cost.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-primary/10 border-2 border-primary"
          >
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary text-accent-foreground font-bold text-sm">
                CONDIÇÃO ESPECIAL PARA FOUNDER
              </span>
            </div>

            <h3 className="text-xl font-bold text-card-foreground mb-6 text-center">
              O que você recebe:
            </h3>

            <div className="space-y-4 mb-6">
              {includes.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-card-foreground font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center p-4 rounded-xl bg-secondary/20">
              <span className="text-lg font-bold text-primary">+ BÔNUS</span>
              <p className="text-2xl font-extrabold text-card-foreground">
                40% OFF
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PriceAnchoringSection;
