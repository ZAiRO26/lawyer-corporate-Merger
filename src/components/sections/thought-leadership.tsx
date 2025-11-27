"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Navigating Antitrust in Cross-Border Mega-Mergers",
    category: "Regulatory Insights",
    date: "October 24, 2023",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
  },
  {
    title: "The Rise of ESG Due Diligence in M&A",
    category: "Market Trends",
    date: "November 12, 2023",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    title: "Distressed Asset Acquisition: Opportunities in 2024",
    category: "Investment Strategy",
    date: "December 05, 2023",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
  },
];

export function ThoughtLeadership() {
  return (
    <Section id="thought-leadership" className="bg-slate-950">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm">
            Insights
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-4">
            Thought Leadership
          </h2>
        </div>
        <button className="text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors flex items-center gap-2">
          View All Insights <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-slate-800">
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            <div className="flex items-center gap-4 text-xs font-semibold tracking-wider uppercase mb-3">
              <span className="text-gold-500">{article.category}</span>
              <span className="text-slate-500">{article.date}</span>
            </div>
            
            <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-500 transition-colors duration-300 leading-tight">
              {article.title}
            </h3>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
