import { motion } from "framer-motion";

export interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  blurb: string;
  meta: string;
  href?: string;
  stats?: { label: string; value: string }[];
  accent?: "cyan" | "violet" | "amber" | "rose";
  pattern?: "wave" | "grid" | "core" | "stream";
}

interface ShowcaseGridProps {
  items: ShowcaseItem[];
}

const accentColors: Record<string, { from: string; to: string; chip: string }> = {
  cyan: { from: "rgba(92,242,255,0.55)", to: "rgba(157,107,255,0.25)", chip: "text-accent-cyan" },
  violet: { from: "rgba(157,107,255,0.55)", to: "rgba(255,110,156,0.25)", chip: "text-accent-violet" },
  amber: { from: "rgba(255,179,92,0.55)", to: "rgba(255,110,156,0.25)", chip: "text-accent-amber" },
  rose: { from: "rgba(255,110,156,0.55)", to: "rgba(157,107,255,0.25)", chip: "text-accent-rose" },
};

export function ShowcaseGrid({ items }: ShowcaseGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => {
        const Wrapper = item.href ? "a" : "article";
        const wrapperProps = item.href
          ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
          : {};
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}
          >
            <Wrapper
              {...wrapperProps}
              className="group card-glow relative block h-full overflow-hidden rounded-3xl border border-white/8 bg-ink-900/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <ShowcaseVisual
                  pattern={item.pattern ?? "wave"}
                  accent={item.accent ?? "cyan"}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-ink-950/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70 backdrop-blur">
                    {item.category}
                  </span>
                </div>
                {item.href && (
                  <div className="absolute right-5 top-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-950/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.17.92-.26 1.91-.39 2.89-.39s1.97.13 2.89.39c2.2-1.49 3.16-1.17 3.16-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                      </svg>
                      Open Source
                    </span>
                  </div>
                )}
              </div>

              <div className="relative z-10 p-6">
                <h3 className="font-display text-[20px] font-semibold leading-tight text-bone">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/65">
                  {item.blurb}
                </p>

                {item.stats && item.stats.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.stats.map((s, k) => (
                      <span
                        key={k}
                        className="inline-flex items-baseline gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70"
                      >
                        <span className={`font-semibold ${accentColors[item.accent ?? "cyan"].chip}`}>
                          {s.value}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
                          {s.label}
                        </span>
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-5 flex items-center justify-between">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.25em] ${accentColors[item.accent ?? "cyan"].chip}`}
                  >
                    {item.meta}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[12px] text-white/55 transition-all group-hover:gap-2 group-hover:text-bone">
                    {item.href ? "Repo" : "Case"}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M7 17L17 7" />
                      <path d="M9 7h8v8" />
                    </svg>
                  </span>
                </div>
              </div>
            </Wrapper>
          </motion.div>
        );
      })}
    </div>
  );
}

function ShowcaseVisual({
  pattern,
  accent,
}: {
  pattern: "wave" | "grid" | "core" | "stream";
  accent: "cyan" | "violet" | "amber" | "rose";
}) {
  const c = accentColors[accent];

  if (pattern === "grid") {
    return (
      <div className="absolute inset-0 grid-bg">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(60% 60% at 50% 50%, ${c.from} 0%, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 mask-fade-b" />
      </div>
    );
  }

  if (pattern === "core") {
    return (
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 60%, ${c.from} 0%, transparent 55%), radial-gradient(circle at 30% 40%, ${c.to} 0%, transparent 60%)`,
          }}
        />
        <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full">
          {Array.from({ length: 14 }).map((_, i) => (
            <circle
              key={i}
              cx={100}
              cy={70}
              r={6 + i * 6}
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="0.5"
              fill="none"
            />
          ))}
          <circle cx="100" cy="70" r="4" fill="#fff" opacity="0.9" />
        </svg>
      </div>
    );
  }

  if (pattern === "stream") {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${c.to} 0%, transparent 70%)`,
          }}
        />
        <div className="absolute inset-0 flex">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 animate-stream-down"
              style={{
                background: `linear-gradient(180deg, transparent 0%, ${c.from} 50%, transparent 100%)`,
                animationDelay: `${(i % 6) * 0.5}s`,
                animationDuration: `${5 + (i % 4) * 1.2}s`,
                opacity: 0.45,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // wave (default)
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(80% 100% at 50% 100%, ${c.from} 0%, transparent 60%), linear-gradient(140deg, ${c.to}, transparent 50%)`,
        }}
      />
      <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id={`wave-${accent}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5cf2ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#9d6bff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[40, 60, 80, 100].map((y, i) => (
          <path
            key={i}
            d={`M0 ${y} Q50 ${y - 18} 100 ${y} T200 ${y}`}
            stroke={`url(#wave-${accent})`}
            strokeWidth={0.6 + i * 0.2}
            fill="none"
            opacity={0.7 - i * 0.12}
          />
        ))}
      </svg>
    </div>
  );
}
