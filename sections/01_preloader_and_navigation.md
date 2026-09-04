# Section Spec 01 — Preloader & Global Navigation Header

## 1. Visual & Interactive Concept
Inspired by high-tempo agency digital experiences, the site opens with an aggressive 3-second hook countdown, followed by an elegant, minimal floating navigation bar that anchors the viewport.

---

## 2. Component 1: The "3.. 2.. 1.. Hook" Preloader

### Visuals:
- Fullscreen overlay on `#0A0A0A` (pitch black).
- Center screen features a massive monospaced counter counting down: `03` ➔ `02` ➔ `01` ➔ `HOOKED`.
- Alongside the counter, a circular loader bar tracks progress from `0%` to `100%`.
- Sound (optional toggle): Subtle mechanical click or heartbeat pulse per second.

### Exit Motion Sequence (GSAP Timeline):
```javascript
const tl = gsap.timeline();
tl.to(".preloader-counter", { scale: 1.5, opacity: 0, duration: 0.4, ease: "power4.in" })
  .to(".preloader-top-panel", { yPercent: -100, duration: 0.8, ease: "expo.inOut" }, "-=0.2")
  .to(".preloader-bottom-panel", { yPercent: 100, duration: 0.8, ease: "expo.inOut" }, "<")
  .from(".hero-headline-word", { y: 120, opacity: 0, stagger: 0.05, duration: 1, ease: "power4.out" }, "-=0.4");
```

---

## 3. Component 2: Floating Navigation Bar

### Layout & Placement:
- Fixed at `top: 24px`, spanning `width: calc(100% - 48px)`.
- Left: **3seconds** wordmark + animated geometric dot mark.
- Right:
  - CTA Button: Pill-shaped `LET'S TALK` with magnetic hover effect.
  - Menu Trigger: Custom **4-dot grid button** ($2\times2$ matrix: 3 solid filled circles, 1 outlined circle).

### Micro-Interactions:
- Hovering over the 4-dot icon rotates the matrix 90 degrees smoothly.
- Backdrop blur: `backdrop-filter: blur(12px)` with subtle border `rgba(18, 18, 18, 0.08)` on light mode and `rgba(255, 255, 255, 0.1)` on dark mode.

---

## 4. Component 3: Fullscreen Navigation Drawer

### Trigger & Behavior:
- Clicking the 4-dot button triggers a full-screen drawer overlay sliding down or fading with warm cream backdrop (`#FAF6EE`).
- Displays massive display navigation links with hover strike-through or color shift:
  1. `01. HOME`
  2. `02. ABOUT`
  3. `03. SERVICES`
  4. `04. WORK`
  5. `05. CREATORS`
  6. `06. CAREERS` *(with orange "WE'RE HIRING" badge)*
  7. `07. CONTACT`
- Bottom Drawer Info:
  - Agency Motto: *"3 seconds to change their mind."*
  - Contact email: `hook@3seconds.media`
  - Social Links: Instagram, Twitter/X, LinkedIn, YouTube.
