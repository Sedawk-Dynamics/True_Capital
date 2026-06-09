import Link from "next/link";
import Logo from "./Logo";

// Full brand lockup used in both the navbar and footer: mark + wordmark + tagline.
export default function Brand({ logoId = "lg" }) {
  return (
    <Link href="/" className="brand">
      <Logo id={logoId} />
      <span className="brand-text">
        <span className="brand-name">TRUE <span className="cap">CAPITAL</span></span>
        <small>Fast Loan. Trusted Solution.</small>
      </span>
    </Link>
  );
}
