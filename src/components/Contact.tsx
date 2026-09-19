import { FiGithub, FiLinkedin } from "react-icons/fi";
import Reveal from "./Reveal";
import WaveBackground from "./WaveBackground";
import { heroWash, primaryInk } from "../lib/colors";

const socials = [
  { icon: FiGithub, label: "GitHub", href: "https://github.com/MuftiFaris" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mufti-faris/" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden flex items-center"
      style={{ minHeight: "70dvh", borderTop: "1px solid var(--color-rule-2)" }}
    >
      <WaveBackground />
      <div className="absolute inset-0 pointer-events-none" style={{ background: heroWash }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 py-24 w-full">
        <Reveal>
          <span
            className="text-xs font-semibold uppercase tracking-[0.14em]"
            style={{ color: "var(--color-primary)" }}
          >
            Contact
          </span>
          <h2
            className="font-display font-semibold mt-3 mb-4"
            style={{ fontSize: "var(--text-h2)", color: "var(--color-ink)" }}
          >
            Let&rsquo;s work together
          </h2>
          <p className="max-w-xl mb-10" style={{ color: "var(--color-ink-2)" }}>
            Open to internships, freelance work, and collaborations. Message
            me on LinkedIn — that&rsquo;s the fastest way to reach me.
          </p>

          <a
            href="https://www.linkedin.com/in/mufti-faris/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-7 py-3.5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] mb-12"
            style={{
              borderRadius: "var(--radius-control)",
              background: "var(--color-primary)",
              color: primaryInk,
            }}
          >
            Message me on LinkedIn
          </a>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-icon w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200"
                style={{
                  border: "1px solid var(--color-rule)",
                  color: "var(--color-ink-2)",
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
