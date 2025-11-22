import { AboutSection } from "../components/sections/AboutSection";
import { AlertsSection } from "../components/sections/AlertsSection";
import { DifferenceSection } from "../components/sections/DifferenceSection";
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
      <div className="h-12" />
      {/* <RealtimeAISection /> */}
      {/* <div className="h-12" /> */}
      <DifferenceSection />
      <div className="h-12" />
      <StatsSection />
      <div className="h-12" />
      <AlertsSection />
      <div className="h-12" />
      <SimulatorSection />
      <div className="h-12" />
      <FeaturesSection />
      <div className="h-12" />
      <PricingSection />
      <div className="h-12" />
      <TestimonialsSection />
      <div className="h-12" />
      <FAQSection />
      <div className="h-12" />
      <AboutSection />
      <div className="h-12" />
      <RoadmapSection />
      <Footer />
    </main>
  );
}
