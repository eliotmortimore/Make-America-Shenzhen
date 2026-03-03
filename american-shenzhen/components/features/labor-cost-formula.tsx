"use client";

import { motion } from "framer-motion";

export function LaborCostFormula() {
  return (
    <div className="bg-card rounded-xl p-8 border border-border/50 backdrop-blur-sm my-12">
      <h3 className="text-xl font-bold mb-6 text-foreground">The Cost Reality Check</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center font-mono">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-4 bg-secondary/30 rounded-lg"
        >
          <div className="text-sm text-muted-foreground mb-2">Raw Material</div>
          <div className="text-2xl font-bold text-blue-400">~15%</div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl text-muted-foreground font-light hidden md:block"
        >
          +
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="p-4 bg-secondary/30 rounded-lg"
        >
          <div className="text-sm text-muted-foreground mb-2">Machine Time</div>
          <div className="text-2xl font-bold text-emerald-400">~10%</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-4xl text-muted-foreground font-light md:col-span-3 hidden md:block my-4"
        >
          +
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="md:col-span-3 p-6 bg-red-500/10 border border-red-500/20 rounded-lg"
        >
          <div className="text-sm text-red-400 mb-2 uppercase tracking-wider font-semibold">The Friction Gap</div>
          <div className="text-4xl font-bold text-foreground">~75%</div>
          <div className="text-sm text-muted-foreground mt-2">Setup, Queue, Overhead, Indirect Labor</div>
        </motion.div>
      </div>

      <p className="mt-6 text-sm text-center text-muted-foreground max-w-lg mx-auto">
        Technology attacks the <span className="text-red-400 font-semibold">75%</span> friction gap. 
        Cheaper labor only optimizes a fraction of the remaining 25%.
      </p>
    </div>
  );
}
