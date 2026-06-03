"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Icon from "./Icon";
import { COMPANY } from "@/lib/data";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Loans" },
  { href: "/calculator", label: "EMI Calculator" },
  { href: "/apply", label: "Apply Loan" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <Logo id="nav-lg" />
          <span>
            TRUE CAPITAL<small>&amp; Advisory</small>
          </span>
        </Link>

        <ul className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={isActive(l.href) ? "active" : ""}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a href={`tel:${COMPANY.phoneIntl}`} className="btn btn-ghost btn-sm" aria-label="Call now">
            <Icon name="phone" strokeWidth={2} />
            Call
          </a>
          <Link href="/apply" className="btn btn-primary btn-sm nav-apply">
            Apply Now
          </Link>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
