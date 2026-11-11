import { ArrowRight, BarChart3, CheckCircle2, LineChart, Sparkles } from "lucide-react";
import Button from "./Button.jsx";

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "4.9/5", label: "Average Rating" },
];

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-xl" aria-hidden="true">
      <div className="absolute -left-3 top-10 h-20 w-20 rounded-full bg-cyan-200/60 blur-2xl sm:-left-4 sm:h-24 sm:w-24" />
      <div className="absolute -right-2 bottom-10 h-24 w-24 rounded-full bg-emerald-200/60 blur-2xl sm:h-32 sm:w-32" />
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2.5 shadow-glow sm:rounded-[2rem] sm:p-4">
        <div className="rounded-[1.35rem] bg-slate-950 p-3 text-white sm:rounded-[1.5rem] sm:p-4">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 sm:pb-4">
            <div>
              <p className="text-[11px] text-cyan-200 sm:text-xs">Growth Dashboard</p>
              <p className="mt-1 text-base font-semibold sm:text-lg">Velocity Forge Studio</p>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-200 sm:px-3 sm:text-xs">
              Live
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 py-4 sm:gap-3 sm:py-5">
            {[
              ["Traffic", "+42%"],
              ["Leads", "+31%"],
              ["Revenue", "+27%"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-white/10 p-2 ring-1 ring-white/10 sm:rounded-2xl sm:p-3">
                <p className="text-[10px] text-slate-300 sm:text-xs">{label}</p>
                <p className="mt-1 text-lg font-bold sm:mt-2 sm:text-2xl">{value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-white p-3 text-slate-950 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold sm:text-sm">Campaign Performance</p>
                <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">Last 30 days</p>
              </div>
              <LineChart className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />
            </div>
            <div className="mt-4 flex h-20 items-end gap-1.5 sm:mt-5 sm:h-28 sm:gap-2">
              {[42, 64, 50, 76, 68, 88, 80, 96].map((height, index) => (
                <div
                  key={height + index}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-400 sm:rounded-t-lg"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 hidden -translate-x-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft sm:block">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-950">Qualified lead</p>
              <p className="text-xs text-slate-500">Booked a strategy call</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.10),_transparent_34%),linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]"
    >
      <div className="section-shell grid items-center gap-10 py-10 sm:gap-12 sm:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
        <div className="text-center lg:text-left">
          <div className="mx-auto inline-flex max-w-full items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm sm:text-sm lg:mx-0">
            <Sparkles className="h-4 w-4 shrink-0" />
            <span className="truncate">Digital growth partner for modern businesses</span>
          </div>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:mt-6 sm:text-5xl lg:mx-0 lg:text-6xl">
            Grow Your Business with Smart Digital Solutions
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
            Velocity Forge helps startups and small businesses build powerful
            online brands through modern design, marketing, and technology.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="#contact" className="w-full sm:w-auto">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="#services" variant="secondary" className="w-full sm:w-auto">
              Explore Services
            </Button>
          </div>
          <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:mx-0">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm">
                <dt className="text-sm text-slate-500">{stat.label}</dt>
                <dd className="mt-1 flex items-center gap-2 text-xl font-bold text-slate-950 sm:text-2xl">
                  <BarChart3 className="h-5 w-5 text-cyan-600" />
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

export default Hero;
