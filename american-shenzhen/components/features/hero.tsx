"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden border-b border-white/5 bg-[#050505]">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[2px] w-12 bg-blue-600" />
            <span className="text-blue-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
              The Reindustrialization Blueprint
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-12 text-white">
            BUILD<br />
            AMERICAN<br />
            <span className="text-blue-600">SHENZHEN.</span>
          </h1>

          {/* Intro Text */}
          <p className="max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed mb-16 font-light">
            There is no physical law preventing the United States from building its own 
            manufacturing ecosystem. Reindustrialization ensures self-reliance. <strong className="text-white font-semibold">Self-reliance ensures freedom.</strong>
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6">
            <a 
              href="#stack-rank"
              className="bg-white text-black px-8 py-5 font-bold text-sm tracking-[0.1em] hover:bg-neutral-200 transition-all uppercase inline-flex items-center justify-center min-w-[200px]"
            >
              View the Stack Rank
            </a>
            <a 
              href="#thesis"
              className="border border-neutral-800 text-white px-8 py-5 font-bold text-sm tracking-[0.1em] hover:bg-white/5 hover:border-white/20 transition-all uppercase inline-flex items-center justify-center min-w-[200px]"
            >
              Read the Thesis
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Right Graphic */}
      <div className="absolute bottom-12 right-6 md:right-16 text-right hidden lg:block opacity-100 mix-blend-screen pointer-events-none">
        <div className="text-[10rem] font-black leading-none text-neutral-900 tracking-tighter select-none">
          2HR
        </div>
        <div className="text-blue-600 font-mono text-xs tracking-[0.5em] uppercase mt-2 font-bold select-none">
          Supply Chain Density
        </div>
      </div>
    </section>
  );
}
