"use client";

import { motion } from "framer-motion";

export function ValuationStats() {
  return (
    <div className="my-16 bg-card rounded-2xl p-8 border border-border">
      <h3 className="text-xl font-bold mb-8 text-center text-foreground">The Multiple Expansion</h3>
      
      <div className="flex items-end justify-center gap-16 h-64 font-mono">
        {/* 2024 Bar */}
        <div className="flex flex-col items-center gap-2 group">
          <span className="text-2xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">8.0x</span>
          <motion.div 
            className="w-24 bg-secondary rounded-t-lg relative overflow-hidden"
            initial={{ height: 0 }}
            whileInView={{ height: "160px" }} // 8.0 * 20
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
          <span className="text-sm text-muted-foreground font-semibold">2024</span>
          <span className="text-xs text-muted-foreground/60">Median Industrial EV/EBITDA</span>
        </div>

        {/* 2025 Bar */}
        <div className="flex flex-col items-center gap-2 group relative">
          <motion.span 
            className="text-4xl font-bold text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            14.7x
          </motion.span>
          <motion.div 
            className="w-24 bg-blue-600 rounded-t-lg relative overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            initial={{ height: 0 }}
            whileInView={{ height: "294px" }} // 14.7 * 20
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
             <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent" />
             <div className="absolute top-0 left-0 w-full h-1 bg-white/50 animate-pulse" />
          </motion.div>
          <span className="text-sm text-foreground font-bold">2025</span>
          <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Tech-Enabled Repricing</span>
        </div>
      </div>
    </div>
  );
}
