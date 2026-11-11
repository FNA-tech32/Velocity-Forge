import { ArrowUpRight } from "lucide-react";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-6 flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition duration-300 group-hover:text-blue-600" />
      </div>
      <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
    </article>
  );
}

export default ServiceCard;

