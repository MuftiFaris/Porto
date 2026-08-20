import { motion, type Variants } from "framer-motion";
import WaveBackground from "./WaveBackground";
import RotatingText from "./RotatingText";
import { colors, withAlpha } from "../lib/colors";

const heroWords = ["Mufti Faris", "Frontend", "Backend"];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <WaveBackground />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${withAlpha("primary", 0.22)}, ${withAlpha(
            "secondary",
            0.22,
          )}, ${withAlpha("accent", 0.22)})`,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-8 max-w-3xl"
      >
        <motion.p
          variants={item}
          className="text-sm font-medium mb-4 tracking-wide"
          style={{ color: colors.accent }}
        >
          Hi, I'm
        </motion.p>
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-[hsl(240,20%,95%)]"
        >
          <RotatingText words={heroWords} />
        </motion.h1>
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-[hsl(240,20%,70%)] mb-10 leading-relaxed"
        >
          Full Stack Developer — building practical, reliable applications
          from clean backend systems to polished interfaces.
        </motion.p>

        <motion.div variants={item} className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 rounded-lg font-medium bg-[hsl(232,22%,60%)] text-[hsl(240,23%,5%)] hover:bg-[hsl(25,22%,60%)] transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-lg font-medium border transition-all duration-300 text-[hsl(240,20%,95%)]"
            style={{ borderColor: "hsla(240, 20%, 95%, 0.2)" }}
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase text-[hsl(240,20%,70%)] z-10"
      >
        Scroll
      </motion.div>
    </section>
  );
}
