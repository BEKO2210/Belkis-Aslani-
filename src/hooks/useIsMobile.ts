import { useEffect, useState } from "react";

/**
 * Returns true on phones / touch-only devices. Used to bail out of
 * GPU-heavy desktop effects (pinned ScrollTriggers, WebGL shaders, large
 * image sequences) that hang or stutter on mobile hardware.
 */
export function useIsMobile(maxWidth: number = 767): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(
      `(max-width: ${maxWidth}px), (hover: none) and (pointer: coarse)`,
    );
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [maxWidth]);

  return isMobile;
}
