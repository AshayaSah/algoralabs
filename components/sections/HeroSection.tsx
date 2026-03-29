"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden grid-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-teal-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
              Now Open for Global Clients
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-[80px] font-bold text-gray-900 leading-[1.05] tracking-tight mb-6"
          >
            Build the{" "}
            <span className="gradient-text">Digital</span>
            <br />
            Future. Together.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Premium IT services from Kathmandu to the world — web development, ERP, AI agents, SEO,
            and more. Budget-friendly. High-quality. No compromises.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 text-sm"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-200 text-sm shadow-sm"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-500" />
              <span>Serving clients in 15+ countries</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              <span>50+ projects delivered</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              <span>100% client satisfaction</span>
            </div>
          </motion.div>
        </div>

        {/* Floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-20 relative"
        >
          {/* Main dashboard card */}
          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-3xl border border-emerald-100/80 shadow-2xl shadow-emerald-500/10 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-1">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/40" />
                    <div className="w-3 h-3 rounded-full bg-white/40" />
                    <div className="w-3 h-3 rounded-full bg-white/40" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-white/70 text-xs">algoralabs.site</span>
                  </div>
                </div>
              </div>
              <div className="p-8 grid grid-cols-3 gap-4">
                {[
                  { label: "Projects", value: "50+", change: "+12%" },
                  { label: "Clients", value: "30+", change: "+8%" },
                  { label: "Uptime", value: "99.9%", change: "Stable" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-2xl">
                    <p className="text-2xl font-display font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                    <span className="inline-block mt-2 text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">
                      {stat.change}
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-8 pb-8">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">Current sprint: 75% complete</p>
              </div>
            </div>
          </div>

          {/* Floating badge left */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-12 hidden lg:block"
          >
            <div className="glass rounded-2xl p-4 border border-emerald-100 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <span className="text-emerald-600 text-sm">🤖</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">AI Agent Deployed</p>
                  <p className="text-xs text-gray-400">Response time: 0.3s</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating badge right */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-0 top-20 hidden lg:block"
          >
            <div className="glass rounded-2xl p-4 border border-emerald-100 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-100 flex items-center justify-center">
                  <span className="text-teal-600 text-sm">📈</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">SEO Rankings</p>
                  <p className="text-xs text-emerald-500">↑ 3x Growth</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
