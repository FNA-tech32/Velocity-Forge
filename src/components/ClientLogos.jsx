import { clients } from "../data/clients.js";

function ClientLogos() {
  return (
    <section className="border-y border-slate-200 bg-white py-8 sm:py-10">
      <div className="section-shell">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
          Trusted by Growing Brands
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex min-h-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-3 text-center text-xs font-bold text-slate-500 transition duration-200 hover:border-blue-200 hover:bg-white hover:text-blue-700 sm:min-h-16 sm:px-4 sm:text-sm"
            >
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientLogos;

