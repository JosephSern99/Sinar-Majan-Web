# Product Requirements Document — Sinar Majan Web

**Version:** 1.0  
**Date:** 2026-06-23  
**Author:** Joseph (josephkhoo99)  
**Preceded by:** `product-brief.md`  
**Status:** Draft

---

## 1. Overview

A high-performance B2B landing website for Sinar Majan, a bulk metals and industrial commodities vendor in Peninsular Malaysia. The site establishes digital credibility and funnels qualified buyers into inbound enquiries via a contact/RFQ form.

---

## 2. Goals

- Give professional buyers (engineers, procurement officers, sub-contractors) a fast, credible first impression of Sinar Majan
- Drive qualified inbound enquiries via a contact/RFQ form
- Achieve Lighthouse Performance ≥ 90 and LCP < 2.5s on mobile
- Deploy and maintain at near-zero infrastructure cost on Vercel

---

## 3. Users

**Primary — B2B Buyer**
- Engineering firms, construction sub-contractors, manufacturing factories
- Arrives with a specific sourcing need; wants to confirm product fit and make contact quickly
- Likely on desktop but must work on mobile

**Secondary — Government Procurement**
- Evaluating Sinar Majan for open tender shortlisting
- Needs company profile, product scope, and contact details clearly visible

---

## 4. Pages & Sections

### 4.1 Single-Page Layout (SPA with anchor routing)

The site is a single scrollable page with a sticky navigation bar linking to each section.

| # | Section | Content |
|---|---|---|
| 1 | **Hero** | Full-viewport headline, short tagline, primary CTA button ("Request a Quote") |
| 2 | **About** | Company overview, B2B positioning, years in operation, authorized dealer status |
| 3 | **Products** | Three product cards: Ferrous Metals, Non-Ferrous Metals, Industrial Commodities — each with icon, brief description, and key examples |
| 4 | **Why Us** | 3–4 differentiator tiles: Bulk Capacity, Local Logistics, Authorized Dealer, Nationwide Reach |
| 5 | **Coverage** | Visual or text block highlighting Peninsular Malaysia distribution reach |
| 6 | **Contact / RFQ** | Enquiry form + company phone, email, and address |
| 7 | **Footer** | Logo, nav links, copyright |

### 4.2 Sticky Navigation

- Logo left, nav links right
- Smooth-scrolls to each section on click
- Collapses to hamburger menu on mobile

---

## 5. Functional Requirements

### FR-01 — Contact / RFQ Form
- Fields: Full Name*, Company Name*, Email*, Phone, Product Interest (dropdown: Ferrous Metals / Non-Ferrous Metals / Industrial Commodities / Other), Message*
- Validation: required fields enforced client-side before submit
- On submit: calls a Vercel Serverless Function that sends an email via Resend API to the client's inbox
- Success state: inline confirmation message ("Your enquiry has been sent. We'll be in touch within 1 business day.")
- Error state: inline error message if email delivery fails

### FR-02 — Navigation
- Smooth scroll to section on nav link click
- Active section highlighted in nav as user scrolls
- Mobile: hamburger menu toggling a slide-in/overlay drawer

### FR-03 — Performance
- All images served as WebP with width/height attributes to prevent layout shift
- Fonts loaded with `font-display: swap`
- No blocking third-party scripts (no Google Analytics in Phase 1)

### FR-04 — SEO Basics
- Unique `<title>` and `<meta description>` on the page
- Open Graph tags for social sharing preview
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)

---

## 6. Non-Functional Requirements

| Requirement | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| LCP (mobile) | < 2.5s |
| CLS | < 0.1 |
| Accessibility | WCAG 2.1 AA basics (alt text, contrast ratios, keyboard nav) |
| Browser support | Chrome, Firefox, Edge, Safari — latest 2 versions |
| Mobile breakpoints | 375px (mobile), 768px (tablet), 1280px (desktop) |

---

## 7. Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 (hash or anchor routing) |
| Icons | Lucide React |
| Animation | Framer Motion (section reveal on scroll only) |
| Form email | Vercel Serverless Function + Resend API |
| Hosting | Vercel (Hobby tier) |

**Explicitly excluded:** Redux, TanStack Query, database, authentication, CMS, Docker.

---

## 8. Project Structure

```
sinar-majan-web/
├── public/
│   └── favicon.ico, og-image.png
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar, Footer
│   │   └── sections/      # Hero, About, Products, WhyUs, Coverage, Contact
│   ├── lib/
│   │   └── sendEnquiry.ts # fetch wrapper for /api/contact
│   ├── types/
│   │   └── index.ts       # shared TypeScript types
│   ├── App.tsx
│   └── main.tsx
├── api/
│   └── contact.ts         # Vercel Serverless Function (Resend)
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 9. Out of Scope (Phase 1)

- Product catalogue with individual product detail pages
- Customer login / account portal
- Pricing or online ordering
- Blog or news section
- Multi-language (Bahasa Malaysia)
- CMS / admin panel
- Analytics (add in Phase 2 via Vercel Analytics)

---

## 10. Assumptions & Dependencies

| Item | Detail |
|---|---|
| Client content | Client supplies: logo (SVG preferred), product images, company description text, phone, email, address |
| Resend API key | Client registers a Resend account and provides a verified sender domain/email |
| Domain | Client provides domain; configure DNS to Vercel |
| Design direction | Follows aesthetic reference: stellar-kleicha-612454.netlify.app |

---

## 11. Milestones

| Milestone | Description |
|---|---|
| M1 — Scaffold | Project bootstrapped, deployed skeleton on Vercel |
| M2 — UI Shell | All sections rendered with placeholder content, responsive layout complete |
| M3 — Form Live | Contact form wired to Resend, tested end-to-end |
| M4 — Content Fill | Real client content, images, copy integrated |
| M5 — QA & Launch | Cross-browser testing, Lighthouse audit, DNS cutover |
