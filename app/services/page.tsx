import type { Metadata } from "next";
import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AlgoraLabs offers web development, ERP solutions, digital marketing, SEO, AI agents, VPS solutions, and IT consulting — affordable and high-quality for global clients.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <span className="inline-block text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
              What We Offer
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Every service your<br />
              <span className="gradient-text">digital business needs</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
              From your first website to enterprise-grade systems and AI automation — we've got you covered.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
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
        </div>
      </section>

      {/* Process callout */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: "Discovery Call", desc: "Free 30-min consultation to understand your needs.", num: "01" },
              { label: "Custom Proposal", desc: "Clear scope, timeline, and pricing — no surprises.", num: "02" },
              { label: "Execution", desc: "We build, test, and deliver on schedule.", num: "03" },
            ].map((item) => (
              <FadeIn key={item.num} delay={Number(item.num) * 0.08}>
                <div className="p-8 bg-white rounded-3xl border border-gray-100 hover:border-emerald-200 transition-all duration-300">
                  <span className="text-5xl font-display font-bold text-emerald-100">{item.num}</span>
                  <h3 className="font-display font-semibold text-gray-900 text-xl mt-2 mb-3">{item.label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-4xl font-bold text-white mb-5">
              Not sure where to start?
            </h2>
            <p className="text-gray-400 mb-8">Let's talk. A 30-minute call can clarify everything.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5"
            >
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
