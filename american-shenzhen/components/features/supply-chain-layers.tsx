import { motion } from "framer-motion";
import { Database, Battery, FlaskConical, Box, Cpu } from "lucide-react";

export function SupplyChainLayers() {
  const layers = [
    { icon: Cpu, title: "1. Electronics Nervous System", desc: "PCB fabrication, component assembly, stocking" },
    { icon: Box, title: "2. Physical Structure", desc: "CNC machining, molding, casting, forging, finishing" },
    { icon: FlaskConical, title: "3. Material Refiners", desc: "Polymer compounding, specialty materials, chemicals" },
    { icon: Battery, title: "4. Battery & Energy Hub", desc: "Cell components, assembly, pack integration" },
    { icon: Database, title: "5. Testing & Logistics", desc: "Certification labs, micro-logistics, fulfillment" },
  ];

  return (
    <div className="space-y-4 my-16 max-w-2xl mx-auto">
      {layers.map((layer, index) => (
        <motion.div
          key={layer.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-blue-500/30 transition-colors group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-blue-400 group-hover:bg-blue-950/30 transition-colors z-10">
            <layer.icon className="h-5 w-5" />
          </div>
          
          <div className="z-10">
            <h4 className="font-semibold text-foreground text-sm group-hover:text-blue-200 transition-colors">{layer.title}</h4>
            <p className="text-xs text-muted-foreground">{layer.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
