"use client";
import { motion } from "framer-motion";
import {
  Code2, LayoutGrid, TrendingUp, Search, Settings2,
  Server, Bot, Lightbulb, Compass, PenTool, Rocket,
  Zap, Shield, Globe, Heart,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Code2, LayoutGrid, TrendingUp, Search, Settings2,
  Server, Bot, Lightbulb, Compass, PenTool, Rocket,
  Zap, Shield, Globe, Heart,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  variant?: "default" | "compact";
}

export default function ServiceCard({
  icon,
  title,
  tagline,
  description,
  variant = "default",
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Code2;

  if (variant === "compact") {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/8 transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center flex-shrink-0 transition-colors">
            <Icon className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">{tagline}</p>
            <h3 className="font-display font-semibold text-gray-900 text-base mb-2">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative p-7 bg-white rounded-3xl border border-gray-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/60 group-hover:to-teal-50/30 transition-all duration-500 rounded-3xl" />

      <div className="relative">
        <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center mb-5 transition-colors duration-300">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
        <span className="inline-block text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">
          {tagline}
        </span>
        <h3 className="font-display font-semibold text-gray-900 text-lg mb-3">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

        <div className="mt-5 flex items-center text-emerald-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
