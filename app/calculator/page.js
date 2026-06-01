import SectionHead from "@/components/SectionHead";
import EmiCalculator from "@/components/EmiCalculator";

export const metadata = {
  title: "EMI Calculator",
  description:
    "Free EMI calculator — estimate your monthly instalment, total interest and total payable amount for home, personal, business and other loans instantly.",
};

export default function CalculatorPage() {
  return (
    <div className="section container">
      <SectionHead
        eyebrow="Plan ahead"
        title={<>EMI <span className="grad">Calculator</span></>}
        sub="Estimate your monthly instalment, total interest and total payable amount instantly."
      />
      <EmiCalculator />
    </div>
  );
}
