import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import { LOAN_SERVICES, OTHER_SERVICES } from "@/lib/data";

export const metadata = {
  title: "Services",
  description:
    "Complete financial solutions — Home, Personal, Business & MSME loans, LAP, car & education loans, project finance, plus DSA, insurance, recovery, verification and wealth advisory.",
};

export default function ServicesPage() {
  return (
    <div className="section container">
      <SectionHead
        eyebrow="Our services"
        title={<>Complete <span className="grad">financial solutions</span></>}
        sub="A full suite of lending, advisory, insurance and investment services — built around your goals."
      />

      <h3 className="reveal" style={{ fontSize: 22, marginBottom: 22, display: "flex", alignItems: "center", gap: 10 }}>
        <span className="tag">Loan Services</span>
      </h3>
      <div className="grid g-3" style={{ marginBottom: 54 }}>
        {LOAN_SERVICES.map((s) => (
          <ServiceCard key={s.t} service={s} />
        ))}
      </div>

      <h3 className="reveal" style={{ fontSize: 22, marginBottom: 22, display: "flex", alignItems: "center", gap: 10 }}>
        <span className="tag">Other Services</span>
      </h3>
      <div className="grid g-3">
        {OTHER_SERVICES.map((s) => (
          <ServiceCard key={s.t} service={s} />
        ))}
      </div>
    </div>
  );
}
