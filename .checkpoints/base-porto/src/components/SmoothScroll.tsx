import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;
    let rafId = 0;

    function configure() {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      lenis = null;
      if (motionPreference.matches) return;
      lenis = new Lenis({ duration: 1.15, easing: (t: number) => 1 - Math.pow(1 - t, 4), smoothWheel: true });
      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }
    configure();
    motionPreference.addEventListener("change", configure);

    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>('a[href*="#"]');
      if (!anchor || anchor.hasAttribute("download") || (anchor.target && anchor.target !== "_self")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || url.search !== window.location.search || !url.hash) return;
      let id: string;
      try { id = decodeURIComponent(url.hash.slice(1)); } catch { return; }
      const destination = document.getElementById(id);
      if (!destination) return;
      event.preventDefault();
      if (window.location.hash !== url.hash) window.history.pushState(null, "", url.hash);
      const nav = document.querySelector(".site-nav");
      const offset = (nav?.getBoundingClientRect().bottom ?? 64) + 16;
      window.dispatchEvent(new CustomEvent("portfolio:scroll-start", { detail: { id } }));
      const focusDestination = () => {
        const temporaryTabIndex = !destination.hasAttribute("tabindex");
        if (temporaryTabIndex) destination.setAttribute("tabindex", "-1");
        destination.focus({ preventScroll: true });
        if (temporaryTabIndex) destination.addEventListener("blur", () => destination.removeAttribute("tabindex"), { once: true });
        window.dispatchEvent(new CustomEvent("portfolio:scroll-end", { detail: { id } }));
      };
      if (lenis) {
        lenis.scrollTo(destination, { offset: -offset, duration: 1.15, onComplete: focusDestination });
      } else {
        window.scrollTo({ top: Math.max(0, destination.getBoundingClientRect().top + window.scrollY - offset), behavior: "instant" });
        focusDestination();
      }
    }
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      motionPreference.removeEventListener("change", configure);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);
  return null;
}
