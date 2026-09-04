# Section Spec 02 — Hero Section & Kinetic Typography

## 1. Visual Composition
The Hero Section establishes the bold, rebellious tone of 3seconds on a warm off-white canvas (`#FAF6EE`).

---

## 2. Layout Elements

```
┌────────────────────────────────────────────────────────────────────────┐
│  [Logo: 3seconds]                                   [Let's Talk] [::]  │
│                                                                        │
│  ( O ) Rotating Stamp Badge                                            │
│  "3SECONDS • VIRAL HOOKS • CAPTURE ATTENTION •"                        │
│                                                                        │
│     WE CREATE                                     [Doodle: Rocket]     │
│     MEMORABLE HOOKS                                                    │
│     FOR BRANDS                                    [Doodle: Lightning]  │
│     IN 3 SECONDS.                                                      │
│                                                                        │
│  [Doodle: GigaChad Meme Line-art]            [Scroll Down Indicator ↓] │
│                                              [0% Live Circular Badge]  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Typographic Styling & Animation
- **Headline Copy:**
  `WE CREATE`
  `MEMORABLE HOOKS`
  `FOR BRANDS`
  `IN 3 SECONDS.`
- **Typography:** Display Grotesk, 900 weight, uppercase, line-height `0.9`, negative letter-spacing `-0.04em`.
- **Gradient Emphasis:** The words `MEMORABLE HOOKS` and `3 SECONDS` are rendered with an animated warm orange-to-amber gradient (`linear-gradient(135deg, #FF5722, #FF9800)`).
- **Text Reveal Motion:** Words reveal from underneath an overflow clip using GSAP SplitText or word-by-word span translate-y animation.

---

## 4. Interactive & Decorative Accents

### A. Rotating Stamp Badge (Left Margin)
- Circular SVG badge of 120px diameter with rotating circular text: `* 3SECONDS * THE ATTENTION AGENCY * EST 2026 *`.
- Center contains a pulsing play arrow icon.
- Hovering slows down the rotation and scales the play arrow up by 20%.

### B. Playful Vector Doodle Stickers
- Hand-drawn style vector illustrations placed strategically around the headline:
  1. An energetic rocket blasting upward near "BRANDS".
  2. A zigzag lightning bolt near "3 SECONDS".
  3. A pair of pixel/meme sunglasses.
  4. A subtle soundwave graphic vibrating next to "HOOKS".
- **Parallax effect:** Doodles respond to cursor movement with slight depth offsets (Z-axis illusion).

### C. Live Scroll Cue
- Floating circular percentage badge fixed at bottom-right reading `0%`, updating dynamically as the user scrolls.
- A slim vertical scroll rail along the right edge.
