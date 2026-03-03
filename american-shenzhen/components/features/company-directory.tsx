"use client";

import { useState, useMemo } from "react";
import { industries } from "@/data/industries";
import { CITY_LOCATIONS } from "@/data/locations";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

// Dynamically import the map component so it only loads on the client
// This is required because Leaflet depends on the window object
const InteractiveMap = dynamic(() => import("@/components/ui/interactive-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#111] text-muted-foreground animate-pulse">
      Loading Map...
    </div>
  ),
});

export function CompanyDirectory() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const allCompanies = useMemo(() => industries.flatMap(ind => 
    ind.companies.map(comp => ({
      ...comp,
      tier: ind.tier,
      industry: ind.name,
      rank: ind.rank,
      coords: CITY_LOCATIONS[comp.location || ""] || CITY_LOCATIONS["United States"]
    }))
  ), []);

  const filtered = allCompanies.filter(comp => {
    const matchesTier = filter === "all" || comp.tier === filter;
    const matchesSearch = comp.name.toLowerCase().includes(search.toLowerCase()) || 
                          comp.industry.toLowerCase().includes(search.toLowerCase()) ||
                          (comp.location && comp.location.toLowerCase().includes(search.toLowerCase()));
    return matchesTier && matchesSearch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedCompanies = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="space-y-12 my-16">
      
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-end md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">American Shenzhen Map</h2>
            <p className="text-muted-foreground">The geography of reindustrialization.</p>
          </div>
          
          <div className="flex items-center gap-2 bg-secondary/50 rounded-lg p-1 border border-white/10">
            {["all", "Foundations", "Accelerators", "Enablers"].map((f) => (
              <button
                key={f}
                onClick={() => { setFilter(f); setPage(1); }}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-md transition-all",
                  filter === f 
                    ? f === "all" 
                      ? "bg-white/10 text-white shadow-sm"
                      : f === "Foundations"
                        ? "bg-blue-600 text-white shadow-sm"
                        : f === "Accelerators"
                          ? "bg-purple-600 text-white shadow-sm"
                          : "bg-orange-600 text-white shadow-sm"
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                )}
              >
                {f === "all" ? "All" : f}
              </button>
            ))}
          </div>
        </div>

        {/* Map Visualization */}
        <div className="relative w-full h-[500px] bg-black/40 rounded-3xl border border-white/10 overflow-hidden shadow-2xl z-0">
           <InteractiveMap 
             companies={filtered} 
             hoveredCompany={hoveredCompany} 
             onHover={setHoveredCompany} 
           />
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto w-full">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <input 
            type="text"
            placeholder="Search companies, locations, or tiers..."
            className="w-full bg-secondary/20 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
        </div>

        {/* Company List (Grid on Desktop, Paginated on Mobile) */}
        <div className="space-y-6">
           {/* Desktop Grid */}
           <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((comp) => (
                <CompanyCard 
                  key={comp.name} 
                  comp={comp} 
                  onHover={setHoveredCompany} 
                  isHovered={hoveredCompany === comp.name}
                />
              ))}
            </AnimatePresence>
           </div>

           {/* Mobile Paginated List */}
           <div className="md:hidden space-y-4">
             <AnimatePresence mode="wait">
               {paginatedCompanies.map((comp) => (
                 <CompanyCard 
                   key={comp.name} 
                   comp={comp} 
                   onHover={setHoveredCompany}
                   isHovered={hoveredCompany === comp.name}
                 />
               ))}
             </AnimatePresence>
             
             {totalPages > 1 && (
               <div className="flex justify-between items-center pt-4">
                 <button 
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="p-2 rounded-lg bg-secondary/30 disabled:opacity-50 text-white"
                 >
                   <ChevronLeft className="h-4 w-4" />
                 </button>
                 <span className="text-sm text-muted-foreground">
                   Page {page} of {totalPages}
                 </span>
                 <button 
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="p-2 rounded-lg bg-secondary/30 disabled:opacity-50 text-white"
                 >
                   <ChevronRight className="h-4 w-4" />
                 </button>
               </div>
             )}
           </div>
        </div>

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

function CompanyCard({ comp, onHover, isHovered }: { comp: any, onHover: (name: string | null) => void, isHovered: boolean }) {
  return (
    <motion.a
      href={comp.url}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        scale: isHovered ? 1.02 : 1,
        borderColor: isHovered ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.1)"
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      onMouseEnter={() => onHover(comp.name)}
      onMouseLeave={() => onHover(null)}
      className="group flex flex-col justify-between p-4 bg-card/50 hover:bg-secondary/40 border border-white/5 rounded-xl transition-all h-full"
    >
      <div>
        <div className="flex items-start justify-between mb-2">
          <span className={cn("font-semibold text-white transition-colors", isHovered && "text-blue-400")}>
            {comp.name}
          </span>
          <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-xs text-muted-foreground line-clamp-2 mb-3">{comp.industry}</span>
      </div>
      
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
        <Badge 
          className={cn(
            "text-[10px] h-5 px-2 border-0", 
            comp.tier === "Foundations" ? "bg-blue-500/20 text-blue-400" : 
            comp.tier === "Accelerators" ? "bg-purple-500/20 text-purple-400" : 
            "bg-orange-500/20 text-orange-400"
          )}
        >
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
  );
}
