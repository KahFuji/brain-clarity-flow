import { motion } from "framer-motion";
import founderBadge from "@/assets/founder-badge.png";

const FounderMovementSection = () => {
  return (
    <section className="bg-black py-20 px-4 relative overflow-hidden">

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
            className="p-6 rounded-2xl bg-muted/30 border border-secondary/30 max-w-2xl mx-auto text-left space-y-4"
          >
            <p className="text-lg text-foreground">
              Ser Founder é muito mais do que derrotar o ruído mental.
            </p>
            <p className="text-lg text-foreground">
              É decidir reescrever a própria história e inspirar outros <strong className="text-secondary">neuroDIFERENTES</strong> a viverem o mesmo.
            </p>
            <p className="text-lg text-foreground">
              Ao se tornar um Membro Fundador hoje, você garante:
            </p>
            <p className="text-lg text-foreground">
              <span className="mr-2">🏆</span>
              <strong className="text-secondary">Valor de Inauguração Vitalício:</strong> o Desafoga TDAH vai evoluir e o preço vai subir para os novos.
            </p>
            <p className="text-lg text-foreground">
              Para você, <strong className="text-secondary">nunca</strong>.
            </p>
            <p className="text-lg text-foreground">
              O valor que você pagar hoje será o mesmo para sempre.
            </p>
            <p className="text-lg text-foreground">
              <span className="mr-2">🏆</span>
              <strong className="text-secondary">A Tribo dos Founders:</strong> Acesso exclusivo à nossa comunidade secreta.
            </p>
            <p className="text-lg text-foreground">
              Um lugar seguro onde trocamos estratégias reais e onde, de verdade, <strong className="text-secondary">ninguém solta a mão de ninguém</strong>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderMovementSection;
