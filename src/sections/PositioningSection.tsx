import { motion } from "framer-motion";

const pillars = [
  {
    label: "Premium",
    title: "Cinematische Frontends",
    text: "Apple-Polish, Tesla-Cleanness, Netflix-Tiefe. Jeder Pixel sitzt — und reagiert.",
  },
  {
    label: "AI-First",
    title: "Systeme, die mitdenken",
    text: "Claude-Code-Workflows, RAG-Stacks, Custom-Agents. Wir bauen Tools, keine Spielzeuge.",
  },
  {
    label: "End-to-End",
    title: "Vom Pixel zum Deploy",
    text: "Design, Code, CI/CD, Monitoring. Eine Hand, ein Stack, ein Versprechen.",
  },
];

export function PositioningSection() {
  return (
    <section id="positionierung" className="relative py-16 sm:py-20 md:py-36">
      {/* Backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(92,242,255,0.08), transparent 60%), radial-gradient(50% 40% at 0% 30%, rgba(157,107,255,0.08), transparent 60%)",
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
            <span className="h-1.5 w-1.5 rounded-full bg-accent-violet" />
            Positionierung
          </span>
          <h2 className="mt-6 font-display text-[28px] font-semibold leading-[1.08] tracking-tight text-bone xs:text-[32px] sm:text-[48px] md:text-[56px]">
            Ich baue digitale Marken, die&nbsp;
            <span className="text-gradient">denken, glühen und konvertieren.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-base">
            Keine Templates, kein Pagebuilder-Brei. Jede Seite entsteht in Code,
            jedes System ist ein Werkzeug — keine Visitenkarte. Ich bringe
            Cinematic-Design, AI-Engineering und Unternehmer-Denken zusammen,
            damit du nicht nur online bist, sondern&nbsp;
            <span className="text-bone">vorne</span>.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.article
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                delay: 0.05 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card-glow glass relative overflow-hidden rounded-3xl p-7"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-cyan">
                {p.label}
              </span>
              <h3 className="mt-4 font-display text-[22px] font-semibold leading-tight text-bone">
                {p.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/70">
                {p.text}
              </p>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-accent-cyan/10 blur-3xl"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
