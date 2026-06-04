import LeadForm from "./LeadForm";

// "Become a DSA Partner" registration form. `product` pre-selects the interest.
export default function DsaRegister({ product = "" }) {
  return (
    <div className="card reveal" id="register" style={{ scrollMarginTop: 90 }}>
      <h3 style={{ fontSize: 21, marginBottom: 6 }}>Become a DSA Partner</h3>
      <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 20 }}>
        Register below and our team will help you get started — onboarding, training and payouts included.
      </p>
      <LeadForm
        source="DSA Registration"
        submitLabel="Register as DSA Partner"
        successTitle="Registration received"
        successMsg="Welcome aboard! Our partnerships team will contact you shortly to complete your DSA onboarding."
        fields={[
          { name: "name", label: "Full Name", validate: "name", placeholder: "Your full name", error: "Please enter your name." },
          { name: "mobile", label: "Mobile Number", validate: "mobile", type: "tel", placeholder: "10-digit mobile", error: "Enter a valid 10-digit mobile." },
          { name: "city", label: "City", validate: "optional", placeholder: "e.g. Haridwar" },
          { name: "loanType", label: "Interested Product", validate: "required", loans: true, placeholder: "Select a product…", error: "Please select a product." },
          { name: "occupation", label: "Current Occupation", validate: "optional", options: ["Loan Agent / DSA", "Ex-Banker", "CA / Financial Professional", "Insurance Advisor", "Business", "Student", "Other"], placeholder: "Select…" },
          { name: "remarks", label: "Remarks", validate: "optional", type: "textarea", placeholder: "Anything you'd like us to know…", full: true },
        ]}
        initialValues={{ loanType: product }}
      />
    </div>
  );
}
