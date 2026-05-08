/**
 * SkyImageSequence — 28× DASSELBE Landschaftsfoto, jedes mit einem
 * Color-Grading-Filter, der eine andere Tageszeit simuliert.
 *
 * Der Effekt beim Scrollen: man sieht EINE konstante Komposition, die
 * sich kontinuierlich durch einen kompletten 24h-Zyklus entwickelt —
 * von tiefer Nacht über Dawn, Sunrise, Morning, Noon, Afternoon,
 * Golden Hour, Sunset, Blue Hour, Twilight bis Deep Night.
 *
 * Die Frames sind echte CSS-Filter, kein Foto-Stock-Mix — so bleibt die
 * Komposition pixelgenau gleich, der User wollte das explizit so.
 */

import { asset } from "../lib/asset";

const BASE = asset("/images/sky/scene.jpg");

// 28 fein abgestufte Tageszeit-Frames. Jeder Step ist eine kleine
// Verschiebung, damit der Crossfade beim Scrollen flüssig wirkt.
const FRAMES: { label: string; filter: string }[] = [
  { label: "predawn-deep",  filter: "brightness(0.18) saturate(0.45) hue-rotate(220deg) contrast(1.2)" },
  { label: "predawn",       filter: "brightness(0.30) saturate(0.55) hue-rotate(210deg) contrast(1.15)" },
  { label: "dawn-early",    filter: "brightness(0.42) saturate(0.65) hue-rotate(190deg) contrast(1.10)" },
  { label: "dawn",          filter: "brightness(0.55) saturate(0.75) hue-rotate(20deg)  contrast(1.05)" },
  { label: "dawn-late",     filter: "brightness(0.68) saturate(0.95) hue-rotate(15deg)  contrast(1.05)" },
  { label: "sunrise-early", filter: "brightness(0.78) saturate(1.10) hue-rotate(12deg)  contrast(1.05)" },
  { label: "sunrise",       filter: "brightness(0.88) saturate(1.20) hue-rotate(8deg)   contrast(1.06)" },
  { label: "sunrise-late",  filter: "brightness(0.96) saturate(1.18) hue-rotate(4deg)   contrast(1.05)" },
  { label: "morning",       filter: "brightness(1.02) saturate(1.10) contrast(1.02)" },
  { label: "morning-late",  filter: "brightness(1.05) saturate(1.10) contrast(1.02)" },
  { label: "noon-pre",      filter: "brightness(1.08) saturate(1.12) contrast(1.02)" },
  { label: "noon",          filter: "brightness(1.10) saturate(1.18) contrast(1.03)" },
  { label: "noon-post",     filter: "brightness(1.08) saturate(1.16) contrast(1.02)" },
  { label: "afternoon",     filter: "brightness(1.02) saturate(1.12) contrast(1.02)" },
  { label: "afternoon-late",filter: "brightness(0.98) saturate(1.18) hue-rotate(-4deg)  contrast(1.03)" },
  { label: "goldenhour",    filter: "brightness(0.94) saturate(1.40) hue-rotate(-12deg) contrast(1.06)" },
  { label: "goldenhour-late",filter:"brightness(0.86) saturate(1.50) hue-rotate(-18deg) contrast(1.08)" },
  { label: "sunset",        filter: "brightness(0.72) saturate(1.55) hue-rotate(-25deg) contrast(1.10)" },
  { label: "sunset-late",   filter: "brightness(0.55) saturate(1.30) hue-rotate(-30deg) contrast(1.12)" },
  { label: "dusk",          filter: "brightness(0.42) saturate(0.95) hue-rotate(-15deg) contrast(1.12)" },
  { label: "dusk-late",     filter: "brightness(0.32) saturate(0.75) hue-rotate(180deg) contrast(1.14)" },
  { label: "bluehour-early",filter: "brightness(0.26) saturate(0.65) hue-rotate(205deg) contrast(1.18)" },
  { label: "bluehour",      filter: "brightness(0.20) saturate(0.55) hue-rotate(215deg) contrast(1.20)" },
  { label: "twilight",      filter: "brightness(0.15) saturate(0.50) hue-rotate(220deg) contrast(1.22)" },
  { label: "night-early",   filter: "brightness(0.12) saturate(0.45) hue-rotate(225deg) contrast(1.24)" },
  { label: "night",         filter: "brightness(0.09) saturate(0.40) hue-rotate(228deg) contrast(1.26)" },
  { label: "night-mid",     filter: "brightness(0.07) saturate(0.38) hue-rotate(230deg) contrast(1.28)" },
  { label: "deepnight",     filter: "brightness(0.05) saturate(0.32) hue-rotate(232deg) contrast(1.30)" },
];

export function SkyImageSequence() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {FRAMES.map((f, i) => (
        <img
          key={f.label}
          data-sky-frame={i}
          data-sky-time={f.label}
          src={BASE}
          alt=""
          className="absolute inset-0 h-full w-full select-none object-cover"
          style={{
            opacity: i === 0 ? 1 : 0,
            objectPosition: "50% 55%",
            filter: f.filter,
            willChange: "opacity",
          }}
          loading={i < 3 ? "eager" : "lazy"}
          draggable={false}
        />
      ))}
    </div>
  );
}

export const SKY_FRAME_COUNT = FRAMES.length;
