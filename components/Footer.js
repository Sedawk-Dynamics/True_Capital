import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { COMPANY } from "@/lib/data";

const SOCIALS = [
  { label: "Facebook", path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" },
  { label: "LinkedIn", path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.99H5.67v8.35h2.67zM7 8.8a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.54v-4.57c0-2.45-1.31-3.59-3.06-3.59-1.41 0-2.04.78-2.39 1.32v-1.13h-2.66c.04.75 0 8.35 0 8.35h2.66v-4.66c0-.24.02-.48.09-.65.19-.48.63-.97 1.37-.97.97 0 1.36.74 1.36 1.81v4.47h2.63z" },
  { label: "YouTube", path: "M23 12s0-3.9-.5-5.7a3 3 0 0 0-2.1-2.1C18.6 3.7 12 3.7 12 3.7s-6.6 0-8.4.5a3 3 0 0 0-2.1 2.1C1 8.1 1 12 1 12s0 3.9.5 5.7a3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1C23 15.9 23 12 23 12zM9.8 15.5v-7l6 3.5-6 3.5z" },
  { label: "X (Twitter)", path: "M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-7-6.2 7H1.4l8.1-9.3L1 2h7.1l4.9 6.4L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z" },
  { label: "Google Business", path: "M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3zM12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22zM6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2L6.4 14zM12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.4l3.3 2.6C7.2 7.7 9.4 5.9 12 5.9z" },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="foot-brand">
            <Link href="/" className="brand">
              <Logo id="foot-lg" />
              <span>
                TRUE CAPITAL<small>&amp; Advisory</small>
              </span>
            </Link>
            <p>Fast Loan. Trusted Solution. — Reliable lending, investment, insurance &amp; advisory services across India.</p>
            <div className="socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} title={s.label}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
              <a href="#" aria-label="Instagram" title="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5>Quick Links</h5>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/calculator">EMI Calculator</Link>
            <Link href="/apply">Apply Online</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div>
            <h5>Services</h5>
            <Link href="/services">Home Loan</Link>
            <Link href="/services">Personal Loan</Link>
            <Link href="/services">Business &amp; MSME Loan</Link>
            <Link href="/services">Loan Against Property</Link>
            <Link href="/services">Private Funding</Link>
            <Link href="/services">DSA Services</Link>
            <Link href="/services">Wealth Advisory</Link>
          </div>

          <div className="foot-contact">
            <h5>Contact</h5>
            <div className="fc"><Icon name="pin" strokeWidth={2} /><span>{COMPANY.address}</span></div>
            <div className="fc"><Icon name="phone" strokeWidth={2} /><a href={`tel:${COMPANY.phoneIntl}`}>+91 90276 38434</a></div>
            <div className="fc"><Icon name="whatsapp" strokeWidth={2} /><a href={`https://wa.me/${COMPANY.whatsappIntl}`} target="_blank" rel="noopener noreferrer">+91 97581 89999</a></div>
            <div className="fc"><Icon name="mail" strokeWidth={2} /><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div>
            <div className="fc"><Icon name="clock" strokeWidth={2} /><span>Mon–Sat: 9 AM – 6 PM • Sun: Closed</span></div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 True Capital &amp; Advisory Pvt Ltd. All rights reserved.</p>
          <p>Incorporated 2026 • Haridwar, Uttarakhand</p>
        </div>
      </div>
      <div className="disclaimer">
        <div className="container">
          <p>True Capital &amp; Advisory Pvt Ltd is a financial services &amp; advisory firm. Loan approvals are subject to lender eligibility criteria. Information on this site is indicative.</p>
        </div>
      </div>
    </footer>
  );
}
