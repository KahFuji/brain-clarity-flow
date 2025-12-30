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
            className="space-y-4"
          >
            <p className="text-card-foreground/80">
              <strong className="text-primary">A condição exclusiva de inauguração que nunca mais vai se repetir.</strong>
            </p>
            <p className="text-card-foreground/80">
              Ao entrar hoje, você garante o <strong>LIFETIME PRICE LOCK</strong> (Trava de Preço Vitalícia).
            </p>
            <p className="text-card-foreground/80">
              O Desafoga vai evoluir, o preço público vai subir, mas o seu valor de assinatura nunca mudará.
            </p>
            <p className="text-card-foreground/80 font-bold uppercase mt-4">
              O QUE ESTÁ INCLUSO NO PACOTE FOUNDER:
            </p>
            <div className="flex items-start gap-3">
              <div className="check-icon flex-shrink-0 mt-1">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-card-foreground/80">
                <strong>Assistente de Alívio 24/7:</strong> fale o caos a qualquer hora e receba ordem imediata.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="check-icon flex-shrink-0 mt-1">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-card-foreground/80">
                <strong>O Copiloto de Potencial:</strong> a cada 6 dias, receba seu Raio-X de evolução para garantir que nenhum talento seja desperdiçado.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="check-icon flex-shrink-0 mt-1">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-card-foreground/80">
                <strong>A Tribo dos Founders:</strong> acesso exclusivo à nossa comunidade secreta onde ninguém solta a mão de ninguém.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="check-icon flex-shrink-0 mt-1">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-card-foreground/80">
                <strong>BÔNUS:</strong> 40% de desconto no plano anual à vista.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PriceAnchoringSection;
