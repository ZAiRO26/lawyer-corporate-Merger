"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Globe, TrendingUp, RefreshCw, ArrowUpRight } from "lucide-react";

const expertiseItems = [
  {
    title: "Cross-border M&A",
    description: "Navigating complex international regulations to facilitate seamless multi-jurisdictional mergers and acquisitions.",
    icon: Globe,
  },
  {
    title: "Private Equity",
    description: "Structuring high-value investments and buyouts with a focus on maximizing returns and mitigating risk.",
    icon: TrendingUp,
  },
  {
    title: "Corporate Restructuring",
    description: "Strategic advisory for reorganization, insolvency, and turnaround scenarios to preserve value and ensure continuity.",
    icon: RefreshCw,
  },
];

export function Expertise() {
  return (
    <Section id="expertise" className="bg-cream-100 dark:bg-slate-900 transition-colors duration-500">
      <div className="mb-16 md:mb-24">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-gold-600 dark:text-gold-500 font-semibold tracking-widest uppercase text-sm"
        >
          Our Expertise
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mt-4 max-w-2xl"
        >
          Strategic Legal Solutions for Complex Markets
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {expertiseItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="group relative bg-white/80 dark:bg-slate-800/50 p-8 border border-slate-200 dark:border-white/5 hover:border-gold-500/30 transition-colors duration-500 overflow-hidden shadow-sm dark:shadow-none"
          >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <ArrowUpRight className="text-gold-500" />
            </div>
            
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream-200 dark:bg-slate-950 border border-slate-300 dark:border-white/10 text-gold-600 dark:text-gold-500 group-hover:bg-gold-500 group-hover:text-slate-950 transition-colors duration-500">
              <item.icon size={24} />
            </div>
            
            <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-4 group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors duration-300">
              {item.title}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-300">
              {item.description}
            </p>

            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
