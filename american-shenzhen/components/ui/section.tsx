import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function Section({ children, className, fullWidth = false, ...props }: SectionProps) {
  return (
    <section className={cn("py-12 md:py-24 px-4 sm:px-6", className)} {...props}>
      <div className={cn("mx-auto", fullWidth ? "max-w-7xl" : "max-w-3xl")}>
        {children}
      </div>
    </section>
  );
}
