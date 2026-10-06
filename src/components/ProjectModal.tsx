import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "../data/projects";
import { getProjectPresentation } from "../lib/projectPresentation";

type Props = { project: Project; onClose: () => void };

export default function ProjectModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const reduceMotion = useReducedMotion();
  const { name, statuses } = getProjectPresentation(project.title);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <motion.dialog
      ref={dialogRef}
      className="project-modal"
      aria-labelledby="project-modal-title"
      data-lenis-prevent
      initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.97, y: reduceMotion ? 0 : 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.98, y: reduceMotion ? 0 : 12 }}
      transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}
    >
      <div className="project-modal-toolbar">
        <button type="button" className="project-modal-close" aria-label="Close project details" onClick={onClose} autoFocus><FiX aria-hidden="true" /></button>
      </div>
      {project.thumbnail && <img className="project-modal-image" src={project.thumbnail} alt={`${name} screenshot`} />}
      <div className="project-modal-body">
        <h2 id="project-modal-title">{name}</h2>
        {statuses.length > 0 && <p className="project-modal-private">{statuses.join(" · ")}</p>}
        <p className="project-modal-description">{project.description}</p>
        <ul className="project-modal-tech">{project.tech.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="project-modal-links">
          {project.repo && <a href={`https://github.com/${project.repo}`} target="_blank" rel="noopener noreferrer"><FiGithub aria-hidden="true" /> Code</a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer"><FiExternalLink aria-hidden="true" /> Live</a>}
        </div>
      </div>
    </motion.dialog>
  );
}
