"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const team = [
  {
    name: "Alexander Sterling",
    role: "Managing Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
  },
  {
    name: "Victoria Chen",
    role: "Head of Global M&A",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
  },
  {
    name: "Jameson Ford",
    role: "Senior Partner, Restructuring",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
  },
  {
    name: "Elena Rodriguez",
    role: "Partner, Private Equity",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
  },
];

export function People() {
  return (
    <Section id="people" className="bg-cream-100 dark:bg-slate-900 transition-colors duration-500">
      <div className="text-center mb-16 md:mb-24">
        <span className="text-gold-600 dark:text-gold-500 font-semibold tracking-widest uppercase text-sm">
          Our People
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mt-4">
          Architects of Global Deals
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden"
          >
            <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 dark:from-slate-950 via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-serif font-bold text-white">
                {member.name}
              </h3>
              <p className="text-gold-500 text-xs font-semibold tracking-wider uppercase mt-1">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
