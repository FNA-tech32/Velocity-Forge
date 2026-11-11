import SectionHeader from "./SectionHeader.jsx";
import ServiceCard from "./ServiceCard.jsx";
import { services } from "../data/services.js";

function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Our Services"
          title="Digital Solutions Designed to Help Your Business Grow"
          description="From design and branding to marketing and automation, we provide everything your business needs to build a strong online presence."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

