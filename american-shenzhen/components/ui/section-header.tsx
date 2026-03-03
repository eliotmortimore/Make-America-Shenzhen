"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  id: string;
  title: string;
  description: string;
  className?: string;
}

export function SectionHeader({ id, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("relative py-24", className)} id={id}>
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="text-center space-y-4 max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
