"use client";
import { useSearchParams } from "next/navigation";
import LoanApplicationForm from "./LoanApplicationForm";

export default function ApplySection() {
  const params = useSearchParams();
  const preset = params.get("loan") || "";

  return (
    <div style={{ maxWidth: 860, margin: "0 auto" }}>
      <LoanApplicationForm initialLoan={preset} />
    </div>
  );
}
