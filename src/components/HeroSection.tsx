import { motion } from "framer-motion";
import logoImage from "@/assets/logo-desafoga-tdah.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-dark-section flex items-center justify-center px-4 py-20">
      <div className="container max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={logoImage}
            alt="Desafoga TDAH Logo"
            className="mx-auto w-72 md:w-96 h-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl font-extrabold text-foreground mb-6"
        >
          Desafoga <span className="text-secondary">TDAH</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          DERROTE O RUÍDO DA MENTE TDAH E{" "}
          <span className="text-secondary font-bold">RESGATE SEU POTENCIAL.</span>
        </motion.p>

      </div>
    </section>
  );
};

export default HeroSection;
