import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

// N5 · Floating pill — visibly detached from the page edges, blurred
// backdrop, content-sized (not a full-width bar with rounded ends).
export default function Navbar() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.nav
      initial={reduceMotion ? { opacity: 1 } : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0.15 : 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-6 px-5 py-2.5"
      style={{
        borderRadius: "999px",
        background: "color-mix(in oklch, var(--color-paper) 78%, transparent)",
        backdropFilter: "blur(14px) saturate(120%)",
        border: "1px solid var(--color-rule)",
        boxShadow: "0 8px 24px -12px oklch(0% 0 0 / 0.35)",
      }}
    >
      <a href="#" className="font-mono text-sm tracking-tight whitespace-nowrap" style={{ color: "var(--color-ink)" }}>
        mufti<span style={{ color: "var(--color-primary)" }}>.</span>faris
      </a>

      <a
        href="#projects"
        className="group inline-flex items-center gap-1 text-sm font-medium whitespace-nowrap"
        style={{ color: "var(--color-ink-2)" }}
      >
        <span className="transition-colors duration-200 group-hover:text-(--color-ink)">
          Work
        </span>
        <FiArrowUpRight
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ color: "var(--color-primary)" }}
          size={14}
        />
      </a>
    </motion.nav>
  );
}
