"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-6">
            Global M&A Advisory
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8">
            Facilitating <br />
            <span className="text-gold-500">Strategic Mergers</span> <br />
            Globally.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 md:mx-0 mx-auto leading-relaxed">
            We provide elite legal counsel for complex cross-border transactions, ensuring seamless integration and value creation for the world's leading corporations.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
            <Link 
              href="#expertise" 
              className="group relative px-8 py-4 bg-gold-500 text-slate-950 font-semibold text-sm uppercase tracking-wider overflow-hidden inline-flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                Our Expertise <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
            <Link 
              href="#contact"
              className="px-8 py-4 border border-white/20 text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/5 transition-colors inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-slate-400/30 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-gold-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
