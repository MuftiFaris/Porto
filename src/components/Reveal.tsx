import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  direction?: "up" | "left" | "right" | "none";
}

// Reveal once, then keep content stable for reading and interaction.
export default function Reveal({ children, className = "", delay = 0, style, direction = "up" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const shift = direction === "left" ? -18 : direction === "right" ? 18 : 0;

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: shift, y: direction === "up" ? 18 : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
