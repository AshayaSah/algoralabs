import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { FadeIn } from "@/components/Motion";

export default function ContactCTA() {
  return (
    <section className="py-28 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <span className="inline-block text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-6">
            Let's Build Together
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Ready to start your
            <br />
            <span className="text-emerald-400">next project?</span>
          </h2>
          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
            Tell us what you need. We'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:hello@algoralabs.site"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              hello@algoralabs.site
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
