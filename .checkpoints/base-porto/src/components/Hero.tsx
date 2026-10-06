import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WaveBackground from "./WaveBackground";
import { heroWash } from "../lib/colors";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };
  return (
    <section ref={heroRef} id="hero" className="portfolio-hero relative overflow-hidden" aria-labelledby="hero-title">
      <WaveBackground />
      <div className="absolute inset-0 pointer-events-none" style={{ background: heroWash }} />
      <motion.div
        initial={reduceMotion ? false : "hidden"}
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: reduceMotion ? 0 : 0.09 } } }}
        className="hero-intro hero-layout portfolio-shell relative z-10"
        style={reduceMotion ? undefined : { opacity, y }}
      >
        <div className="hero-copy">
        <motion.p variants={item} className="hero-role">Full-stack developer</motion.p>
        <motion.h1 variants={item} id="hero-title">Mufti Faris<span>.</span></motion.h1>
        <motion.p variants={item} className="hero-description">Building practical, reliable software from backend systems to polished interfaces.</motion.p>
        </div>
        <motion.dl variants={item} className="hero-context" aria-label="At a glance">
          <div><dt>Current focus</dt><dd>React &amp; Node.js</dd></div>
          <div><dt>Education</dt><dd>Informatics undergraduate<span>Universitas Sebelas Maret</span></dd></div>
          <div><dt>Open to</dt><dd>Internships, freelance work<span>&amp; collaborations</span></dd></div>
        </motion.dl>
      </motion.div>
    </section>
  );
}
