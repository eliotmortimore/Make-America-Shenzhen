"use client";

import { motion } from "framer-motion";
import { Zap, Box, Factory, Cpu } from "lucide-react";

export function SpeedPropagation() {
  // Positions as percentages
  const nodes = [
    { id: "pcb", icon: Cpu, label: "PCB Fab", x: 20, y: 20 },
    { id: "machining", icon: Factory, label: "Machining", x: 80, y: 20 },
    { id: "molding", icon: Box, label: "Molding", x: 50, y: 80 },
  ];

  return (
    <div className="relative h-64 w-full max-w-lg mx-auto bg-card rounded-xl border border-border overflow-hidden my-12">
      <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
      
      {/* Central Node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] z-20">
          <Zap className="text-white h-8 w-8" />
        </div>
        <div className="mt-2 px-2 py-1 bg-background/80 backdrop-blur rounded text-xs font-bold border border-white/10">Startup</div>
      </div>

      {/* Nodes & Connections */}
      {nodes.map((node, i) => (
        <div key={node.id}>
          {/* Connection Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <line 
              x1="50%" 
              y1="50%" 
              x2={`${node.x}%`} 
              y2={`${node.y}%`} 
              className="stroke-border stroke-2" 
            />
          </svg>

          {/* Pulse Out */}
          <motion.div
            className="absolute h-2 w-2 bg-blue-500 rounded-full z-10 shadow-[0_0_10px_#3b82f6]"
            initial={{ left: "50%", top: "50%", opacity: 0 }}
            animate={{ 
              left: [`50%`, `${node.x}%`],
              top: [`50%`, `${node.y}%`],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />

          {/* Pulse In */}
          <motion.div
            className="absolute h-2 w-2 bg-emerald-500 rounded-full z-10 shadow-[0_0_10px_#10b981]"
            initial={{ left: `${node.x}%`, top: `${node.y}%`, opacity: 0 }}
            animate={{ 
              left: [`${node.x}%`, `50%`],
              top: [`${node.y}%`, `50%`],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4 + 0.75
            }}
          />

          {/* Satellite Node Icon */}
          <div 
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className="h-12 w-12 bg-secondary/80 backdrop-blur rounded-full flex items-center justify-center border border-white/10">
              <node.icon className="text-muted-foreground h-5 w-5" />
            </div>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-2 bg-background/50 px-1 rounded">{node.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
