import SectionHead from "@/components/SectionHead";
import Icon from "@/components/Icon";
import CibilCheck from "@/components/CibilCheck";

export const metadata = {
  title: "Check Your CIBIL Score",
  description:
    "Check your CIBIL / credit score for free with True Capital & Advisory. A soft enquiry that won't affect your score, with guidance on improving eligibility.",
};

const POINTS = [
  { ic: "bolt", t: "Free & instant", d: "Know where you stand before you apply for any loan." },
  { ic: "shield", t: "Soft enquiry", d: "Checking your own score does not impact it." },
  { ic: "trending", t: "Improve eligibility", d: "Get tips to boost your score and secure better rates." },
];

export default function CibilPage() {
  return (
    <div className="section container">
      <SectionHead
        eyebrow="Credit health"
        title={<>Check Your <span className="grad">CIBIL Score</span></>}
        sub="Your credit score decides whether you get a loan — and at what rate. Check it for free and get expert guidance."
      />

      <div className="grid g-2" style={{ alignItems: "start", gap: 26 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {POINTS.map((p) => (
            <div className="card feature reveal" key={p.t} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div className="icon-chip" style={{ marginBottom: 0, flex: "none" }}><Icon name={p.ic} /></div>
              <div>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card reveal">
          <h3 style={{ fontSize: 21, marginBottom: 6 }}>Get your score</h3>
          <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 20 }}>
            Enter your details below and our team will share your indicative CIBIL score along with the best loan options
            for you.
          </p>
          <CibilCheck />
        </div>
      </div>
    </div>
  );
}
