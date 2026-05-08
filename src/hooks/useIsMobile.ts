import { useEffect, useState } from "react";

/**
 * Returns true on phones / touch-only devices. Used to bail out of
 * GPU-heavy desktop effects (pinned ScrollTriggers, WebGL shaders, large
 * image sequences) that hang or stutter on mobile hardware.
 *
 * Detection runs synchronously during the first render so the desktop
 * hero never mounts on phones — otherwise GSAP's pin spacer briefly
 * lands in the DOM before the mobile swap and can leak.
 */
export function useIsMobile(maxWidth: number = 767): boolean {
  const query = `(max-width: ${maxWidth}px), (hover: none) and (pointer: coarse)`;

  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(query);
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [query]);

  return isMobile;
}
