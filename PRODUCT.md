# Aviary

## Product purpose

Aviary is the workforce platform for the 492,000+ FAA remote pilots in the U.S. — a marketplace that connects businesses (real estate, construction, insurance, telecom, agriculture, public safety) with FAA Part 107 pilots, and a dispatch workflow that handles airspace authorization, equipment, availability, and deliverables in one flow. The long bet is to be the LAANC USS-licensed workforce layer for the post-Part-108 commercial drone economy.

This repo is the **marketing site** — Vite + React, brand register. It exists to convince three audiences:

- **Pilots** — to apply to the charter program (applications open, pre-launch)
- **Customers** — to post jobs
- **Investors** — to take the meeting (private packet at `/investors`)

## Users

- Part 107 remote pilots, often technical hobbyists or working operators who already fly commercially
- Enterprise buyers in real estate, infrastructure inspection, insurance claims, agriculture, public safety
- Aviation-aware investors evaluating the workforce + LAANC USS thesis

## Register

**brand** — design IS the product on this site. Editorial, manual-of-aviation tone; long-form scrolling narrative; deliberate page-load choreography is welcome.

## Brand voice

- Editorial-aviation: FAA sectional charts, registration ticks, latitude/longitude marks, kicker text in monospace, headlines in serif italics.
- Confident and specific: real numbers (492,311), real stack (LAANC USS, SWIM/SCDS, PostGIS), real product status (v0.6, Q3 2026 TestFlight).
- The accent is a single magenta `#c8156c` against a paper-tinted neutral palette (`#f4ede0` → `#1a1612`).
- Voice never gets glossy or salesy. Reads like a flight publication or a research filing.

## Strategic principles

- **Show real product**, not stock photography. Phone screens are simulator captures from the actual iOS build.
- **Earn the regulatory framing.** The moat narrative (LAANC USS, Part 108 commenter) is the real differentiator — present it as infrastructure, not marketing.
- **Hand the visitor a story arc**, not a brochure. The 9 chapters move from market → problem → product → marketplace → app → moat → founder → FAQ → CTA. Motion should reinforce that pacing.
- **Aviation-grade precision.** Coordinates, sheet numbers, registration ticks, "FIG. 01" callouts. Everything looks measured.

## Anti-references

- Generic SaaS landing pages with hero-metric grids, identical card rows, and gradient text.
- Crypto / AI startup over-saturated palettes and neon-on-black aesthetics.
- Drone-industry stock photography (sunset shots, branded racing drones).
- Cliché motion: bouncy easing, scale-on-hover everything, parallax-everything, scroll-jacking.

## Motion principles (page-specific)

- One **orchestrated page-load entrance** for the hero, then quiet until the user scrolls.
- Section reveals use **directional stagger** (60–110 ms between siblings) on intersection — never autoplay loops.
- Easings are exponential ease-out (`cubic-bezier(0.22, 1, 0.36, 1)` and `cubic-bezier(0.16, 1, 0.3, 1)`). Never bounce or elastic.
- Always honor `prefers-reduced-motion`: short-circuit to static, no movement, no decorative loops.
- Centerpiece animations: the market-growth chart line drawing, the four "Aviary Way" steps cascading, the live job-feed rows shimmering in, the iOS contact-sheet phones fanning out.

## Tech

- Vite + React 18 single-page app (no router lib — manual `popstate` switching between `/`, `/ios`, `/academy`).
- Inline-style component design with shared color tokens in `src/components/shared.jsx`. No CSS-in-JS framework, no Tailwind.
- Global CSS lives in `src/index.css` for tokens, fonts, motion variables, and `prefers-reduced-motion` handling.
