"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Target, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function MarketValidation() {
  return (
    <div className="space-y-16">
      <div className="space-y-6">
        <Badge variant="outline" className="w-fit">The Market Signal</Badge>
        <h2 className="text-3xl md:text-5xl font-bold text-white">The Market Is Catching On</h2>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Tech-enabled manufacturing is not traditional manufacturing. It is a new asset class being repriced in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* The Deep Tech Paradox */}
        <Card className="p-8 bg-gradient-to-b from-blue-950/10 to-background border-blue-900/20 space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-400" />
              The Deep Tech Return Paradox
            </h3>
            <p className="text-sm text-muted-foreground">
              Probability of achieving a $250M+ exit
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white font-medium">Deep Tech (Defense, Space, Bio)</span>
                <span className="text-green-400 font-bold font-mono">2 - 5%</span>
              </div>
              <div className="h-8 bg-secondary/50 rounded-md overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1 }}
                  className="h-full bg-green-500/80"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Traditional Tech (SaaS, Fintech)</span>
                <span className="text-muted-foreground font-mono">1 - 1.5%</span>
              </div>
              <div className="h-8 bg-secondary/50 rounded-md overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "25%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-slate-500/50"
                />
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/5">
              <p className="text-sm text-blue-200/70 italic">
                "The per-company probability of a large exit is roughly twice as high in deep tech as in software."
              </p>
            </div>
          </div>
        </Card>

        {/* Valuation Repricing */}
        <div className="grid grid-cols-1 gap-4">
          <Card className="p-6 bg-card border-white/5 flex items-center gap-6">
            <div className="h-16 w-16 rounded-full bg-green-950/30 border border-green-500/20 flex items-center justify-center shrink-0">
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Median Acquisition Multiple</div>
              <div className="text-4xl font-bold text-white font-mono">14.7x</div>
              <div className="text-sm text-green-400 flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3" />
                Up from 8x (2025)
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-white/5 flex items-center gap-6">
            <div className="h-16 w-16 rounded-full bg-purple-950/30 border border-purple-500/20 flex items-center justify-center shrink-0">
              <TrendingUp className="h-8 w-8 text-purple-400" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Industrial Robotics CAGR</div>
              <div className="text-4xl font-bold text-white font-mono">10%+</div>
              <div className="text-sm text-purple-400">
                $55B+ Market Size
              </div>
            </div>
          </Card>
          
          <Card className="p-6 bg-card border-white/5">
            <p className="text-sm text-muted-foreground">
              <strong className="text-white">The repricing has barely started.</strong> Manufacturing companies with proprietary process IP and software-driven yield are a new asset class.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
