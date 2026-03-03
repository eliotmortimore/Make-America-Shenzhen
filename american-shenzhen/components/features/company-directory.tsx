"use client";

import { useState } from "react";
import { industries } from "@/data/industries";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function CompanyDirectory() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const allCompanies = industries.flatMap(ind => 
    ind.companies.map(comp => ({
      ...comp,
      tier: ind.tier,
      industry: ind.name,
      rank: ind.rank
    }))
  );

  const filtered = allCompanies.filter(comp => {
    const matchesTier = filter === "all" || comp.tier === filter;
    const matchesSearch = comp.name.toLowerCase().includes(search.toLowerCase()) || 
                          comp.industry.toLowerCase().includes(search.toLowerCase());
    return matchesTier && matchesSearch;
  });

  return (
    <div className="space-y-8 my-16">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <h3 className="text-2xl font-bold text-foreground">The Directory</h3>
        
        <div className="flex items-center gap-2 bg-secondary/50 rounded-lg p-1 border border-border">
          {["all", "Foundations", "Accelerators", "Enablers"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === f 
                  ? "bg-blue-600 text-white shadow-sm" 
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {f === "all" ? "All Tiers" : f}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <input 
          type="text"
          placeholder="Search companies or industries..."
          className="w-full bg-card border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((comp) => (
            <motion.a
              key={comp.name + comp.industry}
              href={comp.url}
              target="_blank"
              rel="noopener noreferrer"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col justify-between p-4 bg-card hover:bg-secondary/40 border border-border/50 hover:border-blue-500/30 rounded-xl transition-all"
            >
              <div>
                <div className="flex items-start justify-between mb-2">
                  <span className="font-semibold text-foreground group-hover:text-blue-400 transition-colors">{comp.name}</span>
                  <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-xs text-muted-foreground line-clamp-2 mb-3">{comp.industry}</span>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/30">
                <Badge variant={comp.tier === "Foundations" ? "default" : comp.tier === "Accelerators" ? "secondary" : "outline"} className="text-[10px] h-5 px-2">
                  {comp.tier}
                </Badge>
                {comp.location && (
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {comp.location}
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
      
      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No companies found matching your criteria.
        </div>
      )}

      {/* CTA Button */}
      <div className="flex justify-center mt-16">
        <a 
          href="https://reindustrialize.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2"
        >
          Meet Other Reindustrialists
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
