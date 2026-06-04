"use client";
import { useState } from "react";
import Icon from "./Icon";
import DocumentUpload from "./DocumentUpload";
import { useLeads } from "@/lib/LeadContext";
import { ALL_LOANS, fmtINR, COMPANY } from "@/lib/data";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PAN_RE = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

// Front-end validation for a single field (req + format).
function check(field, raw) {
  const val = (raw || "").trim();
  if (field.req && val === "") return false;
  if (val === "") return true; // optional + empty is fine
  switch (field.vtype) {
    case "name": return val.length >= 2;
    case "mobile": return /^[6-9]\d{9}$/.test(val);
    case "email": return EMAIL_RE.test(val);
    case "pin": return /^\d{6}$/.test(val);
    case "aadhaar": return /^\d{12}$/.test(val);
    case "pan": return PAN_RE.test(val);
    case "ifsc": return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(val);
    case "required": return val !== "";
    default: return true;
  }
}

const SECTIONS = [
  {
    title: "Personal Details", icon: "user",
    fields: [
      { name: "firstName", label: "First Name", req: true, vtype: "name", placeholder: "First name" },
      { name: "lastName", label: "Last Name", req: true, vtype: "name", placeholder: "Last name" },
      { name: "fatherName", label: "Father's Name", placeholder: "Father's name" },
      { name: "dob", label: "Date of Birth", type: "date" },
      { name: "gender", label: "Gender", options: ["Male", "Female", "Other"] },
      { name: "mobile", label: "Mobile Number", req: true, vtype: "mobile", type: "tel", placeholder: "10-digit mobile" },
      { name: "email", label: "Email", vtype: "email", type: "email", placeholder: "you@example.com", full: true },
    ],
  },
  {
    title: "Address Details", icon: "pin",
    fields: [
      { name: "currentAddress", label: "Current Address", type: "textarea", full: true, placeholder: "House no., street, locality…" },
      { name: "permanentAddress", label: "Permanent Address", type: "textarea", full: true, placeholder: "Permanent address" },
      { name: "city", label: "City", placeholder: "e.g. Haridwar" },
      { name: "state", label: "State", placeholder: "e.g. Uttarakhand" },
      { name: "pin", label: "PIN Code", vtype: "pin", placeholder: "6-digit PIN" },
    ],
  },
  {
    title: "KYC Details", icon: "verify",
    fields: [
      { name: "aadhaar", label: "Aadhaar Number", vtype: "aadhaar", placeholder: "12-digit Aadhaar" },
      { name: "pan", label: "PAN Number", vtype: "pan", placeholder: "ABCDE1234F" },
    ],
    note: "Upload Aadhaar & PAN in the Documents section below.",
  },
  {
    title: "Employment Details", icon: "briefcase",
    fields: [
      { name: "empType", label: "Employment Type", options: ["Salaried", "Self-Employed", "Business", "Other"] },
      { name: "company", label: "Company / Business Name", placeholder: "Employer or business name" },
      { name: "income", label: "Monthly Income (₹)", type: "number", placeholder: "e.g. 60000" },
    ],
  },
  {
    title: "Loan Details", icon: "cash",
    fields: [
      { name: "loanType", label: "Loan Type", req: true, vtype: "required", loans: true, placeholder: "Select loan type…" },
      { name: "loanAmount", label: "Loan Amount (₹)", type: "number", placeholder: "e.g. 1500000" },
      { name: "tenure", label: "Tenure (months)", type: "number", placeholder: "e.g. 60" },
      { name: "purpose", label: "Purpose of Loan", type: "textarea", full: true, placeholder: "Briefly describe the purpose" },
    ],
  },
  {
    title: "Bank Details", icon: "bank",
    fields: [
      { name: "bankName", label: "Bank Name", placeholder: "e.g. State Bank of India" },
      { name: "accountNumber", label: "Account Number", placeholder: "Account number" },
      { name: "ifsc", label: "IFSC Code", vtype: "ifsc", placeholder: "e.g. SBIN0001234" },
    ],
    note: "Upload your latest bank statement & income documents in the Documents section below.",
  },
];

const ALL_FIELDS = SECTIONS.flatMap((s) => s.fields);

export default function LoanApplicationForm({ initialLoan = "" }) {
  const { addLead } = useLeads();
  const [values, setValues] = useState(() => {
    const init = Object.fromEntries(ALL_FIELDS.map((f) => [f.name, ""]));
    if (initialLoan) init.loanType = initialLoan;
    return init;
  });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const transform = (field, v) => {
    if (field.vtype === "mobile") return v.replace(/\D/g, "").slice(0, 10);
    if (field.vtype === "aadhaar") return v.replace(/\D/g, "").slice(0, 12);
    if (field.vtype === "pin") return v.replace(/\D/g, "").slice(0, 6);
    if (field.vtype === "pan") return v.toUpperCase().slice(0, 10);
    if (field.vtype === "ifsc") return v.toUpperCase().slice(0, 11);
    return v;
  };

  const setVal = (field, raw) => {
    const v = transform(field, raw);
    setValues((s) => ({ ...s, [field.name]: v }));
    if (errors[field.name]) setErrors((e) => ({ ...e, [field.name]: !check(field, v) }));
  };

  const onBlur = (field) => setErrors((e) => ({ ...e, [field.name]: !check(field, values[field.name]) }));

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    let ok = true;
    ALL_FIELDS.forEach((f) => {
      const bad = !check(f, values[f.name]);
      errs[f.name] = bad;
      if (bad) ok = false;
    });
    setErrors(errs);
    if (!ok) {
      const firstBad = ALL_FIELDS.find((f) => errs[f.name]);
      const el = firstBad && document.querySelector(`[name="${firstBad.name}"]`);
      if (el) { el.scrollIntoView({ behavior: "smooth", block: "center" }); el.focus({ preventScroll: true }); }
      return;
    }
    addLead({
      name: `${values.firstName} ${values.lastName}`.trim() || "—",
      mobile: values.mobile || "—",
      source: "Loan Application",
      loanType: values.loanType || "General Enquiry",
      amount: values.loanAmount ? fmtINR(Number(values.loanAmount)) : "—",
    });
    // TODO (backend phase): POST full application + uploaded files to API, trigger OTP/email
    // verification, run eligibility + CIBIL check, push to CRM. See ROADMAP.md.
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (done) {
    return (
      <div className="form-success">
        <div className="check"><Icon name="check" strokeWidth={2.5} /></div>
        <h3>Application submitted</h3>
        <p>Thank you! Your loan application has been received. Our team will verify your details and contact you shortly with the next steps.</p>
        <a href={`https://wa.me/${COMPANY.whatsappIntl}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm" style={{ marginTop: 16 }}>
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit}>
      {SECTIONS.map((section, si) => (
        <div key={section.title} className="card reveal" style={{ marginBottom: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <div className="icon-chip" style={{ marginBottom: 0, width: 42, height: 42 }}><Icon name={section.icon} /></div>
            <h3 style={{ fontSize: 18 }}>
              <span style={{ color: "var(--muted-2)", fontFamily: "var(--font-head)" }}>{si + 1}. </span>
              {section.title}
            </h3>
          </div>
          <div className="form-grid">
            {section.fields.map((f) => {
              const options = f.loans ? ALL_LOANS : f.options;
              return (
                <div key={f.name} className={`field${f.full ? " full" : ""}${errors[f.name] ? " invalid" : ""}`}>
                  <label>{f.label} {f.req && <span className="req">*</span>}</label>
                  {options ? (
                    <select name={f.name} value={values[f.name]} onChange={(e) => setVal(f, e.target.value)} onBlur={() => onBlur(f)}>
                      <option value="">{f.placeholder || "Select…"}</option>
                      {options.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  ) : f.type === "textarea" ? (
                    <textarea name={f.name} placeholder={f.placeholder} value={values[f.name]} onChange={(e) => setVal(f, e.target.value)} onBlur={() => onBlur(f)} />
                  ) : (
                    <input type={f.type || "text"} name={f.name} placeholder={f.placeholder}
                      value={values[f.name]} onChange={(e) => setVal(f, e.target.value)} onBlur={() => onBlur(f)} />
                  )}
                  <span className="err-msg">Please enter a valid {f.label.toLowerCase()}.</span>
                </div>
              );
            })}
          </div>
          {section.note && <p className="form-note" style={{ marginTop: 14 }}>{section.note}</p>}
        </div>
      ))}

      {/* Documents */}
      <div style={{ marginBottom: 22 }}>
        <DocumentUpload />
      </div>

      <div className="card reveal">
        <button type="submit" className="btn btn-primary btn-block">Submit Loan Application</button>
        <p className="form-note" style={{ marginTop: 12 }}>
          By submitting, you agree to our Privacy Policy and consent to be contacted by True Capital &amp; Advisory and
          its lending partners. Approval is subject to lender eligibility criteria.
        </p>
      </div>
    </form>
  );
}
