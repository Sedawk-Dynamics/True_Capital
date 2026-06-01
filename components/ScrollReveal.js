"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Reveals `.reveal` elements as they scroll into view. A persistent
// IntersectionObserver handles visibility; a MutationObserver catches elements
// that mount after navigation (e.g. client components under Suspense), and a
// route change re-scans the DOM. Falls back to showing everything if IO is
// unsupported or motion is reduced.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supported = "IntersectionObserver" in window;

    if (!supported || reduce) {
      const showAll = () => document.querySelectorAll(".reveal:not(.in)").forEach((e) => e.classList.add("in"));
      showAll();
      const mo = new MutationObserver(showAll);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observeAll = () =>
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));

    observeAll();
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
