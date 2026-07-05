import { Metadata } from "next";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";
import OurAgency from "@/components/features/about-us/our-agency";
import OurTeam from "@/components/features/about-us/our-team";
import Overview from "@/components/features/about-us/overview";
import OurHistory from "@/components/features/about-us/our-history";
import OurBeliefs from "@/components/features/about-us/our-beliefs";
import OurPartners from "@/components/features/about-us/our-partners";
import JoinCommunity from "@/components/features/about-us/join-community";

export const metadata: Metadata = {
  title: "About Us - Tiksly",
  description: "Learn more about the Tiksly story, our beliefs, and our team.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="pt-24 md:pt-32">
        <Overview />
        <OurHistory />
        <OurBeliefs />
        <OurAgency />
        <OurTeam />
        <OurPartners />
        <JoinCommunity />
      </main>
      <FooterSection />
    </div>
  );
}
