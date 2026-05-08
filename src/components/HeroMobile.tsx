import { asset } from "../lib/asset";

/**
 * Lightweight static hero for phones. The desktop HeroScrollScene pins a
 * GSAP timeline, runs a Three.js shader, crossfades 28 images and animates
 * 130 stars — that combination hangs mid-range phones. On mobile we
 * render one CSS gradient + one sky photo and skip all JS-driven motion.
 */
export function HeroMobile() {
  return (
    <section
      id="top"
      className="relative flex min-h-[640px] w-full flex-col justify-center overflow-hidden pt-20 pb-12"
      aria-label="Belkis Aslani — Hero"
    >
      {/* Sky base — static gradient */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #1a1530 0%, #2a1f4a 30%, #4a2a6a 55%, #2a1a4a 80%, #05060a 100%)",
        }}
      />

      {/* One sky photo with night-toned filter */}
      <img
        src={asset("/images/sky/scene.jpg")}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-50"
        style={{
          objectPosition: "50% 55%",
          filter:
            "brightness(0.35) saturate(0.8) hue-rotate(210deg) contrast(1.15)",
        }}
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

      {/* Foreground content */}
      <div className="container-pad relative z-10">
        <span className="eyebrow mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
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
    </section>
  );
}
