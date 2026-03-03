import { Section } from "@/components/ui/section";
import { ThesisIntro } from "@/components/features/thesis-intro";
import { SpeedThesis } from "@/components/features/speed-thesis";
import { DualUseImperative } from "@/components/features/dual-use-imperative";
import { IndustryStackRank } from "@/components/features/industry-stack-rank";
import { SupplyChainBlueprint } from "@/components/features/supply-chain-blueprint";
import { MarketValidation } from "@/components/features/market-validation";
import { CompanyDirectory } from "@/components/features/company-directory";
import { SourcesList } from "@/components/features/sources-list";
import { Hero } from "@/components/features/hero";
import { SectionHeader } from "@/components/ui/section-header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-blue-500/30 selection:text-blue-200">
      <Hero />
      
      <Section className="pt-24 pb-12">
        <div id="intro">
          <ThesisIntro />
        </div>

        <SectionHeader 
          id="thesis" 
          title="Part I: The Speed Thesis" 
          description="Every macro tailwind is aligned. Technology is finally advanced enough to rebuild manufacturing end to end. There has never been a better time to go vertical."
          className="mt-32"
        />
        <div className="mt-12">
          <SpeedThesis />
        </div>
        
        <SectionHeader 
          id="dual-use" 
          title="Part II: The Dual-Use Imperative" 
          description="Pure defense is a strategic blunder. Even the Pentagon wants commercial-first companies. The optimal revenue mix is 75/25 commercial/defense."
          className="mt-32"
        />
        <div className="mt-12">
          <DualUseImperative />
        </div>
        
        <SectionHeader 
          id="stack-rank" 
          title="Part III: The Stack Ranking" 
          description="Each category is evaluated on three dimensions: Ecosystem Criticality, Venture Return Potential, and Dual-Use Fit. Max score is 15."
          className="mt-32"
        />
        <div className="mt-12">
          <IndustryStackRank />
        </div>

        <SectionHeader 
          id="blueprint" 
          title="The Supply Chain Blueprint" 
          description="Mapping the 12 categories into a concrete '2-hour supply chain' radius. Density creates speed."
          className="mt-32"
        />
        <div className="mt-12">
          <SupplyChainBlueprint />
        </div>

        <SectionHeader 
          id="market" 
          title="Market Validation" 
          description="Tech-enabled manufacturing is being repriced as a distinct asset class. Multiples, exit rates, and capital flows all point the same direction."
          className="mt-32"
        />
        <div className="mt-12">
          <MarketValidation />
        </div>

        <SectionHeader 
          id="directory" 
          title="Company Directory" 
          description="The builders constructing American Shenzhen today."
          className="mt-32"
        />
        <div className="mt-12">
          <CompanyDirectory />
          <SourcesList />
        </div>
      </Section>
    </main>
  );
}
