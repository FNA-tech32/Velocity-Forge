import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import BrandLogo from "./BrandLogo.jsx";
import { navigationLinks } from "../data/navigation.js";
import { services } from "../data/services.js";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter / X", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="section-shell py-12 sm:py-14">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <BrandLogo dark showAgency />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300 sm:text-base">
              Velocity Forge helps startups and small businesses grow through
              smart digital design, marketing, and technology solutions.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-label={link.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-blue-600 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a className="text-slate-300 transition hover:text-white" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a className="text-slate-300 transition hover:text-white" href="#services">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-400">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 break-words text-slate-300">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <div className="text-sm">
                  <a href="mailto:contact@velocityforge.com" className="block text-white transition hover:text-cyan-300">
                    contact@velocityforge.com
                  </a>
                  <span className="text-xs text-slate-400">Alt: support@velocityforge.io</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <div className="text-sm">
                  <a href="tel:+15557493820" className="block text-white transition hover:text-cyan-300">
                    +1 (555) 749-3820
                  </a>
                  <span className="text-xs text-slate-400">Alt: +1 (555) 835-6248</span>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <div className="text-sm">
                  <span className="block text-white">San Francisco, CA</span>
                  <span className="text-xs text-slate-400">450 Mission St, Suite 1200</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          © 2026 Velocity Forge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
