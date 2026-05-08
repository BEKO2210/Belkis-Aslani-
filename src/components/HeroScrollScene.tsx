import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Sun } from "./Sun";
import { Moon } from "./Moon";
import { ShaderAurora } from "./ShaderAurora";
import { SkyImageSequence, SKY_FRAME_COUNT } from "./SkyImageSequence";
import { useReducedMotion } from "../hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/**
 * Cinematic Day → Sunset → Night hero — Premium Edition.
 * - Sonne mit Korona, Granulation und Solarflares
 * - Mond mit Kratern, Maria und Atmosphären-Halo
 * - Three.js Aurora-Shader im Nacht-Modus (FBM, 35 Layer)
 * - 130 Sterne mit Twinkling
 * - Stadt-Lichter staggered, Antennen blinken
 * - Headline-Switch mit Scale + Blur
 * - Subtile Camera-Zoom-In Richtung Nacht
 */
export function HeroScrollScene() {
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    const scene = sceneRef.current;
    if (!root || !scene) return;

    const ctx = gsap.context(() => {
      const sky = scene.querySelector<HTMLDivElement>("[data-sky]");
      const dayTint = scene.querySelector<HTMLDivElement>("[data-day-tint]");
      const sunsetTint = scene.querySelector<HTMLDivElement>("[data-sunset-tint]");
      const nightTint = scene.querySelector<HTMLDivElement>("[data-night-tint]");
      const sun = scene.querySelector<HTMLDivElement>("[data-sun]");
      const moon = scene.querySelector<HTMLDivElement>("[data-moon]");
      const aurora = scene.querySelector<HTMLDivElement>("[data-aurora]");
      const stars = scene.querySelectorAll<SVGCircleElement>("[data-star]");
      const shootingStar = scene.querySelector<SVGGElement>("[data-shooting-star]");
      const grid = scene.querySelector<HTMLDivElement>("[data-grid]");
      const headlineDay = scene.querySelector<HTMLDivElement>("[data-headline-day]");
      const headlineNight = scene.querySelector<HTMLDivElement>("[data-headline-night]");
      const sub = scene.querySelector<HTMLDivElement>("[data-sub]");
      const ctas = scene.querySelector<HTMLDivElement>("[data-ctas]");
      const scrollHint = scene.querySelector<HTMLDivElement>("[data-scroll-hint]");
      const sceneInner = scene.querySelector<HTMLDivElement>("[data-scene-inner]");
      const skyFrames = scene.querySelectorAll<HTMLImageElement>("[data-sky-frame]");

      // Initial states
      gsap.set(dayTint, { opacity: 1 });
      // Sky-frame init: only the first frame visible
      skyFrames.forEach((f, i) => gsap.set(f, { opacity: i === 0 ? 1 : 0 }));
      gsap.set(sunsetTint, { opacity: 0 });
      gsap.set(nightTint, { opacity: 0 });
      gsap.set(aurora, { opacity: 0 });
      gsap.set(stars, { opacity: 0, scale: 0.6, transformOrigin: "center" });
      gsap.set(grid, { opacity: 0 });
      gsap.set(headlineNight, { opacity: 0, yPercent: 35, filter: "blur(8px)", scale: 0.96 });
      gsap.set(moon, { opacity: 0, y: () => window.innerHeight * 0.4, scale: 0.85 });
      gsap.set(shootingStar, { opacity: 0 });

      // Star twinkle
      gsap.utils.toArray<SVGCircleElement>("[data-star]").forEach((s, i) => {
        gsap.to(s, {
          opacity: () => 0.4 + Math.random() * 0.6,
          duration: 1.2 + Math.random() * 1.5,
          repeat: -1,
          yoyo: true,
          delay: i * 0.02,
          ease: "sine.inOut",
        });
      });

      // Shooting star — repeating
      const shootingTl = gsap.timeline({ repeat: -1, repeatDelay: 6, paused: true });
      shootingTl
        .fromTo(
          shootingStar,
          { x: -20, y: 80, opacity: 0 },
          { opacity: 1, duration: 0.15, ease: "none" },
        )
        .to(shootingStar, { x: 600, y: 220, duration: 1.4, ease: "power2.in" }, 0)
        .to(shootingStar, { opacity: 0, duration: 0.4 }, 1.0);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=200%",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          onEnter: () => shootingTl.play(),
          onEnterBack: () => shootingTl.play(),
          onLeave: () => shootingTl.pause(),
          onLeaveBack: () => shootingTl.pause(),
        },
      });

      // Subtle camera zoom-in throughout the scroll
      tl.to(sceneInner, { scale: 1.08, duration: 1, ease: "none" }, 0);

      // Sky image sequence — crossfade through 12 photos across the full scroll
      // Each frame "owns" 1/(N-1) of the timeline, with overlap for smooth fades
      if (skyFrames.length > 1) {
        const segment = 1 / (skyFrames.length - 1);
        skyFrames.forEach((frame, i) => {
          if (i === 0) return; // first frame is already visible
          const peak = i * segment;
          // Fade IN starts a half-segment before peak
          tl.to(
            frame,
            { opacity: 1, duration: segment, ease: "none" },
            Math.max(0, peak - segment),
          );
          // Fade OUT the previous frame as this one comes in
          tl.to(
            skyFrames[i - 1],
            { opacity: 0, duration: segment, ease: "none" },
            Math.max(0, peak - segment),
          );
        });
      }

      // Sky/tint phase tweens (sky color shifts with sun position)
      tl.to(sky, { backgroundPosition: "50% 35%", duration: 0.4 }, 0);
      tl.to(dayTint, { opacity: 0.25, duration: 0.4 }, 0);
      tl.to(sunsetTint, { opacity: 1, duration: 0.4 }, 0);
      tl.to(sunsetTint, { opacity: 0, duration: 0.38 }, 0.4);
      tl.to(nightTint, { opacity: 1, duration: 0.38 }, 0.4);
      tl.to(aurora, { opacity: 0.65, duration: 0.45 }, 0.45);
      tl.to(scrollHint, { opacity: 0, y: -10, duration: 0.15 }, 0);

      // ============================================================
      // SUN — premium curved arc via GSAP MotionPath (Bezier)
      // Trajectory: top-left morning → high noon (top-center) → sets bottom-right
      // Pre-calculate viewport-relative path points so the arc adapts to size
      // ============================================================
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Sun follows a soft Bezier through 3 anchor points
      tl.to(
        sun,
        {
          duration: 0.78,
          ease: "none",
          motionPath: {
            path: [
              { x: 0,           y: 0 },                  // CSS-pos (top-left morning)
              { x: w * 0.30,    y: -h * 0.04 },          // peak (noon, slightly higher)
              { x: w * 0.62,    y: h * 0.55 },           // horizon (sunset, right)
            ],
            curviness: 1.6,
            type: "soft",
            autoRotate: false,
          },
        },
        0,
      );

      // Atmospheric perspective: sun grows + dims as it nears the horizon
      tl.to(sun, { scale: 1.05, duration: 0.4, ease: "sine.inOut" }, 0);
      tl.to(sun, { scale: 1.55, duration: 0.34, ease: "power1.in" }, 0.42);
      tl.to(
        sun,
        {
          opacity: 0,
          filter:
            "drop-shadow(0 0 90px rgba(255,90,40,0.7)) drop-shadow(0 0 200px rgba(255,60,30,0.5))",
          duration: 0.18,
          ease: "power2.in",
        },
        0.6,
      );

      // ============================================================
      // MOON — premium counter-arc, opposite side from sunset
      // Trajectory: hidden bottom-left horizon → rises → high top-right
      // Initial transform set on `moon` is overridden by motionPath
      // ============================================================
      tl.to(
        moon,
        {
          duration: 0.6,
          ease: "none",
          motionPath: {
            path: [
              { x: -w * 0.55,   y: h * 0.55 },           // hidden far below-left
              { x: -w * 0.30,   y: h * 0.18 },           // rising mid-arc
              { x: 0,           y: 0 },                  // CSS-pos (top-right night)
            ],
            curviness: 1.5,
            type: "soft",
            autoRotate: false,
          },
        },
        0.4,
      );
      tl.fromTo(
        moon,
        { opacity: 0, scale: 1.4 },
        { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" },
        0.42,
      );
      tl.to(
        stars,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: { from: "random", amount: 0.4 },
        },
        0.45,
      );
      // Phase 3 — Awakening: grid + headline switch (0.78 → 1)
      tl.to(grid, { opacity: 0.65, duration: 0.25 }, 0.78);
      tl.to(
        headlineDay,
        { opacity: 0, yPercent: -35, filter: "blur(10px)", scale: 0.94, duration: 0.3 },
        0.78,
      );
      tl.to(
        headlineNight,
        { opacity: 1, yPercent: 0, filter: "blur(0px)", scale: 1, duration: 0.4, ease: "power2.out" },
        0.82,
      );
      tl.to(sub, { opacity: 0.95, y: 0, duration: 0.3 }, 0.86);
      tl.to(ctas, { opacity: 1, y: 0, duration: 0.3 }, 0.9);
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative h-screen w-full overflow-hidden"
      aria-label="Belkis Aslani — cinematischer Hero von Tag zu Nacht"
    >
      <div ref={sceneRef} className="relative h-full w-full">
        <div data-scene-inner className="relative h-full w-full">
          {/* Sky base — fallback gradient if photos don't load */}
          <div
            data-sky
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #f6c894 0%, #f0a574 28%, #d97a85 55%, #5b3d8a 78%, #0a0c14 100%)",
              backgroundSize: "100% 220%",
              backgroundPosition: "50% 0%",
            }}
          />

          {/* Sky photo sequence — 12 progressive photos crossfading on scroll */}
          <SkyImageSequence />

          {/* Tints */}
          <div
            data-day-tint
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 25% 25%, rgba(255,210,140,0.65), transparent 60%), radial-gradient(70% 50% at 75% 30%, rgba(120,200,255,0.30), transparent 60%)",
            }}
          />
          <div
            data-sunset-tint
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 30% 50%, rgba(255,140,90,0.65), transparent 65%), radial-gradient(70% 60% at 70% 30%, rgba(255,90,140,0.45), transparent 65%)",
            }}
          />
          <div
            data-night-tint
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 100%, rgba(92,242,255,0.22), transparent 65%), radial-gradient(80% 60% at 50% 0%, rgba(157,107,255,0.32), transparent 70%), linear-gradient(180deg, rgba(5,6,10,0.55) 0%, rgba(5,6,10,0.92) 100%)",
            }}
          />

          {/* Aurora shader — only fades in at night */}
          <div data-aurora className="absolute inset-0">
            <ShaderAurora intensity={1.2} />
          </div>

          {/* Stars */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <defs>
              <radialGradient id="star-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="40%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
              <filter id="star-bloom" x="-200%" y="-200%" width="500%" height="500%">
                <feGaussianBlur stdDeviation="0.8" />
              </filter>
            </defs>
            {/* 130 stars — varied size, two layers */}
            {Array.from({ length: 130 }).map((_, i) => {
              const x = (i * 173 + (i * i) % 47) % 1600;
              const y = (i * 67) % 540;
              const r = i % 7 === 0 ? 2.2 : i % 4 === 0 ? 1.4 : i % 2 === 0 ? 0.9 : 0.6;
              const isBright = i % 9 === 0;
              return (
                <g key={`star-${i}`}>
                  {isBright && (
                    <circle
                      data-star
                      cx={x}
                      cy={y}
                      r={r * 3.2}
                      fill="url(#star-glow)"
                      opacity="0"
                      filter="url(#star-bloom)"
                    />
                  )}
                  <circle
                    data-star
                    cx={x}
                    cy={y}
                    r={r}
                    fill={isBright ? "#fff" : i % 5 === 0 ? "#cfe9ff" : "#f4f1ea"}
                    opacity="0"
                  />
                </g>
              );
            })}

            {/* Shooting star */}
            <g data-shooting-star opacity="0">
              <line
                x1="0"
                y1="0"
                x2="80"
                y2="-30"
                stroke="url(#star-glow)"
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity="0.8"
              />
              <circle cx="80" cy="-30" r="2" fill="#fff" />
            </g>
          </svg>

          {/* Sun & Moon */}
          <Sun />
          <Moon />

          {/* Subtle scanline + noise overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay bg-noise" />

          {/* Neural grid */}
          <div
            data-grid
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] grid-bg mask-fade-t"
          />

          {/* Foreground content */}
          <div className="relative z-10 flex h-full w-full items-center">
            <div className="container-pad">
              <div className="max-w-2xl">
                <span className="eyebrow mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-glow" />
                  Belkis Aslani · AI-Coder &amp; Premium-Webentwicklung
                </span>

                <div className="relative h-[260px] sm:h-[280px] md:h-[320px]">
                  <h1
                    data-headline-day
                    className="absolute inset-0 font-display text-[40px] leading-[1.05] sm:text-[56px] md:text-[72px] font-semibold tracking-tight text-bone"
                  >
                    Ich baue
                    <br />
                    <span className="text-gradient">Websites,</span>
                    <br />
                    die wirken.
                  </h1>
                  <h1
                    data-headline-night
                    className="absolute inset-0 font-display text-[40px] leading-[1.05] sm:text-[56px] md:text-[72px] font-semibold tracking-tight text-bone"
                  >
                    Ich baue
                    <br />
                    <span className="text-gradient">digitale Systeme,</span>
                    <br />
                    die für dich denken.
                  </h1>
                </div>

                <p
                  data-sub
                  className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
                  style={{ opacity: reduced ? 1 : 0.6, transform: "translateY(8px)" }}
                >
                  Premium-Websites, AI-Tools und automatisierte Workflows. Vom
                  ersten Pixel bis zum laufenden Agenten — gebaut mit Claude
                  Code, cinematischer Ästhetik und einem Hang zur Perfektion.
                </p>

                <div
                  data-ctas
                  className="mt-8 flex flex-wrap items-center gap-3"
                  style={{ opacity: reduced ? 1 : 0, transform: "translateY(8px)" }}
                >
                  <a href="#kontakt" className="btn-primary">
                    Projekt anfragen
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 12h14" />
                      <path d="M13 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a href="#leistungen" className="btn-ghost">
                    Was ich baue
                  </a>
                  <span className="ml-2 hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 md:inline-flex">
                    <span className="h-1 w-1 rounded-full bg-accent-cyan animate-pulse-slow" />
                    online · Berlin / Remote
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div
            data-scroll-hint
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/55"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
              Scroll · Tag → Nacht
            </span>
            <span className="block h-8 w-[2px] bg-gradient-to-b from-white/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
