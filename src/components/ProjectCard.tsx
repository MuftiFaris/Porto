import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { MouseEvent } from "react";
import type { Project } from "../data/projects";

export default function ProjectCard({
  title,
  description,
  tech,
  thumbnail,
  repo,
  demo,
}: Project) {
  const repoUrl = repo ? `https://github.com/${repo}` : null;
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), {
    stiffness: 300,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), {
    stiffness: 300,
    damping: 25,
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 800 }}
      className="group relative h-full"
    >
      <div
        className="relative h-full overflow-hidden flex flex-col"
        style={{
          borderRadius: "var(--radius-card)",
          border: "1px solid var(--color-rule)",
          background: "var(--color-paper-2)",
        }}
      >
        {thumbnail ? (
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
              width={640}
              height={360}
            />
          </div>
        ) : (
          <div
            className="aspect-video w-full flex items-center justify-center text-xs uppercase tracking-widest"
            style={{ background: "var(--color-paper-3)", color: "var(--color-ink-2)" }}
          >
            Preview unavailable
          </div>
        )}

        <div className="p-6 flex flex-col gap-4 flex-1">
          <div>
            <h3
              className="font-semibold mb-2 tracking-tight"
              style={{ color: "var(--color-ink)" }}
            >
              {title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-2)" }}>
              {description}
            </p>
          </div>

          {tech.length > 0 && (
            <ul className="flex flex-wrap gap-2 font-mono text-xs">
              {tech.map((item) => (
                <li
                  key={item}
                  className="px-2.5 py-1"
                  style={{
                    borderRadius: "999px",
                    border: "1px solid var(--color-rule)",
                    color: "var(--color-ink-2)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="flex gap-5 text-sm mt-auto pt-2" style={{ color: "var(--color-ink-2)" }}>
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-(--color-ink)"
              >
                <FiGithub size={15} />
                Code
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-(--color-ink)"
              >
                <FiExternalLink size={15} />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
