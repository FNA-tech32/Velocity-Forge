import { useState } from "react";
import FAQItem from "./FAQItem.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { faqs } from "../data/faqs.js";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Here are answers to some common questions clients ask before starting a project."
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

