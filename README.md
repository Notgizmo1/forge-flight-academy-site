# forgeandflightacademy.com — Forge and Flight Academy LLC

Training and course website for Forge and Flight Academy LLC. Built with Hugo, deployed to Cloudflare Pages via GitHub push.

**Live site:** https://forgeandflightacademy.com
**Entity:** Forge and Flight Academy LLC — CAGE 1A6J3 | UEI YV8UNYJWZHV1
**HQ:** 261 Niagara Carthage Rd, Carthage, NC 28327 (Sandhills Region, 35 miles from Fort Bragg)
**Parent:** Forge & Flight Holdings, Inc. (forgeandflight.com)

---

## Stack

- Hugo 0.147.7 static site generator (hugo --minify)
- Cloudflare Pages hosting (project: forge-flight-academy-site)
- Google Analytics: G-35K06LBZWT (configured in config.toml)
- Bing Webmaster: 14004303FC294B3ABCE4718C3F1E32E6 (in layouts/_default/baseof.html)
- IndexNow key: 7e3ded4af3298769f7d37e4fd4f55bbb (static/7e3ded4af3298769f7d37e4fd4f55bbb.txt)

---

## Course Catalog (18 courses, 6 capability domains)

**Pillar I — Unmanned & Autonomous Systems**
- FFF-401: Advanced Fixed-Wing UAS Integration & Field Sustainment (10 days, flagship)
- FFF-411: Commercial FPV Drone Integration & Sustainment (10 days)
- FFF-402: UAS Master Trainer Certification (5 days, DoD only)

**Pillar II — RF, Spectrum & Communications**
- FFR-201: Tactical RF Fundamentals (5 days)
- FFR-301: Advanced Electronic Warfare (5 days)
- FFR-101: RF Awareness for Non-Technical Personnel (2 days)

**Pillar III — Field Fabrication & Sustainment**
- FFF-201: Electronics Repair for Deployed Operators (5 days)
- FFF-301: Additive Manufacturing for UAS Sustainment (5 days)

**Pillar IV — Autonomy, AI & Edge Computing**
- FFA-401: Operational Edge Computing for UAS (5 days)
- FFA-201: AI Fundamentals for Non-Technical Personnel (2 days)
- FFA-501: Advanced Autonomy Employment (5 days, noindex — contact only)

**Pillar V — Operator Security & Force Protection (DoD/LE only)**
- FFP-201: Digital Force Protection Course (5 days, published Sept 1 2026)
- FFP-101: Personal Security Awareness (coming soon)
- FFP-301: Unit Digital Security Planning (coming soon)
- FFP-401: Advanced Personal Security (noindex, in development, Q4 2026)

**Applied Programs**
- FFF-601: Applied CFD for UAS Design using OpenFOAM (4 days)
- FFF-651: UAS Manufacturing Advisory (5 days, DoD only)
- FFI-401: UAS Manufacturing Facility & Adversary Capability Assessment (5 days, DoD only)

---

## SEO Notes

- Organization + EducationalOrganization schema in layouts/_default/baseof.html: on all pages (not homepage only), @id, parentOrganization (Holdings), Carthage geo (35.3504, -79.4132)
- Course schema + hasCourseInstance in baseof.html (triggered when Section == "courses")
- ItemList schema on courses catalog page for Google Course List carousel
- Article schema in layouts/insights/single.html
- BreadcrumbList injected in baseof.html for all non-home pages
- Custom sitemap at layouts/sitemap.xml: excludes ffa-501 (noindex) and ffp-401 (noindex)
- Robots.txt at static/robots.txt

---

## Five-Pillar Framework

The five-pillar framework has TWO separate layout files:
1. layouts/_default/five-pillars.html — used by /about/five-pillars/ dedicated page
2. layouts/index.html — homepage has its own hardcoded pillar grid block

**Both must be updated when pillar content changes.** Pillar V was updated to Operator Security & Force Protection in September 2026. Assessment is now positioned as the gateway methodology across all pillars, not a pillar itself.

---

## Key Content Rules

- FFA-501: noindex, nofollowed — invitation-only, no public catalog listing
- FFP-401: noindex — in development, not yet schedulable
- FFP-101 and FFP-301: indexed but clearly marked coming soon
- No prices on any public page — course catalog is the pricing source
- Force Protection courses: DoD and government personnel only, no foreign national access
- All location references: Carthage, NC (261 Niagara Carthage Rd, 28327)
- Proximity language: "Sandhills, NC Region, 35 miles from Fort Bragg"
- No em dashes anywhere
- FFF-401 is fixed-wing (not FPV) — FFF-411 is FPV
- FFF-402 is the UAS Master Trainer cert, tailored to either FFF-401 or FFF-411 pipeline

---

## Local Dev

hugo server -D

## Deploy

Push to main. Cloudflare Pages auto-builds. IndexNow Action fires 2 minutes post-deploy.

Sister sites: forgeandflight.com | forgeandflightlabs.com
