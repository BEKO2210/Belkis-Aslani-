import { asset } from "../lib/asset";

const groups = [
  {
    label: "Leistungen",
    links: [
      { href: "#leistungen", label: "Premium Websites" },
      { href: "#leistungen", label: "AI-Tools & Agenten" },
      { href: "#leistungen", label: "Claude-Code-Workflows" },
      { href: "#leistungen", label: "Automation" },
    ],
  },
  {
    label: "Kontext",
    links: [
      { href: "#positionierung", label: "Positionierung" },
      { href: "#neurobrain", label: "Neurobrain" },
      { href: "#prozess", label: "Prozess" },
      { href: "#showcase", label: "Showcase" },
    ],
  },
  {
    label: "Kontakt",
    links: [
      { href: "mailto:belkis.aslani@gmail.com", label: "belkis.aslani@gmail.com" },
      { href: "tel:+4917681462526", label: "+49 176 81462526" },
      { href: "#kontakt", label: "Discovery-Call" },
      { href: "https://github.com/BEKO2210", label: "GitHub @BEKO2210" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-ink-950 pt-20 pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(92,242,255,0.6) 50%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-bg mask-fade-t opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-violet/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-accent-cyan/10 blur-3xl"
      />

      <div className="container-pad relative">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/15">
                <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-cyan to-accent-violet text-sm font-bold text-ink-950">
                  B
                </span>
                <img
                  src={asset("/images/portrait.jpg")}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </span>
              <div>
                <div className="font-display text-[18px] font-semibold tracking-tight text-bone">
                  Belkis Aslani
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
                  ai_coder · premium · freiberg a. n.
                </div>
              </div>
            </a>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-white/60">
              Ich baue Premium-Websites, AI-Tools und automatisierte Systeme
              für Marken, die nicht nur online sein, sondern wirken wollen.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href="mailto:belkis.aslani@gmail.com"
                aria-label="E-Mail"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:text-bone"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 7 9-7" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:text-bone"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.27h4.55V23H.22zM7.99 8.27h4.36v2h.06c.61-1.15 2.1-2.35 4.32-2.35 4.62 0 5.47 3.04 5.47 7v8.08h-4.55v-7.16c0-1.71-.03-3.91-2.38-3.91s-2.74 1.86-2.74 3.78V23H7.99z" />
                </svg>
              </a>
              <a
                href="https://github.com/BEKO2210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub @BEKO2210"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:text-bone"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.17.92-.26 1.91-.39 2.89-.39s1.97.13 2.89.39c2.2-1.49 3.16-1.17 3.16-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((g) => (
              <div key={g.label}>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
                  {g.label}
                </div>
                <ul className="mt-4 space-y-2.5 text-[14px]">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-white/70 transition hover:text-bone"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Impressum mini-block */}
        <div className="mt-16 grid gap-6 border-t border-white/8 pt-8 text-[12px] text-white/55 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              Anschrift
            </div>
            <address className="mt-2 not-italic leading-relaxed">
              Belkis Aslani<br />
              Vogelsangstr. 32<br />
              71691 Freiberg am Neckar
            </address>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              Kontakt
            </div>
            <div className="mt-2 leading-relaxed">
              <a
                href="tel:+4917681462526"
                className="block transition hover:text-bone"
              >
                +49 176 81462526
              </a>
              <a
                href="mailto:belkis.aslani@gmail.com"
                className="block transition hover:text-bone"
              >
                belkis.aslani@gmail.com
              </a>
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              Online
            </div>
            <div className="mt-2 leading-relaxed">
              <a
                href="https://github.com/BEKO2210"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-bone"
              >
                github.com/BEKO2210
              </a>
              <span className="block text-white/40">Berlin · DACH · Remote</span>
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              Rechtliches
            </div>
            <div className="mt-2 leading-relaxed">
              <a href="#" className="block transition hover:text-bone">
                Impressum
              </a>
              <a href="#" className="block transition hover:text-bone">
                Datenschutz
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/8 pt-5 text-[12px] text-white/45 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Belkis Aslani — Made with Claude Code.</span>
            <span aria-hidden className="hidden h-1 w-1 rounded-full bg-accent-cyan md:inline-block" />
            <span className="hidden font-mono uppercase tracking-[0.25em] md:inline">
              v1.0 — cinematic
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span>Verantwortlich i.S.d. § 18 Abs. 2 MStV: Belkis Aslani, Vogelsangstr. 32, 71691 Freiberg am Neckar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
