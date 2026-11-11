import SectionHeader from "./SectionHeader.jsx";
import TestimonialCard from "./TestimonialCard.jsx";
import { testimonials } from "../data/testimonials.js";

function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-slate-50">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Client Feedback"
          title="What Our Clients Say About Us"
          description="We work with ambitious businesses that want professional design, clear communication, and measurable results."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

