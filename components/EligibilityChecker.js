"use client";
import { useState } from "react";
import Icon from "./Icon";
import { fmtINR } from "@/lib/data";

export default function EligibilityChecker() {
  const [income, setIncome] = useState("");
  const [emi, setEmi] = useState("");
  const [desired, setDesired] = useState("");
  const [result, setResult] = useState(null);
  const [incomeErr, setIncomeErr] = useState(false);

  const check = () => {
    const inc = Math.max(0, Number(income) || 0);
    const existing = Math.max(0, Number(emi) || 0);
    const want = Math.max(0, Number(desired) || 0);
    if (inc <= 0) {
      setIncomeErr(true);
      return;
    }
    setIncomeErr(false);

    // FOIR 50%
    const serviceable = Math.max(0, inc * 0.5 - existing);
    // present value of serviceable EMI at 10.5% over 60 months
    const r = 10.5 / 12 / 100;
    const n = 60;
    const maxAmt = serviceable > 0 ? (serviceable * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n)) : 0;

    let pct = want > 0 ? Math.min(100, Math.round((maxAmt / want) * 100)) : maxAmt > 0 ? 100 : 0;
    let cls, label, note;
    if (serviceable <= 0) {
      cls = "low"; label = "✗ Not eligible currently"; note = "Existing EMIs too high vs income";
      pct = 0;
    } else if (want > 0 && maxAmt >= want) {
      cls = "good"; label = "✓ Likely Eligible"; note = pct + "% of desired amount";
    } else if (want > 0 && maxAmt >= want * 0.6) {
      cls = "mid"; label = "~ Partially Eligible"; note = pct + "% of desired amount";
    } else if (want > 0) {
      cls = "low"; label = "✗ Below requested amount"; note = pct + "% of desired amount";
    } else {
      cls = "good"; label = "✓ Eligible"; note = "Enter desired amount to compare"; pct = 100;
    }

    setResult({ serviceable, maxAmt, pct: want > 0 ? pct : pct, cls, label, note });
  };

  return (
    <div className="card reveal">
      <div className="icon-chip"><Icon name="verify" strokeWidth={2} /></div>
      <h3 style={{ fontSize: 19, marginBottom: 6 }}>Loan Eligibility Checker</h3>
      <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 18 }}>
        Get an indicative estimate of how much you may be eligible to borrow.
      </p>
      <div className="form-grid" style={{ gridTemplateColumns: "1fr" }}>
        <div className="field">
          <label>Monthly Income (₹)</label>
          <input type="number" placeholder="e.g. 60000" min={0} value={income}
            onChange={(e) => { setIncome(e.target.value); setIncomeErr(false); }}
            style={incomeErr ? { borderColor: "var(--err)" } : undefined} />
        </div>
        <div className="field">
          <label>Existing Monthly EMIs (₹)</label>
          <input type="number" placeholder="e.g. 8000" min={0} value={emi}
            onChange={(e) => setEmi(e.target.value)} />
        </div>
        <div className="field">
          <label>Desired Loan Amount (₹)</label>
          <input type="number" placeholder="e.g. 1500000" min={0} value={desired}
            onChange={(e) => setDesired(e.target.value)} />
        </div>
      </div>
      <button type="button" className="btn btn-primary btn-block" style={{ marginTop: 8 }} onClick={check}>
        Check Eligibility
      </button>

      {result && (
        <div className="elig-result">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 18 }}>
            <span className={`elig-verdict ${result.cls}`}>{result.label}</span>
            <span style={{ fontSize: 13, color: "var(--muted)" }}>{result.note}</span>
          </div>
          <div className="elig-bar"><i style={{ width: result.pct + "%" }} /></div>
          <div className="calc-breakdown">
            <div className="bd"><div className="l">Serviceable EMI</div><div className="v">{fmtINR(result.serviceable)}</div></div>
            <div className="bd"><div className="l">Max Eligible Amount</div><div className="v">{fmtINR(result.maxAmt)}</div></div>
          </div>
          <p className="form-note" style={{ marginTop: 12 }}>
            Indicative only — based on a 50% FOIR over a 60-month tenure at ~10.5% p.a. Final eligibility is subject to
            lender criteria, credit score and documentation.
          </p>
        </div>
      )}
    </div>
  );
}
