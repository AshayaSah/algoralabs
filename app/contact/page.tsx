import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AlgoraLabs. We're based in Kathmandu, Nepal and open to global clients. Start your IT project today — web development, SEO, ERP, AI agents.",
};

export default function ContactPage() {
  return <ContactClient />;
}
