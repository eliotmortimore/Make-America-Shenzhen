"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Wallet, 
  FileText, 
  AlertTriangle,
  Scale,
  Rocket,
  Check,
  X,
  PieChart
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function DualUseImperative() {
  return (
    <div className="space-y-32">
      {/* Introduction Quote */}
      <div className="space-y-6">
        <Badge variant="outline" className="w-fit">The Strategy</Badge>
        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Pure Defense Is a <span className="text-red-400">Strategic Blunder</span>.
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          The path to restoring American industrial capability is not through the defense industrial base. It is through the commercial base. A country with deep, fast, flexible commercial manufacturing can surge production for any purpose.
        </p>
      </div>

      {/* Commercial First vs Defense Only */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 border-red-900/20 bg-red-950/10 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <AlertTriangle className="h-32 w-32 text-red-500" />
          </div>
          <div className="relative z-10">
            <h4 className="text-xl font-bold text-red-400 flex items-center gap-2">
              <X className="h-5 w-5" /> Defense Only
            </h4>
            <ul className="space-y-4 mt-6">
              {[
                "Produce expensive weapons slowly",
                "Cut off from commercial tech speed",
                "Talent pipelines narrow",
                "Bloated cost structures (compliance)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-red-200/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card className="p-8 border-green-900/20 bg-green-950/10 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Rocket className="h-32 w-32 text-green-500" />
          </div>
          <div className="relative z-10">
            <h4 className="text-xl font-bold text-green-400 flex items-center gap-2">
              <Check className="h-5 w-5" /> Commercial First
            </h4>
            <ul className="space-y-4 mt-6">
              {[
                "Surge production for any purpose",
                "Deep, fast, flexible manufacturing",
                "Access to top engineering talent",
                "Commercial scale drives down unit costs"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-green-200/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      {/* The 75/25 Rule Visualization */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950/20 to-black p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">The 75/25 Rule</h3>
            <p className="text-muted-foreground leading-relaxed">
              The optimal revenue mix targets no more than 25% of revenue from defense. This preserves agility, attracts talent, and commands higher valuations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Procurement Risk", desc: "Avoid reliance on single budget cycles" },
                { label: "Nontraditional Status", desc: "Avoid expensive CAS compliance overhead" },
                { label: "Talent & Culture", desc: "Engineers want to ship to millions" },
                { label: "Valuation", desc: "Command 5-15x vs 1.5x multiples" }
              ].map((item) => (
                <Card key={item.label} className="p-4 bg-background/50 border-white/5">
                  <div className="font-semibold text-white text-sm mb-1">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center relative">
            <div className="relative h-64 w-64">
              {/* Pie Chart Representation */}
              <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                {/* Commercial Segment (75%) */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="20"
                  strokeDasharray="235.6 235.6" /* 75% of circumference */
                  strokeDashoffset="0"
                  className="text-blue-500"
                />
                {/* Defense Segment (25%) */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="20"
                  strokeDasharray="78.5 314" /* 25% of circumference */
                  strokeDashoffset="-235.6" /* Start after 75% */
                  className="text-slate-700"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold text-white">75%</span>
                <span className="text-xs text-blue-400 uppercase tracking-widest font-semibold">Commercial</span>
              </div>
            </div>
            
            <div className="flex gap-8 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-sm text-white">Commercial Base</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-slate-700 rounded-full" />
                <span className="text-sm text-slate-400">Defense Surge</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Valuation Multiples Bar Chart */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="h-6">Market Reality</Badge>
          <h3 className="text-2xl font-bold text-white">The Revenue Mix Markets Reward</h3>
        </div>

        <Card className="bg-card border-white/5 p-8">
          <div className="space-y-6">
            {/* Traditional Prime */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Traditional Prime (Lockheed, RTX)</span>
                <span className="text-white font-mono">1.5x - 2.5x Revenue</span>
              </div>
              <div className="h-12 bg-secondary/30 rounded-lg overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "20%" }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="h-full bg-slate-600 flex items-center px-4"
                >
                  <span className="text-xs font-bold text-white whitespace-nowrap">Defense Only</span>
                </motion.div>
              </div>
            </div>

            {/* Dual-Use Tech */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white font-semibold">Dual-Use Tech (Palantir, SpaceX)</span>
                <span className="text-green-400 font-mono font-bold">5x - 15x Revenue</span>
              </div>
              <div className="h-12 bg-secondary/30 rounded-lg overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center px-4"
                >
                  <span className="text-xs font-bold text-white whitespace-nowrap">Commercial + Defense</span>
                </motion.div>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-6 text-center italic">
            "The market is not rewarding defense revenue per se. It is rewarding the combination of defense demand with commercial scalability."
          </p>
        </Card>
      </div>

      {/* Policy Table: What Helps vs Hurts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-red-400 border-b border-red-500/20 pb-2">What Hurts</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-red-950/30 flex items-center justify-center shrink-0 border border-red-500/20">
                <Scale className="h-4 w-4 text-red-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Tariffs on Machine Tools</h4>
                <p className="text-sm text-muted-foreground mt-1">Raises the capital cost of building every factory. We barely make CNC machines domestically; taxing imports slows the flywheel.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-red-950/30 flex items-center justify-center shrink-0 border border-red-500/20">
                <FileText className="h-4 w-4 text-red-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Bureaucratic Throughput</h4>
                <p className="text-sm text-muted-foreground mt-1">Certification timelines that take 6 months for a 3-week test tax the ecosystem.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-green-400 border-b border-green-500/20 pb-2">What Helps</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-green-950/30 flex items-center justify-center shrink-0 border border-green-500/20">
                <Zap className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Speed (Permitting & Certs)</h4>
                <p className="text-sm text-muted-foreground mt-1">Compressing certification timelines and permitting reform matters more than subsidies. Speed is the best industrial policy.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-green-950/30 flex items-center justify-center shrink-0 border border-green-500/20">
                <Users className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <h4 className="font-medium text-white">Workforce Training</h4>
                <p className="text-sm text-muted-foreground mt-1">Expanding the labor pool for tech-enabled manufacturing (not just traditional trades).</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
