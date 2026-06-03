import { Suspense } from "react";
import SectionHead from "@/components/SectionHead";
import ApplySection from "@/components/ApplySection";

export const metadata = {
  title: "Apply for a Loan",
  description:
    "Apply for a loan online with True Capital & Advisory. Complete your personal, address, KYC, employment, loan and bank details and upload documents — quick and secure.",
};

export default function ApplyPage() {
  return (
    <div className="section container">
      <SectionHead
        eyebrow="Apply online"
        title={<>Loan <span className="grad">Application</span></>}
        sub="Complete the sections below and upload your documents. Our team will verify your details and guide you through approval."
      />
      <Suspense fallback={<div className="card reveal in">Loading application form…</div>}>
        <ApplySection />
      </Suspense>
    </div>
  );
}
