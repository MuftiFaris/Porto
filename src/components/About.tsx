import skills from "../data/skills";
import { colors, withAlpha, type AccentKey } from "../lib/colors";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative border-t border-white/5 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal>
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: colors.accent }}
          >
            About
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-6 tracking-tight text-[hsl(240,20%,95%)]">
            A bit about me
          </h2>
          <p className="leading-relaxed max-w-2xl text-base md:text-lg text-[hsl(240,20%,70%)] mb-14">
            I am a undergraduate informatics student at Universitas Sebelas Maret with a passion for building innovative and
            user-friendly applications. I enjoy solving complex problems and am
            constantly learning new technologies to improve my skills. Currently,
            I am focused on developing web applications using modern technologies
            like React and Node.js.
          </p>
        </Reveal>

        <div id="skills" className="scroll-mt-16">
        <Reveal delay={80}>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-[hsl(240,20%,70%)] mb-6">
            Skills &amp; Stack
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, i) => {
            const accentKey = group.accent as AccentKey;
            return (
              <Reveal key={group.category} delay={i * 80}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full rounded-xl border p-5 transition-colors duration-300"
                  style={{
                    background: "hsla(240, 20%, 95%, 0.03)",
                    borderColor: withAlpha(accentKey, 0.35),
                  }}
                >
                  <h4 className="text-sm font-semibold mb-4 tracking-tight text-[hsl(240,20%,95%)]">
                    {group.category}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-sm text-[hsl(240,20%,70%)]"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: colors[accentKey] }}
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
