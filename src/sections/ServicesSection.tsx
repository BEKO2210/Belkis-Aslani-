import { motion } from "framer-motion";
import { ServiceCard, type Service } from "../components/ServiceCard";

const services: Service[] = [
  {
    id: "premium-websites",
    title: "Premium Websites",
    tagline: "Cinematic Frontends",
    accent: "cyan",
    description:
      "Maßgeschneiderte Websites mit Apple-Polish und Cinematic-Motion. Schnell, accessible und auf Conversion gebaut.",
    bullets: [
      "Custom-Code in React, Next.js, TypeScript",
      "Lighthouse 95+ auf allen Achsen",
      "GSAP & Framer Motion Cinematic-Stack",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 8h18" />
        <path d="M8 4v4" />
      </svg>
    ),
  },
  {
    id: "ai-tools",
    title: "AI-Tools & Agenten",
    tagline: "Custom Intelligence",
    accent: "violet",
    description:
      "Maßgeschneiderte AI-Tools für deinen Workflow. Vom Chatbot bis zur Multi-Agent-Pipeline mit Memory und Tool-Use.",
    bullets: [
      "Claude / Anthropic API & MCP-Server",
      "RAG-Stacks mit Vector-Search",
      "Multi-Agent-Coordination (SendMessage)",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
        <path d="M5.6 5.6l2.1 2.1" />
        <path d="M16.3 16.3l2.1 2.1" />
        <path d="M5.6 18.4l2.1-2.1" />
        <path d="M16.3 7.7l2.1-2.1" />
      </svg>
    ),
  },
  {
    id: "claude-workflows",
    title: "Claude-Code-Workflows",
    tagline: "Engineering at speed",
    accent: "amber",
    description:
      "Setup, Tuning und Skalierung von Claude-Code für Teams. CLAUDE.md, Hooks, Subagents, MCP-Integration — produktionsreif.",
    bullets: [
      "Custom-Skills, Hooks & MCP-Server",
      "Subagent-Pipelines & Parallelisierung",
      "Memory-Tuning, Tokens 50–75% sparen",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M8 3l-5 9 5 9" />
        <path d="M16 3l5 9-5 9" />
        <path d="M14 4l-4 16" />
      </svg>
    ),
  },
  {
    id: "automation",
    title: "Automation & Workflows",
    tagline: "Less click, more flow",
    accent: "rose",
    description:
      "Repetitive Aufgaben verschwinden. Ich verbinde Tools, baue Triggers, orchestriere LLM-Pipelines — und du bekommst Zeit zurück.",
    bullets: [
      "n8n, Zapier, Make + Custom-Code",
      "GitHub Actions, CI/CD, Release-Bots",
      "Slack/Telegram-Integrationen",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M4 7h12" />
        <path d="M16 7l-3-3" />
        <path d="M16 7l-3 3" />
        <path d="M20 17H8" />
        <path d="M8 17l3-3" />
        <path d="M8 17l3 3" />
      </svg>
    ),
  },
  {
    id: "jarvis",
    title: "Jarvis-Interfaces",
    tagline: "Voice + Agent UX",
    accent: "cyan",
    description:
      "Sprach- und Agent-Interfaces mit Live-Reasoning. Voice-First UX, schnelle Latenzen, multimodal — wie aus einem Spielfilm.",
    bullets: [
      "Realtime-Voice (OpenAI / Anthropic)",
      "Tool-Use mit transparenten Reasoning-Logs",
      "Multimodale UI: Voice + Visual + Text",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <rect x="9" y="3" width="6" height="12" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0" />
        <path d="M12 18v3" />
      </svg>
    ),
  },
  {
    id: "consulting",
    title: "AI-Strategie & Sparring",
    tagline: "Roadmap + Architektur",
    accent: "violet",
    description:
      "Wo lohnt sich AI in deinem Business? Workshops, Audits, Architektur-Reviews — pragmatisch, ehrlich, mit ROI-Brille.",
    bullets: [
      "Use-Case-Discovery & Priorisierung",
      "Tech-Stack-Audit & Migrationspfade",
      "Hands-on-Sparring fürs Team",
    ],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.3l-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="leistungen" className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 40% at 100% 50%, rgba(157,107,255,0.07), transparent 60%)",
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
              <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
              Leistungen
            </span>
            <h2 className="mt-6 font-display text-[36px] font-semibold leading-[1.05] tracking-tight text-bone sm:text-[44px] md:text-[52px]">
              Sechs Werkzeuge, ein&nbsp;
              <span className="text-gradient">Versprechen</span>: gebaut,
              nicht zusammengeklickt.
            </h2>
          </div>
          <p className="max-w-md text-[14px] leading-relaxed text-white/65">
            Egal ob du eine neue Marke launchst, ein internes Tool brauchst oder
            dein Team mit AI auf die Überholspur setzen willst — hier ist der
            Stack, mit dem ich arbeite.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
