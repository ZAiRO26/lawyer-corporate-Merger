"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface SectionProps extends Omit<HTMLMotionProps<"section">, "children"> {
  children?: React.ReactNode;
  containerClassName?: string;
  fullWidth?: boolean;
}

export function Section({
  children,
  className,
  containerClassName,
  fullWidth = false,
  ...props
}: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("py-20 md:py-32 relative", className)}
      {...props}
    >
      <div
        className={cn(
          "mx-auto px-6 md:px-12",
          fullWidth ? "w-full" : "max-w-7xl",
          containerClassName
        )}
      >
        {children}
      </div>
    </motion.section>
  );
}
