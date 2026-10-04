import { FiGithub, FiLinkedin } from "react-icons/fi";
import Reveal from "./Reveal";
import { primaryInk } from "../lib/colors";

const socials = [
  { icon: FiGithub, label: "GitHub", href: "https://github.com/MuftiFaris" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mufti-faris/" },
];

// Ft5 · Statement — one closing line dominates instead of a sitemap.
// Absorbs what used to be a standalone Contact section: the LinkedIn CTA
// and the social row now live here, as the page's last word.
export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-20" style={{ borderTop: "1px solid var(--color-rule-2)" }}>
      <div
        className="max-w-4xl mx-auto px-6 md:px-10"
        style={{ paddingBlockStart: "var(--space-3xl)", paddingBlockEnd: "var(--space-xl)" }}
      >
        <Reveal>
          <p
            className="font-display font-semibold max-w-[16ch]"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3.25rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--color-ink)",
            }}
          >
            Let&rsquo;s build something together.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="https://www.linkedin.com/in/mufti-faris/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-7 py-3.5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              style={{
                borderRadius: "var(--radius-control)",
                background: "var(--color-primary)",
                color: primaryInk,
              }}
            >
              Message me on LinkedIn
            </a>

            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200"
                  style={{ border: "1px solid var(--color-rule)", color: "var(--color-ink-2)" }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <p
          className="font-mono text-xs leading-relaxed mt-16 pt-6"
          style={{ color: "var(--color-muted)", borderTop: "1px solid var(--color-rule-2)" }}
        >
          MUFTI FARIS — FULL-STACK DEVELOPER · BUILT WITH REACT, VITE &amp;
          FRAMER MOTION · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
