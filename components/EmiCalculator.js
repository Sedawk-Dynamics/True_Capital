"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { fmtINR } from "@/lib/data";

const LOAN_TYPES = [
  { label: "Home (8.5%)", rate: 8.5 },
  { label: "Personal (11.5%)", rate: 11.5 },
  { label: "Business (10.5%)", rate: 10.5 },
  { label: "Generic (9.5%)", rate: 9.5 },
];

const clampNum = (v, min, max, def) => {
  if (isNaN(v) || v === null) return def;
  return Math.min(Math.max(v, min), max);
};

export default function EmiCalculator() {
  const [amount, setAmount] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [tenMode, setTenMode] = useState("years");
  const [tenure, setTenure] = useState(20); // years or months depending on mode
  const [activeType, setActiveType] = useState(0);
  const canvasRef = useRef(null);

  // computed values
  const P = clampNum(Number(amount), 10000, 50000000, 2500000);
  const annual = clampNum(Number(rate), 0.1, 35, 8.5);
  const months =
    tenMode === "years"
      ? clampNum(Number(tenure), 1, 30, 20) * 12
      : clampNum(Number(tenure), 1, 360, 240);
  const r = annual / 12 / 100;
  const emi = r === 0 ? P / months : (P * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  const totalPay = emi * months;
  const totalInt = totalPay - P;

  // draw donut
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const size = 170;
    if (c.width !== size * dpr) {
      c.width = size * dpr;
      c.height = size * dpr;
      c.style.width = size + "px";
      c.style.height = size + "px";
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, size, size);
    const cx = size / 2, cy = size / 2, rad = 66, lw = 22;
    const total = P + totalInt;
    const pFrac = total > 0 ? P / total : 1;
    ctx.beginPath();
    ctx.arc(cx, cy, rad, 0, Math.PI * 2);
    ctx.strokeStyle = "#1b2a55";
    ctx.lineWidth = lw;
    ctx.stroke();
    const start = -Math.PI / 2;
    ctx.beginPath();
    ctx.arc(cx, cy, rad, start, start + pFrac * Math.PI * 2);
    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, "#1E5BFF");
    grad.addColorStop(1, "#4F8BFF");
    ctx.strokeStyle = grad;
    ctx.lineWidth = lw;
    ctx.lineCap = "round";
    ctx.stroke();
    ctx.fillStyle = "#fff";
    ctx.font = "700 20px Sora, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(Math.round(pFrac * 100) + "%", cx, cy - 7);
    ctx.fillStyle = "#A4A7B8";
    ctx.font = "500 11px Inter, sans-serif";
    ctx.fillText("Principal", cx, cy + 12);
  }, [P, totalInt]);

  const pickType = (i) => {
    setActiveType(i);
    setRate(LOAN_TYPES[i].rate);
  };

  const switchMode = (mode) => {
    if (mode === tenMode) return;
    setTenMode(mode);
    setTenure(mode === "years" ? 20 : 240);
  };

  const tenRange = tenMode === "years" ? { min: 1, max: 30, step: 1 } : { min: 6, max: 360, step: 6 };

  return (
    <div className="card reveal" style={{ padding: "clamp(22px,4vw,40px)" }}>
      <div style={{ marginBottom: 26 }}>
        <label style={{ fontSize: 13.5, fontWeight: 600, color: "#d7d9e6", display: "block", marginBottom: 10 }}>
          Select loan type
        </label>
        <div className="tenure-toggle">
          {LOAN_TYPES.map((t, i) => (
            <button key={t.label} type="button" className={i === activeType ? "active" : ""} onClick={() => pickType(i)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="calc-wrap">
        {/* inputs */}
        <div>
          <div className="range-row">
            <div className="range-head">
              <label>Loan Amount</label>
              <div className="range-val">
                <span className="unit">₹</span>
                <input type="number" value={amount} min={50000} max={50000000}
                  onChange={(e) => setAmount(e.target.value)} />
              </div>
            </div>
            <input type="range" min={50000} max={20000000} step={50000}
              value={Math.min(amount, 20000000)} onChange={(e) => setAmount(e.target.value)} />
          </div>

          <div className="range-row">
            <div className="range-head">
              <label>Interest Rate</label>
              <div className="range-val">
                <input type="number" value={rate} min={1} max={30} step={0.1}
                  onChange={(e) => setRate(e.target.value)} />
                <span className="unit">% p.a.</span>
              </div>
            </div>
            <input type="range" min={1} max={30} step={0.1} value={rate}
              onChange={(e) => setRate(e.target.value)} />
          </div>

          <div className="range-row">
            <div className="range-head">
              <label>Tenure</label>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div className="range-val">
                  <input type="number" value={tenure} min={tenRange.min} max={tenRange.max}
                    onChange={(e) => setTenure(e.target.value)} />
                  <span className="unit">{tenMode === "years" ? "Years" : "Months"}</span>
                </div>
                <div className="tenure-toggle">
                  <button type="button" className={tenMode === "years" ? "active" : ""} onClick={() => switchMode("years")}>Yr</button>
                  <button type="button" className={tenMode === "months" ? "active" : ""} onClick={() => switchMode("months")}>Mo</button>
                </div>
              </div>
            </div>
            <input type="range" min={tenRange.min} max={tenRange.max} step={tenRange.step}
              value={tenure} onChange={(e) => setTenure(e.target.value)} />
          </div>

          <Link href="/apply" className="btn btn-primary btn-block" style={{ marginTop: 8 }}>
            Apply for this loan <Icon name="arrow" strokeWidth={2} />
          </Link>
        </div>

        {/* results */}
        <div className="calc-result">
          <div className="emi-big">
            <div className="lbl">Monthly EMI</div>
            <div className="val">{fmtINR(emi || 0)}</div>
          </div>
          <div className="donut-row">
            <canvas ref={canvasRef} width="170" height="170" aria-label="Principal vs interest chart" />
            <div className="legend">
              <div className="legend-item">
                <span className="swatch" style={{ background: "#4F8BFF" }} />
                <div><b>{fmtINR(P)}</b><span>Principal amount</span></div>
              </div>
              <div className="legend-item">
                <span className="swatch" style={{ background: "#1b2a55" }} />
                <div><b>{fmtINR(totalInt || 0)}</b><span>Total interest</span></div>
              </div>
            </div>
          </div>
          <div className="calc-breakdown">
            <div className="bd"><div className="l">Total Interest</div><div className="v">{fmtINR(totalInt || 0)}</div></div>
            <div className="bd"><div className="l">Total Payable</div><div className="v">{fmtINR(totalPay || 0)}</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
