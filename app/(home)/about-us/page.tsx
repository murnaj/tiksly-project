import { Metadata } from "next";
import NavBar from "@/components/features/common/nav-bar";
import FooterSection from "@/components/features/common/footer-section";
import OurAgency from "@/components/features/about-us/our-agency";
import OurTeam from "@/components/features/about-us/our-team";
import Overview from "@/components/features/about-us/overview";
import OurHistory from "@/components/features/about-us/our-history";
import OurBeliefs from "@/components/features/about-us/our-beliefs";
import OurPartners from "@/components/features/about-us/our-partners";
import JoinCommunity from "@/components/features/about-us/join-community";
import AboutHeroSection from "@/components/features/about-us/hero-section";
import OurCharity from "@/components/features/about-us/our-charity";

export const metadata: Metadata = {
  title: "About Us - Tiksly",
  description: "Learn more about the Tiksly story, our beliefs, and our team.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <Overview />
      <OurBeliefs />
      <OurHistory />
      <OurAgency />
      <OurTeam />
      <OurPartners />
      <OurCharity />
      <JoinCommunity />
    </>
  );
}
