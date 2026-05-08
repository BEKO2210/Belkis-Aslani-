import { asset } from "../lib/asset";

/**
 * Lightweight static hero for phones. The desktop HeroScrollScene pins a
 * GSAP timeline, runs a Three.js shader, crossfades 28 images and animates
 * 130 stars — that combination hangs on mid-range phones. On mobile we
 * render one CSS gradient + one sky photo and skip all JS-driven motion.
 */
export function HeroMobile() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "calc(100svh - 4rem)" }}
      aria-label="Belkis Aslani — Hero"
    >
      {/* Sky base — single static gradient */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #1a1530 0%, #2a1f4a 25%, #4a2a6a 50%, #2a1a4a 75%, #05060a 100%)",
        }}
      />

      {/* Single sky photo, low priority, with a night-toned filter */}
      <img
        src={asset("/images/sky/scene.jpg")}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full select-none object-cover opacity-50"
        style={{
          objectPosition: "50% 55%",
          filter:
            "brightness(0.35) saturate(0.75) hue-rotate(210deg) contrast(1.15)",
        }}
        loading="eager"
        draggable={false}
      />

      {/* Night ambient tint */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 100%, rgba(92,242,255,0.18), transparent 65%), radial-gradient(80% 60% at 50% 0%, rgba(157,107,255,0.28), transparent 70%), linear-gradient(180deg, rgba(5,6,10,0.45) 0%, rgba(5,6,10,0.85) 100%)",
        }}
      />

      {/* Few decorative static stars (pure CSS, no JS animation) */}
      <div aria-hidden className="absolute inset-0">
        {[
          { x: 12, y: 18, s: 1.5 },
          { x: 28, y: 8, s: 1 },
          { x: 45, y: 22, s: 2 },
          { x: 62, y: 14, s: 1 },
          { x: 78, y: 25, s: 1.5 },
          { x: 90, y: 10, s: 1 },
          { x: 8, y: 38, s: 1 },
          { x: 35, y: 42, s: 1.2 },
          { x: 70, y: 38, s: 1 },
          { x: 88, y: 45, s: 1.5 },
        ].map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.s}px`,
              height: `${s.s}px`,
              opacity: 0.6 + (i % 3) * 0.15,
              boxShadow: i % 4 === 0 ? "0 0 6px rgba(255,255,255,0.6)" : "none",
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex min-h-[inherit] w-full items-center py-16">
        <div className="container-pad">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-glow" />
              Belkis Aslani · AI-Coder
            </span>

            <h1 className="font-display text-[32px] font-semibold leading-[1.05] tracking-tight text-bone xs:text-[36px] sm:text-[44px]">
              Ich baue
              <br />
              <span className="text-gradient">digitale Systeme,</span>
              <br />
              die für dich denken.
            </h1>

            <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
              Premium-Websites, AI-Tools und automatisierte Workflows. Vom
              ersten Pixel bis zum laufenden Agenten — gebaut mit Claude
              Code und einem Hang zur Perfektion.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a href="#kontakt" className="btn-primary">
                Projekt anfragen
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#leistungen" className="btn-ghost">
                Was ich baue
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
