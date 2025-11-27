"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Expertise", href: "#expertise" },
  { name: "Thought Leadership", href: "#thought-leadership" },
  { name: "People", href: "#people" },
  { name: "Legacy", href: "#legacy" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-cream-50/90 dark:bg-slate-950/90 backdrop-blur-md py-4 border-b border-black/5 dark:border-white/10 shadow-sm dark:shadow-none"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="z-50 relative">
          <span className={cn(
            "font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300",
            "text-slate-900 dark:text-white"
          )}>
            Merger <span className="text-gold-500">&</span> Co.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors duration-300 hover:text-gold-500",
                 "text-slate-600 dark:text-slate-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="pl-4 border-l border-slate-200 dark:border-slate-700">
             <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
            className={cn(
                "z-50 transition-colors",
                "text-slate-900 dark:text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-cream-50 dark:bg-slate-950 flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-slate-900 dark:text-white hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
