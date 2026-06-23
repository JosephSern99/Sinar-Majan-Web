# Product Brief — Sinar Majan Web

**Version:** 1.0  
**Date:** 2026-06-23  
**Author:** Joseph (josephkhoo99)  
**Status:** Draft

---

## 1. Problem Statement

Sinar Majan operates as a high-volume B2B metals and industrial commodities vendor serving Peninsular Malaysia. Their buyers — engineering firms, construction sub-contractors, government project coordinators — currently have no direct digital touchpoint to discover, assess, or initiate contact with Sinar Majan.

Without a web presence, the company relies entirely on word-of-mouth and existing relationships, which limits market reach, slows inbound lead acquisition, and signals lower credibility compared to competitors who are digitally accessible.

**Core gap:** Qualified buyers (procurement officers, project engineers, sub-contractors) have no way to quickly verify Sinar Majan's inventory scope, capacity, or legitimacy before reaching out.

---

## 2. Target Users

**Primary:** Business procurement officers, project engineers, and sub-contractors sourcing ferrous/non-ferrous metals or industrial commodities for manufacturing, infrastructure, or construction projects across Peninsular Malaysia.

**Secondary:** Government procurement teams evaluating vendors for open tender shortlisting.

**User mindset:** High-trust, low-impulse. These are professional buyers making bulk purchasing decisions. They are not browsing — they arrive with a specific sourcing need and want to quickly confirm: *Does this vendor carry what I need? Are they credible? How do I reach them?*

---

## 3. Solution

A **high-performance, conversion-optimised B2B landing website** for Sinar Majan that:

- Clearly communicates their product portfolio (ferrous metals, non-ferrous metals, industrial commodities)
- Establishes credibility (company profile, geographic reach, B2B positioning)
- Drives qualified inbound enquiries via a contact/RFQ form
- Is fully mobile-responsive and fast-loading on Malaysian mobile networks
- Can scale to include a product catalogue or customer portal in future phases

### What this is NOT (Phase 1)
- Not an e-commerce platform
- Not a customer login/portal
- Not a real-time inventory system
- Not a full CMS with content management admin

---

## 4. Competitive Context

**Reference design direction:** [https://stellar-kleicha-612454.netlify.app/#contact](https://stellar-kleicha-612454.netlify.app/#contact)

B2B industrial suppliers in Malaysia broadly fall into two groups:
- **Legacy vendors** with outdated or absent web presence — Sinar Majan's current position
- **Modern distributors** with clean, fast, professional sites that communicate product scope and make contact frictionless

The goal is to position Sinar Majan clearly in the second group without over-engineering. A fast, professional, well-structured site is sufficient competitive differentiation at this stage.

---

## 5. Success Metrics

| Metric | Target (Month 3) |
|---|---|
| Monthly organic/direct web visitors | 200+ |
| Inbound enquiry form submissions | 10+ per month |
| Average page load time (LCP) | < 2.5s on mobile |
| Lighthouse Performance Score | ≥ 90 |
| Bounce rate | < 60% |

Primary success signal: **qualified enquiry volume via the contact/RFQ form**.

---

## 6. Technical Approach

### Stack

| Layer | Technology | Rationale |
|---|---|---|
| Framework | React 19 + TypeScript | Mirrors EDIC reference project; maintainable |
| Bundler | Vite | Fast builds, optimal Vercel deployment |
| Routing | React Router v7 | Consistent with EDIC patterns |
| Styling | Tailwind CSS | Utility-first, zero runtime, minimal CSS bundle |
| Icons | Lucide React | Already used in EDIC; consistent |
| Animations | Framer Motion (lightweight usage) | Smooth scroll, section reveals |
| Contact Form backend | Vercel Serverless Function + Resend API | Stateless, no server to maintain |
| Database | None (Phase 1) | Form submissions emailed via Resend; no DB overhead |
| Hosting | Vercel | Zero-config deployment, global CDN, free tier sufficient |

### What is explicitly excluded
- Redux Toolkit (no global state needed for a landing site)
- TanStack Query (no client-side data fetching from APIs)
- Keycloak / auth (no login)
- Java/Quarkus backend
- Docker / containerization
- Database (Phase 1 — email delivery only)

### Scalability path (Phase 2+)
If a product catalogue or enquiry dashboard is needed later:
- Add Vercel Postgres (simple schema: products, enquiries)
- Add a lightweight admin route (protected by NextAuth or Clerk)
- Migrate to Next.js if SSR/SEO at scale becomes critical

---

## 7. Page Structure (Proposed)

| Section | Purpose |
|---|---|
| Hero | Headline, tagline, primary CTA ("Request a Quote") |
| About | Company overview, founding story, B2B positioning |
| Products | Ferrous metals, Non-ferrous metals, Industrial commodities |
| Why Sinar Majan | Differentiators: bulk capacity, local logistics, authorized dealer |
| Coverage | Peninsular Malaysia reach, logistics map or visual |
| Contact / RFQ | Enquiry form (name, company, product interest, message) + phone/email |
| Footer | Social links, location, copyright |

---

## 8. Constraints & Risks

| Constraint | Notes |
|---|---|
| Hosting budget | Vercel free/hobby tier; no backend infra costs |
| Content availability | Client must supply logo, product images, company text |
| Timeline | TBD with client |
| Language | English primary; Bahasa Malaysia optional in Phase 2 |
| SEO baseline | Static rendering via Vite SSG or careful meta tags needed for Google discoverability |

---

## 9. Out of Scope (Phase 1)

- Pricing pages or live pricing data
- Customer login / account portal
- Online ordering or payment
- Multi-language support
- Blog / news section
- Live chat integration

---

## Next Steps

1. Review and approve this brief with client
2. Proceed to **bmad-prd** — generate full PRD from this brief
3. Optionally run **bmad-ux** — wireframe key sections before development
4. Scaffold project with `npm create vite@latest` using React + TypeScript template
5. Deploy initial skeleton to Vercel for client preview
