import NavBar from "@/components/features/nav-bar";
import HeroSection from "@/components/features/hero-section";
import FooterSection from "@/components/features/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <NavBar />
      <main>
        <HeroSection />
      </main>
      <FooterSection />
    </div>
  );
}
