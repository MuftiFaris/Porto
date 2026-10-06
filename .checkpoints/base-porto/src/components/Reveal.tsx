import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  direction?: "up" | "left" | "right" | "none";
}

// Keep content readable through the middle of the viewport; fade at its edges.
export default function Reveal({ children, className = "", delay = 0, style, direction = "up" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target, offset: ["start end", "end start"] });
  const entrance = 0.1 + Math.min(delay / 4000, 0.06);
  const opacity = useTransform(scrollYProgress, [0, entrance, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, entrance, 0.9, 1], direction === "up" ? [20, 0, 0, -20] : [0, 0, 0, 0]);
  const shift = direction === "left" ? -18 : direction === "right" ? 18 : 0;
  const x = useTransform(scrollYProgress, [0, entrance, 0.9, 1], [shift, 0, 0, -shift]);

  if (reduceMotion) {
    return (
      <div ref={target} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={target}
      className={className}
      style={{ ...style, opacity, x, y }}
    >
      {children}
    </motion.div>
  );
}
