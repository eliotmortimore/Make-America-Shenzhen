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

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-blue-500/30 selection:text-blue-200">
      <Hero />
      
      <Section className="pt-24 pb-12">
        <ThesisIntro />

        <div className="mt-32" id="thesis">
          <SpeedThesis />
        </div>
        
        <div className="mt-32">
          <DualUseImperative />
        </div>
        
        <div className="mt-24" id="stack-rank">
          <div className="prose prose-invert lg:prose-xl mx-auto mb-12">
            <h2>Part III: The Stack Ranking</h2>
            <p>
              Each category is evaluated on three dimensions scored 1-5: Ecosystem Criticality (EC), Venture Return Potential (VR), and Dual-Use Fit (DU). Composite Score = EC + VR + DU (max 15).
            </p>
          </div>
          <IndustryStackRank />
        </div>

        <div className="mt-32">
          <SupplyChainBlueprint />
        </div>

        <div className="mt-32">
          <MarketValidation />
        </div>

        <div className="mt-32">
          <CompanyDirectory />
          <SourcesList />
        </div>
        </div>
      </Section>
    </main>
  );
}
