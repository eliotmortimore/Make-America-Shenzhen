"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
}

export function Card({ children, className, variant = "default", ...props }: CardProps) {
  const variants = {
    default: "bg-card text-card-foreground hover:bg-[#111] border border-transparent hover:border-border",
    outline: "border border-border bg-transparent hover:bg-card/50",
    ghost: "bg-transparent hover:bg-card/30",
  };

  return (
    <motion.div
      className={cn(
        "rounded-xl p-6 transition-colors duration-200",
        variants[variant],
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
