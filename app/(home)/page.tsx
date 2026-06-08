import NavBar from "@/components/features/nav-bar";
import HeroSection from "@/components/features/hero-section";
import BrandLogos from "@/components/features/brand-logos";
import PlatformFeatures from "@/components/features/platform-features";
import OurProcess from "@/components/features/our-process";
import FooterSection from "@/components/features/footer-section";
import Reviews from "@/components/features/reviews";
import BookCall from "@/components/features/book-call";
import CaseStudies from "@/components/features/case-studies";
import FaqCarousel from "@/components/features/faq-carousel";

export default function Home() {
  return (
    <div className="min-h-screen  bg-white">
      <NavBar />
      <main>
        <HeroSection />
        <BrandLogos />
        <Reviews />
        <PlatformFeatures />
        <OurProcess />
        <CaseStudies />
        <FaqCarousel />
        <BookCall />
      </main>
      <FooterSection />
    </div>
  );
}

