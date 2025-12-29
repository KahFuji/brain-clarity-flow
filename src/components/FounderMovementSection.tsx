import { motion } from "framer-motion";
import founderBadge from "@/assets/founder-badge.png";

const FounderMovementSection = () => {
  return (
    <section className="bg-dark-section py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <img
              src={founderBadge}
              alt="Founder Badge"
              className="mx-auto w-48 md:w-64 h-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-foreground mb-4"
          >
            Seja um ou uma <span className="text-secondary">FOUNDER</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Mais do que usar um app,{" "}
            <strong className="text-foreground">lidere um movimento</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-muted/30 border border-secondary/30 max-w-2xl mx-auto"
          >
            <p className="text-lg text-foreground">
              <span className="text-secondary font-bold">
                Valor de Inauguração Vitalício:
              </span>{" "}
              O preço vai subir para novos, mas para você,{" "}
              <strong className="text-secondary">nunca</strong>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderMovementSection;
