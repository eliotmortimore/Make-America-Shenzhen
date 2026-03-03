"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "thesis", label: "Part I" },
  { id: "dual-use", label: "Part II" },
  { id: "stack-rank", label: "Part III" },
  { id: "blueprint", label: "Blueprint" },
  { id: "market", label: "Validation" },
  { id: "directory", label: "Directory" },
];

export function SectionTracker() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      let found = false;
      // Find the section that is currently active
      // We iterate in reverse to find the last section that is above the scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;
          
          if (absoluteTop <= scrollPosition) {
            setActiveSection(sections[i].id);
            found = true;
            break; 
          }
        }
      }
      
      if (!found) {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check with a slight delay to ensure DOM is ready
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!activeSection) return null;

  return (
    <div className="hidden lg:block text-muted-foreground text-xs font-mono uppercase tracking-[0.2em]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-32 left-12 xl:left-24 text-blue-500 font-bold mix-blend-screen pointer-events-none z-50"
        >
           {sections.find(s => s.id === activeSection)?.label}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
