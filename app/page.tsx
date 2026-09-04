import { HeroSection } from "@/components/sections/HeroSection";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { AttentionCounter } from "@/components/sections/AttentionCounter";
import { ViralEvolution } from "@/components/sections/ViralEvolution";
import { PinnedCaseStudies } from "@/components/sections/PinnedCaseStudies";
import { CreatorConstellation } from "@/components/sections/CreatorConstellation";
import { ServicesAccordion } from "@/components/sections/ServicesAccordion";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/common/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutTeaser />
      <AttentionCounter />
      <ViralEvolution />
      <PinnedCaseStudies />
      <CreatorConstellation />
      <ServicesAccordion />
      <ClientMarquee />
      <CallToAction />
      <Footer />
    </>
  );
}
