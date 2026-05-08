import { useState } from "react";
import { motion } from "framer-motion";
import { TechMarquee, type TechItem } from "../components/TechMarquee";
import { asset } from "../lib/asset";

const FACTS = [
  { label: "Standort", value: "Freiberg am Neckar · Remote DACH" },
  { label: "Erreichbar", value: "Mo–Sa · 09–21 Uhr · UTC+1" },
];

// Simple-Icons-Slugs — siehe https://simpleicons.org
const STACK: TechItem[] = [
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Python", slug: "python" },
  { name: "Rust", slug: "rust" },
  { name: "Go", slug: "go" },
  { name: "C#", slug: "csharp" },
  { name: "Java", slug: "openjdk" },
  { name: "Bash", slug: "gnubash" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Astro", slug: "astro" },
  { name: "Vue", slug: "vuedotjs" },
  { name: "Svelte", slug: "svelte" },
  { name: "React Native", slug: "react" },
  { name: "Expo", slug: "expo" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Bun", slug: "bun" },
  { name: "Deno", slug: "deno" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Express", slug: "express" },
  { name: "tRPC", slug: "trpc" },
  { name: "GraphQL", slug: "graphql" },
  { name: "REST" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "GSAP", slug: "greensock" },
  { name: "Framer Motion", slug: "framer" },
  { name: "Three.js", slug: "threedotjs" },
  { name: "WebGL", slug: "webgl" },
  { name: "Shaders" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Redis", slug: "redis" },
  { name: "Supabase", slug: "supabase" },
  { name: "Firebase", slug: "firebase" },
  { name: "Prisma", slug: "prisma" },
  { name: "Drizzle", slug: "drizzle" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "GitHub Actions", slug: "githubactions" },
  { name: "CI/CD" },
  { name: "Terraform", slug: "terraform" },
  { name: "Vercel", slug: "vercel" },
  { name: "Netlify", slug: "netlify" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "AWS", slug: "amazonwebservices" },
  { name: "GCP", slug: "googlecloud" },
  { name: "Stripe", slug: "stripe" },
  { name: "Webhooks" },
  { name: "Auth · Clerk · Auth.js", slug: "clerk" },
];

const AI_STACK: TechItem[] = [
  { name: "Anthropic Claude", slug: "anthropic" },
  { name: "OpenAI GPT-5", slug: "openai" },
  { name: "Gemini", slug: "googlegemini" },
  { name: "Mistral", slug: "mistralai" },
  { name: "Local LLMs" },
  { name: "Ollama", slug: "ollama" },
  { name: "LM Studio" },
  { name: "vLLM" },
  { name: "MCP Server" },
  { name: "Claude Code", slug: "anthropic" },
  { name: "Cursor", slug: "cursor" },
  { name: "Codex", slug: "openai" },
  { name: "Aider" },
  { name: "Multi-Agent Pipelines" },
  { name: "Subagents" },
  { name: "SendMessage" },
  { name: "LangChain", slug: "langchain" },
  { name: "LlamaIndex" },
  { name: "Pydantic AI", slug: "pydantic" },
  { name: "Vercel AI SDK", slug: "vercel" },
  { name: "RAG" },
  { name: "Hybrid Search" },
  { name: "Reranking" },
  { name: "pgvector", slug: "postgresql" },
  { name: "Pinecone", slug: "pinecone" },
  { name: "Qdrant", slug: "qdrant" },
  { name: "Weaviate" },
  { name: "Chroma" },
  { name: "HNSW" },
  { name: "FAISS", slug: "meta" },
  { name: "Embeddings" },
  { name: "Sentence-Transformers" },
  { name: "SNN · Spiking Neural Nets" },
  { name: "Fine-Tuning" },
  { name: "LoRA · QLoRA" },
  { name: "Voice-Agents" },
  { name: "Realtime API", slug: "openai" },
  { name: "Whisper", slug: "openai" },
  { name: "TTS" },
  { name: "Hugging Face", slug: "huggingface" },
  { name: "Datasets", slug: "huggingface" },
  { name: "Transformers", slug: "huggingface" },
  { name: "Prompt Engineering" },
  { name: "Eval-Frameworks" },
  { name: "Guardrails" },
  { name: "PII-Detection" },
  { name: "AIDefense" },
  { name: "Tool-Use" },
  { name: "Browser-Automation" },
];

export function AboutSection() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="ueber-mich" className="relative py-16 sm:py-20 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 40% at 0% 50%, rgba(255,179,92,0.08), transparent 60%), radial-gradient(40% 40% at 100% 80%, rgba(157,107,255,0.08), transparent 60%)",
        }}
      />

      <div className="container-pad">
        <div className="about-grid">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[400px] md:max-w-[460px] lg:sticky lg:top-24"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-br from-accent-cyan/30 via-transparent to-accent-violet/30 blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-[32px] bg-gradient-to-br from-accent-amber/25 via-transparent to-accent-rose/20 blur-xl"
            />

            <div className="card-glow relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-ink-900/80 backdrop-blur">
              <div
                aria-hidden
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink-800 to-ink-950"
              >
                <span className="font-display text-[160px] font-bold text-bone/10">
                  B
                </span>
              </div>

              {imgOk && (
                <img
                  src={asset("/images/portrait.jpg")}
                  alt="Belkis Aslani — Portrait"
                  className="absolute inset-0 h-full w-full select-none object-cover"
                  draggable={false}
                  onError={() => setImgOk(false)}
                />
              )}

              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent"
              />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-950/70 px-3 py-1.5 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse-slow" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/80">
                    Online · Ready to ship
                  </span>
                </span>
                <span className="rounded-full border border-white/10 bg-ink-950/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 backdrop-blur">
                  v1.0
                </span>
              </div>
            </div>
          </motion.div>

          {/* Copy + Stacks */}
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
                Über mich
              </span>
              <h2 className="mt-6 font-display text-[28px] font-semibold leading-[1.08] tracking-tight text-bone xs:text-[32px] sm:text-[44px] md:text-[52px]">
                Hi, ich bin&nbsp;
                <span className="text-gradient">Belkis</span>.<br />
                Ich code mit AI — und für AI.
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-base">
                Ich baue Premium-Websites, AI-Tools und automatisierte Systeme
                — vom Design über den Code bis zum laufenden Agenten. Mein
                Stack ist breit, weil reale Probleme selten in eine Sprache
                passen. Ich arbeite mit allem, was die Aufgabe verlangt.
              </p>
              <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-white/55">
                Open-Source-Projekte wie&nbsp;
                <span className="text-bone">World.One</span>,&nbsp;
                <span className="text-bone">Javis</span> (SNN-Memory in Rust)
                und das deutsche FOSS-Verzeichnis sind öffentlich auf GitHub.
                Klienten-Cases laufen unter NDA.
              </p>
            </motion.div>

            <div className="mt-10 mr-auto flex w-full min-w-0 max-w-xl flex-col gap-3 lg:max-w-[560px]">
              {/* Top row: Standort + Erreichbar */}
              <div className="grid gap-3 sm:grid-cols-2">
                {FACTS.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 backdrop-blur"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
                      {f.label}
                    </div>
                    <div className="mt-1.5 text-[14px] text-bone">{f.value}</div>
                  </motion.div>
                ))}
              </div>

              {/* Stack & AI-Stack — Marquee + ausklappbar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <TechMarquee label="Stack" items={STACK} duration={45} marqueeLimit={14} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <TechMarquee label="AI-Stack" items={AI_STACK} duration={50} marqueeLimit={14} />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#kontakt" className="btn-primary">
                Lass uns reden
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://github.com/BEKO2210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.17.92-.26 1.91-.39 2.89-.39s1.97.13 2.89.39c2.2-1.49 3.16-1.17 3.16-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                </svg>
                GitHub @BEKO2210
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
