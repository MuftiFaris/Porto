import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

const letterVariants: Variants = {
  hidden: { opacity: 0 },
  show: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.15, delay: i * 0.04, ease: "easeOut" },
  }),
  exit: (i: number) => ({
    opacity: 0,
    transition: { duration: 0.1, delay: i * 0.015 },
  }),
};

export default function RotatingText({
  words,
  interval = 2200,
  className = "",
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const current = words[index];
  const letters = current.split("");

  return (
    <span className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span key={current} className="inline-block" initial="hidden" exit="exit">
          {letters.map((char, i) => (
            <motion.span
              key={`${current}-${i}`}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
