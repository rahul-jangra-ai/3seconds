# Antigravity IDE & Gemini Prompting Cookbook

Use this guide to prompt Gemini models (e.g. Gemini 1.5 Pro / Flash) inside your Antigravity IDE to generate production-ready code step by step.

---

## 🌟 Master System Prompt for Your IDE

> **Prompt to set project context:**
> "You are the Lead Creative Front-End Architect for **3seconds**, an elite creative media agency website. The stack is Next.js 14 (App Router), Tailwind CSS, TypeScript, GSAP with ScrollTrigger, and Lenis smooth scroll. We follow the detailed markdown specifications provided in the workspace. Write modular, highly accessible, typed, clean code with smooth animations and zero layout shifts. When implementing components, always respect the dual-theme transitions (#FAF6EE warm cream and #0A0A0A deep obsidian) and kinetic typography."

---

## 🛠️ Prompt 1: Project Scaffolding & Setup

```markdown
Generate the complete Next.js 14 App Router project structure for 3seconds:
1. Initialize Tailwind config with our custom color tokens (--bg-warm: #FAF6EE, --bg-obsidian: #0A0A0A, --hook-orange: #FF5722, --electric-amber: #FF9800) and custom font definitions (Cabinet Grotesk / Syne for headings, Plus Jakarta Sans for body).
2. Set up a global Lenis smooth scroll provider in `app/providers.tsx` synced with GSAP ScrollTrigger.
3. Create the global layout in `app/layout.tsx` incorporating the Preloader, Floating Header, Custom Cursor follower, and live Scroll Percentage indicator.
Ensure zero hydration errors and clean TypeScript interfaces.
```

---

## 🛠️ Prompt 2: Hero Section & Kinetic Typography

```markdown
Please build the Hero Section component located at `components/sections/HeroSection.tsx` referencing `sections/02_hero_section.md`.
Requirements:
1. Ultra-heavy typography headline: 'WE CREATE MEMORABLE HOOKS FOR BRANDS IN 3 SECONDS'.
2. Rotating circular badge in the left gutter ('3SECONDS • CAPTURE ATTENTION • OR BE FORGOTTEN •') with a central play icon.
3. Playful vector doodle stickers (SVG rocket, lightning bolt, meme sunglasses, soundwave) positioned absolute with subtle parallax on mousemove.
4. Animated text gradient on the words 'MEMORABLE HOOKS' and '3 SECONDS'.
5. Clean responsiveness across mobile (375px), tablet (768px), and desktop (1440px+).
```

---

## 🛠️ Prompt 3: Pinned Horizontal Case Studies Slider

```markdown
Please build the Pinned Case Studies section located at `components/sections/PinnedCaseStudies.tsx` referencing `sections/05_interactive_3d_orb_case_studies.md`.
Requirements:
1. Background dynamically switches to obsidian black (#0A0A0A) as the section enters the viewport.
2. An interactive 3D particle sphere / glowing media orb in the center (using Three.js or pure Canvas/CSS).
3. GSAP ScrollTrigger with `pin: true` and `scrub: 1.2` that maps vertical scroll distance to horizontal translation of a flex container containing 6 flagship case study cards.
4. Each card includes: Client name (e.g. Myntra, Red Bull, Spotify), Hook tagline, Video thumbnail with hover autoplay, and KPI pill tags (+48M Views, 84% 3s Retention, 3.4x CTR).
```

---

## 🛠️ Prompt 4: Services Outlined Accordion

```markdown
Implement `components/sections/ServicesAccordion.tsx` based on `sections/07_services_accordion_matrix.md`.
Requirements:
1. List 6 agency services: Short-Form Viral Video, Meme Marketing, High-Velocity Ad Production, Creator Syndication, Twitter/X Trend Jacking, YouTube Ecosystems.
2. Inactive services display in ultra-bold outlined/hollow stroke typography with transparent fill.
3. On hover or active state, the row smoothly expands, fills with solid color (#121212 on light theme or #FFFFFF on dark theme), reveals detailed deliverables, bullet points, and an interactive 'Book This Capability' CTA button.
```

---

## 🛠️ Prompt 5: Creator Network Constellation

```markdown
Implement `components/sections/CreatorConstellation.tsx` based on `sections/06_creator_network_constellation.md`.
Requirements:
1. Left side: An interactive SVG orbital node system where clicking nodes (e.g., 'Viral Memes', 'Gen-Z Creators', 'Comedy & Skits', 'Culture & Tech') filters the displayed network.
2. Right side: A high-density grid/carousel of creator profile cards showing creator avatar, handle, follower count (e.g. 10.4M), primary format, and viral hook score.
```
