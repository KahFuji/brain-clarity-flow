import { motion } from "framer-motion";
import { X, Check, Sparkles, Users, Bot } from "lucide-react";

const painCosts = [
  { label: "O custo financeiro:", text: "juros de boletos esquecidos e multas por atraso." },
  { label: "O custo social:", text: "a vergonha de furar encontros importantes por esquecimento." },
  { label: "O custo emocional:", text: "a frustração diária de não gerenciar o básico." },
  { label: "O custo biológico:", text: "o esgotamento de tentar fazer o cérebro funcionar na força do ódio." },
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
            <h3 className="text-xl font-bold text-card-foreground mb-4">
              A resposta sincera:
            </h3>
            <p className="text-card-foreground/80 mb-2">
              Muito menos do que o "Imposto TDAH" que você já paga todo mês.
            </p>
            <p className="text-card-foreground/80 mb-2">
              Você provavelmente já está gastando dinheiro (e saúde) por não ter essa ajuda.
            </p>
            <p className="text-card-foreground/80 mb-4">
              Coloque na ponta do lápis o custo do caos:
            </p>
            {painCosts.map((cost, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 mb-2"
              >
                <div className="x-icon flex-shrink-0 mt-1">
                  <X className="w-4 h-4" />
                </div>
                <p className="text-card-foreground/80">
                  <strong className="text-card-foreground">{cost.label}</strong> {cost.text}
                </p>
              </motion.div>
            ))}
            <p className="text-card-foreground/80 mt-4 mb-2">
              Pare de pagar caro pelo caos.
            </p>
            <p className="text-card-foreground/80 font-semibold">
              Invista menos de uma xícara de café diário no seu alívio.
            </p>
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
