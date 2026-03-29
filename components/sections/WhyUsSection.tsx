"use client";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, Heart, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { stats } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = { Zap, Shield, Globe, Heart };

const highlights = [
  { icon: "Zap", title: "Speed Without Shortcuts", description: "Rapid delivery cycles without compromising on quality or best practices." },
  { icon: "Shield", title: "Enterprise-Grade Quality", description: "Code standards and design rigor that matches top global agencies." },
  { icon: "Globe", title: "Global Reach, Local Roots", description: "Internationally competitive rates rooted in Kathmandu's growing tech scene." },
  { icon: "Heart", title: "Client-Obsessed", description: "Your success is the only goal. We don't rest until you're delighted." },
];

const differentiators = [
  "No lock-in contracts",
  "Transparent pricing",
  "Async-first communication",
  "Full source code ownership",
  "Post-launch support included",
  "Global-timezone availability",
];

export default function WhyUsSection() {
  return (
    <section className="py-28 section-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Row */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <p className="font-display text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <FadeIn direction="left">
            <span className="inline-block text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
              Why AlgoraLabs
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Premium output.<br />
              <span className="gradient-text">Fair pricing.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We're not another generic agency. We're a lean, focused team that ships work you'd proudly show anywhere in the world — at rates that make sense.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {differentiators.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right — highlight cards */}
          <FadeIn direction="right" delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => {
                const Icon = iconMap[item.icon] || Zap;
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`p-6 rounded-3xl border transition-all duration-300 ${
                      i % 2 === 0
                        ? "bg-emerald-500 border-emerald-500 text-white"
                        : "bg-white border-gray-100 hover:border-emerald-200"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                        i % 2 === 0 ? "bg-white/20" : "bg-emerald-50"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${i % 2 === 0 ? "text-white" : "text-emerald-600"}`} />
                    </div>
                    <h3
                      className={`font-display font-semibold text-base mb-2 ${
                        i % 2 === 0 ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${i % 2 === 0 ? "text-emerald-100" : "text-gray-500"}`}>
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
