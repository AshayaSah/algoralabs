import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AlgoraLabs — Modern IT Solutions from Nepal",
    template: "%s | AlgoraLabs",
  },
  description:
    "AlgoraLabs is a Kathmandu-based IT company offering affordable web development, ERP solutions, SEO, AI agents, digital marketing, and VPS solutions to global clients.",
  keywords: [
    "IT company Nepal",
    "web development Kathmandu",
    "ERP solutions Nepal",
    "affordable IT services",
    "SEO Nepal",
    "AI agents",
    "digital marketing Nepal",
    "VPS solutions",
    "AlgoraLabs",
  ],
  authors: [{ name: "AlgoraLabs", url: "https://algoralabs.site" }],
  creator: "AlgoraLabs",
  metadataBase: new URL("https://algoralabs.site"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://algoralabs.site",
    siteName: "AlgoraLabs",
    title: "AlgoraLabs — Modern IT Solutions from Nepal",
    description:
      "Budget-friendly, high-quality IT services for global clients. Web development, ERP, SEO, AI agents & more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlgoraLabs — Modern IT Solutions from Nepal",
    description: "Budget-friendly, high-quality IT services for global clients.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
