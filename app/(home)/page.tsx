import HeroSection from "@/components/features/home/hero-section";
import BrandLogos from "@/components/features/common/brand-logos";
import CreatorRegions from "@/components/features/common/creator-regions";
import PlatformFeatures from "@/components/features/home/platform-features";
import OurProcess from "@/components/features/common/our-process";
import Reviews from "@/components/features/common/reviews";
import BookCall from "@/components/features/common/book-call";
import CaseStudies from "@/components/features/common/case-studies";
import FaqCarousel from "@/components/features/common/faq-carousel";
import Testimonials from "@/components/features/common/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandLogos />
      <CreatorRegions />
      <Reviews />
      <PlatformFeatures />
      <OurProcess />
      <CaseStudies />
      <Testimonials />
      <FaqCarousel />
      <BookCall />
    </>
  );
}
