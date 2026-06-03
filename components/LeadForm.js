"use client";
import { useState } from "react";
import Icon from "./Icon";
import { useLeads } from "@/lib/LeadContext";
import { ALL_LOANS, fmtINR } from "@/lib/data";

export function validate(type, value) {
  const val = (value || "").trim();
  switch (type) {
    case "optional": return true;
    case "required": return val !== "";
    case "name": return val.length >= 2;
    case "mobile": return /^[6-9]\d{9}$/.test(val);
    case "email": return val !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    case "number": return val === "" ? true : (!isNaN(Number(val)) && Number(val) >= 0);
    default: return true;
  }
}

/**
 * Reusable, validated form.
 * fields: [{ name, label, validate, placeholder?, type?, full?, options?:[], loans?:bool }]
 */
export default function LeadForm({
  fields,
  source,
  submitLabel = "Submit",
  successTitle = "Thank you!",
  successMsg = "Your request is received — our team will contact you shortly.",
  successExtra = null,
  initialValues = {},
}) {
  const { addLead } = useLeads();
  const [values, setValues] = useState(() =>
    Object.fromEntries(fields.map((f) => [f.name, initialValues[f.name] || ""]))
  );
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const setVal = (field, raw) => {
    let v = raw;
    if (field.validate === "mobile") v = v.replace(/\D/g, "").slice(0, 10);
    setValues((s) => ({ ...s, [field.name]: v }));
    if (errors[field.name]) {
      setErrors((e) => ({ ...e, [field.name]: !validate(field.validate, v) }));
    }
  };

  const onBlur = (field) =>
    setErrors((e) => ({ ...e, [field.name]: !validate(field.validate, values[field.name]) }));

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    let ok = true;
    fields.forEach((f) => {
      const bad = !validate(f.validate, values[f.name]);
      errs[f.name] = bad;
      if (bad) ok = false;
    });
    setErrors(errs);
    if (!ok) {
      const firstBad = fields.find((f) => errs[f.name]);
      if (firstBad) {
        const el = document.querySelector(`[name="${firstBad.name}"]`);
        el && el.focus();
      }
      return;
    }
    const fullName =
      values.name ||
      [values.firstName, values.lastName].filter(Boolean).join(" ").trim() ||
      "—";
    addLead({
      name: fullName,
      mobile: values.mobile || "—",
      source,
      loanType: values.loanType || "General Enquiry",
      amount: values.amount ? fmtINR(Number(values.amount)) : "—",
    });
    setDone(true);
    setValues(Object.fromEntries(fields.map((f) => [f.name, ""])));
    setTimeout(() => setDone(false), 9000);
  };

  if (done) {
    return (
      <div className="form-success">
        <div className="check">
          <Icon name="check" strokeWidth={2.5} />
        </div>
        <h3>{successTitle}</h3>
        <p>{successMsg}</p>
        {successExtra}
      </div>
    );
  }

  return (
    <form className="lead-form" noValidate onSubmit={onSubmit}>
      <div className="form-grid">
        {fields.map((f) => {
          const options = f.loans ? ALL_LOANS : f.options;
          return (
            <div key={f.name} className={`field${f.full ? " full" : ""}${errors[f.name] ? " invalid" : ""}`}>
              <label>
                {f.label} {["name", "mobile", "required"].includes(f.validate) && <span className="req">*</span>}
              </label>
              {options ? (
                <select
                  name={f.name}
                  value={values[f.name]}
                  onChange={(e) => setVal(f, e.target.value)}
                  onBlur={() => onBlur(f)}
                >
                  <option value="">{f.placeholder || "Select…"}</option>
                  {options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              ) : f.type === "textarea" ? (
                <textarea
                  name={f.name}
                  placeholder={f.placeholder}
                  value={values[f.name]}
                  onChange={(e) => setVal(f, e.target.value)}
                  onBlur={() => onBlur(f)}
                />
              ) : (
                <input
                  type={f.type || "text"}
                  name={f.name}
                  placeholder={f.placeholder}
                  maxLength={f.validate === "mobile" ? 10 : undefined}
                  value={values[f.name]}
                  onChange={(e) => setVal(f, e.target.value)}
                  onBlur={() => onBlur(f)}
                />
              )}
              <span className="err-msg">{f.error || "Please complete this field."}</span>
            </div>
          );
        })}
      </div>
      <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: 16 }}>
        {submitLabel}
      </button>
      {/* TODO: send lead to CRM / webhook + auto-email notification (see lib/LeadContext.js) */}
    </form>
  );
}
