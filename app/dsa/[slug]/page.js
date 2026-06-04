import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import { FeatureCard } from "@/components/ServiceCard";
import DsaRegister from "@/components/DsaRegister";
import { DSA_TYPES, DSA_BENEFITS, DSA_ELIGIBILITY, DSA_STEPS } from "@/lib/data";

export function generateStaticParams() {
  return DSA_TYPES.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }) {
  const dsa = DSA_TYPES.find((d) => d.slug === params.slug);
  if (!dsa) return { title: "DSA Partner" };
  return {
    title: dsa.t,
    description: `Become a ${dsa.t} with True Capital & Advisory. ${dsa.d} Quick onboarding, training and transparent payouts across 40+ lenders.`,
  };
}

export default function DsaSlugPage({ params }) {
  const dsa = DSA_TYPES.find((d) => d.slug === params.slug);
  if (!dsa) notFound();

  return (
    <div className="section container">
      {/* Breadcrumb */}
      <div className="reveal" style={{ marginBottom: 18, fontSize: 13.5, color: "var(--muted-2)" }}>
        <Link href="/dsa" style={{ color: "var(--blue-2)" }}>DSA Partner Program</Link> &nbsp;/&nbsp; {dsa.t}
      </div>

      <SectionHead
        eyebrow="DSA Partner Program"
        title={<>Become a <span className="grad">{dsa.t}</span></>}
        sub={`${dsa.d} Partner with True Capital & Advisory, get onboarded quickly, and earn transparent payouts on every disbursal.`}
      />

      <div className="center" style={{ marginTop: -22, marginBottom: 50 }}>
        <Link href="#register" className="btn btn-primary">
          Register Now <Icon name="arrow" strokeWidth={2} />
        </Link>
      </div>

      {/* What is it */}
      <div className="card reveal" style={{ marginBottom: 50, background: "var(--grad-soft)", borderColor: "rgba(79,139,255,0.25)" }}>
        <div className="icon-chip"><Icon name={dsa.ic} strokeWidth={2} /></div>
        <h3 style={{ fontSize: 22, marginBottom: 10 }}>What is a {dsa.t}?</h3>
        <p style={{ color: "var(--muted)" }}>
          As a {dsa.t} with True Capital &amp; Advisory, you refer customers looking for a {dsa.product.toLowerCase()} and
          we handle the rest — lender selection, documentation and processing across our network of 40+ banks and NBFCs.
          You earn an attractive commission on every successfully disbursed case, with full support and transparent tracking.
        </p>
      </div>

      {/* Benefits */}
      <div className="center" style={{ marginBottom: 36 }}>
        <span className="eyebrow reveal"><span className="dot" /> Why partner with us</span>
        <h2 className="section-title reveal" style={{ fontSize: "clamp(24px,3.2vw,34px)" }}>Partner <span className="grad">Benefits</span></h2>
      </div>
      <div className="grid g-3" style={{ marginBottom: 60 }}>
        {DSA_BENEFITS.map((b) => <FeatureCard key={b.t} feature={b} />)}
      </div>

      {/* Eligibility + steps */}
      <div className="about-grid" style={{ marginBottom: 60 }}>
        <div className="card reveal">
          <div className="icon-chip"><Icon name="verify" strokeWidth={2} /></div>
          <h3 style={{ fontSize: 20, marginBottom: 14 }}>Eligibility</h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {DSA_ELIGIBILITY.map((e) => (
              <li key={e} style={{ display: "flex", gap: 10, color: "var(--muted)", fontSize: 14.5 }}>
                <Icon name="check" strokeWidth={2} width={20} height={20} style={{ color: "var(--blue-2)", flex: "none" }} /> {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="card reveal">
          <div className="icon-chip"><Icon name="trending" strokeWidth={2} /></div>
          <h3 style={{ fontSize: 20, marginBottom: 14 }}>How it works</h3>
          <ol style={{ display: "flex", flexDirection: "column", gap: 14, listStyle: "none" }}>
            {DSA_STEPS.map((s, i) => (
              <li key={s.t} style={{ display: "flex", gap: 12 }}>
                <span style={{ flex: "none", width: 26, height: 26, borderRadius: "50%", background: "var(--grad)", color: "#fff", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700, fontFamily: "var(--font-head)" }}>{i + 1}</span>
                <div>
                  <b style={{ fontFamily: "var(--font-head)" }}>{s.t}</b>
                  <p style={{ color: "var(--muted)", fontSize: 14 }}>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Other DSA categories */}
      <div className="center" style={{ marginBottom: 28 }}>
        <h2 className="section-title reveal" style={{ fontSize: "clamp(22px,3vw,30px)" }}>Other DSA <span className="grad">Categories</span></h2>
      </div>
      <div className="grid g-4" style={{ marginBottom: 60 }}>
        {DSA_TYPES.filter((d) => d.slug !== dsa.slug).slice(0, 4).map((d) => (
          <Link href={`/dsa/${d.slug}`} key={d.slug} className="card svc-card reveal" style={{ display: "block" }}>
            <div className="icon-chip"><Icon name={d.ic} /></div>
            <h3 style={{ fontSize: 17 }}>{d.t}</h3>
          </Link>
        ))}
      </div>

      {/* Registration */}
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <DsaRegister product={dsa.product} />
      </div>
    </div>
  );
}
