import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/Motion";

export default function CareersTeaser() {
  return (
    <section className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="relative rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-12 md:p-16 overflow-hidden text-center">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full mb-6">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                  We're Hiring
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-5">
                Join the{" "}
                <span className="gradient-text">AlgoraLabs</span> team
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-lg mb-8">
                We're building something extraordinary from Kathmandu. Come work on real projects for real global clients.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                {["Full Stack Dev", "UI/UX Designer", "SEO Specialist", "AI Engineer"].map((role) => (
                  <span
                    key={role}
                    className="px-4 py-2 bg-white border border-emerald-200 text-gray-700 text-sm font-medium rounded-xl shadow-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-950 hover:bg-gray-800 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
              >
                View Open Roles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
