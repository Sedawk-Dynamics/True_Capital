import SectionHead from "@/components/SectionHead";
import { COMPANY } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of True Capital & Advisory Pvt Ltd — how we collect, use, store and protect your personal and financial information.",
};

const SECTIONS = [
  {
    h: "1. Information We Collect",
    p: [
      "We collect information you provide directly to us — such as your name, date of birth, contact number, email, address, employment and income details, KYC documents (Aadhaar, PAN), and bank details — when you submit a loan or partner application, request a callback, use our calculators, or contact us.",
      "We may also collect limited technical data (such as device and browser type) to operate and improve the website.",
    ],
  },
  {
    h: "2. How We Use Your Information",
    p: [
      "Your information is used to assess loan eligibility, process applications, connect you with suitable lending partners (banks/NBFCs), provide advisory services, verify your identity, respond to enquiries, and comply with legal and regulatory obligations.",
      "We do not sell your personal information. We share it only with lending partners and service providers necessary to deliver the service you requested, and only to the extent required.",
    ],
  },
  {
    h: "3. Consent",
    p: [
      "By submitting your details on this website, you consent to being contacted by True Capital & Advisory and its lending partners via phone, SMS, WhatsApp, or email regarding your enquiry — even if you are registered under DND/NDNC.",
    ],
  },
  {
    h: "4. Document & Data Security",
    p: [
      "We apply reasonable technical and organisational measures to protect your data. Uploaded documents are handled confidentially and used solely for processing your application.",
    ],
  },
  {
    h: "5. Credit Information (CIBIL)",
    p: [
      "If you request a credit-score check, you authorise us and our partners to retrieve your credit information from licensed credit bureaus for the purpose of assessing your eligibility. This is a soft enquiry and is used only for the service you requested.",
    ],
  },
  {
    h: "6. Cookies & Analytics",
    p: [
      "We may use cookies and analytics tools to understand site usage and improve your experience. You can control cookies through your browser settings.",
    ],
  },
  {
    h: "7. Your Rights",
    p: [
      "You may request access to, correction of, or deletion of your personal data, and withdraw consent at any time, by contacting us at the details below. Some data may be retained where required by law.",
    ],
  },
  {
    h: "8. Contact Us",
    p: [
      `For any privacy-related queries, write to us at ${COMPANY.email} or call ${COMPANY.phoneDisplay}. Registered office: ${COMPANY.address}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="section container">
      <SectionHead
        eyebrow="Legal"
        title={<>Privacy <span className="grad">Policy</span></>}
        sub="Your privacy matters to us. This policy explains what we collect and how we use and protect it."
      />
      <div className="card reveal" style={{ maxWidth: 860, margin: "0 auto" }}>
        <p style={{ color: "var(--muted-2)", fontSize: 13, marginBottom: 22 }}>Last updated: 2026</p>
        {SECTIONS.map((s) => (
          <div key={s.h} style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>{s.h}</h3>
            {s.p.map((para, i) => (
              <p key={i} style={{ color: "var(--muted)", fontSize: 14.5, marginBottom: 10 }}>{para}</p>
            ))}
          </div>
        ))}
        <p style={{ color: "var(--muted-2)", fontSize: 12.5, marginTop: 8 }}>
          This policy is provided for general information and is indicative. It does not constitute legal advice and may
          be updated from time to time.
        </p>
      </div>
    </div>
  );
}
