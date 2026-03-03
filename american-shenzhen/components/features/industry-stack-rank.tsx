"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { industries, Industry } from "@/data/industries";
import { ProgressBar } from "@/components/ui/progress-bar";
import { cn } from "@/lib/utils";

export function IndustryStackRank() {
  const tiers = [
    { name: "The Foundations", score: "Score 13-15", data: industries.filter(i => i.tier === "Foundations") },
    { name: "The Accelerators", score: "Score 11-12", data: industries.filter(i => i.tier === "Accelerators") },
    { name: "The Enablers", score: "Score 9-10", data: industries.filter(i => i.tier === "Enablers") },
  ];

  return (
    <div className="space-y-16 my-16">
      {tiers.map((tier) => (
        <div key={tier.name} className="space-y-6">
          <div className="flex items-baseline justify-between border-b border-border pb-2">
            <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
            <span className="text-sm font-mono text-muted-foreground">{tier.score}</span>
          </div>
          
          <div className="space-y-4">
            {tier.data.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function IndustryCard({ industry }: { industry: Industry }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className={cn(
        "rounded-xl border transition-all duration-300 overflow-hidden",
        isOpen ? "bg-secondary/30 border-blue-900/30" : "bg-card border-border hover:border-border/80"
      )}
      initial={false}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 focus:outline-none"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={cn(
              "flex items-center justify-center h-8 w-8 rounded-full text-sm font-bold font-mono transition-colors",
              isOpen ? "bg-blue-600 text-white" : "bg-secondary text-muted-foreground"
            )}>
              {industry.rank}
            </div>
            <h4 className="text-lg font-semibold text-foreground pr-4">{industry.name}</h4>
          </div>
          
          <div className="flex items-center gap-6 shrink-0">
             <div className="hidden md:flex gap-4">
                <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Total Score</span>
                    <span className="text-xl font-bold font-mono text-blue-400">{industry.score.total}</span>
                </div>
             </div>
             <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform duration-300", isOpen && "rotate-180")} />
          </div>
        </div>

        {/* Always visible stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-4 border-t border-border/50">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-muted-foreground w-8">EC</span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1.5 w-8 rounded-sm transition-all duration-300",
                    industry.score.ec > i ? "bg-blue-500" : "bg-secondary"
                  )}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-muted-foreground w-8">VR</span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1.5 w-8 rounded-sm transition-all duration-300",
                    industry.score.vr > i ? "bg-green-500" : "bg-secondary"
                  )}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-muted-foreground w-8">DU</span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-1.5 w-8 rounded-sm transition-all duration-300",
                    industry.score.du > i ? "bg-red-500" : "bg-secondary"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0 space-y-8">
              {/* Description */}
              <div className="prose max-w-none text-sm text-muted-foreground pt-4">
                <p>{industry.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div>
                        <strong className="text-foreground block mb-2">Venture Return Case</strong>
                        <p className="mt-0">{industry.ventureCase}</p>
                    </div>
                    <div>
                        <strong className="text-foreground block mb-2">Dual-Use Case</strong>
                        <p className="mt-0">{industry.dualUseCase}</p>
                    </div>
                </div>
              </div>

              {/* Companies */}
              <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                <h5 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">American Shenzhen Map</h5>
                <div className="flex flex-wrap gap-2">
                  {industry.companies.map((company) => (
                    <a 
                      key={company.name} 
                      href={company.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary hover:bg-secondary/80 text-xs text-foreground transition-colors border border-border/50 hover:border-blue-500/30"
                    >
                      {company.name}
                      <ExternalLink className="h-3 w-3 opacity-50" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
