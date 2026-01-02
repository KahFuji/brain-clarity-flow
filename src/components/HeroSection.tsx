import { motion } from "framer-motion";
import logoImage from "@/assets/logo-desafoga-tdah.png";
import founderPhoto from "@/assets/founder-photo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex flex-col px-4 py-8">
      {/* Header: Logo + Headline */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <img
            src={logoImage}
            alt="Desafoga TDAH Logo"
            className="w-40 md:w-52 h-auto drop-shadow-xl"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight text-center md:text-left">
            Menos caos<br />
            <span className="text-secondary">Mais clareza e tempo</span><br />
            para o que realmente importa
          </h1>
        </div>
      </motion.div>

      {/* Content: Photo + Text + CTA */}
      <div className="flex-1 flex items-center justify-center mt-12 md:mt-16">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto md:mx-0">
                <img
                  src={founderPhoto}
                  alt="Fundadora do Desafoga TDAH"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/20 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6 text-center md:text-left"
            >
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                <strong>Ganhe até 1-2 horas produtivas por dia</strong>, mesmo com TDAH.<br /><br />
                Com seu agente de IA que organiza suas ideias em{" "}
                <span className="text-secondary font-bold">checklists práticos</span> e um{" "}
                <span className="text-secondary font-bold">raio-x semanal</span>.
              </p>

              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeWh2p5NW3OMSoM8NS-w2jFuADZxr4a-QGB1HVaBbZTGkcbQw/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary animate-pulse inline-block"
              >
                ENTRE PARA A LISTA DE ESPERA
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
