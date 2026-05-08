import { motion } from "framer-motion";
import { ShowcaseGrid, type ShowcaseItem } from "../components/ShowcaseGrid";

const items: ShowcaseItem[] = [
  {
    id: "world-one",
    title: "World.One v2.0",
    category: "Live Daten-Story",
    blurb:
      "Der Zustand der Welt in einem einzigen Scroll-Erlebnis. Welt-Indikator aus 65 freien APIs, Self-Healing-Pipeline, automatische Re-Builds alle 6 Stunden — gebaut zum Überdauern.",
    meta: "Vanilla JS · GitHub Actions · 65 APIs",
    href: "https://github.com/BEKO2210/World.One_v2.0",
    accent: "cyan",
    pattern: "core",
    stats: [
      { label: "Quellen", value: "65" },
      { label: "Auto-Pipeline", value: "6h" },
      { label: "Sektionen", value: "12" },
    ],
  },
  {
    id: "javis",
    title: "Javis — SNN Memory Co-Processor",
    category: "Research / Rust",
    blurb:
      "Spiking Neural Network Memory-Co-Processor für LLM-Agenten. Biologisch inspirierte Pattern-Completion als effiziente Alternative zu klassischem RAG. Geschrieben in Rust, research-only.",
    meta: "Rust · Spiking Neural Net · LLM Memory",
    href: "https://github.com/BEKO2210/Javis",
    accent: "violet",
    pattern: "wave",
    stats: [
      { label: "Sprache", value: "Rust" },
      { label: "Domäne", value: "SNN" },
    ],
  },
  {
    id: "european-foss",
    title: "European FOSS Alternatives",
    category: "Open-Source-Katalog",
    blurb:
      "Kuratiertes Verzeichnis von 370+ echten Open-Source-Alternativen zu proprietärer Software. 40 Kategorien, DE/EN, Self-Hostable, Auto-Discovery via GitHub-API mit OSI/FSF-Lizenz-Allowlist.",
    meta: "Astro · TypeScript · Tailwind · Pagefind",
    href: "https://github.com/BEKO2210/european-alternatives.eu-free-open-source",
    accent: "amber",
    pattern: "grid",
    stats: [
      { label: "Tools", value: "370+" },
      { label: "Kategorien", value: "40" },
      { label: "Sprachen", value: "DE/EN" },
    ],
  },
  {
    id: "neurobrain-internal",
    title: "Neurobrain — Agent Cockpit",
    category: "AI Tool · in Arbeit",
    blurb:
      "Multi-Agent-Cockpit mit Live-Reasoning, Memory-Visualizer und Voice-Layer. Real-time Tool-Use, transparent gerendert. Eigenes internes Tool, das ich für Klienten ausrolle.",
    meta: "React · Anthropic · MCP",
    accent: "rose",
    pattern: "stream",
  },
  {
    id: "claude-workflows",
    title: "Claude-Code-Workflow-Stack",
    category: "Engineering Setup",
    blurb:
      "Mein produktiver Claude-Code-Stack: Custom-Skills, Hooks, MCP-Server, Subagent-Pipelines mit SendMessage-Coordination. Reduziert Token-Verbrauch um 50–75%.",
    meta: "CLAUDE.md · Hooks · MCP · Subagents",
    accent: "cyan",
    pattern: "stream",
  },
];

export function ShowcaseSection() {
  return (
    <section id="showcase" className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 0%, rgba(157,107,255,0.10), transparent 70%)",
        }}
      />

      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
              Showcase
            </span>
            <h2 className="mt-6 font-display text-[36px] font-semibold leading-[1.05] tracking-tight text-bone sm:text-[44px] md:text-[52px]">
              Echte&nbsp;
              <span className="text-gradient">Projekte &amp; Open Source</span>.
            </h2>
          </div>
          <p className="max-w-md text-[14px] leading-relaxed text-white/65">
            Drei davon sind öffentlich auf GitHub — direkt klickbar. Klienten-Cases
            laufen unter NDA, frag mich gerne im Gespräch.
          </p>
        </motion.div>

        <div className="mt-12">
          <ShowcaseGrid items={items} />
        </div>

        {/* GitHub-Profil-Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://github.com/BEKO2210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.17.92-.26 1.91-.39 2.89-.39s1.97.13 2.89.39c2.2-1.49 3.16-1.17 3.16-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
            Mehr auf github.com/BEKO2210
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M7 17L17 7" />
              <path d="M9 7h8v8" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
