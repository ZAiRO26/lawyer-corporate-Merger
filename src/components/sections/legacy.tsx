"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Legacy() {
  return (
    <Section id="legacy" className="bg-cream-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <span className="text-gold-600 dark:text-gold-500 font-semibold tracking-widest uppercase text-sm">
              Our Legacy
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mt-4 leading-tight">
              A Heritage of <br />
              <span className="italic text-slate-500 dark:text-slate-400">Unwavering Trust</span>
            </h2>
          </div>
          
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            Founded on the principles of integrity and excellence, Merger & Co. has spent decades defining the landscape of corporate law. From our humble beginnings to becoming a global powerhouse, our commitment to our clients has remained steadfast.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-300 dark:border-white/10">
            <div>
              <span className="block text-4xl font-serif font-bold text-gold-600 dark:text-gold-500 mb-2">20+</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Years of Excellence</span>
            </div>
            <div>
              <span className="block text-4xl font-serif font-bold text-gold-600 dark:text-gold-500 mb-2">$50B+</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Deal Value Advised</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square bg-white dark:bg-slate-800 p-8 md:p-12 border border-slate-200 dark:border-white/5 relative shadow-sm dark:shadow-none">
            <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-gold-500/30" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold-500/30" />
            
            <blockquote className="h-full flex flex-col justify-center">
              <p className="text-2xl md:text-3xl font-serif italic text-slate-800 dark:text-slate-200 leading-relaxed mb-8">
                "Our mission is not just to close deals, but to forge the future of industries through strategic partnership and legal precision."
              </p>
              <footer className="text-gold-600 dark:text-gold-500 font-semibold uppercase tracking-widest text-sm">
                — The Founders
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
