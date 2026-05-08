import { forwardRef } from "react";

/**
 * Echtes Night-Skyline-Foto (Unsplash, royalty-free).
 * Datei: /images/city.jpg
 *
 * Wird über `data-city` von der Scroll-Timeline angesteuert:
 * Tag → Filter dimmt das Bild zu einer dunklen Silhouette,
 * Nacht → volle Sättigung & Helligkeit, Lichter "leben".
 */
export const CitySkyline = forwardRef<HTMLDivElement>(function CitySkyline(
  _props,
  ref,
) {
  return (
    <div
      ref={ref}
      data-city
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] w-full overflow-hidden"
      aria-hidden="true"
    >
      {/* Atmospheric ground glow — visible at night */}
      <div
        data-city-glow
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 100%, rgba(92,242,255,0.28) 0%, rgba(157,107,255,0.10) 45%, transparent 75%)",
          opacity: 0,
        }}
      />

      {/* The actual city photo */}
      <img
        data-city-photo
        src="/images/city.jpg"
        alt="Cinematic night skyline"
        className="absolute inset-0 h-full w-full select-none object-cover"
        style={{
          objectPosition: "50% 70%",
          filter: "brightness(0.35) saturate(0.7) contrast(1.05)",
        }}
        draggable={false}
        loading="eager"
      />

      {/* Top fade — blends skyline into the sky */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,6,10,0.95) 0%, rgba(5,6,10,0.5) 40%, transparent 100%)",
        }}
      />

      {/* Bottom anchor — locks it to the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{
          background:
            "linear-gradient(0deg, rgba(5,6,10,0.85) 0%, transparent 100%)",
        }}
      />
    </div>
  );
});
