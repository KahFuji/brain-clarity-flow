import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como acesso?",
    answer:
      "Acesso imediato pelo WhatsApp! Após a confirmação do pagamento, você recebe o link para adicionar o Desafoga ao seu WhatsApp e começar a usar na hora.",
  },
  {
    question: "Funciona para quem não tem TDAH?",
    answer:
      "Sim! O Desafoga organiza qualquer mente sobrecarregada. Se você sente que tem muitas ideias, tarefas e compromissos para gerenciar, o Desafoga vai te ajudar.",
  },
  {
    question: "Moro fora do Brasil, funciona?",
    answer:
      "Sim! Aceitamos pagamentos em moedas estrangeiras via Stripe. Você pode usar de qualquer lugar do mundo onde tenha WhatsApp.",
  },
  {
    question: "Tenho garantia?",
    answer:
      "Sim! Oferecemos 7 dias de Garantia Incondicional. Se você não ficar satisfeito por qualquer motivo, devolvemos 100% do seu investimento.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-light-section py-20 px-4">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-card-foreground">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-none shadow-md"
              >
                <AccordionTrigger className="text-left text-lg font-bold text-card-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-card-foreground/80 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
