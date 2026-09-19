import skills from "../data/skills";
import { colors, type AccentKey } from "../lib/colors";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20" style={{ borderTop: "1px solid var(--color-rule-2)" }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-28">
        <Reveal>
          <span
            className="text-xs font-semibold uppercase tracking-[0.14em]"
            style={{ color: "var(--color-primary)" }}
          >
            About
          </span>
          <h2
            className="font-display font-semibold mt-3 mb-6"
            style={{ fontSize: "var(--text-h2)", color: "var(--color-ink)" }}
          >
            A bit about me
          </h2>
          <p
            className="leading-relaxed max-w-xl text-base md:text-lg mb-16"
            style={{ color: "var(--color-ink-2)" }}
          >
            I am an undergraduate informatics student at Universitas Sebelas
            Maret with a passion for building practical, user-friendly
            applications. I enjoy solving complex problems and am constantly
            learning new technologies — currently focused on building web
            applications with React and Node.js.
          </p>
        </Reveal>

        <div id="skills" className="scroll-mt-20">
          <Reveal delay={80}>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.14em] mb-6"
              style={{ color: "var(--color-muted)" }}
            >
              Skills &amp; Stack
            </h3>
          </Reveal>

          {/* Spec-sheet rows, not a card grid — one containment layer,
              hairline dividers instead of glass boxes. */}
          <div style={{ borderTop: "1px solid var(--color-rule-2)" }}>
            {skills.map((group, i) => {
              const accentKey = group.accent as AccentKey;
              return (
                <Reveal key={group.category} delay={i * 60}>
                  <div
                    className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-6 gap-y-2 py-5"
                    style={{ borderBottom: "1px solid var(--color-rule-2)" }}
                  >
                    <h4
                      className="text-xs font-semibold uppercase tracking-widest pt-1"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {group.category}
                    </h4>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                      {group.items.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 text-sm"
                          style={{ color: "var(--color-ink-2)" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: colors[accentKey] }}
                          />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
