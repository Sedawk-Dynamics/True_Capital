"use client";
import { useSearchParams } from "next/navigation";
import LeadForm from "./LeadForm";
import EligibilityChecker from "./EligibilityChecker";
import DocumentUpload from "./DocumentUpload";
import { COMPANY } from "@/lib/data";

const APPLY_FIELDS = [
  { name: "name", label: "Full Name", validate: "name", placeholder: "Your full name", error: "Please enter your name." },
  { name: "mobile", label: "Mobile Number", validate: "mobile", type: "tel", placeholder: "10-digit mobile", error: "Enter a valid 10-digit mobile number." },
  { name: "city", label: "City", validate: "optional", placeholder: "e.g. Haridwar" },
  { name: "loanType", label: "Loan Type", validate: "required", loans: true, placeholder: "Select loan type…", error: "Please select a loan type." },
  { name: "income", label: "Monthly Income (₹)", validate: "number", type: "number", placeholder: "e.g. 60000", error: "Enter a valid amount." },
  { name: "amount", label: "Loan Amount Required (₹)", validate: "number", type: "number", placeholder: "e.g. 1500000", error: "Enter a valid amount." },
  { name: "occupation", label: "Occupation", validate: "optional", options: ["Salaried", "Self-Employed", "Business", "Other"], placeholder: "Select…" },
  { name: "contactTime", label: "Preferred Contact Time", validate: "optional", options: ["Morning (9–12)", "Afternoon (12–4)", "Evening (4–6)"], placeholder: "Anytime" },
  { name: "remarks", label: "Remarks", validate: "optional", type: "textarea", placeholder: "Tell us anything that helps us serve you better…", full: true },
];

export default function ApplySection() {
  const params = useSearchParams();
  const preset = params.get("loan") || "";

  const successExtra = (
    <a href={`https://wa.me/${COMPANY.whatsappIntl}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm" style={{ marginTop: 16 }}>
      Chat on WhatsApp
    </a>
  );

  return (
    <div className="grid g-2" style={{ alignItems: "start", gap: 26 }}>
      {/* Application form */}
      <div className="card reveal">
        <h3 style={{ fontSize: 21, marginBottom: 6 }}>Loan Application Form</h3>
        <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 22 }}>
          Fields marked <span style={{ color: "var(--blue-2)" }}>*</span> are required.
        </p>
        <LeadForm
          source="Application"
          submitLabel="Submit Application"
          successTitle="Application received"
          successMsg="Our team will contact you shortly. You can also reach us on WhatsApp for faster service."
          successExtra={successExtra}
          fields={APPLY_FIELDS}
          initialValues={{ loanType: preset }}
        />
      </div>

      {/* Sidebar */}
      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <EligibilityChecker />
        <DocumentUpload />
      </div>
    </div>
  );
}
