import { motion } from "framer-motion";
import { NeuroBrainCore } from "../components/NeuroBrainCore";

const features = [
  {
    title: "Live-Reasoning",
    text: "Multi-Agent-Workflows mit Claude-Code-Subagents — Researcher, Architect, Coder, Tester koordinieren sich autonom.",
  },
  {
    title: "Kontext-Memory",
    text: "Hybrid-Memory mit Vector-Search & HNSW. Dein System merkt sich Patterns, Briefings und Vorlieben über Sessions hinweg.",
  },
  {
    title: "Tool-Use überall",
    text: "Browser, Editor, CLI, MCP-Server — Agenten nutzen reale Tools, nicht nur Text. Output ist immer ausführbar.",
  },
  {
    title: "Guardrails by default",
    text: "PII-Detection, Prompt-Injection-Defense, Audit-Trails. Sicherheit ist eingebaut, kein Add-on.",
  },
];

export function NeuroBrainSection() {
  return (
    <section id="neurobrain" className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-bg mask-fade-b opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40% 40% at 50% 50%, rgba(92,242,255,0.10), transparent 70%)",
        }}
      />

      <div className="container-pad">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse-slow" />
                Neurobrain
              </span>
              <h2 className="mt-6 font-display text-[36px] font-semibold leading-[1.05] tracking-tight text-bone sm:text-[44px] md:text-[52px]">
                Ein <span className="text-gradient">denkendes Interface</span>{" "}
                für deine Marke.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-white/70 md:text-base">
                Stell dir vor, deine Website wäre kein statisches Dokument,
                sondern ein lebendiger Agent. Ein Jarvis-artiges Interface, das
                Anfragen versteht, Kontexte hält, Aktionen auslöst und sich
                kontinuierlich verbessert.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                Das ist Neurobrain: AI-First-Architektur für Unternehmen, die
                nicht nur online sein wollen, sondern&nbsp;
                <span className="text-bone">präsent, schnell, intelligent</span>.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 backdrop-blur"
                >
                  <h3 className="font-display text-[15px] font-semibold text-bone">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                    {f.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[560px]"
          >
            {/* Outer halo */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(92,242,255,0.15) 0%, rgba(157,107,255,0.08) 40%, transparent 70%)",
              }}
            />
            {/* Concentric rings */}
            <div className="absolute inset-6 rounded-full border border-white/8" />
            <div className="absolute inset-12 rounded-full border border-white/8" />
            <div className="absolute inset-20 rounded-full border border-accent-cyan/20" />

            <div className="relative h-full w-full">
              <NeuroBrainCore />
            </div>

            {/* Telemetry chip */}
            <div className="absolute -left-2 top-6 hidden items-center gap-2 rounded-full border border-white/10 bg-ink-900/80 px-3 py-1.5 backdrop-blur sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse-slow" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
                neurobrain · online
              </span>
            </div>
            <div className="absolute -right-2 bottom-8 hidden items-center gap-2 rounded-full border border-white/10 bg-ink-900/80 px-3 py-1.5 backdrop-blur sm:inline-flex">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
                12 nodes · 24 edges
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
