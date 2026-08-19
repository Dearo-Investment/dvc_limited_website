import { Hero } from "../components/home/Hero";
import { TrustIntro } from "../components/home/TrustIntro";
import { AboutSection } from "../components/home/AboutSection";
import { InvestmentSectors } from "../components/home/InvestmentSectors";
import { InvestmentApproach } from "../components/home/InvestmentApproach";
import { PortfolioPreview } from "../components/home/PortfolioPreview";
import { ImpactStats } from "../components/home/ImpactStats";
import { WhyDVCCL } from "../components/home/WhyDVCCL";
import { LeadershipPreview } from "../components/home/LeadershipPreview";
import { InsightsPreview } from "../components/home/InsightsPreview";
import { CareersCTA } from "../components/home/CareersCTA";
import { ContactCTA } from "../components/home/ContactCTA";

// Touch file to reload TS
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustIntro />
      <AboutSection />
      <InvestmentSectors />
      <InvestmentApproach />
      <PortfolioPreview />
      <ImpactStats />
      <WhyDVCCL />
      <LeadershipPreview />
      <InsightsPreview />
      <CareersCTA />
      <ContactCTA />
    </div>
  );
}
