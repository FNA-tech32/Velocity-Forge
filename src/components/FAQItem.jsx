import { Minus, Plus } from "lucide-react";

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="first:rounded-t-3xl last:rounded-b-3xl">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:gap-5 sm:px-7"
      >
        <span className="text-base font-bold leading-6 text-slate-950 sm:text-lg">{faq.question}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 sm:h-9 sm:w-9">
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-6 leading-7 text-slate-600 sm:px-7">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;

