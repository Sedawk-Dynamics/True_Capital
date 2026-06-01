"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  const go = useCallback((i) => {
    setIdx(((i % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const startAuto = useCallback(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => setIdx((p) => (p + 1) % TESTIMONIALS.length), 5500);
  }, []);

  useEffect(() => {
    startAuto();
    return () => clearInterval(timer.current);
  }, [startAuto]);

  const handle = (i) => {
    go(i);
    startAuto();
  };

  return (
    <div className="testi-wrap reveal">
      <div style={{ overflow: "hidden" }}>
        <div className="testi-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
          {TESTIMONIALS.map((t, i) => (
            <div className="testi-slide" key={i}>
              <div className="card testi-card">
                <div className="stars">★★★★★</div>
                <blockquote>&ldquo;{t.q}&rdquo;</blockquote>
                <div className="testi-author">
                  <div className="avatar">{t.ini}</div>
                  <div className="meta">
                    <b>{t.n}</b>
                    <span>{t.r}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testi-nav">
        <button className="carousel-btn" aria-label="Previous" onClick={() => handle(idx - 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className={`testi-dot${i === idx ? " active" : ""}`}
              onClick={() => handle(i)}
            />
          ))}
        </div>
        <button className="carousel-btn" aria-label="Next" onClick={() => handle(idx + 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
