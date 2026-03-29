"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/Motion";

export default function ServicesPreview() {
  const preview = services.slice(0, 6);
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Services built for <span className="gradient-text">scale</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            From idea to deployment — we cover the full digital spectrum.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {preview.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                tagline={service.tagline}
                description={service.description}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.2} className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
