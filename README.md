# 3seconds Creative Media Agency — Website Architecture & Design Specifications

Welcome to the complete architectural blueprint and design specification for **3seconds** (`3seconds.media` / `3seconds.agency`).

This documentation package has been engineered specifically for AI-assisted development inside the **Antigravity IDE** using **Gemini models** (e.g. Gemini 1.5 Pro / Gemini 2.0 Flash / Pro) to implement modern, clean, high-performance code.

---

## 📌 Project Overview
- **Brand Name:** 3seconds
- **Tagline:** *Capture Attention in 3 Seconds. Or Fade Away.*
- **Industry:** High-Impact Creative Media Agency, Short-Form Viral Video Production, Meme Marketing & Creator Syndication.
- **Core Concept:** In today's digital media ecosystem, the first 3 seconds of any piece of content determine whether an audience stays or scrolls away. 3seconds engineers viral hooks, cultural moments, and high-converting creative assets for modern brands.
- **Inspirational Aesthetic:** Inspired by elite Indian & global creative marketing leaders (such as *Creativefuel.io*), featuring dual-mode background transitions (Warm Cream `#FAF6EE` to Deep Obsidian `#0A0A0A`), kinetic typography, horizontal scroll pinning, interactive creator constellations, hollow stroked text accordions, and infinite marquees.

---

## 📂 Folder Structure

```
3seconds_website_specs/
├── README.md                                    # This project guide & quickstart
├── 00_sitemap_and_site_architecture.md          # Full sitemap, routing & hierarchy
├── 01_design_system_and_motion_guidelines.md    # Colors, fonts, GSAP/Lenis motion rules
├── gemini_ide_prompts_guide.md                  # Pre-formulated prompts for Antigravity IDE
├── pages/
│   ├── 01_home_page.md                          # Master landing page layout & flow
│   ├── 02_about_page.md                         # Agency story, philosophy & culture
│   ├── 03_services_page.md                      # Comprehensive capabilities catalog
│   ├── 04_work_case_studies_page.md             # Filterable portfolio & project breakdown
│   ├── 05_creators_network_page.md              # Creator roster, demographics & stats
│   ├── 06_careers_hiring_page.md                # Culture, open creative roles & application
│   └── 07_contact_page.md                       # High-converting lead form & hotline
└── sections/
    ├── 01_preloader_and_navigation.md           # Countdown loader, floating bar & 4-dot drawer
    ├── 02_hero_section.md                       # Kinetic typography, rotating badge & doodle stickers
    ├── 03_attention_metrics_counter.md          # Animated population & retention benchmarks
    ├── 04_viral_evolution_timeline.md           # Horizontal scrollable cultural history
    ├── 05_interactive_3d_orb_case_studies.md    # Sticky pinned horizontal portfolio slider
    ├── 06_creator_network_constellation.md      # Orbital category filter & creator cards
    ├── 07_services_accordion_matrix.md          # Hollow-stroked expandable service headers
    ├── 08_client_marquee_ticker.md              # Multi-tier infinite seamless logo strip
    └── 09_footer_and_scroll_progress.md         # Scroll depth indicator & magnetic back-to-top
```

---

## 🚀 How to Use in Antigravity IDE with Gemini

1. **Unzip & Open Folder:** Open the `3seconds_website_specs` folder directly in your IDE workspace.
2. **Context Feeding:** When prompting Gemini in your IDE, tag or reference the specific `.md` specification file relevant to the task (e.g., `sections/02_hero_section.md` + `01_design_system_and_motion_guidelines.md`).
3. **Step-by-Step Generation:** 
   - Step 1: Run the global setup prompt found in `gemini_ide_prompts_guide.md` (Next.js / Vite + React + Tailwind CSS + GSAP + Lenis + Lucide Icons).
   - Step 2: Implement the Design System tokens and Base Layout.
   - Step 3: Implement individual components and sections following the Section Specs.
   - Step 4: Wire smooth scroll (Lenis) and ScrollTrigger orchestration.
