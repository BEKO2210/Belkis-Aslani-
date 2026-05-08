import { Navigation } from "./components/Navigation";
import { HeroScrollScene } from "./components/HeroScrollScene";
import { AboutSection } from "./sections/AboutSection";
import { PositioningSection } from "./sections/PositioningSection";
import { NeuroBrainSection } from "./sections/NeuroBrainSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProcessSection } from "./sections/ProcessSection";
import { TrustSection } from "./sections/TrustSection";
import { ShowcaseSection } from "./sections/ShowcaseSection";
import { CTASection } from "./sections/CTASection";
import { Footer } from "./sections/Footer";
import { useLenisGsap } from "./hooks/useLenisGsap";

export default function App() {
  useLenisGsap(true);

  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-ink-950 text-bone">
      <Navigation />
      <main>
        <HeroScrollScene />
        <AboutSection />
        <PositioningSection />
        <NeuroBrainSection />
        <ServicesSection />
        <ProcessSection />
        <TrustSection />
        <ShowcaseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
