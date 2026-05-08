import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section id="kontakt" className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(92,242,255,0.14), transparent 70%), radial-gradient(60% 60% at 50% 100%, rgba(157,107,255,0.18), transparent 70%)",
        }}
      />

      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="card-glow relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-ink-900/95 via-ink-900/70 to-ink-950/95 px-6 py-14 backdrop-blur-md md:px-16 md:py-20"
        >
          {/* Ambient glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent-cyan/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-20 h-80 w-80 rounded-full bg-accent-violet/20 blur-3xl"
          />
          <div aria-hidden className="absolute inset-0 grid-bg mask-fade-b opacity-30" />

          <div className="relative z-10 grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse-slow" />
                Kontakt
              </span>
              <h2 className="mt-6 font-display text-[36px] font-semibold leading-[1.02] tracking-tight text-bone sm:text-[48px] md:text-[60px]">
                Lass uns dein&nbsp;
                <span className="text-gradient">nächstes System</span>{" "}
                bauen.
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-base">
                Ein 30-Minuten-Call. Ich höre zu, du erzählst, wir prüfen, ob
                der Stack passt. Kostenlos, unverbindlich — und meistens ist die
                Hälfte der Strategie schon im Gespräch fertig.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:belkis.aslani@gmail.com?subject=Projekt-Anfrage%20%E2%80%94%20Belkis%20Aslani"
                  className="btn-primary"
                >
                  Projekt anfragen
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#showcase" className="btn-ghost">
                  Erst Cases ansehen
                </a>
              </div>

              <div className="mt-8 grid gap-3 text-[13px] text-white/65 sm:grid-cols-2">
                <a
                  href="mailto:belkis.aslani@gmail.com"
                  className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 transition hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-cyan/15 text-accent-cyan">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 7 9-7" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
                      E-Mail
                    </div>
                    <div className="text-bone">belkis.aslani@gmail.com</div>
                  </div>
                </a>
                <a
                  href="tel:+4917681462526"
                  className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 transition hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-violet/15 text-accent-violet">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.97.72 2.9a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.18-1.18a2 2 0 0 1 2.11-.45c.93.35 1.9.59 2.9.72a2 2 0 0 1 1.72 2z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
                      Telefon
                    </div>
                    <div className="text-bone">+49 176 81462526</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Side panel — availability */}
            <div className="relative">
              <div className="glass rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55">
                    Verfügbarkeit
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-accent-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse-slow" />
                    online
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[22px] font-semibold leading-tight text-bone">
                  2 Slots offen ab Q2
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/65">
                  Ich nehme bewusst nur wenige Projekte parallel an, damit jedes
                  System wirklich glüht.
                </p>

                <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-[13px] text-white/75">
                  {[
                    "Premium Website ab 4 Wochen",
                    "AI-Tool / Agent ab 3 Wochen",
                    "Strategie & Audit ab 5 Tagen",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        aria-hidden
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-[12px] text-white/55">
                  <span>Berlin · Remote</span>
                  <span className="font-mono">UTC+1</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
