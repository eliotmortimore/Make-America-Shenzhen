"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  ScrollText, 
  Cpu, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Zap, 
  Users, 
  Bot, 
  Factory,
  ArrowRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SpeedThesis() {
  const tailwinds = [
    {
      title: "Deglobalization",
      icon: Globe,
      description: "China's agitation and export controls are forcing irreversible supply chain decoupling.",
      color: "text-red-400",
      bg: "bg-red-950/20",
      border: "border-red-900/30"
    },
    {
      title: "Policy Support",
      icon: ScrollText,
      description: "CHIPS Act, IRA, and defense reform created a bipartisan consensus for reindustrialization.",
      color: "text-blue-400",
      bg: "bg-blue-950/20",
      border: "border-blue-900/30"
    },
    {
      title: "Tech Convergence",
      icon: Cpu,
      description: "Advances in compute, robotics, and ML finally allow us to digitize the physical factory floor.",
      color: "text-purple-400",
      bg: "bg-purple-950/20",
      border: "border-purple-900/30"
    },
    {
      title: "Market Demand",
      icon: TrendingUp,
      description: "Hardware startups and defense programs desperately need high-mix, low-volume production.",
      color: "text-green-400",
      bg: "bg-green-950/20",
      border: "border-green-900/30"
    }
  ];

  return (
    <div className="space-y-32">
      {/* Introduction Quote */}
      <div className="relative border-l-2 border-blue-500 pl-6 py-2 md:pl-10 md:py-4">
        <h3 className="text-2xl md:text-3xl font-light text-muted-foreground leading-relaxed">
          The <span className="text-white font-medium">5-to-10-year micro cycle</span> and <span className="text-white font-medium">20-to-30-year macro cycle</span> of this transition are underway simultaneously.
        </h3>
      </div>

      {/* Tailwinds Grid */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="h-6">Macro Context</Badge>
          <h3 className="text-2xl font-bold text-white">Every Tailwind Is Blowing</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tailwinds.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={cn("h-full space-y-4 transition-all hover:-translate-y-1", item.bg, item.border)}>
                <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center bg-background/50", item.color)}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className={cn("font-semibold mb-2", item.color)}>{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Labor Cost vs Process */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge variant="outline" className="h-6 text-orange-400 border-orange-400/20">The Misconception</Badge>
          <h3 className="text-3xl font-bold text-white">The Real Problem Is Not Labor Cost</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cheap labor was just the enabler. The real cost disadvantage is in the factory itself: the engineering, scheduling, changeover, and information gaps.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex gap-4 items-start">
              <div className="h-8 w-8 rounded-full bg-red-950/30 flex items-center justify-center shrink-0 mt-1">
                <AlertTriangle className="h-4 w-4 text-red-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Capacity Constrained? No.</h4>
                <p className="text-sm text-muted-foreground">The shop is not capacity-constrained. It is <strong className="text-white">process-constrained</strong>.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="h-8 w-8 rounded-full bg-blue-950/30 flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 className="h-4 w-4 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">The Tech Solution</h4>
                <p className="text-sm text-muted-foreground">Digitizing the full stack collapses lead times from <span className="line-through opacity-50">weeks</span> to <span className="text-blue-400 font-bold">days</span>.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Utilization Chart Visualization */}
        <Card className="p-8 bg-card border-white/5 space-y-8">
          <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-6">Machine Utilization Rates</h4>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Traditional Job Shop</span>
                <span className="text-red-400 font-mono font-bold">25-30%</span>
              </div>
              <div className="h-4 bg-secondary/30 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "28%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-red-500/50 rounded-full"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Time spent on setup, changeover, and waiting for materials.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white">Tech-Enabled Manufacturer</span>
                <span className="text-green-400 font-mono font-bold">70-80%</span>
              </div>
              <div className="h-4 bg-secondary/30 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-full bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Software controls machines, sequences jobs, and manages material flow.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Automation Misconception */}
      <div className="rounded-2xl bg-gradient-to-b from-secondary/10 to-background border border-white/5 p-8 md:p-12 text-center space-y-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <Badge variant="secondary" className="mb-4">The Workforce</Badge>
          <h3 className="text-3xl font-bold text-white">Automate the Skill, Not the Person</h3>
          <p className="text-muted-foreground text-lg">
            We don&apos;t have expensive machinists to replace. We have a shortage of them.
            The goal is <span className="text-blue-400 font-medium">Labor Shifting</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8">
          <Card className="p-6 bg-background/50 border-white/5 flex flex-col items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-red-400" />
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Current State</div>
              <div className="font-bold text-2xl text-white">40%</div>
              <div className="text-sm text-muted-foreground">Machinists over 55</div>
            </div>
          </Card>

          <Card className="p-6 bg-background/50 border-white/5 flex flex-col items-center gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5" />
            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center z-10">
              <Bot className="h-6 w-6 text-blue-400" />
            </div>
            <div className="space-y-1 z-10">
              <div className="text-xs text-muted-foreground uppercase tracking-widest">The Shift</div>
              <div className="font-bold text-2xl text-white">$45/hr &rarr; $20/hr</div>
              <div className="text-sm text-muted-foreground">Programmer to Operator</div>
            </div>
          </Card>

          <Card className="p-6 bg-background/50 border-white/5 flex flex-col items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
              <Factory className="h-6 w-6 text-green-400" />
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Result</div>
              <div className="font-bold text-2xl text-white">2.1M</div>
              <div className="text-sm text-muted-foreground">Job gap by 2030</div>
            </div>
          </Card>
        </div>
      </div>

      {/* Speed Propagates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-blue-950/10 rounded-2xl p-8 border border-blue-900/20">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-400" />
            <h3 className="text-xl font-bold text-white">Speed Propagates</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            This is the network effect of the American Shenzhen: not just geographic density, but <strong>temporal density</strong>. The ecosystem accelerates when every node in it can move at software speed.
          </p>
          <ul className="space-y-3">
            {[
              "Digitized PCB manufacturer collapses procurement cycles",
              "Precision machining cuts lead times from months to days",
              "Actuator manufacturing enables rapid hardware iteration"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="relative min-h-[200px] flex items-center justify-center">
          {/* Simple visualization of network effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] z-20">
                <Zap className="text-white h-8 w-8" />
              </div>
              {/* Orbiting nodes */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-8 h-8 bg-secondary border border-white/10 rounded-full z-10"
                  animate={{
                    x: Math.cos(i * 72 * (Math.PI / 180)) * 100 - 16,
                    y: Math.sin(i * 72 * (Math.PI / 180)) * 100 - 16,
                  }}
                />
              ))}
              <div className="absolute inset-0 border border-blue-500/20 rounded-full scale-75 animate-pulse" />
              <div className="absolute inset-0 border border-blue-500/10 rounded-full scale-110" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
