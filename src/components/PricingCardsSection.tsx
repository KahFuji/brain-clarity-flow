import { motion } from "framer-motion";
import { CreditCard, Wallet } from "lucide-react";

const PricingCardsSection = () => {
  return (
    <section className="bg-dark-section py-20 px-4">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Escolha sua forma de pagamento
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Credit Card Option */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="px-4 py-2 rounded-full bg-secondary text-accent-foreground font-bold text-sm">
                MAIS POPULAR
              </span>
            </div>

            <div className="card-light h-full flex flex-col border-2 border-secondary">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">
                  Cartão de Crédito
                </h3>
              </div>

              <div className="space-y-2 mb-6">
                <p className="text-lg text-card-foreground/60 line-through">
                  De R$ 708
                </p>
                <p className="text-4xl font-extrabold text-primary">
                  R$ 424
                  <span className="text-lg font-normal text-card-foreground/70">
                    {" "}à vista
                  </span>
                </p>
                <p className="text-lg text-card-foreground/80">
                  Ou <strong className="text-primary">12x de R$ 59</strong>
                </p>
              </div>

              <div className="mt-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full"
                >
                  FAZER MINHA MATRÍCULA
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Boleto/Pix Option */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-light h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">
                  Boleto / Pix
                </h3>
              </div>

              <div className="space-y-2 mb-6">
                <p className="text-lg text-card-foreground/60 line-through">
                  De R$ 708
                </p>
                <p className="text-4xl font-extrabold text-primary">
                  R$ 424
                  <span className="text-lg font-normal text-card-foreground/70">
                    {" "}à vista
                  </span>
                </p>
                <p className="text-lg text-card-foreground/80">
                  Pagamento único com <strong className="text-secondary">desconto máximo</strong>
                </p>
              </div>

              <div className="mt-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary w-full"
                >
                  PAGAR COM PIX / BOLETO
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground">
            🔒 Pagamento 100% seguro • Acesso imediato
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCardsSection;
