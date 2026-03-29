import type { Metadata } from "next";
import { testimonials } from "@/lib/data";
import TestimonialCard from "@/components/TestimonialCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what global clients say about AlgoraLabs — from web development to ERP solutions and AI agents. Real results, real relationships.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <span className="inline-block text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
              Client Stories
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Words from those
              <br />
              <span className="gradient-text">who trusted us</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-xl mx-auto">
              Over 30 clients. 15+ countries. Every single one — satisfied.
            </p>
          </FadeIn>

          {/* Overall rating */}
          <FadeIn delay={0.2} className="mt-10 inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
              ))}
            </div>
            <span className="font-display font-bold text-gray-900">5.0</span>
            <span className="text-sm text-gray-500">across all projects</span>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <StaggerItem key={t.id}>
                <TestimonialCard {...t} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust markers */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "30+", label: "Happy Clients" },
              { value: "15+", label: "Countries" },
              { value: "5.0", label: "Average Rating" },
              { value: "100%", label: "Satisfaction Rate" },
            ].map((item) => (
              <div key={item.label} className="text-center p-6 bg-white rounded-3xl border border-gray-100">
                <p className="font-display text-3xl font-bold gradient-text">{item.value}</p>
                <p className="text-sm text-gray-500 mt-1">{item.label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
