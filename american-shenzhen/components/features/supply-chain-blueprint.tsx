"use client";

import { motion } from "framer-motion";
import { Cpu, Box, FlaskConical, Battery, Database, Truck, ArrowRightLeft, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SupplyChainBlueprint() {
  const layers = [
    { 
      id: "electronics",
      icon: Cpu, 
      title: "Electronics Nervous System", 
      desc: "PCB fabrication, component assembly, stocking",
      color: "text-blue-400",
      border: "border-blue-500/30",
      bg: "bg-blue-500/10"
    },
    { 
      id: "structure",
      icon: Box, 
      title: "Physical Structure", 
      desc: "CNC machining, molding, casting, forging, finishing",
      color: "text-amber-400",
      border: "border-amber-500/30",
      bg: "bg-amber-500/10"
    },
    { 
      id: "materials",
      icon: FlaskConical, 
      title: "Material Refiners", 
      desc: "Polymer compounding, specialty materials, chemicals",
      color: "text-purple-400",
      border: "border-purple-500/30",
      bg: "bg-purple-500/10"
    },
    { 
      id: "energy",
      icon: Battery, 
      title: "Battery & Energy Hub", 
      desc: "Cell components, assembly, pack integration",
      color: "text-green-400",
      border: "border-green-500/30",
      bg: "bg-green-500/10"
    },
    { 
      id: "logistics",
      icon: Database, 
      title: "Testing & Logistics", 
      desc: "Certification labs, micro-logistics, fulfillment",
      color: "text-slate-400",
      border: "border-slate-500/30",
      bg: "bg-slate-500/10"
    },
  ];

  return (
    <div className="space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <Badge variant="outline" className="h-6">The Blueprint</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-white">The 2-Hour Supply Chain</h2>
        <p className="text-muted-foreground">
          The American Shenzhen network effect is not merely geographic proximity. It is <strong className="text-white">temporal density</strong>.
        </p>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* The Stack Visualization */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
          
          <div className="space-y-4">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8"
              >
                {/* Connecting Dot */}
                <div className="absolute left-[29px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                
                <Card className={cn(
                  "p-4 flex items-center gap-4 transition-all hover:bg-secondary/30",
                  "border border-white/5 hover:border-white/10"
                )}>
                  <div className={cn("h-12 w-12 rounded-lg flex items-center justify-center shrink-0", layer.bg)}>
                    <layer.icon className={cn("h-6 w-6", layer.color)} />
                  </div>
                  <div>
                    <h4 className={cn("font-semibold text-sm", layer.color)}>{layer.title}</h4>
                    <p className="text-xs text-muted-foreground">{layer.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Radius Concept */}
        <div className="relative aspect-square flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-blue-500/5 rounded-full animate-pulse" />
          <div className="absolute inset-8 border border-dashed border-blue-500/20 rounded-full" />
          <div className="absolute inset-24 border border-blue-500/10 rounded-full" />
          
          <div className="relative z-10 text-center space-y-6">
            <div className="inline-flex flex-col items-center justify-center w-32 h-32 rounded-full bg-background border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
              <span className="text-4xl font-bold text-white">2 HR</span>
              <span className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold mt-1">Radius</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-card/50 p-3 rounded border border-white/5 flex flex-col items-center">
                <Truck className="h-4 w-4 mb-2 text-muted-foreground" />
                <span>Micro-Logistics</span>
              </div>
              <div className="bg-card/50 p-3 rounded border border-white/5 flex flex-col items-center">
                <Clock className="h-4 w-4 mb-2 text-muted-foreground" />
                <span>Same-Day Ops</span>
              </div>
            </div>
          </div>

          {/* Orbiting Elements */}
          {[0, 90, 180, 270].map((deg, i) => (
            <div
              key={deg}
              className="absolute w-full h-full animate-spin-slow pointer-events-none"
              style={{ animationDuration: `${20 + i * 5}s` }}
            >
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"
                style={{ transform: `rotate(${deg}deg)` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card/30 border-white/5 p-6 flex flex-col items-center text-center gap-3">
          <MapPin className="h-8 w-8 text-blue-400" />
          <h4 className="font-semibold text-white">Geographic Density</h4>
          <p className="text-sm text-muted-foreground">Thousands of suppliers within 30 miles.</p>
        </Card>
        <Card className="bg-card/30 border-white/5 p-6 flex flex-col items-center text-center gap-3">
          <ArrowRightLeft className="h-8 w-8 text-purple-400" />
          <h4 className="font-semibold text-white">Feedback Loops</h4>
          <p className="text-sm text-muted-foreground">Prototype in morning, assemble by afternoon.</p>
        </Card>
        <Card className="bg-card/30 border-white/5 p-6 flex flex-col items-center text-center gap-3">
          <Clock className="h-8 w-8 text-green-400" />
          <h4 className="font-semibold text-white">Temporal Density</h4>
          <p className="text-sm text-muted-foreground">Speed propagates. Fast suppliers make you faster.</p>
        </Card>
      </div>
    </div>
  );
}
