function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;

