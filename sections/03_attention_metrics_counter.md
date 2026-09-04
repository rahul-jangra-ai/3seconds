# Section Spec 03 — Attention Metrics & Population Benchmark

## 1. Conceptual Hook
Inspired by *Creativefuel's* witty fun-fact comparing total follower reach against the most populous nations on earth, 3seconds introduces the **"Global Attention Index"**.
It visually proves that 3seconds' media syndication commands more active human attention than entire world superpowers.

---

## 2. Visual Layout & Structure
- **Section Heading:**
  `( ATTENTION ECONOMY )`
  `DID YOU KNOW?`
  `Our Monthly Attention Reach Would Rank as the 3rd Most Populous Nation on Earth.`

---

## 3. Interactive Counter Grid

| Entity | Country / Brand | Total Population / Active Monthly Hook Views | Visual Icon / Flag | Highlight Style |
|--------|----------------|----------------------------------------------|--------------------|-----------------|
| #1 | 🇮🇳 India | `1,428,677,135` Citizens | Tricolor Flag Icon | Monochrome Gray |
| #2 | 🇨🇳 China | `1,412,365,135` Citizens | Red Flag Icon | Monochrome Gray |
| **#3** | **🔥 3seconds Syndicate** | **`1,350,000,000+` Monthly Views** | **Blazing Flame / Hook Logo** | **Electric Orange Glow (#FF5722)** |
| #4 | 🇺🇸 United States | `331,875,135` Citizens | Stars & Stripes Icon | Monochrome Gray |
| #5 | 🇮🇩 Indonesia | `273,756,135` Citizens | Red/White Flag Icon | Monochrome Gray |

---

## 4. Animation & ScrollTrigger Logic
- When this section enters 30% from the bottom of the viewport:
  - Each entity row animates in sequentially (`stagger: 0.12`).
  - Numbers increment from 0 to the target figures over 2.0 seconds with tabular numeric easing.
  - The **3seconds** row pulses with a glowing orange ring to draw maximum eye focus.
