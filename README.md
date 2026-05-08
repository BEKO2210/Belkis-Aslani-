# Belkis Aslani — Cinematic Premium Website

> Premium-Website, AI-Tools und automatisierte Systeme. Vite + React + TypeScript + GSAP + Tailwind. Cinematic Day→Night-Hero, Neurobrain-Section, Glow-UI im Apple/Tesla/Netflix/OpenAI-Mix.

---

## Stack

- **Vite 5** + **React 18** + **TypeScript 5**
- **Tailwind CSS 3** mit Custom-Tokens (Ink, Accent-Cyan/Violet/Amber/Rose, Bone)
- **GSAP** + **ScrollTrigger** für die pinned Day→Night-Cinematic
- **Framer Motion** für Section-Reveals & Mikrointeraktionen
- **Lenis** für seidiges Smooth-Scrolling (mit Reduced-Motion-Fallback)
- Eigenes Designsystem (`src/index.css`): `card-glow`, `glass`, `text-gradient`, `grid-bg`, `mask-fade-*`

## Sections

1. `HeroScrollScene` — pinned GSAP-Timeline: Sonne sinkt, Mond steigt, Sterne fade-in, City-Lights stagger, Neuralgrid + AI-Core erwachen, Headline-Switch
2. `PositioningSection` — drei Pillars (Premium / AI-First / End-to-End)
3. `NeuroBrainSection` — animierter Brain-Core (SVG + GSAP) + Feature-Grid
4. `ServicesSection` — sechs Service-Cards mit Hover-Glow & Sheen
5. `ProcessSection` — Timeline mit alternierenden Steps
6. `TrustSection` — Stats, Marquee-Stack-Badges, Testimonials
7. `ShowcaseSection` — Bento-Grid mit generierten SVG-Visuals (kein Stock)
8. `CTASection` — Discovery-Call-Card mit Verfügbarkeits-Panel
9. `Footer` — Linkgroups, Social, Brand-Mark

---

## Setup

```bash
npm install
npm run dev
```

Vite läuft standardmäßig auf [`http://localhost:5173`](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

`npm run build` erzeugt einen statischen Build im `dist/`-Ordner.

## Lint / Type-Check

```bash
npm run lint
```

(Führt `tsc --noEmit` aus — kein ESLint-Lock-In, schnell und scharf.)

---

## Deployment

### Vercel (empfohlen)

1. GitHub-Repo anlegen, pushen.
2. Auf [vercel.com/new](https://vercel.com/new) das Repo importieren.
3. Framework wird automatisch als **Vite** erkannt.
4. Build-Command: `npm run build`, Output: `dist`.
5. Deploy. Custom Domain (z. B. `belkis-aslani.de`) im Project-Settings hinterlegen.

### GitHub Pages

1. In `vite.config.ts` `base: "/<repo-name>/"` setzen, falls die Site nicht auf einer Custom-Domain liegt.
2. Workflow `.github/workflows/deploy.yml` mit `actions/deploy-pages` anlegen.
3. Im Repo-Settings unter **Pages** auf „GitHub Actions“ stellen.

Beispiel-Workflow (Kurzfassung):

```yaml
name: Deploy
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: ${{ steps.deployment.outputs.page_url }} }
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Netlify

- `Build`: `npm run build`
- `Publish dir`: `dist`

---

## Projektstruktur

```
src/
  App.tsx
  main.tsx
  index.css                 # Tokens, Glow, Glass, Reduced-Motion
  hooks/
    useReducedMotion.ts
    useLenisGsap.ts
  components/
    Navigation.tsx
    HeroScrollScene.tsx     # GSAP pinned Day→Night
    NeuroBrainCore.tsx      # SVG + GSAP Brain
    CitySkyline.tsx         # SVG Skyline mit data-light Hooks
    AnimatedSection.tsx
    ServiceCard.tsx
    ProcessTimeline.tsx
    ShowcaseGrid.tsx
  sections/
    PositioningSection.tsx
    NeuroBrainSection.tsx
    ServicesSection.tsx
    ProcessSection.tsx
    TrustSection.tsx
    ShowcaseSection.tsx
    CTASection.tsx
    Footer.tsx
```

---

## Design-Prinzipien

- **Cinematic Dark**: tiefer Ink-Hintergrund + glühende Accents in Cyan/Violet/Amber/Rose
- **Apple-Polish**: jeder Pixel sitzt; `letter-spacing`, Eyebrow-Chips, Mono-Captions
- **Tesla-Cleanness**: viel Negativraum, klare Hierarchie, keine Dekoration ohne Funktion
- **Netflix-Tiefe**: Layering, Glow-Halos, Gradient-Overlays, mask-fade
- **OpenAI-Sachlichkeit**: Mono-Typo für Telemetry / Status, neutrale Bone-Schrift

## Performance-Notizen

- Lenis ist nur aktiv, wenn `prefers-reduced-motion` **nicht** gesetzt ist
- GSAP-Timelines werden über `gsap.context()` sauber aufgeräumt (kein Memory-Leak)
- SVGs statt Stock-Images — keine externen Image-Calls, ultraschneller LCP
- Tailwind JIT, Tree-shaking on
- Fonts via `<link>`-Preconnect zu `fonts.googleapis.com` und `fonts.gstatic.com`

## Accessibility

- Sichtbarer Focus-Ring (`:focus-visible`)
- `prefers-reduced-motion` schaltet Lenis und alle GSAP-Animationen ab
- Semantisches Markup (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Aria-Labels auf Icon-Buttons und Pure-Decorative-SVGs auf `aria-hidden`

## Lizenz

© Belkis Aslani — All rights reserved.
