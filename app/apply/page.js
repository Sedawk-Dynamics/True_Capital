import { Suspense } from "react";
import SectionHead from "@/components/SectionHead";
import ApplySection from "@/components/ApplySection";

export const metadata = {
  title: "Apply Online",
  description:
    "Apply for a loan online with True Capital & Advisory. Fill the application, check your indicative eligibility, and upload documents — quick and secure.",
};

export default function ApplyPage() {
  return (
    <div className="section container">
      <SectionHead
        eyebrow="Apply online"
        title={<>Start your <span className="grad">application</span></>}
        sub="Fill in your details, check your indicative eligibility, and upload documents — all in one place."
      />
      <Suspense fallback={<div className="card reveal in">Loading application form…</div>}>
        <ApplySection />
      </Suspense>
    </div>
  );
}
