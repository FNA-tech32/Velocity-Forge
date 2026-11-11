const variants = {
  primary:
    "bg-blue-600 text-white shadow-glow hover:bg-blue-700 focus-visible:ring-blue-600",
  secondary:
    "bg-white text-slate-950 shadow-soft ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:ring-blue-600",
  outline:
    "bg-transparent text-slate-700 ring-1 ring-slate-300 hover:bg-white hover:text-slate-950 focus-visible:ring-blue-600",
  dark:
    "bg-slate-950 text-white shadow-soft hover:bg-slate-800 focus-visible:ring-slate-950",
};

function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variants[variant] ?? variants.primary,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}

export default Button;

