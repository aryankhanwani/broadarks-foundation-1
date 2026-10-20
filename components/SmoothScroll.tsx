"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let instance: Lenis | null = null;

/** The running Lenis instance, or null when smooth scrolling is off (reduced motion). */
export const getLenis = () => instance;

export default function SmoothScroll() {
  const pathname = usePathname();
  const firstRoute = useRef(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
      stopInertiaOnNavigate: true,
    });
    instance = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    /* Lenis caches the scrollable height. Its own observer watches <html>,
       which stays viewport-sized, so pages that grow after load (images,
       client-side navigation to a longer page) left it with a stale limit and
       the wheel stopped dead partway down. Body grows with the content. */
    const ro = new ResizeObserver(() => lenis.resize());
    ro.observe(document.body);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      lenis.destroy();
      instance = null;
    };
  }, []);

  // Every route change starts at the top of the new page (unless it targets a section).
  useEffect(() => {
    // The first render keeps whatever position the browser restored on reload.
    if (firstRoute.current) {
      firstRoute.current = false;
      return;
    }
    if (window.location.hash) return;
    const lenis = getLenis();
    if (lenis) {
      lenis.resize();
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // A link to the page you are already on scrolls back to its top.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // No defaultPrevented check: next/link always prevents default to route client-side.
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || (a.target && a.target !== "_self")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.hash) return;
      if (url.pathname !== window.location.pathname) return;
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(0, { force: true });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
