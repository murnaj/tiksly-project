import NavBar from "@/components/features/nav-bar";
import HeroSection from "@/components/features/hero-section";
import BrandLogos from "@/components/features/brand-logos";
import OurProcess from "@/components/features/our-process";
import FooterSection from "@/components/features/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <NavBar />
      <main>
        <HeroSection />
        <BrandLogos />
        <OurProcess />
      </main>
      <FooterSection />
    </div>
  );
}
