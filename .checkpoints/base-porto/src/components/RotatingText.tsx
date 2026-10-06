import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";

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

const wordVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.15, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export default function RotatingText({
  words,
  interval = 2200,
  className = "",
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (words.length <= 1 || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval, paused]);

  // WCAG 2.2.2 — auto-updating content pauses on hover/focus.
  const pauseHandlers = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
  };

  const current = words[index];

  // Per-letter reveal is a nice typing-like flourish, but it's still spatial
  // motion — respect prefers-reduced-motion with a plain crossfade instead.
  if (reduceMotion) {
    return (
      <span className={`inline-block ${className}`} tabIndex={0} {...pauseHandlers}>
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            className="inline-block"
            variants={wordVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {current}
          </motion.span>
        </AnimatePresence>
      </span>
    );
  }

  const letters = current.split("");

  return (
    <span className={`inline-block ${className}`} tabIndex={0} {...pauseHandlers}>
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
