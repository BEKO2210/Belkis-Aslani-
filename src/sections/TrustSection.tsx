import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Jahre Code & Craft" },
  { value: "50+", label: "Live-Projekte" },
  { value: "<1.2s", label: "LCP im Schnitt" },
  { value: "24/7", label: "AI-Sparring" },
];

const trustBadges = [
  "Claude Code Power-User",
  "TypeScript",
  "React / Next.js",
  "GSAP · Framer Motion",
  "Anthropic API",
  "MCP-Server",
  "Tailwind",
  "Vercel · Netlify",
];

const testimonials = [
  {
    quote:
      "Belkis hat unser Frontend in 3 Wochen von 65 auf 98 Lighthouse gebracht — und die AI-Workflows laufen seitdem stabil.",
    name: "Lena K.",
    role: "Founder, B2B SaaS",
    accent: "cyan",
  },
  {
    quote:
      "Endlich jemand, der Cinematic-Design UND saubere Engineering-Disziplin liefert. Der Hero ist zum Pitch-Killer geworden.",
    name: "Marco V.",
    role: "Head of Marketing",
    accent: "violet",
  },
  {
    quote:
      "Ich habe nicht nur eine Website bekommen, sondern ein echtes System. Briefings landen jetzt direkt im Agenten — wahnsinnig.",
    name: "Aylin S.",
    role: "Studio Owner",
    accent: "amber",
  },
];

const accentMap = {
  cyan: "text-accent-cyan",
  violet: "text-accent-violet",
  amber: "text-accent-amber",
} as const;

export function TrustSection() {
  return (
    <section id="trust" className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-bg mask-fade-b opacity-30"
      />

      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-rose" />
            Trust
          </span>
          <h2 className="mt-6 font-display text-[36px] font-semibold leading-[1.05] tracking-tight text-bone sm:text-[44px] md:text-[52px]">
            Zahlen, Stack &amp;{" "}
            <span className="text-gradient">echte Stimmen.</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="glass rounded-2xl p-6"
            >
              <div className="font-display text-[34px] font-semibold leading-none text-bone md:text-[42px]">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/55">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stack badges */}
        <div className="mt-12 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 z-10 h-12 w-24 bg-gradient-to-r from-ink-950 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 z-10 h-12 w-24 bg-gradient-to-l from-ink-950 to-transparent"
          />
          <div className="flex animate-marquee gap-3 whitespace-nowrap will-change-transform">
            {[...trustBadges, ...trustBadges].map((b, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/65 backdrop-blur"
              >
                <span className="h-1 w-1 rounded-full bg-accent-cyan" />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                delay: 0.05 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card-glow glass relative overflow-hidden rounded-3xl p-7"
            >
              <span
                className={`font-display text-[40px] leading-none ${
                  accentMap[t.accent as keyof typeof accentMap]
                }`}
                aria-hidden
              >
                "
              </span>
              <blockquote className="mt-2 text-[14px] leading-relaxed text-white/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet text-sm font-semibold text-ink-950">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-bone">
                    {t.name}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
