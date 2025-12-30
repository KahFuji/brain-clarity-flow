import { motion } from "framer-motion";

const benefits = [
  {
    title: "Clareza Real:",
    description: "Veja de forma clara tudo o que você realizou (para parar de achar que não fez nada).",
  },
  {
    title: "Dicas Personalizadas:",
    description: "Receba sugestões práticas para destravar seu potencial baseadas na sua neuroDIFERENÇA.",
  },
  {
    title: "Paz Mental:",
    description: "A segurança de ter um 'copiloto' monitorando sua rota para que nenhum talento seja desperdiçado.",
  },
];

const EvolutionAssistantSection = () => {
  return (
    <section className="bg-black py-20 px-4">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-lg text-foreground font-bold uppercase tracking-wide">
            VOCÊ NÃO ESTÁ MAIS SOZINHO NA JORNADA.
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
            O seu Assistente Personalizado de Evolução.
          </h2>

          <p className="text-lg text-muted-foreground">
            Mais do que organizar seu dia, o Desafoga TDAH aprende com você.
          </p>

          <p className="text-lg text-muted-foreground">
            A cada <strong className="text-secondary">6 dias</strong> trocando mensagens, seu assistente analisa seus padrões e te envia um <strong className="text-secondary">Raio-X da sua semana</strong>.
          </p>

          <p className="text-lg text-muted-foreground">
            dessa experiência juntos de 6 em 6 dias.
          </p>

          <p className="text-lg text-muted-foreground">
            Assim, você terá mais clareza sobre suas atividades e o Desafoga TDAH irá
          </p>

          <p className="text-lg text-foreground font-semibold">
            trazer dicas para liberar seu potencial
          </p>

          <p className="text-lg text-foreground font-bold mt-6">
            O que você ganha com isso?
          </p>

          <ul className="space-y-4 mt-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-2"
              >
                <span className="text-secondary">•</span>
                <p className="text-muted-foreground">
                  <strong className="text-secondary">{benefit.title}</strong> {benefit.description}
                </p>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <div className="relative inline-block">
              {/* Animated border container */}
              <div className="absolute -inset-[1px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,hsl(73_96%_46%)_0deg,transparent_60deg,transparent_300deg,hsl(73_96%_46%)_360deg)] animate-spin-slow" />
              </div>
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeWh2p5NW3OMSoM8NS-w2jFuADZxr4a-QGB1HVaBbZTGkcbQw/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-8 py-4 text-lg font-bold rounded-xl bg-zinc-900 text-foreground inline-block border border-zinc-700"
              >
                Entre para a lista de espera
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EvolutionAssistantSection;
