import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { colors } from "../lib/colors";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-30 backdrop-blur-xl border-b border-white/5"
      style={{ background: "hsla(240, 23%, 5%, 0.35)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-tight text-[hsl(240,20%,95%)]">
          Your Name
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex gap-7 text-sm text-[hsl(240,20%,70%)]">
            {links.map((link) => (
              <li key={link.href} className="relative group">
                <a href={link.href} className="transition-colors duration-300 hover:text-[hsl(240,20%,95%)]">
                  {link.label}
                </a>
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: colors.primary }}
                />
              </li>
            ))}
          </ul>

          <a
            href="#projects"
            className="hidden sm:inline-flex text-sm font-medium px-5 py-2 rounded-lg bg-[hsl(232,22%,60%)] text-[hsl(240,23%,5%)] hover:bg-[hsl(25,22%,60%)] transition-all duration-300"
          >
            View Work
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="sm:hidden p-1 text-[hsl(240,20%,70%)]"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="sm:hidden overflow-hidden border-t border-white/5 backdrop-blur-xl"
            style={{ background: "hsla(240, 23%, 5%, 0.35)" }}
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-sm text-[hsl(240,20%,70%)] hover:text-[hsl(240,20%,95%)] transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
