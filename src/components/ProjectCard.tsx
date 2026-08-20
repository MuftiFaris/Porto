import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { MouseEvent } from "react";
import type { Project } from "../data/projects";
import { colors } from "../lib/colors";

export default function ProjectCard({
  title,
  description,
  tech,
  thumbnail,
  repo,
  demo,
}: Project) {
  const repoUrl = repo ? `https://github.com/${repo}` : null;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 25,
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
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
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.015 }}
      className="group relative rounded-xl h-full"
    >
      <div
        className="relative h-full rounded-xl border overflow-hidden flex flex-col transition-colors duration-300"
        style={{
          background: "hsla(240, 20%, 95%, 0.03)",
          borderColor: "hsla(240, 20%, 95%, 0.1)",
        }}
      >
        {thumbnail ? (
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className="aspect-video w-full flex items-center justify-center text-xs uppercase tracking-widest"
            style={{
              background: "hsla(240, 20%, 95%, 0.03)",
              color: "hsl(240, 20%, 70%)",
            }}
          >
            Preview
          </div>
        )}

        <div className="p-6 flex flex-col gap-4 flex-1">
          <div>
            <h3 className="text-lg font-semibold mb-2 tracking-tight text-[hsl(240,20%,95%)]">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-[hsl(240,20%,70%)]">
              {description}
            </p>
          </div>

          {tech.length > 0 && (
            <ul className="flex flex-wrap gap-2 text-xs">
              {tech.map((item) => (
                <li
                  key={item}
                  className="rounded-full px-2.5 py-1"
                  style={{
                    background: "hsla(232, 22%, 60%, 0.12)",
                    color: colors.primary,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="flex gap-5 text-sm mt-auto pt-2 text-[hsl(240,20%,70%)]">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[hsl(240,20%,95%)] transition-colors duration-300"
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
                className="inline-flex items-center gap-1.5 hover:text-[hsl(240,20%,95%)] transition-colors duration-300"
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
