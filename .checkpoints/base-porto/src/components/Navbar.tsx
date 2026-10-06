import { motion, useReducedMotion } from "framer-motion";

export default function Navbar() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.nav
      aria-label="Back to top"
      initial={reduceMotion ? false : { y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="site-nav fixed top-4 left-1/2 -translate-x-1/2 z-30 inline-flex items-center px-5 py-2.5"
      style={{ borderRadius: "999px", background: "var(--color-paper-2)", border: "1px solid var(--color-rule)" }}
    >
      <a href="#hero" className="font-mono text-sm tracking-tight whitespace-nowrap" aria-label="Mufti Faris, back to top" style={{ color: "var(--color-ink)" }}>
        mufti<span style={{ color: "var(--color-primary)" }}>.</span>faris
      </a>
    </motion.nav>
  );
}
