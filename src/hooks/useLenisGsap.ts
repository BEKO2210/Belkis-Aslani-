import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wires Lenis smooth-scroll into GSAP's ScrollTrigger so pinned timelines
 * stay perfectly in sync with scroll progress. Respects prefers-reduced-motion.
 */
export function useLenisGsap(enabled: boolean = true): void {
  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    // Native scroll on touch devices and small viewports — Lenis wheel
    // smoothing fights iOS momentum scrolling and causes jank on phones.
    const isTouch =
      window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
      window.matchMedia("(max-width: 767px)").matches;
    if (isTouch) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, [enabled]);
}
