"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Globe, Clock, Send, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/Motion";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const inputClass =
    "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200";

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <span className="inline-block text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-4">
              Get in Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-5">
              Let's talk about
              <br />
              <span className="gradient-text">your project</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-xl mx-auto">
              We respond within 24 hours. No sales pitch — just a real conversation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info sidebar */}
            <FadeIn direction="left" className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Contact Info</h2>
                <div className="space-y-4">
                  {[
                    {
                      Icon: MapPin,
                      label: "Location",
                      value: "Kathmandu, Bagmati Province, Nepal",
                    },
                    {
                      Icon: Mail,
                      label: "Email",
                      value: "hello@algoralabs.site",
                      href: "mailto:hello@algoralabs.site",
                    },
                    {
                      Icon: Globe,
                      label: "Website",
                      value: "algoralabs.site",
                      href: "https://algoralabs.site",
                    },
                    {
                      Icon: Clock,
                      label: "Response Time",
                      value: "Within 24 hours",
                    },
                  ].map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm font-medium text-gray-900 hover:text-emerald-600 transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-gray-900">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global friendly message */}
              <div className="p-6 bg-emerald-500 rounded-3xl text-white">
                <Globe className="w-6 h-6 text-emerald-200 mb-3" />
                <h3 className="font-display font-semibold text-lg mb-2">Open to Global Clients</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  Wherever you're based — UK, US, Australia, Singapore, Europe — we work across timezones and speak your language.
                </p>
              </div>

              {/* Services */}
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Popular Inquiries</p>
                <div className="flex flex-wrap gap-2">
                  {["Web Dev", "ERP", "SEO", "AI Agents", "VPS", "Marketing"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-white border border-gray-200 text-xs text-gray-600 font-medium rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                    <p className="text-gray-500 max-w-sm">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
                      className="mt-8 px-6 py-3 bg-emerald-500 text-white text-sm font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Start a conversation</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-2">Full Name *</label>
                        <input
                          required
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-2">Work Email *</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2">Company / Project Name</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company or project"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2">Service Needed</label>
                      <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                        <option value="">Select a service...</option>
                        <option>Web Development</option>
                        <option>ERP Solutions</option>
                        <option>Digital Marketing</option>
                        <option>SEO</option>
                        <option>AI Agents</option>
                        <option>VPS Solutions</option>
                        <option>Management Systems</option>
                        <option>IT Consulting</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2">Message *</label>
                      <textarea
                        required
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your project, goals, and timeline..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-center text-gray-400">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
