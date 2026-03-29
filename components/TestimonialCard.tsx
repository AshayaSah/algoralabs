import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
}

export default function TestimonialCard({
  name,
  role,
  location,
  avatar,
  rating,
  text,
}: TestimonialCardProps) {
  const colors = [
    "from-emerald-500 to-teal-500",
    "from-teal-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-cyan-500 to-teal-500",
    "from-emerald-600 to-green-500",
    "from-teal-600 to-emerald-500",
  ];
  const colorClass = colors[name.charCodeAt(0) % colors.length];

  return (
    <div className="group p-7 bg-white rounded-3xl border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/8 transition-all duration-300">
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 text-[15px] leading-relaxed mb-6 italic">
        "{text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-white text-xs font-bold">{avatar}</span>
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{name}</p>
          <p className="text-xs text-gray-400">{role}</p>
          <p className="text-xs text-emerald-500">{location}</p>
        </div>
      </div>
    </div>
  );
}
