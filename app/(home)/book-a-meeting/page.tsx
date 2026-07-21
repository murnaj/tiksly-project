import type { Metadata } from "next";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";
import GetDemoFlow from "@/components/features/get-demo/get-demo-flow";

export const metadata: Metadata = {
  title: "Book a Meeting | Tiksly",
  description:
    "Book a meeting with the Tiksly team and see how to scale your brand revenue on TikTok Shop.",
};

export default function BookAMeetingPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="pt-32 md:pt-40">
        <GetDemoFlow />
      </main>
      <FooterSection />
    </div>
  );
}
