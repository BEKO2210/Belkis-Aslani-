import { forwardRef } from "react";

/**
 * Echtes Foto der Sonne — NASA Solar Dynamics Observatory (Public Domain).
 *
 * Lösung gegen den sichtbaren JPG-Kasten:
 * - clip-path: circle() → harter, garantiert kreisrunder Crop. Egal was das
 *   JPG im Hintergrund hat — alles außerhalb des Kreises ist nicht im Layout.
 * - Davor und dahinter: mehrere radiale Gradient-Layer für Korona/Halo.
 *   So bekommen wir den weichen Glow, ohne dass die Bild-Box durchscheint.
 */
export const Sun = forwardRef<HTMLDivElement>(function Sun(_props, ref) {
  return (
    <div
      ref={ref}
      data-sun
      className="pointer-events-none absolute left-[8%] top-[10%] h-[280px] w-[280px]"
    >
      {/* Outer corona halo */}
      <div
        aria-hidden
        className="absolute inset-[-45%]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,210,140,0.45) 0%, rgba(255,160,80,0.22) 38%, rgba(255,120,60,0) 70%)",
        }}
      />
      {/* Inner glow shell */}
      <div
        aria-hidden
        className="absolute inset-[-12%]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,200,120,0.6) 0%, rgba(255,160,80,0) 65%)",
        }}
      />

      {/* Disc — hard circle clip, no box can leak through */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "circle(46% at 50% 50%)",
          WebkitClipPath: "circle(46% at 50% 50%)",
          filter:
            "drop-shadow(0 0 50px rgba(255,179,92,0.7)) drop-shadow(0 0 110px rgba(255,140,80,0.45))",
        }}
      >
        <img
          src="/images/sun.jpg"
          alt="Die Sonne — NASA Solar Dynamics Observatory"
          className="h-full w-full select-none"
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            transform: "scale(1.08)",
            filter: "saturate(1.25) contrast(1.15) brightness(1.12)",
          }}
          draggable={false}
          loading="eager"
        />
      </div>

      {/* Soft rim — feathers the disc edge so it doesn't look razor-cut */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(closest-side, transparent 42%, rgba(255,160,80,0.55) 46%, transparent 52%)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
});
