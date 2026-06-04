"use client";
import { useState } from "react";
import Icon from "./Icon";
import { useLeads } from "@/lib/LeadContext";
import { validate } from "./LeadForm";

const PAN_RE = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

export default function CibilCheck() {
  const { addLead } = useLeads();
  const [v, setV] = useState({ name: "", mobile: "", pan: "", dob: "" });
  const [errors, setErrors] = useState({});
  const [consent, setConsent] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k, val) => {
    if (k === "mobile") val = val.replace(/\D/g, "").slice(0, 10);
    if (k === "pan") val = val.toUpperCase().slice(0, 10);
    setV((s) => ({ ...s, [k]: val }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: false }));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = {
      name: !validate("name", v.name),
      mobile: !validate("mobile", v.mobile),
      pan: !PAN_RE.test(v.pan),
      consent: !consent,
    };
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;

    addLead({
      name: v.name,
      mobile: v.mobile,
      source: "CIBIL Check",
      loanType: "Credit Score Enquiry",
      amount: "—",
    });

    // TODO: integrate a licensed CIBIL / credit-bureau API here.
    //   const res = await fetch('/api/cibil', { method:'POST', body: JSON.stringify(v) });
    //   Requires a backend + bureau credentials + verified user consent.
    setDone(true);
  };

  if (done) {
    return (
      <div className="form-success">
        <div className="check"><Icon name="check" strokeWidth={2.5} /></div>
        <h3>Request received</h3>
        <p>
          Thanks! We&apos;ve received your credit-score request. Our team will retrieve your indicative CIBIL score and
          call you shortly with the result and best-fit loan options.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={submit}>
      <div className="form-grid">
        <div className={`field full${errors.name ? " invalid" : ""}`}>
          <label>Full Name <span className="req">*</span></label>
          <input type="text" placeholder="As per PAN" value={v.name} onChange={(e) => set("name", e.target.value)} />
          <span className="err-msg">Please enter your name.</span>
        </div>
        <div className={`field${errors.mobile ? " invalid" : ""}`}>
          <label>Mobile <span className="req">*</span></label>
          <input type="tel" placeholder="10-digit mobile" maxLength={10} value={v.mobile} onChange={(e) => set("mobile", e.target.value)} />
          <span className="err-msg">Enter a valid 10-digit mobile.</span>
        </div>
        <div className={`field${errors.pan ? " invalid" : ""}`}>
          <label>PAN Number <span className="req">*</span></label>
          <input type="text" placeholder="ABCDE1234F" maxLength={10} value={v.pan} onChange={(e) => set("pan", e.target.value)} style={{ textTransform: "uppercase" }} />
          <span className="err-msg">Enter a valid 10-character PAN.</span>
        </div>
        <div className="field full">
          <label>Date of Birth</label>
          <input type="date" value={v.dob} onChange={(e) => set("dob", e.target.value)} />
        </div>
        <div className={`field full${errors.consent ? " invalid" : ""}`}>
          <label style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer", fontWeight: 400, color: "var(--muted)" }}>
            <input type="checkbox" checked={consent} onChange={(e) => { setConsent(e.target.checked); setErrors((er) => ({ ...er, consent: false })); }} style={{ width: "auto", marginTop: 3 }} />
            <span>I authorise True Capital &amp; Advisory and its partners to retrieve my credit information from licensed credit bureaus for this enquiry. <span className="req">*</span></span>
          </label>
          <span className="err-msg">Please provide consent to proceed.</span>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: 16 }}>
        Check My CIBIL Score
      </button>
      <p className="form-note">
        This is a soft enquiry and does not affect your credit score. Result is indicative; final eligibility is subject
        to lender criteria.
      </p>
    </form>
  );
}
