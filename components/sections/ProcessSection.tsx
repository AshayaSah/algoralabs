"use client";
import { motion } from "framer-motion";
import { Compass, PenTool, Code2, Rocket } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Motion";
import { process } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = { Compass, PenTool, Code2, Rocket };

export default function ProcessSection() {
  return (
    <section className="py-28 bg-gray-950 overflow-hidden relative">
      {/* Grid bg dark */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">
            How We Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            From idea to{" "}
            <span className="text-emerald-400">live product</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            A clear, collaborative process — so you always know what's happening.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => {
            const Icon = iconMap[step.icon] || Code2;
            return (
              <StaggerItem key={step.step}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="relative p-7 rounded-3xl border border-white/5 bg-white/3 hover:bg-white/6 hover:border-emerald-500/20 transition-all duration-300 group"
                >
                  {/* Step connector line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-11 left-full w-6 border-t border-dashed border-emerald-500/20 z-10" />
                  )}

                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 group-hover:bg-emerald-500/20 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="font-display text-5xl font-bold text-white/6 group-hover:text-emerald-500/15 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-white text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
