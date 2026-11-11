function BrandMark({ className = "" }) {
  return (
    <span
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-400 shadow-sm ${className}`}
      aria-hidden="true"
    >
      <svg
        className="h-[72%] w-[72%]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 18L28 48H36L50 18H41.5L32 38.5L22.5 18H14Z"
          fill="white"
        />
        <path
          d="M33 27L47 27L44 32L35 32L33 27Z"
          fill="#A7F3D0"
        />
        <circle cx="49" cy="18" r="2.5" fill="#67E8F9" />
      </svg>
      <span className="absolute left-2 top-2 h-2 w-2 rounded-full bg-white/70" />
    </span>
  );
}

function BrandLogo({ dark = false, showAgency = false, compact = false, className = "" }) {
  return (
    <span className={`inline-flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}>
      <BrandMark className={compact ? "h-10 w-10 sm:h-11 sm:w-11" : "h-11 w-11"} />
      <span className="leading-tight">
        <span
          className={`block text-base font-extrabold tracking-tight sm:text-lg ${
            dark ? "text-white" : "text-slate-950"
          }`}
        >
          Velocity Forge
        </span>
        {showAgency ? (
          <span className={dark ? "text-xs font-semibold text-slate-400" : "text-xs font-semibold text-slate-500"}>
            Digital Growth Agency
          </span>
        ) : null}
      </span>
    </span>
  );
}

export { BrandMark };
export default BrandLogo;
