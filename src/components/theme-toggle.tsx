"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
        <span className="sr-only">Toggle theme</span>
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors relative"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute top-2 left-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-100" />
    </button>
  );
}
