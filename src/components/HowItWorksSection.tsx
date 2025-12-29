import { motion } from "framer-motion";
import { Brain, Sparkles, Moon, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Clareza Real",
    description: "Veja suas tarefas organizadas automaticamente.",
  },
  {
    icon: Sparkles,
    title: "Dicas Personalizadas",
    description: "Receba insights baseados no seu padrão.",
  },
  {
    icon: Moon,
    title: "Paz Mental",
    description: "Durma tranquilo sabendo que nada foi esquecido.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-light-section py-20 px-4">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-card-foreground mb-4">
            O que é o <span className="text-primary">Desafoga TDAH</span>?
          </h2>
          <p className="text-2xl font-bold text-secondary">
            O seu "Cérebro Extra".
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  Seu assistente virtual no WhatsApp
                </h3>
                <p className="text-card-foreground/80">
                  Você <strong>pensa</strong> e <strong>fala</strong>. O Desafoga{" "}
                  <strong>anota</strong> e <strong>organiza</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  Assistente Personalizado de Evolução
                </h3>
                <p className="text-card-foreground/80">
                  A cada 6 dias, receba um{" "}
                  <strong className="text-primary">Raio-X da sua semana</strong>.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/10 border border-border/20"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-card-foreground">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-card-foreground/70">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary"
          >
            QUERO MEU DESAFOGA AGORA
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
