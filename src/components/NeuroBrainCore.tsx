import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useIsMobile } from "../hooks/useIsMobile";

interface Node {
  id: number;
  x: number;
  y: number;
  r: number;
  glow: "cyan" | "violet" | "amber";
}

const NODES: Node[] = [
  { id: 0, x: 50, y: 50, r: 7, glow: "cyan" }, // center
  { id: 1, x: 18, y: 22, r: 4, glow: "violet" },
  { id: 2, x: 82, y: 22, r: 4, glow: "violet" },
  { id: 3, x: 12, y: 50, r: 5, glow: "cyan" },
  { id: 4, x: 88, y: 50, r: 5, glow: "cyan" },
  { id: 5, x: 22, y: 80, r: 4, glow: "amber" },
  { id: 6, x: 78, y: 80, r: 4, glow: "amber" },
  { id: 7, x: 50, y: 14, r: 3.5, glow: "cyan" },
  { id: 8, x: 50, y: 86, r: 3.5, glow: "violet" },
  { id: 9, x: 32, y: 35, r: 3, glow: "cyan" },
  { id: 10, x: 68, y: 35, r: 3, glow: "cyan" },
  { id: 11, x: 32, y: 65, r: 3, glow: "amber" },
  { id: 12, x: 68, y: 65, r: 3, glow: "amber" },
];

// Edges from the center hub + a few peripheral arcs
const EDGES: Array<[number, number]> = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8],
  [0, 9], [0, 10], [0, 11], [0, 12],
  [1, 9], [2, 10], [5, 11], [6, 12],
  [3, 9], [4, 10], [3, 11], [4, 12],
  [1, 7], [2, 7], [5, 8], [6, 8],
];

const COLORS = {
  cyan: "#5cf2ff",
  violet: "#9d6bff",
  amber: "#ffb35c",
};

export function NeuroBrainCore() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (reduced || isMobile) return;
    const svg = ref.current;
    if (!svg) return;

    const ctx = gsap.context(() => {
      const nodes = svg.querySelectorAll<SVGCircleElement>("[data-node]");
      const halos = svg.querySelectorAll<SVGCircleElement>("[data-halo]");
      const edges = svg.querySelectorAll<SVGLineElement>("[data-edge]");
      const pulses = svg.querySelectorAll<SVGCircleElement>("[data-pulse]");

      gsap.to(halos, {
        scale: 1.6,
        opacity: 0,
        transformOrigin: "center",
        duration: 2.4,
        repeat: -1,
        stagger: 0.18,
        ease: "power2.out",
      });

      gsap.to(nodes, {
        opacity: () => 0.65 + Math.random() * 0.35,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        stagger: { from: "random", amount: 1.2 },
        ease: "sine.inOut",
      });

      // Animate dashes along edges to look like data flowing
      edges.forEach((edge, i) => {
        const length = 220;
        gsap.set(edge, {
          strokeDasharray: "8 14",
          strokeDashoffset: length,
        });
        gsap.to(edge, {
          strokeDashoffset: 0,
          duration: 3.5 + (i % 5) * 0.4,
          repeat: -1,
          ease: "none",
        });
      });

      // Pulses: dots traveling toward the center
      pulses.forEach((p, i) => {
        const fromX = parseFloat(p.dataset.fromX || "0");
        const fromY = parseFloat(p.dataset.fromY || "0");
        const toX = 50;
        const toY = 50;
        gsap.fromTo(
          p,
          { attr: { cx: fromX, cy: fromY }, opacity: 0 },
          {
            attr: { cx: toX, cy: toY },
            opacity: 1,
            duration: 2.2 + (i % 4) * 0.3,
            repeat: -1,
            delay: i * 0.18,
            ease: "power1.in",
            onRepeat: () => {
              gsap.set(p, { attr: { cx: fromX, cy: fromY }, opacity: 0 });
            },
          },
        );
      });
    }, svg);

    return () => ctx.revert();
  }, [reduced, isMobile]);

  return (
    <svg
      ref={ref}
      viewBox="0 0 100 100"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="brain-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(92,242,255,0.2)" />
          <stop offset="60%" stopColor="rgba(157,107,255,0.06)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <filter id="brain-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.7" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="50" cy="50" r="50" fill="url(#brain-bg)" />

      {/* Edges */}
      <g filter="url(#brain-glow)">
        {EDGES.map(([a, b], i) => {
          const A = NODES[a];
          const B = NODES[b];
          return (
            <line
              key={`edge-${i}`}
              data-edge
              x1={A.x}
              y1={A.y}
              x2={B.x}
              y2={B.y}
              stroke={i % 3 === 0 ? COLORS.cyan : i % 3 === 1 ? COLORS.violet : "rgba(255,255,255,0.55)"}
              strokeWidth="0.35"
              strokeLinecap="round"
              opacity="0.5"
            />
          );
        })}
      </g>

      {/* Pulses traveling along edges (only main hub edges) */}
      <g>
        {NODES.slice(1, 9).map((n, i) => (
          <circle
            key={`pulse-${i}`}
            data-pulse
            data-from-x={n.x}
            data-from-y={n.y}
            cx={n.x}
            cy={n.y}
            r="0.9"
            fill={COLORS.cyan}
            opacity="0"
          />
        ))}
      </g>

      {/* Halos */}
      {NODES.map((n) => (
        <circle
          key={`halo-${n.id}`}
          data-halo
          cx={n.x}
          cy={n.y}
          r={n.r * 1.2}
          fill={COLORS[n.glow]}
          opacity="0.25"
        />
      ))}

      {/* Nodes */}
      <g filter="url(#brain-glow)">
        {NODES.map((n) => (
          <circle
            key={`node-${n.id}`}
            data-node
            cx={n.x}
            cy={n.y}
            r={n.r * 0.5}
            fill={COLORS[n.glow]}
            opacity="0.95"
          />
        ))}
      </g>

      {/* Center hub ring */}
      <circle
        cx="50"
        cy="50"
        r="6.5"
        fill="none"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="0.25"
      />
      <circle
        cx="50"
        cy="50"
        r="9"
        fill="none"
        stroke="rgba(92,242,255,0.35)"
        strokeWidth="0.18"
        strokeDasharray="1 2"
      />
    </svg>
  );
}
