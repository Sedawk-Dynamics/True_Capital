# True Capital & Advisory — Website (Next.js)

Corporate website for **True Capital & Advisory Pvt Ltd** — _Fast Loan. Trusted Solution._
Built with **Next.js 14 (App Router) + React + plain CSS**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.js          # root layout: fonts, metadata/SEO, nav, footer, providers
  globals.css        # all design tokens + component styles
  page.js            # Home
  about/             # About Us
  services/          # Services
  calculator/        # EMI Calculator
  apply/             # Apply Online (multi-section loan application form + document upload)
  reviews/           # Customer Reviews
  blog/              # Blog (with article modals)
  contact/           # Contact (map + enquiry form)
  admin/             # Hidden admin demo (/admin) — session leads table
components/           # Reusable UI + interactive widgets
lib/
  data.js            # All site content (services, team, blog, testimonials, icons)
  LeadContext.js     # Session-only lead/review store (React Context)
```

## Features

- Fully responsive, dark fintech design with scroll-reveal animations & animated counters
- Working **EMI calculator** (canvas donut chart) in a popup, plus a **CIBIL score check** form
- Validated lead / application / contact / review forms with success states
- Client-side **document upload** (drag-drop, type/size validation)
- Floating WhatsApp + Click-to-Call buttons site-wide
- SEO: per-page metadata, Open Graph, semantic HTML

## Integration points (backend — currently marked with TODO comments)

| Feature | Where |
| --- | --- |
| CRM lead webhook | `lib/LeadContext.js` → `addLead` |
| Google Ads / Meta Pixel conversion | `lib/LeadContext.js`, `app/layout.js` |
| Google Analytics (GA4) | `app/layout.js` |
| Auto email notification | `app/contact/page.js` |
| Document upload endpoint | `components/DocumentUpload.js` |
| Persistent admin/CRM dashboard | `app/admin/page.js` (currently session-only) |

> The original single-file prototype is preserved as `index.html` (reference only — not used by the Next.js app).

## Notes

- Lead/review data is **session-only** (resets on refresh) until a backend is connected.
- No real third-party bank logos are used (generic "Partner Bank / NBFC" tiles).
- Map uses an OpenStreetMap embed centred on the Haridwar office (29.9380, 78.1635).
