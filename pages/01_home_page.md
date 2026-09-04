# 3seconds — Home Page Specification (`/`)

## 1. Page Purpose & Strategic Vision
The Home Page of **3seconds** is the core brand showcase. It must immediately demonstrate the agency's core thesis: **"If you can't hook the viewer in 3 seconds, the rest of your million-dollar production is useless."**
The page relies on fast-paced rhythm, scroll-triggered visual drama, seamless transitions between warm cream and deep black, and tangible social proof.

---

## 2. Sequential Section Flow & Storyboard

| Order | Section Identifier | Visual Canvas Theme | Key Interaction / Scrolling Effect |
|-------|-------------------|---------------------|-----------------------------------|
| 0 | `Preloader` | Obsidian `#0A0A0A` | 3.. 2.. 1.. Hook countdown, curtain split reveal |
| 1 | `GlobalHeader` | Transparent / Frosted | Floating pill navbar + custom 4-dot matrix drawer trigger |
| 2 | `HeroSection` | Warm Cream `#FAF6EE` | Ultra-heavy kinetic headline, rotating stamp, vector doodles |
| 3 | `AttentionMetrics` | Warm Cream `#FAF6EE` | Scroll-triggered rapid numbers counter (Population vs Reach) |
| 4 | `AboutTeaser` | Warm Cream `#FAF6EE` | Split-text reveal: "Where Content Isn't Noise — It's Culture" |
| 5 | `ViralEvolution` | Warm Cream `#FAF6EE` | Horizontal scroll timeline of viral memes and short-form culture |
| 6 | `PinnedCaseStudies` | Deep Obsidian `#0A0A0A` | Pinned horizontal scroll + 3D particle orb & video cards |
| 7 | `CreatorNetwork` | Deep Obsidian `#0A0A0A` | Orbital category constellation graph + creator metric cards |
| 8 | `ServicesAccordion` | Warm Cream `#FAF6EE` | Hollow stroked headers expanding into filled capability cards |
| 9 | `ClientMarquee` | Warm Cream `#FAF6EE` | Multi-tier infinite seamless brand logo ticker ("Our Besties") |
| 10 | `CallToAction` | Deep Obsidian `#0A0A0A` | Giant animated headline: "Ready to Stop the Scroll?" |
| 11 | `GlobalFooter` | Deep Obsidian `#0A0A0A` | Office addresses (Mumbai, BLR), social links, magnetic back-to-top |

---

## 3. Detailed Component Architecture

### A. Section Triggers & GSAP Timeline
- As the user scrolls past `AboutTeaser` into `PinnedCaseStudies`, a GSAP ScrollTrigger with `scrub: true` smoothly interpolates background color:
  `#FAF6EE` ➔ `#0A0A0A` over a 300px scroll window.
- The `PinnedCaseStudies` section locks the viewport vertically (`pin: true`) while the user scrolls through `100vw * 4` of horizontal campaign cards.
- Exiting `PinnedCaseStudies` into `ServicesAccordion` reverses the background color:
  `#0A0A0A` ➔ `#FAF6EE`.
- Entering `CallToAction` & `GlobalFooter` shifts the theme back to `#0A0A0A`.

### B. Floating Live Indicators
- **Right Margin Vertical Bar:** Subtle 2px track indicating current scroll position.
- **Bottom-Right Circular Gauge:** A floating 48px glass circle with dynamic text displaying the percentage of page scrolled (`0%` to `100%`).

---

## 4. SEO & Metadata Specifications
- **Page Title:** 3seconds — The 3-Second Viral Hook & Creative Media Agency
- **Meta Description:** We engineer high-retention short-form videos, cultural meme campaigns, and creator syndication that capture audience attention in under 3 seconds.
- **Open Graph Image:** Dynamic preview featuring high-contrast typography and agency metric badges.
