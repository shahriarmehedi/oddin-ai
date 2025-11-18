import { AboutSection } from "../components/sections/AboutSection";
import { FAQSection } from "../components/sections/FAQSection";
import { FeaturesSection } from "../components/sections/FeaturesSection";
import { HeroSection } from "../components/sections/Hero";
import { RealtimeAISection } from "../components/sections/RealtimeAI";
import { RoadmapSection } from "../components/sections/RoadmapSection";
import { SimulatorSection } from "../components/sections/SimulatorSection";
import { StatsSection } from "../components/sections/StatsSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { PricingSection } from "../components/sections/PricingSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-night text-white">
      <HeroSection />
      <RealtimeAISection />
      <StatsSection />
      <SimulatorSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <AboutSection />
      <RoadmapSection />
      <Footer />
    </main>
  );
}
