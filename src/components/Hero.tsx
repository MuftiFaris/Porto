import { motion, useReducedMotion, type Variants } from "framer-motion";
import WaveBackground from "./WaveBackground";
import RotatingText from "./RotatingText";
import Profile from "./Profile";
import { heroWash, primaryInk } from "../lib/colors";

const heroWords = ["Mufti Faris", "Frontend", "Backend"];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function useItemVariants(reduceMotion: boolean): Variants {
  return reduceMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.15 } },
      }
    : {
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        },
      };
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const item = useItemVariants(!!reduceMotion);

  return (
    <section id="hero" className="relative overflow-hidden">
      <WaveBackground />
      <div className="absolute inset-0 pointer-events-none" style={{ background: heroWash }} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 md:px-10 max-w-5xl mx-auto w-full"
        style={{ paddingBlockStart: "var(--space-3xl)", paddingBlockEnd: "var(--space-4xl)" }}
      >
        <div className="bento">
          <motion.div
            variants={item}
            className="bento-tile flex flex-col justify-center"
            style={{ gridArea: "lead", padding: "var(--space-xl)" }}
          >
            {/* Fixed-height box: prevents the layout from shifting up/down
                when the rotating word changes length ("Mufti Faris" vs
                "Frontend") — reads as a typewriter swap, not a reflow. */}
            <div style={{ minHeight: "2.1em", lineHeight: 1.05 }}>
              <h1
                className="font-display font-semibold tracking-tight"
                style={{ fontSize: "var(--text-display)", color: "var(--color-ink)" }}
              >
                <RotatingText words={heroWords} />
              </h1>
            </div>

            <p
              className="mt-5 max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: "var(--color-ink-2)" }}
            >
              Full-stack developer building practical, reliable software
              from clean backend systems to polished interfaces.
            </p>

            <a
              href="#projects"
              className="mt-8 inline-flex w-fit px-7 py-3.5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              style={{
                borderRadius: "var(--radius-control)",
                background: "var(--color-primary)",
                color: primaryInk,
              }}
            >
              View projects
            </a>
          </motion.div>

          <Profile />
        </div>
      </motion.div>
    </section>
  );
}
