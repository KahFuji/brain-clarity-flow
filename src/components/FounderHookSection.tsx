import { motion } from "framer-motion";
import founderPhoto from "@/assets/founder-photo.png";

const FounderHookSection = () => {
  return (
    <section className="bg-light-section py-20 px-4">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={founderPhoto}
                alt="Fundadora do Desafoga TDAH"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-lg glow-lime">
              <span className="text-3xl">💡</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-card-foreground leading-tight">
              Trabalhar não precisa ser uma{" "}
              <span className="text-primary">tortura.</span>
            </h2>

            <p className="text-xl text-card-foreground/80 leading-relaxed">
              Transforme o caos em realização{" "}
              <strong className="text-primary">em minutos</strong>, apenas usando
              sua voz.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary animate-pulse"
            >
              QUERO ME ORGANIZAR EM MINUTOS
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderHookSection;
