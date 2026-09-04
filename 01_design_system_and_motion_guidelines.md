# 3seconds — Design System & Motion Philosophy

## 1. Brand Identity & Aesthetic Manifesto

The visual identity of **3seconds** fuses **Neo-Brutalist confidence**, **Gen-Z internet culture**, and **high-end digital studio craftsmanship**. 
- **The Philosophy:** Attention is fleeting. Every visual element must be punchy, rhythmic, and impossible to ignore.
- **Visual Vibe:** High-contrast dual themes, bold geometric typography with variable font weights, outline/hollow text treatments, playful vector doodles, and seamless momentum scrolling.

---

## 2. Color Palette & CSS Variables

```css
:root {
  /* Warm Canvas Theme (Default Light Mode) */
  --bg-warm: #FAF6EE;
  --bg-card-light: #FFFFFF;
  --border-light: rgba(18, 18, 18, 0.12);
  --text-dark: #121212;
  --text-dark-secondary: #5A5A55;
  --text-dark-muted: #8E8E85;

  /* Deep Obsidian Theme (Scroll Dark Mode) */
  --bg-obsidian: #0A0A0A;
  --bg-card-dark: #161616;
  --border-dark: rgba(255, 255, 255, 0.12);
  --text-light: #F5F5F7;
  --text-light-secondary: #A0A0A0;
  --text-light-muted: #606060;

  /* Accent & Hook Palette */
  --hook-orange: #FF5722;
  --electric-amber: #FF9800;
  --neon-lime: #CCFF00;
  --viral-pink: #FF2E93;
  --accent-gradient: linear-gradient(135deg, #FF5722 0%, #FF9800 100%);
  --glow-orange: rgba(255, 87, 34, 0.35);

  /* Elevation & Radius */
  --radius-pill: 9999px;
  --radius-card: 16px;
  --radius-sm: 8px;
}
```

---

## 3. Typography Hierarchy

### Primary Font Families
- **Display & Headings:** `Syne` or `Cabinet Grotesk` or `Clash Display` (Ultra-heavy 800/900 weight, tight tracking `-0.04em`).
- **Body & Subheads:** `Plus Jakarta Sans` or `Inter Tight` (Clean, hyper-legible, weights 400, 500, 600).
- **Numbers & Counters:** `Space Grotesk` or `JetBrains Mono` for tabular, perfectly aligned counters.

### Typographic Scale
- **Display XXL (Hero Main):** `clamp(3.5rem, 9vw, 9.5rem)` / Line height: `0.9` / Tracking: `-0.05em`
- **Heading XL (Section Titles):** `clamp(2.5rem, 5vw, 5rem)` / Line height: `1.0` / Tracking: `-0.03em`
- **Heading L (Card Titles):** `clamp(1.5rem, 2.5vw, 2.5rem)` / Line height: `1.15`
- **Body Regular:** `1rem` (16px) to `1.125rem` (18px) / Line height: `1.6`
- **Overline / Badges:** `0.75rem` (12px) / Uppercase / Tracking: `+0.15em` / Bold 700

---

## 4. Motion & Scroll Orchestration Principles

### A. Smooth Scroll (Lenis Engine)
```javascript
// lenis-config.js
import Lenis from '@studio-freight/lenis'

export const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out
  orientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1.0,
})
```

### B. GSAP ScrollTrigger Integration
- **Scroll Linking:** Sync `lenis.on('scroll', ScrollTrigger.update)` to prevent frame stutter.
- **Scrubbing Standards:** Use `scrub: 1` or `scrub: 1.5` on pinned horizontal sections for smooth physical inertia.
- **Section Transition Trigger:** When a `.theme-dark-trigger` section hits `top 50%`, tween the document `<body>` background color from `#FAF6EE` to `#0A0A0A` over `0.6s`.

### C. Kinetic Text & Stroke Hover Effect
- **Hollow Outlined Text:**
  ```css
  .text-hollow {
    color: transparent;
    -webkit-text-stroke: 1.5px var(--text-dark);
    transition: color 0.4s cubic-bezier(0.16, 1, 0.3, 1), -webkit-text-stroke 0.4s ease;
  }
  .text-hollow:hover, .text-hollow.active {
    color: var(--text-dark);
    -webkit-text-stroke: 1.5px transparent;
  }
  ```

---

## 5. Micro-Interactions & Cursor

- **Custom Kinetic Dot Cursor:** A small 8px solid amber dot trailing the pointer, expanding to a 64px magnetic circle over buttons, case study cards, and video links with text labels like `"EXPLORE"` or `"VIEW"`.
- **Rotating Stamp Badge:** Infinite 360-degree rotation (`animation: spin 12s linear infinite`) for circular text stamps (`"3SECONDS • VIRAL HOOKS • EST 2026 •"`).
- **Magnetic Buttons:** Spring physics pulling the button `10-15px` toward the cursor when within a `40px` radius.
