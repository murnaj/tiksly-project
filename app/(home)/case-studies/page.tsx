import type { Metadata } from "next";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";
import CaseStudySections from "@/components/features/case-studies/case-study-sections";

export const metadata: Metadata = {
  title: "Case Studies | tiksly",
  description:
    "Real results from real brands who partnered with tiksly for creator-led growth.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="pt-24 md:pt-32">
        <CaseStudySections />
      </main>
      <FooterSection />
    </div>
  );
}
