import { motion } from "framer-motion";

export interface ProcessStep {
  id: string;
  index: string;
  title: string;
  description: string;
  duration: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line for desktop */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent md:block"
      />

      <ol className="grid gap-8 md:gap-12">
        {steps.map((step, i) => {
          const left = i % 2 === 0;
          return (
            <motion.li
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12"
            >
              {/* Mobile single column */}
              <div className="md:hidden">
                <StepCard step={step} />
              </div>

              {/* Desktop: left column */}
              <div className="hidden md:block">
                {left ? <StepCard step={step} /> : null}
              </div>

              {/* Center node */}
              <div
                aria-hidden
                className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-accent-cyan shadow-glow md:block"
              >
                <span className="absolute inset-0 animate-pulse-slow rounded-full bg-accent-cyan/60" />
              </div>

              {/* Desktop: right column */}
              <div className="hidden md:block">
                {!left ? <StepCard step={step} /> : null}
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}

function StepCard({ step }: { step: ProcessStep }) {
  return (
    <div className="glass card-glow rounded-2xl p-6 md:p-7">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-cyan">
          {step.index}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
          {step.duration}
        </span>
      </div>
      <h3 className="mt-3 font-display text-[20px] font-semibold leading-tight text-bone">
        {step.title}
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-white/70">
        {step.description}
      </p>
    </div>
  );
}
