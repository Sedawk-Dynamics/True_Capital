"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import EmiCalculator from "./EmiCalculator";

// Fixed vertical "Calculate EMI" tab (right edge) that opens the calculator in a modal.
export default function EmiSideTab() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // close on route change (e.g. when "Apply for this loan" is clicked)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // lock scroll + Escape to close while open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button type="button" className="emi-side-tab" aria-label="Calculate EMI" onClick={() => setOpen(true)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 6h8M8 10h2M12 10h2M8 14h2M12 14h2M8 18h6" strokeLinecap="round" />
        </svg>
        <span>Calculate EMI</span>
      </button>

      {open && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="EMI Calculator"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="modal modal-wide">
            <div className="emi-modal-head">
              <h3>EMI Calculator</h3>
              <button className="modal-close" style={{ position: "static" }} aria-label="Close" onClick={() => setOpen(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <EmiCalculator embedded onApplyClick={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
