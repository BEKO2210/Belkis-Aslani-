# Continue-Anleitung — Belkis Aslani Website

> Nach dem Neustart von Claude Code: diese Datei in den Chat ziehen oder den Prompt unten direkt kopieren.

## 1. Magic MCP nach dem Neustart prüfen

Im neuen Claude-Code-Fenster:

```
/mcp
```

Du solltest in der Liste sehen: **magic** (`@21st-dev/magic`).
Wenn nicht, kurz checken mit:

```
claude mcp list
```

## 2. Status — was schon fertig ist

- ✅ Root-Configs: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`,
  `tailwind.config.js`, `postcss.config.js`, `index.html`, `public/favicon.svg`, `.gitignore`
- ✅ App-Bootstrap: `src/main.tsx`, `src/vite-env.d.ts`
- ✅ Globales Styling: `src/index.css` (Design-Tokens, Glow, Glass, Grid-BG, Reduced-Motion)
- ✅ Hooks: `src/hooks/useReducedMotion.ts`, `src/hooks/useLenisGsap.ts`
- ✅ Komponenten: `Navigation.tsx`, `AnimatedSection.tsx`, `CitySkyline.tsx`
  (SVG-Skyline mit `data-light`-Hooks für die Scroll-Animation)

## 3. Was noch fehlt

- `src/App.tsx` — alle Sections verdrahten
- `src/components/HeroScrollScene.tsx` — GSAP-ScrollTrigger pinned:
  Tag → Sonnenuntergang → Nacht, Sonne sinkt, Mond steigt, Sterne fade-in,
  City-Lights stagger-on, Neuralgrid einblenden, AI-Core pulst, Headline-Switch
- `src/components/NeuroBrainCore.tsx` — animierter AI-Core mit pulsierenden Nodes + Lines
- `src/components/ServiceCard.tsx`
- `src/components/ProcessTimeline.tsx`
- `src/components/ShowcaseGrid.tsx`
- Section-Komponenten: `PositioningSection`, `NeuroBrainSection`, `ServicesSection`,
  `ProcessSection`, `TrustSection`, `CTASection`, `Footer`
- `README.md`
- `npm install` + Verifikation `npm run dev`

## 4. Continue-Prompt (kopieren & in Claude einfügen)

```
Wir bauen die Website "Belkis Aslani" weiter. Projektpfad:
C:\Users\belki\Desktop\Belkis Webseite

Lies zuerst CONTINUE.md im Projekt-Root — dort steht der genaue Status.
Dann lies zur Stilkalibrierung:
- src/index.css
- src/components/Navigation.tsx
- src/components/CitySkyline.tsx

Nutze jetzt den 21st.dev Magic MCP (mcp__magic__*) aktiv für Premium-UI-
Inspiration und einzelne Komponenten — z. B. ServiceCard, Hero-CTAs,
ShowcaseGrid, Footer. Mische die Magic-Outputs mit dem bestehenden
cinematischen Stil (Dark, Glow, Apple/Tesla/Netflix/OpenAI-Mix).

Sprache: Deutsch. Marke: Belkis Aslani — AI-Coder, Premium Websites,
AI-Tools, Claude-Code-Workflows, Jarvis/Neurobrain-Interfaces.

Pflicht:
- Cinematic Day→Night Scroll im Hero (GSAP ScrollTrigger pinned, scrubbed)
- Sonne sinkt, Mond steigt, Sterne fade-in, City-Lights stagger
- Neuralgrid + AI-Core erwachen unten
- Headline-Switch von "Ich baue Websites" → "Ich baue digitale Systeme"
- Mobile-First, prefers-reduced-motion respektieren
- Saubere gsap.context()-Cleanup, keine Memory Leaks
- Kein Anthropic-API-Key, keine Stockfotos, kein Backend

Akzeptanzkriterien:
- npm install läuft sauber
- npm run dev startet ohne Fehler
- Hero hat funktionierende Tag→Nacht-Animation
- Alle Sections aus dem ursprünglichen Briefing sind gebaut
- README.md erklärt Install, Dev, Deploy (Vercel + GitHub Pages)

Baue jetzt alle fehlenden Komponenten + App.tsx + README.md, dann führe
npm install aus und verifiziere mit npm run dev.
```

## 5. Optional — Magic MCP gezielt nutzen

Sobald Magic aktiv ist, kannst du im Chat z. B. tippen:

```
/ui hero CTA buttons, dark cinematic, neon glow, German label "Projekt anfragen"
/ui service card grid, glassmorphism, hover glow, 8 cards
```

Magic liefert dann einen UI-Vorschlag, den ich in den Code einbaue.
