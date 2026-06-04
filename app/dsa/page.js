import Link from "next/link";
import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import { FeatureCard } from "@/components/ServiceCard";
import DsaRegister from "@/components/DsaRegister";
import { DSA_TYPES, DSA_BENEFITS, DSA_ELIGIBILITY, DSA_STEPS } from "@/lib/data";

export const metadata = {
  title: "DSA Partner Program",
  description:
    "Become a DSA (Direct Selling Agent) partner with True Capital & Advisory. Earn attractive payouts on personal, home, business, LAP, education, auto loans and credit cards across 40+ lenders.",
};

export default function DsaPage() {
  return (
    <div className="section container">
      <SectionHead
        eyebrow="DSA Partner Program"
        title={<>Become a <span className="grad">DSA Partner</span></>}
        sub="Join our Direct Selling Agent network and earn attractive payouts by referring customers across loans and credit cards — backed by 40+ banks & NBFCs."
      />

      {/* DSA product types */}
      <div className="center" style={{ marginBottom: 36 }}>
        <span className="eyebrow reveal"><span className="dot" /> Choose a product</span>
        <h2 className="section-title reveal" style={{ fontSize: "clamp(24px,3.2vw,34px)" }}>DSA <span className="grad">Categories</span></h2>
      </div>
      <div className="grid g-3" style={{ marginBottom: 60 }}>
        {DSA_TYPES.map((d) => (
          <div className="card svc-card reveal" key={d.slug}>
            <div className="icon-chip"><Icon name={d.ic} /></div>
            <h3>{d.t}</h3>
            <p>{d.d}</p>
            <Link href={`/dsa/${d.slug}`} className="link-more">
              Learn more <Icon name="arrow" strokeWidth={2} />
            </Link>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="center" style={{ marginBottom: 36 }}>
        <span className="eyebrow reveal"><span className="dot" /> Why partner with us</span>
        <h2 className="section-title reveal" style={{ fontSize: "clamp(24px,3.2vw,34px)" }}>DSA Partner <span className="grad">Benefits</span></h2>
      </div>
      <div className="grid g-3" style={{ marginBottom: 60 }}>
        {DSA_BENEFITS.map((b) => <FeatureCard key={b.t} feature={b} />)}
      </div>

      {/* Eligibility + Steps */}
      <div className="about-grid" style={{ marginBottom: 60 }}>
        <div className="card reveal">
          <div className="icon-chip"><Icon name="verify" strokeWidth={2} /></div>
          <h3 style={{ fontSize: 20, marginBottom: 14 }}>Who can become a DSA?</h3>
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
          <ol style={{ display: "flex", flexDirection: "column", gap: 14, listStyle: "none", counterReset: "step" }}>
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

      {/* Registration */}
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <DsaRegister />
      </div>
    </div>
  );
}
