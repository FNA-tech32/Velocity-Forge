import SectionHeader from "./SectionHeader.jsx";
import { processSteps } from "../data/processSteps.js";

function HowItWorks() {
  return (
    <section id="process" className="section-padding bg-slate-50">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Our Process"
          title="Simple, Strategic, and Result-Focused"
          description="We follow a clear process to understand your goals, build the right solution, and help your business grow with confidence."
        />
        <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
          <div className="absolute left-0 right-0 top-20 hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent lg:block" />
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.id}
                className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                  {step.step}
                </span>
                <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

