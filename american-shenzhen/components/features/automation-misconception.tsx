"use client";

import { motion } from "framer-motion";
import { User, Cog, ArrowRight, TrendingUp } from "lucide-react";

export function AutomationMisconception() {
  return (
    <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 bg-card/30 rounded-2xl p-8 border border-border/50">
      {/* Old Way */}
      <motion.div 
        className="p-6 rounded-xl bg-secondary/20 border border-border/30 relative overflow-hidden"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50" />
        <h4 className="text-lg font-semibold mb-4 text-red-400">The Misconception</h4>
        <p className="text-sm text-muted-foreground mb-6">Replacing humans with machines to save cost.</p>
        
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/50">
              <User className="h-6 w-6 text-orange-400" />
            </div>
            <span className="text-xs text-muted-foreground">Skilled Labor</span>
          </div>
          
          <ArrowRight className="h-6 w-6 text-muted-foreground/50" />
          
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-neutral-500/20 flex items-center justify-center border border-neutral-500/50">
              <Cog className="h-6 w-6 text-neutral-400" />
            </div>
            <span className="text-xs text-muted-foreground">Robot</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border/30 text-center">
          <span className="text-sm font-mono text-muted-foreground">Result: Marginal Savings</span>
        </div>
      </motion.div>

      {/* New Way */}
      <motion.div 
        className="p-6 rounded-xl bg-blue-950/10 border border-blue-500/30 relative overflow-hidden"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
        <h4 className="text-lg font-semibold mb-4 text-blue-400">The Reality: Labor Shifting</h4>
        <p className="text-sm text-muted-foreground mb-6">Amplifying available labor with software.</p>
        
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50">
              <User className="h-6 w-6 text-emerald-400" />
            </div>
            <span className="text-xs text-muted-foreground">Operator</span>
          </div>
          
          <span className="text-2xl font-light text-muted-foreground">+</span>
          
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
              <Cog className="h-6 w-6 text-blue-400 animate-spin-slow" />
            </div>
            <span className="text-xs text-muted-foreground">Software</span>
          </div>

          <ArrowRight className="h-6 w-6 text-blue-500" />

          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/50">
              <TrendingUp className="h-6 w-6 text-purple-400" />
            </div>
            <span className="text-xs text-muted-foreground">10x Output</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-blue-500/20 text-center">
          <span className="text-sm font-mono text-blue-400 font-semibold">Result: Scale & Capability</span>
        </div>
      </motion.div>
    </section>
  );
}
