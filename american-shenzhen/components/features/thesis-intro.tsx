"use client";

import { motion } from "framer-motion";
import { Factory, Shield, Lock, Flag, ArrowRight, BarChart3, Map, Target, TrendingUp, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ThesisIntro() {
  const coreValues = [
    { icon: Factory, label: "Local Manufacturing", arrow: true },
    { icon: Lock, label: "Self-Reliance", arrow: true },
    { icon: Shield, label: "Stability", arrow: true },
    { icon: Flag, label: "Freedom", arrow: false },
  ];

  const fourThings = [
    {
      number: "01",
      title: "Explain Why Now",
      icon: TrendingUp,
      description: "Every macro tailwind is aligned, and technology is finally advanced enough to rebuild manufacturing end to end. Never a better time to go vertical.",
    },
    {
      number: "02",
      title: "The Dual-Use Case",
      icon: Shield,
      description: "Pure defense is a strategic blunder. Even the Pentagon wants commercial-first companies. The optimal revenue mix is 75/25 commercial/defense.",
    },
    {
      number: "03",
      title: "Stack-Rank Categories",
      icon: Layers,
      description: "Ranking 12 manufacturing categories on ecosystem criticality, venture return potential, and dual-use fit into a concrete '2-hour supply chain' blueprint.",
    },
    {
      number: "04",
      title: "Market Validation",
      icon: BarChart3,
      description: "Tech-enabled manufacturing is being repriced as a distinct asset class. Multiples, exit rates, and capital flows all point the same direction.",
    },
  ];

  return (
    <div className="space-y-24">
      {/* Header & Context */}
      <div className="space-y-8">
        <div className="flex flex-col gap-4">
          <Badge variant="outline" className="w-fit">The Context</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            How to Build American Shenzhen, <span className="text-blue-500">Fast</span>
          </h2>
        </div>
        
        <Card className="bg-secondary/20 border-blue-900/30">
          <p className="text-lg text-muted-foreground leading-relaxed">
            This is the stack-ranked list and blueprint I wish existed when I started <a href="https://x.com/@atomic_inc" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">@atomic_inc</a> and my crusade to reindustrialize America.
          </p>
        </Card>
      </div>

      {/* Philosophy Chain */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white">The Philosophy</h3>
        <p className="text-muted-foreground max-w-3xl">
          I believe reindustrialization is more important than any other aspect of our economy, including AI, for ensuring the long-term durability of the United States.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          {coreValues.map((item, idx) => (
            <div key={item.label} className="relative group">
              <Card className="h-full flex flex-col items-center justify-center p-6 bg-secondary/10 hover:bg-secondary/20 border-white/5 hover:border-blue-500/20 transition-all">
                <item.icon className={cn("h-8 w-8 mb-3", idx === 3 ? "text-blue-500" : "text-muted-foreground group-hover:text-blue-400")} />
                <span className={cn("font-medium text-sm text-center", idx === 3 ? "text-white font-bold tracking-wider" : "text-muted-foreground")}>
                  {item.label}
                </span>
              </Card>
              {item.arrow && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-muted-foreground/30">
                  <ArrowRight className="h-5 w-5" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Badge variant="accent" className="px-6 py-2 text-sm font-bold tracking-widest uppercase">
            Build Factories
          </Badge>
        </div>
      </div>

      {/* The Core Claim */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950/20 to-black p-8 md:p-12">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Map className="w-64 h-64 text-blue-500" />
        </div>
        
        <div className="relative z-10 space-y-6 max-w-3xl">
          <div className="flex items-center gap-3 text-blue-400">
            <Target className="h-5 w-5" />
            <span className="text-sm font-mono uppercase tracking-wider font-bold">The Core Claim</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            There is no physical law preventing the United States from building its own Shenzhen.
          </h3>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              The density that makes Shenzhen work -- thousands of suppliers within 30 miles and millions of square feet -- is not a trick. It is an artifact of carefully crafted state industrial policy.
            </p>
            <p className="text-white/90 font-medium pl-4 border-l-2 border-blue-500">
              PCB fabs, injection molders, machine shops, component distributors, test labs, surface treatment shops, and logistics -- <span className="text-blue-400">all within a 2-hour radius.</span>
            </p>
            <p>
              That stack can be built here. The question is how fast.
            </p>
          </div>
        </div>
      </div>

      {/* Venture Case & Economics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="space-y-4 bg-orange-950/10 border-orange-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-orange-400 border-orange-400/20 bg-orange-400/10">The Bootstrapping Case</Badge>
          </div>
          <h4 className="text-xl font-semibold text-white">Bootstrapping Works</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <a href="https://x.com/@sendcutsend" className="text-blue-400 hover:underline">@sendcutsend</a> crossed $100M in revenue with ~400 employees by digitizing sheet metal, no venture capital required.
          </p>
        </Card>
        
        <Card className="space-y-4 bg-blue-950/10 border-blue-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-blue-400 border-blue-400/20 bg-blue-400/10">The Venture Case</Badge>
          </div>
          <h4 className="text-xl font-semibold text-white">Speed is the Variable</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Venture can play a massive role in a generational opportunity. Incentives are aligned: national security, economic growth, and returns. This is not defense grift. This is building real things at speed.
          </p>
        </Card>
      </div>

      {/* The Four Things */}
      <div className="space-y-12">
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-6 text-2xl md:text-3xl font-bold text-white tracking-tight">We&apos;re doing four things here:</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fourThings.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Card className="h-full bg-card hover:bg-secondary/10 border-white/5 hover:border-blue-500/30 transition-all duration-300 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-blue-500/50 group-hover:text-blue-500 transition-colors">{item.number}</span>
                      <h4 className="font-semibold text-white group-hover:text-blue-100 transition-colors">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
