import type { Metadata } from "next";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";
import ContactFlow from "@/components/features/contact/contact-flow";

export const metadata: Metadata = {
  title: "Contact Us | Tiksly",
  description:
    "Get in touch with Tiksly. Whether you are a brand looking for growth, a creator seeking deals, or an agency looking to white-label.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F6F7F5]">
      <NavBar />
      <main className="pt-28 md:pt-36">
        <ContactFlow initialView="hub" />
      </main>
      <FooterSection />
    </div>
  );
}
