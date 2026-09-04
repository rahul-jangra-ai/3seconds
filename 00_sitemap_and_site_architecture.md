# 3seconds — Sitemap & Technical Architecture

## 1. Information Architecture & Sitemap Tree

```
3seconds.media (Root)
│
├── / (Home)
│   ├── Preloader & Entry Sequence
│   ├── Global Navigation Header (Floating Bar + 4-Dot Drawer)
│   ├── Hero: Kinetic Hook & Rotating Stamp
│   ├── About Teaser: The 3-Second Rule
│   ├── Attention Benchmark Counter (Population vs Viral Reach)
│   ├── Viral Evolution Timeline (Horizontal Scroll)
│   ├── Pinned Case Studies Carousel (Obsidian Deep Dive)
│   ├── Creator Network Constellation (Orbital Filter + Metric Cards)
│   ├── Core Capabilities Accordion (Stroked-to-Solid Typography)
│   ├── Client & Partner Infinite Marquee ("Our Besties")
│   └── Global Dark Footer + Live Scroll Progress Indicator
│
├── /about (About Us)
│   ├── Hero: "Marketing Isn't a Formula. It's a Pulse."
│   ├── The 3-Second Hypothesis (Why attention is the new currency)
│   ├── Founders & Core Strategists (Team Grid with hover reels)
│   ├── Agency Milestones & Viral Stats
│   └── Culture & Manifest: Anti-Boring Creative Policy
│
├── /services (Capabilities & Offerings)
│   ├── Interactive Service Explorer (Category Tabs)
│   ├── 01. Short-Form Viral Video (Reels, TikToks, Shorts)
│   ├── 02. Meme Marketing & Cultural Seeding
│   ├── 03. High-Velocity Ad Production (0-30s Commercials)
│   ├── 04. Creator Network & Influencer Syndication
│   ├── 05. Twitter/X Trend Jacking & Narrative Control
│   ├── 06. YouTube Ecosystem & Retention Engineering
│   └── Service Engagement Calculator (Deliverables & Timelines)
│
├── /work (Case Studies & Creative Archive)
│   ├── Filter Bar: [All, E-Commerce, Entertainment, Tech, FMCG, Viral Stunts]
│   ├── Featured Hero Case Study (Video Background + Metric Highlights)
│   ├── Interactive Project Cards Grid (Hover Playback Preview)
│   ├── Project Detail Modal / Dynamic Route (`/work/[slug]`)
│   │   ├── Campaign Challenge & Brief
│   │   ├── The 3-Second Hook Strategy
│   │   ├── Viral Assets & Meme Formats
│   │   └── Quantified Impact: Views, Watch Time, ROAS, Earned Media
│   └── Client Testimonials Carousel
│
├── /creators (Creator & Meme Network)
│   ├── Network Overview (Total Audience Reach, Engagement Multipliers)
│   ├── Interactive Category Map (Memes, Comedy, Lifestyle, Gaming, Gen-Z)
│   ├── Featured Creator Cards with verified stats & tier badges
│   └── "Join Our Creator Syndicate" Intake Form
│
├── /careers (Join the Squad)
│   ├── Culture Reel & "Why Work at 3seconds"
│   ├── Open Roles (Scriptwriters, Video Editors, 3D Motion, Meme Strategists)
│   └── Quick 3-Minute Video Application Trigger
│
├── /contact (Let's Hook Your Audience)
│   ├── Dual Layout: Direct Hotlines & Meeting Scheduler (15-min Discovery)
│   ├── Multi-step Project Inquiry Form (Budget, Goals, Timeline)
│   ├── Global Studio Addresses (Mumbai & Bengaluru)
│   └── Instant WhatsApp Chat Trigger
│
└── /legal (Utility Pages)
    ├── Privacy Policy
    └── Terms of Service
```

---

## 2. Recommended Tech Stack for Antigravity IDE

- **Framework:** Next.js 14/15 (App Router) or React 18+ with Vite
- **Styling:** Tailwind CSS (v3.4+ or v4.0) with custom color tokens
- **Smooth Scrolling:** `@studio-freight/lenis` or `lenis` for 60fps butter-smooth momentum scroll
- **Animation Engine:** `gsap` (GreenSock) + `ScrollTrigger` + `Flip` plugin
- **3D / Interactive Canvas (Optional):** Three.js / `@react-three/fiber` for the interactive 3D particle sphere / wireframe globe
- **Icons & Assets:** `lucide-react` for clean UI icons + SVG doodle asset library
- **Form Handling:** `react-hook-form` + `zod` validation

---

## 3. Global Layout & State Architecture

### A. Viewport Layout Layers
```
┌────────────────────────────────────────────────────────┐
│ Layer 4: Fullscreen Menu Drawer (z-index: 999)         │
├────────────────────────────────────────────────────────┤
│ Layer 3: Floating Header & Floating Scroll Percentage  │
│          (z-index: 100, pointer-events: none on wrapper)│
├────────────────────────────────────────────────────────┤
│ Layer 2: Custom Kinetic Cursor & Magnetic Followers    │
│          (z-index: 90, hidden on mobile touch devices) │
├────────────────────────────────────────────────────────┤
│ Layer 1: Page Main Content & Pinned Scroll Sections   │
│          (z-index: 10, relative flow)                  │
├────────────────────────────────────────────────────────┤
│ Layer 0: Global Dynamic Background Canvas              │
│          (Transitions between #FAF6EE and #0A0A0A)     │
└────────────────────────────────────────────────────────┘
```

### B. Global Theme Transitions
Sections trigger dynamic background shifts using GSAP ScrollTrigger:
- **Warm Canvas (`theme-light`):**
  - Background: `#FAF6EE`
  - Text Primary: `#121212`
  - Text Muted: `#666660`
  - Accent: `#FF5722` (Vibrant Hook Orange)
- **Deep Obsidian (`theme-dark`):**
  - Background: `#0A0A0A`
  - Text Primary: `#FFFFFF`
  - Text Muted: `#A0A0A0`
  - Accent: `#FF7A00` (Warm Electric Amber)
