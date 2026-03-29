import Link from "next/link";
import { Zap, MapPin, Globe, Share2, AtSign, ExternalLink } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Careers", href: "/careers" },
  ],
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "ERP Solutions", href: "/services" },
    { label: "Digital Marketing", href: "/services" },
    { label: "AI Agents", href: "/services" },
    { label: "VPS Solutions", href: "/services" },
    { label: "SEO", href: "/services" },
  ],
  Contact: [
    { label: "Get a Quote", href: "/contact" },
    { label: "hello@algoralabs.site", href: "mailto:hello@algoralabs.site" },
  ],
};

const socials = [
  { Icon: AtSign, href: "#", label: "Twitter / X" },
  { Icon: Share2, href: "#", label: "LinkedIn" },
  { Icon: ExternalLink, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-display font-bold text-[17px] text-white tracking-tight">
                Algora<span className="text-emerald-400">Labs</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-6">
              Emerging IT company from Kathmandu, Nepal. Delivering premium digital solutions to global clients at budget-friendly rates.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Globe className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <a href="https://algoralabs.site" className="hover:text-emerald-400 transition-colors">
                algoralabs.site
              </a>
            </div>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white text-sm font-semibold mb-5 font-display">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-emerald-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} AlgoraLabs. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">Made with ♥ in Kathmandu, Nepal</p>
        </div>
      </div>
    </footer>
  );
}
