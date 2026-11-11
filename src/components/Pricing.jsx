import PricingCard from "./PricingCard.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { pricingPlans } from "../data/pricingPlans.js";

function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Pricing Plans"
          title="Choose the Right Package for Your Business"
          description="Flexible pricing plans designed for startups, growing businesses, and established companies."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

