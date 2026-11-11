import { Check } from "lucide-react";
import Button from "./Button.jsx";

function PricingCard({ plan }) {
  return (
    <article
      className={`relative flex rounded-3xl border p-5 transition duration-300 sm:p-6 ${
        plan.popular
          ? "border-blue-500 bg-slate-950 text-white shadow-glow lg:-translate-y-4"
          : "border-slate-200 bg-white text-slate-950 shadow-sm hover:-translate-y-1 hover:shadow-soft"
      }`}
    >
      {plan.popular ? (
        <span className="absolute right-5 top-5 rounded-full bg-cyan-400 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-950 sm:right-6 sm:top-6 sm:text-xs">
          Most Popular
        </span>
      ) : null}
      <div className="flex w-full flex-col">
        <p className={`text-lg font-bold ${plan.popular ? "text-white" : "text-slate-950"}`}>
          {plan.name}
        </p>
        <div className="mt-5 flex items-end gap-1">
          <span className="text-4xl font-bold sm:text-5xl">{plan.price}</span>
          <span className={plan.popular ? "pb-2 text-slate-300" : "pb-2 text-slate-500"}>
            / project
          </span>
        </div>
        <p className={`mt-4 leading-7 ${plan.popular ? "text-slate-300" : "text-slate-600"}`}>
          {plan.description}
        </p>
        <ul className="mt-8 space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  plan.popular ? "bg-emerald-400 text-slate-950" : "bg-emerald-50 text-emerald-600"
                }`}
              >
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className={plan.popular ? "text-slate-200" : "text-slate-600"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <Button
          className="mt-8 w-full"
          href="#contact"
          variant={plan.popular ? "secondary" : "primary"}
        >
          {plan.cta}
        </Button>
      </div>
    </article>
  );
}

export default PricingCard;

