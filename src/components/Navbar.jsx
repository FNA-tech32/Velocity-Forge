import { Menu, X } from "lucide-react";
import { useState } from "react";
import BrandLogo from "./BrandLogo.jsx";
import Button from "./Button.jsx";
import { navigationLinks } from "../data/navigation.js";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between gap-4 sm:h-20 sm:gap-6">
        <a href="#home" className="flex min-w-0 items-center gap-3" onClick={closeMenu}>
          <BrandLogo compact />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-700"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="#contact">Book a Call</Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-blue-200 hover:text-blue-700 sm:h-11 sm:w-11 lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-shell flex flex-col gap-2 py-4 shadow-soft">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
            >
              {link.name}
            </a>
          ))}
          <Button href="#contact" className="mt-2 w-full" onClick={closeMenu}>
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

