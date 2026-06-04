import Link from "next/link";
import Logo from "./Logo";

// Shared brand lockup used in both the navbar and footer.
export default function Brand({ logoId = "lg" }) {
  return (
    <Link href="/" className="brand">
      <Logo id={logoId} />
      <span>
        TRUE CAPITAL<small>&amp; Advisory</small>
      </span>
    </Link>
  );
}
