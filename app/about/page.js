import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import { FeatureCard } from "@/components/ServiceCard";
import { WHY, TEAM, COMPANY, initials } from "@/lib/data";

export const metadata = {
  title: "About Us",
  description:
    "True Capital & Advisory Pvt Ltd is a professionally managed financial services and advisory company delivering reliable, transparent, growth-oriented solutions across India.",
};

export default function AboutPage() {
  return (
    <div className="section container">
      <SectionHead
        eyebrow="About us"
        title={<>A professionally managed <span className="grad">financial partner</span></>}
        sub="True Capital & Advisory Pvt Ltd is a professionally managed financial services and advisory company dedicated to delivering reliable, transparent, and growth-oriented financial solutions across India. We provide comprehensive lending, investment, insurance, and advisory services tailored to individuals, startups, MSMEs, and enterprises."
      />

      {/* Mission / Vision */}
      <div className="about-grid" style={{ marginBottom: 40 }}>
        <div className="card mv-card reveal">
          <div className="icon-chip"><Icon name="target" strokeWidth={2} /></div>
          <h3 style={{ fontSize: 22, marginBottom: 10 }}>Our Mission</h3>
          <p style={{ color: "var(--muted)" }}>
            To empower individuals, businesses, startups, and MSMEs with accessible, transparent, and innovative
            financial solutions that support sustainable growth and long-term success.
          </p>
        </div>
        <div className="card mv-card reveal">
          <div className="icon-chip"><Icon name="eye" strokeWidth={2} /></div>
          <h3 style={{ fontSize: 22, marginBottom: 10 }}>Our Vision</h3>
          <p style={{ color: "var(--muted)" }}>
            To become one of India&apos;s most trusted financial services and advisory institutions by delivering
            innovative, customer-focused, and growth-driven financial solutions.
          </p>
        </div>
      </div>

      {/* Founder's message */}
      <div className="card reveal" style={{ marginBottom: 50, background: "var(--grad-soft)", borderColor: "rgba(79,139,255,0.25)" }}>
        <div className="founder">
          <div className="quote-mark">&ldquo;</div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <p style={{ fontFamily: "var(--font-head)", fontSize: "clamp(17px,2.4vw,22px)", fontWeight: 500, lineHeight: 1.5, marginBottom: 18 }}>
              At True Capital &amp; Advisory, our goal is to build a trusted financial institution that helps
              individuals, businesses, startups, and MSMEs access the right financial opportunities for growth and
              stability. We are dedicated to delivering reliable solutions with clarity, commitment, and long-term value.
            </p>
            <div className="testi-author" style={{ justifyContent: "flex-start" }}>
              <div className="avatar">NA</div>
              <div className="meta" style={{ textAlign: "left" }}>
                <b>Naubahar Ali</b>
                <span>Founder, True Capital &amp; Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="center" style={{ marginBottom: 36 }}>
        <h2 className="section-title reveal" style={{ fontSize: "clamp(24px,3.2vw,34px)" }}>Why clients <span className="grad">choose us</span></h2>
      </div>
      <div className="grid g-3" style={{ marginBottom: 60 }}>
        {WHY.slice(0, 3).map((f) => (
          <FeatureCard key={f.t} feature={f} />
        ))}
      </div>

      {/* Leadership */}
      <SectionHead eyebrow="Leadership" title={<>Directors &amp; <span className="grad">leadership team</span></>} />
      <div className="grid g-3" style={{ marginBottom: 54 }}>
        {TEAM.map((m) => (
          <div className="card team-card reveal" key={m.n}>
            <div className="avatar">{initials(m.n)}</div>
            <h4>{m.n}</h4>
            <div className="role">{m.r}</div>
            <p>{m.b}</p>
          </div>
        ))}
      </div>

      {/* Registration panel */}
      <div className="card reg-panel reveal">
        <h3 style={{ fontSize: 20, marginBottom: 6 }}>Company Registration Details</h3>
        <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 8 }}>
          Statutory information for True Capital &amp; Advisory Pvt Ltd.
        </p>
        <div className="reg-list">
          <div className="ri"><div className="l">Company Name</div><div className="v">True Capital &amp; Advisory Pvt Ltd</div></div>
          <div className="ri"><div className="l">Incorporated</div><div className="v">2026, India</div></div>
          <div className="ri"><div className="l">CIN / Registration No.</div><div className="v">To be added</div></div>
          <div className="ri"><div className="l">GSTIN</div><div className="v">To be added</div></div>
          <div className="ri" style={{ gridColumn: "1/-1" }}><div className="l">Registered Office</div><div className="v">{COMPANY.address}</div></div>
        </div>
      </div>
    </div>
  );
}
