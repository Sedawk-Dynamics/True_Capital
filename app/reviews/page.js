import SectionHead from "@/components/SectionHead";
import Reviews from "@/components/Reviews";
import { COMPANY } from "@/lib/data";

export const metadata = {
  title: "Customer Reviews",
  description:
    "Read reviews from individuals and businesses across Uttarakhand and beyond who trust True Capital & Advisory for their loan and financial needs.",
};

export default function ReviewsPage() {
  return (
    <div className="section container">
      <SectionHead
        eyebrow="Customer reviews"
        title={<>Rated &amp; <span className="grad">Trusted</span> by Clients</>}
        sub="Real feedback from individuals and businesses we've helped across Uttarakhand and beyond."
      />
      <div className="center reveal" style={{ marginBottom: 40 }}>
        <a href={COMPANY.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <span style={{ color: "var(--star)", fontSize: 18 }}>★</span> Rate us on Google
        </a>
      </div>
      <Reviews />
    </div>
  );
}
