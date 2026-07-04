import type { Metadata } from "next";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";
import GetDemoFlow from "@/components/features/get-demo/get-demo-flow";

export const metadata: Metadata = {
  title: "Get a Demo | Tiksly",
  description:
    "Book a 30 minute demo call with the Tiksly team and see how to turn any product link into instant video briefs.",
};

export default function GetDemoPage() {
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
