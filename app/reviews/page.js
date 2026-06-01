import SectionHead from "@/components/SectionHead";
import Reviews from "@/components/Reviews";

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
        title={<>Rated &amp; <span className="grad">trusted</span> by clients</>}
        sub="Real feedback from individuals and businesses we've helped across Uttarakhand and beyond."
      />
      <Reviews />
    </div>
  );
}
