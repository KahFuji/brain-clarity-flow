import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import FounderHookSection from "@/components/FounderHookSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EvolutionAssistantSection from "@/components/EvolutionAssistantSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import FounderMovementSection from "@/components/FounderMovementSection";
import PriceAnchoringSection from "@/components/PriceAnchoringSection";

import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Desafoga TDAH - Derrote o Ruído da Mente e Resgate Seu Potencial</title>
        <meta
          name="description"
          content="Transforme o caos em realização em minutos usando sua voz. Assistente virtual no WhatsApp para organização e produtividade TDAH."
        />
        <meta name="keywords" content="TDAH, organização, produtividade, WhatsApp, assistente virtual, neurodivergente" />
        <link rel="canonical" href="https://desafogatdah.com.br" />
      </Helmet>

      <main className="overflow-hidden">
        <HeroSection />
        <FounderHookSection />
        <ProblemSection />
        <HowItWorksSection />
        <EvolutionAssistantSection />
        <TargetAudienceSection />
        <FounderMovementSection />
        <PriceAnchoringSection />
        
        <FAQSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
