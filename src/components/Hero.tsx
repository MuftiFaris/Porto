import { motion, type Variants } from "framer-motion";
import WaveBackground from "./WaveBackground";
import RotatingText from "./RotatingText";
import { heroWash, primaryInk } from "../lib/colors";

const heroWords = ["Mufti Faris", "Frontend", "Backend"];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "100dvh", paddingBlock: "var(--space-3xl)" }}
    >
      <WaveBackground />
      <div className="absolute inset-0 pointer-events-none" style={{ background: heroWash }} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 md:px-10 max-w-4xl mx-auto w-full"
      >
        {/* Fixed-height box: prevents the layout from shifting up/down when
            the rotating word changes length ("Mufti Faris" vs "Frontend") —
            it should read as a typewriter swap, not a reflow. */}
        <motion.div variants={item} style={{ minHeight: "2.1em", lineHeight: 1.05 }}>
          <h1
            className="font-display font-semibold tracking-tight"
            style={{ fontSize: "var(--text-display)", color: "var(--color-ink)" }}
          >
            <RotatingText words={heroWords} />
          </h1>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base md:text-lg leading-relaxed"
          style={{ color: "var(--color-ink-2)" }}
        >
          Full-stack developer building practical, reliable software — from
          clean backend systems to polished interfaces. Studying informatics
          at Universitas Sebelas Maret.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#projects"
            className="inline-flex px-7 py-3.5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              borderRadius: "var(--radius-control)",
              background: "var(--color-primary)",
              color: primaryInk,
            }}
          >
            View projects
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "var(--color-ink)" }}
          >
            Get in touch
            <span
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
