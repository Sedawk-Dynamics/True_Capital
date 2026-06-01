import Link from "next/link";
import Icon from "./Icon";

// Links to /apply with the loan type pre-selected via query param.
export default function ServiceCard({ service }) {
  return (
    <div className="card svc-card reveal">
      <div className="icon-chip">
        <Icon name={service.ic} />
      </div>
      <h3>{service.t}</h3>
      <p>{service.d}</p>
      <Link href={`/apply?loan=${encodeURIComponent(service.t)}`} className="link-more">
        Apply / Enquire
        <Icon name="arrow" strokeWidth={2} />
      </Link>
    </div>
  );
}

export function FeatureCard({ feature }) {
  return (
    <div className="card feature reveal">
      <div className="icon-chip">
        <Icon name={feature.ic} />
      </div>
      <h4>{feature.t}</h4>
      <p>{feature.d}</p>
    </div>
  );
}
