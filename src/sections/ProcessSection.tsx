import { motion } from "framer-motion";
import { ProcessTimeline, type ProcessStep } from "../components/ProcessTimeline";

const steps: ProcessStep[] = [
  {
    id: "discover",
    index: "01 / Discover",
    title: "Briefing & Use-Case-Mapping",
    duration: "Tag 1–2",
    description:
      "Wir klären Ziel, Zielgruppe und Ressourcen. Ich übersetze deine Idee in ein technisches und visuelles Konzept — inklusive AI-Touchpoints, die wirklich Mehrwert liefern.",
  },
  {
    id: "design",
    index: "02 / Design",
    title: "Cinematic Direction",
    duration: "Tag 3–7",
    description:
      "Moodboards, Designsystem, Hero-Konzepte. Wir definieren den visuellen Stil und die Mikrointeraktionen, die deine Marke spürbar machen.",
  },
  {
    id: "build",
    index: "03 / Build",
    title: "Code, Cinematic Motion & AI",
    duration: "Tag 8–21",
    description:
      "Custom-Code in TypeScript, GSAP-Timelines, Framer Motion, AI-Integration mit Claude und Custom-Agenten. Mobile-First, Performance-First.",
  },
  {
    id: "ship",
    index: "04 / Ship",
    title: "Deploy, Analytics, Hand-off",
    duration: "Tag 22–25",
    description:
      "Deployment auf Vercel/Netlify/eigener Infra. Monitoring, Analytics, SEO-Polish. Du bekommst eine saubere Übergabe inkl. Doku & Loom-Walkthrough.",
  },
  {
    id: "evolve",
    index: "05 / Evolve",
    title: "Care, Iteration, AI-Tuning",
    duration: "ongoing",
    description:
      "Optional: Monatliche Iterationen, A/B-Tests, AI-Workflow-Tuning. Deine Plattform bleibt nicht stehen — sie lernt mit dir.",
  },
];

export function ProcessSection() {
  return (
    <section id="prozess" className="relative py-16 sm:py-20 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(40% 30% at 0% 50%, rgba(92,242,255,0.08), transparent 60%)",
        }}
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
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            Prozess
          </span>
          <h2 className="mt-6 font-display text-[28px] font-semibold leading-[1.08] tracking-tight text-bone xs:text-[32px] sm:text-[44px] md:text-[52px]">
            Vom ersten Call zum&nbsp;
            <span className="text-gradient">lebendigen System</span>{" "}
            in 5 Schritten.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/70 md:text-base">
            Klare Etappen, klare Deliverables, kein Bullshit-Overhead. Du weißt
            jederzeit, woran wir stehen — und was als Nächstes kommt.
          </p>
        </motion.div>

        <div className="mt-14">
          <ProcessTimeline steps={steps} />
        </div>
      </div>
    </section>
  );
}
