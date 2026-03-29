import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsPreview from "@/components/sections/TestimonialsPreview";
import CareersTeaser from "@/components/sections/CareersTeaser";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "AlgoraLabs — Modern IT Solutions from Nepal",
  description:
    "AlgoraLabs delivers premium web development, ERP solutions, AI agents, digital marketing, and SEO for global clients. Based in Kathmandu, Nepal.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsPreview />
      <CareersTeaser />
      <ContactCTA />
    </>
  );
}
