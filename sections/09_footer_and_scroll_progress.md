# Section Spec 09 — Global Footer & Scroll Progress Indicator

## 1. Visual & Architectural Role
The footer brings the visual journey to a grand conclusion on a deep obsidian canvas (`#0A0A0A`), featuring a final call-to-action, direct office coordinates, and persistent navigation tools.

---

## 2. Component 1: Live Scroll Depth Progress Indicator
- **Placement:** Fixed at `bottom: 32px, right: 32px` (z-index: 100).
- **Design:** A 52px glassmorphic circle (`backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.15);`).
- **Dynamic Content:** Live numeric percentage (`0%` ➔ `100%`) synced with window scroll offset.
- **Click Behavior:** When clicked at `100%` (or anytime), acts as a smooth magnetic scroll-to-top trigger.

---

## 3. Component 2: Global Footer Canvas
- **Dominating Headline:**
  `YOUR BRAND'S`
  `CREATIVE PARTNER.`
  *(Rendered in massive geometric typography with warm orange highlight).*
- **Studio Coordinates:**
  - **Mumbai:** 1503 Signature Lotus, Veera Desai Industrial Estate, Andheri West, Mumbai 400053
  - **Bengaluru:** 402 Indiranagar 100ft Road, Stage 1, Bengaluru 560038
- **Direct Contacts:**
  - Email: `hook@3seconds.media` / `connect@3seconds.agency`
  - WhatsApp Hotline: `+91 98200-33333`
- **Navigation Columns:**
  - Column 1: Home, About, Capabilities, Case Studies
  - Column 2: Creator Syndicate, Careers (We're Hiring!), Press & Assets, Policy
  - Column 3: Instagram, Twitter/X, LinkedIn, YouTube Shorts
- **Magnetic Back-to-Top Button:** A circular button reading `"UP ↑"` that smoothly glides with cursor physics.
