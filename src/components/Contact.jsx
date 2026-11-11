import { ArrowRight, CheckCircle2, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";
import Button from "./Button.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { services } from "../data/services.js";

const initialFormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

function validateForm(formData) {
  const nextErrors = {};

  if (!formData.name.trim()) {
    nextErrors.name = "Full name is required.";
  }

  if (!formData.email.trim()) {
    nextErrors.email = "Email address is required.";
  } else if (!formData.email.includes("@")) {
    nextErrors.email = "Please enter a valid email address.";
  }

  if (!formData.message.trim()) {
    nextErrors.message = "Project message is required.";
  }

  return nextErrors;
}

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setSuccess(false);
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setFormData(initialFormData);
  };

  return (
    <section id="contact" className="section-padding bg-slate-950 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Contact Us"
            title="Ready to Start Your Project?"
            description="Tell us about your business and project idea. We will get back to you with the best solution."
            className="[&>h2]:text-white [&>p]:text-slate-300 [&>span]:bg-white/10 [&>span]:text-cyan-200"
          />
          <div className="mt-8 grid gap-3.5 sm:mt-10 sm:gap-4">
            {[
              {
                icon: Mail,
                label: "Primary Email",
                value: "contact@velocityforge.com",
                subtext: "Project inquiries & consultations",
                href: "mailto:contact@velocityforge.com",
              },
              {
                icon: Mail,
                label: "Alternative / Support Email",
                value: "support@velocityforge.io",
                subtext: "Technical support & urgent requests",
                href: "mailto:support@velocityforge.io",
              },
              {
                icon: Phone,
                label: "Primary Phone",
                value: "+1 (555) 749-3820",
                subtext: "Mon – Fri: 9:00 AM – 6:00 PM PST",
                href: "tel:+15557493820",
              },
              {
                icon: Phone,
                label: "Alternative Hotline",
                value: "+1 (555) 835-6248",
                subtext: "24/7 Client hotline & escalations",
                href: "tel:+15558356248",
              },
              {
                icon: MapPin,
                label: "Headquarters",
                value: "450 Mission St, Suite 1200",
                subtext: "San Francisco, CA 94105, USA",
              },
              {
                icon: MessageSquare,
                label: "Response Guarantee",
                value: "Within 24 business hours",
                subtext: "Dedicated strategy lead assigned",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-3 rounded-2xl bg-white/10 p-3.5 transition hover:bg-white/15 sm:gap-4 sm:p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-slate-950 sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-0.5 block break-words font-semibold text-white transition hover:text-cyan-300">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 break-words font-semibold text-white">{item.value}</p>
                    )}
                    {item.subtext ? <p className="mt-0.5 text-xs text-slate-300">{item.subtext}</p> : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-3xl bg-white p-5 text-slate-950 shadow-glow sm:rounded-[2rem] sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Full Name</span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-2 w-full rounded-2xl border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${
                  errors.name ? "border-red-300" : "border-slate-200"
                }`}
                placeholder="Sarah Mitchell"
              />
              {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name}</p> : null}
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Email Address</span>
              <input
                type="text"
                inputMode="email"
                autoComplete="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-2 w-full rounded-2xl border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${
                  errors.email ? "border-red-300" : "border-slate-200"
                }`}
                placeholder="sarah@example.com"
              />
              {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email}</p> : null}
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Company Name</span>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                placeholder="BrightLabs"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Selected Service</span>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Choose a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-slate-700">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`mt-2 w-full resize-none rounded-2xl border px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${
                errors.message ? "border-red-300" : "border-slate-200"
              }`}
              placeholder="Tell us about your project goals..."
            />
            {errors.message ? (
              <p className="mt-2 text-sm text-red-600">{errors.message}</p>
            ) : null}
          </label>

          {success ? (
            <div className="mt-5 flex gap-3 rounded-2xl bg-emerald-50 p-4 text-emerald-800">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
              <p className="text-sm font-semibold">
                Thank you! Your message has been received. We will contact you soon.
              </p>
            </div>
          ) : null}

          <Button type="submit" className="mt-6 w-full">
            Submit Project Inquiry
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

