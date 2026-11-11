import { Star } from "lucide-react";

function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex gap-1 text-amber-400" aria-label={`${testimonial.rating} star rating`}>
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-5 leading-7 text-slate-700">"{testimonial.review}"</p>
      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-sm font-bold text-white">
          {testimonial.avatar}
        </div>
        <div>
          <h3 className="font-bold text-slate-950">{testimonial.name}</h3>
          <p className="text-sm text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;

