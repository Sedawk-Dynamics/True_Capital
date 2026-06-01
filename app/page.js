import Link from "next/link";
import Icon from "@/components/Icon";
import Stat from "@/components/Stat";
import SectionHead from "@/components/SectionHead";
import ServiceCard, { FeatureCard } from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import { COMPANY, LOAN_SERVICES, WHY, PARTNERS } from "@/lib/data";

export default function HomePage() {
  const partnerTiles = PARTNERS.map((p, i) => (
    <div className="partner-tile" key={i}>
      <div className="pmark"><Icon name={i % 2 ? "cash" : "bank"} strokeWidth={2} /></div>
      <div>
        <b>{p} {String.fromCharCode(65 + (i % 6))}</b>
        <span>Lending network</span>
      </div>
    </div>
  ));

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid" />
          <div className="mesh m1" />
          <div className="mesh m2" />
        </div>
        <div className="container">
          <div className="hero-inner">
            <span className="eyebrow"><span className="dot" /> Incorporated 2026 • Haridwar, India</span>
            <h1>Fast Loans. <span className="grad">Trusted</span> Financial Solutions.</h1>
            <p className="lead">
              True Capital &amp; Advisory empowers individuals, startups, MSMEs and enterprises with quick approvals,
              transparent processes and expert advisory — across India.
            </p>
            <div className="hero-cta">
              <Link href="/apply" className="btn btn-primary">
                Apply Now <Icon name="arrow" strokeWidth={2} />
              </Link>
              <a href={`tel:${COMPANY.phoneIntl}`} className="btn btn-ghost">
                <Icon name="phone" strokeWidth={2} /> Call Now
              </a>
            </div>
            <div className="trust-strip">
              <span><Icon name="check" strokeWidth={2} /> 8+ Loan Types</span>
              <span><Icon name="check" strokeWidth={2} /> Quick Approval</span>
              <span><Icon name="check" strokeWidth={2} /> Pan-India Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats section-sm">
        <div className="container">
          <div className="grid g-4">
            <Stat to={30} suffix="+" label="Years Combined Experience" />
            <Stat to={17} suffix="+" label="Loan & Finance Products" />
            <Stat to={2500} suffix="+" label="Clients Served" />
            <Stat to={40} suffix="+" label="Partner Lenders" />
          </div>
        </div>
      </div>

      {/* SERVICES OVERVIEW */}
      <div className="section container">
        <SectionHead
          eyebrow="What we offer"
          title={<>Loan &amp; Financial <span className="grad">Services</span></>}
          sub="From home and personal loans to MSME finance, advisory and insurance — one trusted partner for every financial need."
        />
        <div className="grid g-3">
          {LOAN_SERVICES.slice(0, 6).map((s) => (
            <ServiceCard key={s.t} service={s} />
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="section section-sm container">
        <SectionHead eyebrow="Why True Capital" title={<>Built on <span className="grad">trust</span> &amp; transparency</>} />
        <div className="grid g-3">
          {WHY.map((f) => (
            <FeatureCard key={f.t} feature={f} />
          ))}
        </div>
      </div>

      {/* PARTNERS */}
      <div className="section-sm">
        <div className="container center" style={{ marginBottom: 30 }}>
          <h2 className="section-title reveal" style={{ fontSize: "clamp(22px,3vw,32px)" }}>Our Partner Banks &amp; NBFCs</h2>
          <p className="section-sub reveal" style={{ margin: "0 auto" }}>We connect you to a wide network of lending partners across India.</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {partnerTiles}
            {partnerTiles}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="section container">
        <SectionHead eyebrow="Client stories" title={<>What our <span className="grad">customers</span> say</>} />
        <Testimonials />
      </div>

      {/* QUICK LEAD */}
      <div className="section section-sm container">
        <div className="card reveal" style={{ background: "var(--grad-soft)", borderColor: "rgba(79,139,255,0.3)", padding: "clamp(24px,5vw,46px)" }}>
          <div className="grid g-2" style={{ alignItems: "center", gap: 32 }}>
            <div>
              <span className="eyebrow"><span className="dot" /> Free consultation</span>
              <h2 className="section-title" style={{ fontSize: "clamp(26px,3.6vw,38px)" }}>Get a quick <span className="grad">callback</span></h2>
              <p className="section-sub">
                Share a few details and our advisors will reach out with the best loan options for you — no obligation,
                completely free.
              </p>
              <ul style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                {["Personalised loan matching", "Lowest available interest rates", "End-to-end documentation support"].map((x) => (
                  <li key={x} style={{ display: "flex", gap: 10, color: "var(--muted)" }}>
                    <Icon name="check" strokeWidth={2} width={20} height={20} style={{ color: "#4F8BFF", flex: "none" }} /> {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <LeadForm
                source="Home Callback"
                submitLabel="Request Callback"
                successTitle="Thank you!"
                successMsg="Your request is received — our team will contact you shortly."
                fields={[
                  { name: "name", label: "Full Name", validate: "name", placeholder: "e.g. Rahul Sharma", full: true, error: "Please enter your name." },
                  { name: "mobile", label: "Mobile", validate: "mobile", type: "tel", placeholder: "10-digit number", error: "Enter a valid 10-digit mobile." },
                  { name: "loanType", label: "Loan Type", validate: "required", loans: true, placeholder: "Select loan type…", error: "Please select a loan type." },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
