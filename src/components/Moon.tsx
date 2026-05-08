import { forwardRef } from "react";
import { asset } from "../lib/asset";

/**
 * Echtes Foto des Mondes — Wikimedia Commons (Public Domain).
 *
 * Lösung gegen den sichtbaren JPG-Kasten:
 * - clip-path: circle() → harter, garantiert kreisrunder Crop. Egal was das
 *   JPG im Hintergrund hat — alles außerhalb des Kreises liegt nicht im Layout.
 * - Davor und dahinter: radiale Gradients für Atmosphären-Halo und Glow.
 */
export const Moon = forwardRef<HTMLDivElement>(function Moon(_props, ref) {
  return (
    <div
      ref={ref}
      data-moon
      className="pointer-events-none absolute right-[10%] top-[8%] h-[240px] w-[240px]"
    >
      {/* Atmospheric outer halo */}
      <div
        aria-hidden
        className="absolute inset-[-40%]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(232,234,242,0.42) 0%, rgba(157,107,255,0.22) 38%, rgba(157,107,255,0) 70%)",
        }}
      />
      {/* Soft inner glow */}
      <div
        aria-hidden
        className="absolute inset-[-10%]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0) 65%)",
        }}
      />

      {/* Disc — hard circle clip, no box leakage */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "circle(46% at 50% 50%)",
          WebkitClipPath: "circle(46% at 50% 50%)",
          filter:
            "drop-shadow(0 0 45px rgba(232,234,242,0.55)) drop-shadow(0 0 130px rgba(157,107,255,0.28))",
        }}
      >
        <img
          src={asset("/images/moon.jpg")}
          alt="Vollmond — Wikimedia Commons"
          className="h-full w-full select-none"
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            transform: "scale(1.06)",
            filter: "saturate(0.95) contrast(1.12) brightness(1.08)",
          }}
          draggable={false}
          loading="eager"
        />
      </div>

      {/* Edge feather — softens the razor-cut circle */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(closest-side, transparent 42%, rgba(232,234,242,0.45) 46%, transparent 52%)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
});
