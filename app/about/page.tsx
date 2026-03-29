import type { Metadata } from "next";
import { MapPin, Globe, Users, Zap, Shield, Heart } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";

export const metadata: Metadata = {
  title: "About",
  description:
    "AlgoraLabs is an emerging IT company from Kathmandu, Nepal, delivering world-class digital solutions to clients globally. Our mission: premium quality at honest prices.",
};

const milestones = [
  { year: "2024", event: "Founded in Kathmandu, Nepal" },
  { year: "2024", event: "First international client onboarded" },
  { year: "2024", event: "Launched AI Agent services" },
  { year: "2025", event: "50+ projects delivered across 15+ countries" },
];

const values = [
  {
    icon: Zap,
    title: "Move Fast",
    description: "We ship quickly and iterate. Speed is a feature.",
  },
  {
    icon: Shield,
    title: "Build Right",
    description: "Every decision is made with long-term quality in mind.",
  },
  {
    icon: Globe,
    title: "Think Global",
    description: "Kathmandu is home. The world is our market.",
  },
  {
    icon: Heart,
    title: "Stay Human",
    description: "Real relationships. Honest communication. Always.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <span className="inline-block text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Built in Nepal.<br />
              <span className="gradient-text">Trusted worldwide.</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
              AlgoraLabs started with a simple belief: great software shouldn't require a massive budget. We're proving it, one project at a time.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <span className="inline-block text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
                Who We Are
              </span>
              <h2 className="font-display text-4xl font-bold text-gray-900 tracking-tight mb-6">
                An emerging force in global IT
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in Kathmandu, AlgoraLabs was born out of a gap in the market: businesses around the world needed high-quality IT services but were priced out by Western agencies.
                </p>
                <p>
                  We set out to change that — combining Nepal's growing pool of exceptional engineering talent with global standards of design, architecture, and delivery.
                </p>
                <p>
                  Today, we serve clients across 15+ countries, delivering everything from custom websites and ERP systems to AI agents and VPS infrastructure — always on time, always with integrity.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 p-8 bg-emerald-500 rounded-3xl text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-emerald-200" />
                    <span className="font-display font-semibold">Kathmandu, Nepal</span>
                  </div>
                  <p className="text-emerald-100 text-sm leading-relaxed">
                    Our headquarters sits in the heart of Nepal's fast-growing tech scene — a city of brilliant engineers, designers, and innovators.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <p className="font-display text-3xl font-bold text-gray-900 mb-1">15+</p>
                  <p className="text-sm text-gray-500">Countries served</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                  <p className="font-display text-3xl font-bold text-gray-900 mb-1">50+</p>
                  <p className="text-sm text-gray-500">Projects delivered</p>
                </div>
                <div className="col-span-2 p-6 bg-gray-50 rounded-3xl border border-gray-100 flex items-center gap-4">
                  <Globe className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-0.5">Open to global clients</p>
                    <p className="text-sm text-gray-500">We work across timezones, async-first</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 section-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="inline-block text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
              Our Mission
            </span>
            <blockquote className="font-display text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              "To make world-class digital solutions accessible to every business — regardless of size, location, or budget."
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-sm">AlgoraLabs Team</p>
                <p className="text-xs text-gray-500">Kathmandu, Nepal</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
              What Drives Us
            </span>
            <h2 className="font-display text-4xl font-bold text-gray-900 tracking-tight">
              Our core values
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <StaggerItem key={val.title}>
                  <div className="p-7 bg-gray-50 rounded-3xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/40 transition-all duration-300 text-center group">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 group-hover:bg-emerald-200 flex items-center justify-center mx-auto mb-5 transition-colors">
                      <Icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="font-display font-semibold text-gray-900 mb-3">{val.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{val.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-4xl font-bold text-white tracking-tight">
              Built milestone by milestone
            </h2>
          </FadeIn>
          <div className="space-y-1 relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-emerald-500/20" />
            {milestones.map((m, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start pl-8 relative py-5">
                  <div className="absolute left-0 top-6 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-gray-950 flex-shrink-0" />
                  <div>
                    <span className="text-xs text-emerald-400 font-bold uppercase tracking-widest">{m.year}</span>
                    <p className="text-white font-medium mt-1">{m.event}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
