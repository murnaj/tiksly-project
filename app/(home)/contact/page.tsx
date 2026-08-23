import type { Metadata } from "next";
import ContactFlow from "@/components/features/contact/contact-flow";

export const metadata: Metadata = {
  title: "Contact Us | Tiksly",
  description:
    "Get in touch with Tiksly. Whether you are a brand looking for growth, a creator seeking deals, or an agency looking to white-label.",
};

export default function ContactPage() {
  return (
    <>
      <ContactFlow initialView="hub" />
    </>
  );
}
