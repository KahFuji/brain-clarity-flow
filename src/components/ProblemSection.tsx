import { motion } from "framer-motion";
import { Check } from "lucide-react";
import problemPhoto from "@/assets/problem-photo.png";

const painPoints = [
  {
    title: "Familiaridade",
    description: "Algo que já uso todo dia.",
  },
  {
    title: "Praticidade",
    description: "Zero barreiras.",
  },
  {
    title: "Dopamina",
    description: "O prazer visual do 'check'.",
  },
];

const ProblemSection = () => {
  return (
    <section className="bg-dark-section py-20 px-4">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 order-2 md:order-1"
          >
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-foreground italic border-l-4 border-secondary pl-6"
            >
              "Eu precisava de uma ferramenta que não criasse obstáculos para a
              minha mente."
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Passei anos pulando de app em app... Percebi que precisava de{" "}
              <strong className="text-secondary">3 coisas:</strong>
            </motion.p>

            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="check-icon">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary">
                      {point.title}:
                    </h4>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={problemPhoto}
                alt="Mulher relaxada e organizada"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
