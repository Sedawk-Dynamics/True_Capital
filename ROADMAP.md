# True Capital — Loan Management System Roadmap

This document plans the full loan-application platform requested. It separates what is
**already built (front-end)** from what **needs a backend + third-party services**, and
proposes a phased delivery with the accounts/credentials required at each step.

---

## ✅ Phase 0 — Done (front-end, in this project)

| Item | Where |
| --- | --- |
| Multi-section Loan Application form (Personal, Address, KYC, Employment, Loan, Bank, Documents) | `components/LoanApplicationForm.js` → `/apply` |
| Loan categories (Personal, Home, Business, LAP, Private Funding, New/Used Car + more) | `lib/data.js` |
| EMI Calculator (auto calculate) | `/calculator` |
| CIBIL score request form (capture + consent) | `/cibil` |
| Document upload UI (PDF/JPG, drag-drop, validation) | `components/DocumentUpload.js` |
| Session admin dashboard demo (leads table) | `/admin` |
| WhatsApp + Click-to-Call, single number 97581 89999 | sitewide |
| Privacy Policy, Google review CTA | `/privacy`, footer + `/reviews` |
| Responsive, SEO metadata, fast (Next.js) | sitewide |

---

## 🔌 Phase 1 — Core backend (required before anything "real" works)

Everything below needs a server + database. Recommended stack: **Next.js API routes / Node**, **PostgreSQL** (or MongoDB), file storage on **AWS S3 / Cloudflare R2**.

| Feature | What it needs | Hook in code |
| --- | --- | --- |
| Persist applications & leads | DB + `POST /api/application` | `LoanApplicationForm.onSubmit` TODO |
| Secure document storage | S3/R2 bucket + signed URLs (encryption at rest) | `DocumentUpload` TODO |
| Application status (Pending/Approved/Rejected) | DB status field + status page | new `/status` page |
| Admin dashboard (real) | Auth + DB-backed tables, lead assignment | replaces `/admin` demo |

## 🔐 Phase 2 — Auth & verification

| Feature | Service / credential needed |
| --- | --- |
| OTP login / mobile verification | SMS gateway — **MSG91 / Twilio / Gupshup** (sender ID, DLT registration for India) |
| Email verification | Email service — **AWS SES / SendGrid / Resend** |
| Staff login panel | Role-based auth — **NextAuth / Clerk / custom JWT** |
| Customer login panel | Same auth system, customer role |

## 📊 Phase 3 — Credit & financial integrations

| Feature | Service / credential needed |
| --- | --- |
| CIBIL / credit-score check API | Licensed bureau partnership — **CIBIL / Experian / Equifax / CRIF** (or aggregator like Surepass, Signzy). Requires NBFC/partner agreement + user consent logging |
| Bank statement analyzer | **Perfios / FinBox / Signzy** API |
| Auto eligibility engine | Business rules on income + FOIR + bureau score (server-side) |
| KYC verification (Aadhaar/PAN) | **Signzy / Surepass / Karza** (PAN-NSDL, Aadhaar offline KYC) |

## 💳 Phase 4 — Payments, e-sign, agreements

| Feature | Service / credential needed |
| --- | --- |
| Processing-fee payment gateway | **Razorpay / Cashfree / PayU** (KYC + settlement account) |
| e-Sign loan documents | **Digio / Leegality / NSDL eSign** (Aadhaar eSign) |
| Auto-generate loan agreement PDF | Server PDF (PDFKit / Puppeteer) + template |

## 🔁 Phase 5 — CRM, notifications, ops

| Feature | Service / credential needed |
| --- | --- |
| CRM + lead lifecycle | Self-hosted module or **Zoho/LeadSquared** integration |
| WhatsApp API (official) | **WhatsApp Business API** via Meta / Gupshup / Interakt |
| SMS notifications | Same SMS gateway as Phase 2 |
| Lead assignment + staff tracking | DB + admin module |
| Dashboard analytics (total/approved/pending) | DB aggregations |

---

## 🌐 Target website flow

`Home → Apply Loan → Upload Documents → Eligibility Check → Verification (OTP/Email) → Approval → e-Sign Agreement → Disbursement`

The front-end already covers **Apply Loan + Upload Documents**. The remaining steps light up as the phases above are completed.

## 🛡️ Non-functional requirements (carried throughout)

- Mobile-friendly UI ✅ (done) · Fast loading ✅ (Next.js) · SEO ✅ (metadata done)
- **SSL** — automatic on Vercel/most hosts (add custom domain)
- **Secure document storage** — Phase 1 (encrypted bucket, signed URLs, access logs)
- **OTP login** — Phase 2
- Data privacy / consent logging — required for bureau & lending compliance (RBI/DPDP Act)

---

### What I need from you to start Phase 1+
1. Hosting preference (Vercel + a managed Postgres like Neon/Supabase is the fastest path).
2. Which paid services you'll open accounts for (SMS, email, payment, bureau, eSign).
3. Whether you're operating as a DSA/partner or a registered NBFC — this affects which CIBIL/lending integrations are permitted.
