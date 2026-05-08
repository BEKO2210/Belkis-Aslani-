import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { asset } from "../lib/asset";

const links = [
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#prozess", label: "Prozess" },
  { href: "#showcase", label: "Showcase" },
  { href: "#kontakt", label: "Kontakt" },
];

// Tagline-Rotation: alle 3 Scroll-Bursts wechselt der Untertitel.
// Ein "Burst" = mind. 120 px Scrolldistanz seit dem letzten gezählten Burst.
const TAGLINES = [
  "ai_coder",
  "premium_websites",
  "ai_tools · custom",
  "claude_code · workflows",
  "automation · pipelines",
  "rust · typescript · python",
  "remote_dach · freiberg",
  "open_source · github",
];

const SCROLL_THRESHOLD_PX = 120;
const SCROLLS_PER_ROTATION = 3;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [portraitOk, setPortraitOk] = useState(true);
  const [taglineIndex, setTaglineIndex] = useState(0);

  const lastY = useRef(0);
  const burstCount = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const delta = Math.abs(y - lastY.current);
      if (delta >= SCROLL_THRESHOLD_PX) {
        lastY.current = y;
        burstCount.current += 1;
        if (burstCount.current % SCROLLS_PER_ROTATION === 0) {
          setTaglineIndex((i) => (i + 1) % TAGLINES.length);
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-white/5 bg-ink-950/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-pad flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/15 transition group-hover:ring-accent-cyan/60">
            {/* Always-rendered fallback mark, sits behind portrait */}
            <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-cyan to-accent-violet text-[13px] font-bold text-ink-950">
              B
            </span>
            {portraitOk && (
              <img
                src={asset("/images/portrait.jpg")}
                alt="Belkis Aslani"
                className="absolute inset-0 h-full w-full select-none object-cover"
                draggable={false}
                onError={() => setPortraitOk(false)}
              />
            )}
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-accent-cyan/30 via-transparent to-accent-violet/30 opacity-0 transition group-hover:opacity-100"
            />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-bone">
            Belkis Aslani
          </span>
          <span className="ml-1 hidden h-4 items-center font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 sm:inline-flex">
            <span className="mr-1.5 text-white/30">·</span>
            <span className="relative inline-block min-w-[160px] overflow-hidden align-middle">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={TAGLINES[taglineIndex]}
                  initial={{ y: 8, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -8, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="block whitespace-nowrap text-accent-cyan/80"
                >
                  {TAGLINES[taglineIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-[13px] text-white/65 transition hover:bg-white/5 hover:text-bone"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#kontakt" className="hidden btn-primary md:inline-flex">
            Projekt anfragen
          </a>
          <button
            type="button"
            aria-label="Navigation öffnen"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-bone lg:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-xl lg:hidden"
      >
        <div className="container-pad flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full justify-center"
          >
            Projekt anfragen
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
