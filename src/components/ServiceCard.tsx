import type { ReactNode } from "react";
import { motion } from "framer-motion";

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  bullets: string[];
  accent?: "cyan" | "violet" | "amber" | "rose";
}

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const accentMap: Record<NonNullable<Service["accent"]>, { ring: string; glow: string; chip: string }> = {
  cyan: {
    ring: "rgba(92,242,255,0.55)",
    glow: "0 0 40px -8px rgba(92,242,255,0.55)",
    chip: "text-accent-cyan",
  },
  violet: {
    ring: "rgba(157,107,255,0.55)",
    glow: "0 0 40px -8px rgba(157,107,255,0.55)",
    chip: "text-accent-violet",
  },
  amber: {
    ring: "rgba(255,179,92,0.55)",
    glow: "0 0 40px -8px rgba(255,179,92,0.55)",
    chip: "text-accent-amber",
  },
  rose: {
    ring: "rgba(255,110,156,0.55)",
    glow: "0 0 40px -8px rgba(255,110,156,0.55)",
    chip: "text-accent-rose",
  },
};

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const accent = accentMap[service.accent ?? "cyan"];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.7,
        delay: 0.05 + index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group card-glow relative h-full overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-ink-900/90 via-ink-900/60 to-ink-950/95 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1"
      style={{
        boxShadow: "0 30px 80px -40px rgba(0,0,0,0.6)",
      }}
    >
      {/* Ambient corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-90"
        style={{ background: accent.ring }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-12 -bottom-12 h-32 w-32 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-50"
        style={{ background: "rgba(157,107,255,0.4)" }}
      />

      {/* Diagonal sheen on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-1000 group-hover:translate-x-full"
      />

      <div className="relative z-10 flex h-full flex-col gap-5">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-500 group-hover:border-white/20"
            style={{ boxShadow: accent.glow }}
          >
            <span className={accent.chip}>{service.icon}</span>
          </div>
          <span className={`font-mono text-[10px] uppercase tracking-[0.25em] ${accent.chip}`}>
            {service.tagline}
          </span>
        </div>

        <div>
          <h3 className="font-display text-[22px] font-semibold leading-tight text-bone">
            {service.title}
          </h3>
          <p className="mt-2 text-[14px] leading-relaxed text-white/65">
            {service.description}
          </p>
        </div>

        <ul className="mt-auto space-y-2 pt-2">
          {service.bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[13px] leading-relaxed text-white/75"
            >
              <span
                aria-hidden
                className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${accent.chip} bg-current`}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
            {String(index + 1).padStart(2, "0")} / Service
          </span>
          <span
            className="inline-flex items-center gap-1 text-[12px] font-medium text-white/60 transition-all duration-300 group-hover:gap-2 group-hover:text-bone"
          >
            mehr
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </motion.article>
  );
}
