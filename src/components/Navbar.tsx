import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

// N9 · Edge-aligned minimal — wordmark hard-left, one CTA hard-right,
// vast empty space between, no link row. The absence is the design.
export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-30 backdrop-blur-xl"
      style={{
        background: "oklch(14% 0.014 278 / 0.55)",
        borderBottom: "1px solid var(--color-rule-2)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm tracking-tight"
          style={{ color: "var(--color-ink)" }}
        >
          mufti<span style={{ color: "var(--color-primary)" }}>.</span>faris
        </a>

        <a
          href="#projects"
          className="group inline-flex items-center gap-1.5 text-sm font-medium whitespace-nowrap"
          style={{ color: "var(--color-ink-2)" }}
        >
          <span className="transition-colors duration-200 group-hover:text-(--color-ink)">
            View work
          </span>
          <FiArrowUpRight
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ color: "var(--color-primary)" }}
            size={15}
          />
        </a>
      </div>
    </motion.nav>
  );
}
