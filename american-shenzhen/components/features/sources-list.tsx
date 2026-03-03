"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SourcesList() {
  const [isOpen, setIsOpen] = useState(false);

  const sources = [
    { title: "Reshoring as 2026 Investment Theme", url: "https://www.stockinvestor.com/64114/reshoring-of-u-s-manufacturing-a-major-2026-investment-theme/" },
    { title: "Six Months In: Tariffs and Manufacturing", url: "https://www.scmr.com/article/tariffs-us-manufacturing-reshoring-impact-2025" },
    { title: "Anduril $30.5B Valuation (CNBC)", url: "https://www.cnbc.com/2025/06/05/anduril-valuation-founders-fund.html" },
    { title: "Anduril Revenue Estimates (Sacra)", url: "https://sacra.com/c/anduril/" },
    { title: "Hadrian $1.6B Valuation (Robot Report)", url: "https://www.therobotreport.com/hadrian-brings-in-additional-funding-bringing-its-valuation-to-1-6b/" },
    { title: "Hadrian $260M Series C (CNBC)", url: "https://www.cnbc.com/2025/07/17/hadrian-funding-round-thiel-founders-fund.html" },
    { title: "Varda $500M Valuation (Caproasia)", url: "https://www.caproasia.com/2025/07/13/united-states-commercial-space-infrastructure-startup-varda-space-industries-raised-187-million-in-series-c-funding-at-500-million-valuation-founded-in-2021-by-will-bruey-delian-asparouhov-inves/" },
    { title: "Industrial EBITDA Multiples 14.7x (Clearly Acquired)", url: "https://www.clearlyacquired.com/blog/valuation-multiples-for-manufacturing-industrial-businesses" },
    { title: "EBITDA Multiples by Industry (Equidam)", url: "https://www.equidam.com/ebitda-multiples-trbc-industries/" },
    { title: "Wright's Law (ARK Invest)", url: "https://www.ark-invest.com/wrights-law" },
    { title: "Deep Tech Exit Rates vs SaaS", url: "https://every.to/p/why-you-should-build-in-deep-tech" },
    { title: "Defense Tech $49.1B in 2025 (Defense News)", url: "https://www.defensenews.com/industry/2026/01/20/defense-tech-startups-had-their-best-funding-year-ever-in-2025/" },
    { title: "DoD Acquisition Reform / WAS (WilmerHale)", url: "https://www.wilmerhale.com/en/insights/client-alerts/20251111-defense-acquisition-system-reforms-legal-implications-for-industry" },
    { title: "FY2026 NDAA Nontraditional Contractor Reforms (Crowell)", url: "https://www.crowell.com/en/insights/client-alerts/the-fy-2026-national-defense-authorization-act" },
    { title: "Dual-Use Technologies 2025 Report (Mind the Bridge)", url: "https://mindthebridge.com/dual-use-technologies-2025-report/" },
    { title: "Dual-Use Market Premium (CEPR)", url: "https://cepr.org/voxeu/columns/beyond-military-sales-market-premium-dual-use-research-and-development" },
    { title: "Palantir Revenue Split (36kr)", url: "https://eu.36kr.com/en/p/3423362767870088" },
    { title: "SpaceX Government Contracts (Built In)", url: "https://builtin.com/articles/elon-musk-government-contracts" },
    { title: "CHIPS Act Advanced Packaging $1.4B (NIST)", url: "https://www.nist.gov/news-events/news/2025/01/us-department-commerce-announces-14-billion-final-awards-support-next" },
    { title: "Amkor $7B Arizona Campus", url: "https://ir.amkor.com/news-releases/news-release-details/amkor-technology-breaks-ground-new-semiconductor-advanced" },
    { title: "98% Advanced Packaging Offshore (Georgetown CSET)", url: "https://cset.georgetown.edu/publication/re-shoring-advanced-semiconductor-packaging/" },
    { title: "PCB Reshoring and Tariffs (MacroFab)", url: "https://www.macrofab.com/blog/pcbas-made-in-america/" },
    { title: "Battery Startups $19.9B in 2024 (Crunchbase)", url: "https://news.crunchbase.com/clean-tech-and-energy/ev-battery-investment-verkor-redwood/" },
    { title: "Northvolt Bankruptcy (Wikipedia)", url: "https://en.wikipedia.org/wiki/Northvolt" },
    { title: "China Battery Export Controls (Forge Nano)", url: "https://www.forgenano.com/as-china-halts-battery-exports-americas-gigafactory-becomes-indispensable/" },
    { title: "Robotics $10.3B in 2025 (Crunchbase)", url: "https://news.crunchbase.com/robotics/startup-funding-rises-h1-2025-ai-apptronik-data/" },
    { title: "Shenzhen Ecosystem (Diamandis)", url: "https://www.diamandis.com/blog/shenzhen-global-hardware-capital" },
    { title: "Shenzhen Supplier Density (itimanufacturing)", url: "https://itimanufacturing.com/silicon-valley-hardware-made-china/" },
    { title: "Defense Tech VC Trends Q4 2025 (PitchBook)", url: "https://pitchbook.com/news/reports/q4-2025-defense-tech-vc-trends" },
    { title: "Scaling Nontraditional Defense Innovation (DIB)", url: "https://innovation.defense.gov/Portals/63/DIB%20Scaling%20Nontraditional%20Defense%20Innovation%20250113%20PUBLISHED.pdf" },
    { title: "Oliver Hsu, \"A Primer on Factory Economics for Startups\" (a16z, 2026)", url: "https://a16z.com/a-primer-on-factory-economics-for-startups/" },
  ];

  return (
    <div className="border-t border-border mt-32 py-12">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <span className="font-semibold uppercase tracking-wider">Sources & Citations</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 pb-12">
              {sources.map((source, i) => (
                <a 
                  key={i}
                  href={source.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 text-xs text-muted-foreground hover:text-blue-400 transition-colors py-1"
                >
                  <span className="text-muted-foreground/30 font-mono w-4 shrink-0 text-right">{i+1}.</span>
                  <span className="truncate">{source.title}</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center text-xs text-muted-foreground/30 font-mono mt-12">
        built by Eliot Mortimore written by Aaron Slodov
      </div>
    </div>
  );
}
