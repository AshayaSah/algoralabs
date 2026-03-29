import type { Metadata } from "next";
import { careers } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join AlgoraLabs — an emerging IT company from Kathmandu, Nepal. Open roles in full stack development, UI/UX, SEO, and AI engineering. Remote-friendly.",
};

const perks = [
  { emoji: "🌍", title: "Remote-friendly", desc: "Work from anywhere in Nepal or globally." },
  { emoji: "📈", title: "Growth path", desc: "Clear growth ladders and mentorship." },
  { emoji: "💡", title: "Real impact", desc: "Work on live projects for global clients." },
  { emoji: "🕐", title: "Flexible hours", desc: "Async-first culture. Own your schedule." },
  { emoji: "💰", title: "Competitive pay", desc: "Market rates + performance bonuses." },
  { emoji: "🤝", title: "Tight-knit team", desc: "Small team, huge ownership." },
];

export default function CareersPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                We're actively hiring
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Build something
              <br />
              <span className="gradient-text">worth building.</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-xl mx-auto">
              Join a lean, ambitious team shipping real products for real global clients — from right here in Kathmandu.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-900">Why AlgoraLabs?</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {perks.map((perk) => (
              <StaggerItem key={perk.title}>
                <div className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
                  <div className="text-2xl flex-shrink-0">{perk.emoji}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{perk.title}</h3>
                    <p className="text-sm text-gray-500">{perk.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 section-gradient">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="mb-10">
            <span className="inline-block text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3">
              Open Roles
            </span>
            <h2 className="font-display text-3xl font-bold text-gray-900">
              {careers.length} positions available
            </h2>
          </FadeIn>

          <div className="space-y-3">
            {careers.map((job, i) => (
              <FadeIn key={job.id} delay={i * 0.08}>
                <div className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/8 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
                          <Briefcase className="w-3 h-3" />
                          {job.department}
                        </span>
                        <span className="text-xs text-gray-400">Posted {job.posted}</span>
                      </div>
                      <h3 className="font-display font-semibold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-emerald-500" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:gap-3 transition-all">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* No role match */}
          <FadeIn delay={0.3} className="mt-8 p-8 bg-white rounded-3xl border border-dashed border-gray-200 text-center">
            <p className="text-gray-500 mb-2">Don't see a role that fits?</p>
            <a
              href="mailto:careers@algoralabs.site"
              className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm"
            >
              Send us your CV at careers@algoralabs.site →
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
