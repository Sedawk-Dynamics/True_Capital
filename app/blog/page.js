import SectionHead from "@/components/SectionHead";
import BlogList from "@/components/BlogList";

export const metadata = {
  title: "Blog — Loan Guides, Finance & Credit Tips",
  description:
    "Practical, India-relevant advice on home loans, MSME finance, credit scores, balance transfers and insurance from the True Capital advisory team.",
};

export default function BlogPage() {
  return (
    <div className="section container">
      <SectionHead
        eyebrow="Insights"
        title={<>Loan guides, finance &amp; <span className="grad">credit tips</span></>}
        sub="Practical, India-relevant advice to help you borrow smarter and build a healthy credit profile."
      />
      <BlogList />
    </div>
  );
}
