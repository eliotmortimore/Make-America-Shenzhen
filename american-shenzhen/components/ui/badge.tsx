import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary" | "accent";
}

export function Badge({ children, className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-primary text-primary-foreground border-transparent hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground border-transparent hover:bg-secondary/80",
    outline: "text-foreground border border-input hover:bg-accent hover:text-accent-foreground",
    accent: "bg-blue-600 text-white border-transparent hover:bg-blue-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
