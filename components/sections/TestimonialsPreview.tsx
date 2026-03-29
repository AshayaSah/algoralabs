import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import TestimonialCard from "@/components/TestimonialCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

export default function TestimonialsPreview() {
  const preview = testimonials.slice(0, 3);
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
            Client Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Trusted by teams <span className="gradient-text">worldwide</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            From startups to scaling businesses — here's what our clients say.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {preview.map((t) => (
            <StaggerItem key={t.id}>
              <TestimonialCard {...t} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.2} className="text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-sm font-semibold transition-colors"
          >
            Read all testimonials
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
