import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TechItem {
  name: string;
  /** Simple-Icons slug — see https://simpleicons.org */
  slug?: string;
}

interface TechMarqueeProps {
  label: string;
  items: TechItem[];
  /** Marquee-Geschwindigkeit in Sekunden für eine volle Runde */
  duration?: number;
  /** Im kollabierten Marquee-Zustand max. so viele Items zeigen (Highlights).
   *  Im expandierten Zustand werden immer ALLE Items gerendert. */
  marqueeLimit?: number;
}

function TechChip({ item }: { item: TechItem }) {
  const [iconOk, setIconOk] = useState(!!item.slug);

  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] text-white/80 backdrop-blur transition hover:border-white/25 hover:bg-white/[0.08] hover:text-bone">
      {item.slug && iconOk && (
        <img
          src={`https://cdn.simpleicons.org/${item.slug}/ffffff`}
          alt=""
          width={14}
          height={14}
          className="h-3.5 w-3.5 shrink-0 opacity-85"
          onError={() => setIconOk(false)}
          loading="lazy"
          draggable={false}
        />
      )}
      <span>{item.name}</span>
    </span>
  );
}

export function TechMarquee({
  label,
  items,
  duration = 50,
  marqueeLimit,
}: TechMarqueeProps) {
  const [expanded, setExpanded] = useState(false);
  const marqueeItems =
    marqueeLimit && marqueeLimit > 0 ? items.slice(0, marqueeLimit) : items;

  return (
    <div className="card-glow w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur"
         style={{ contain: "layout paint" }}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
          {label}
        </span>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-white/40">
            {items.length}
          </span>
          <button
            type="button"
            onClick={() => setExpanded((s) => !s)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 transition hover:border-white/30 hover:text-bone"
          >
            <span>{expanded ? "Schließen" : "Alle anzeigen"}</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className={`transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {expanded ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 flex flex-wrap gap-1.5">
              {items.map((it) => (
                <TechChip key={it.name} item={it} />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="marquee"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative mt-4 w-full overflow-hidden"
            style={{
              // Hard alpha mask — fades edges to fully transparent so the
              // marquee feels visually bounded even though it loops forever.
              maskImage:
                "linear-gradient(90deg, transparent 0%, #000 14%, #000 86%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, #000 14%, #000 86%, transparent 100%)",
            }}
          >
            <div
              className="flex w-max animate-marquee gap-2 whitespace-nowrap will-change-transform"
              style={{ animationDuration: `${duration}s` }}
            >
              {[...marqueeItems, ...marqueeItems].map((it, i) => (
                <TechChip key={`${it.name}-${i}`} item={it} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
