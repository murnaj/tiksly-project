import BrandLogos from "@/components/features/common/brand-logos";
import Testimonials from "@/components/features/common/testimonials";
import FaqCarousel from "@/components/features/common/faq-carousel";
import BookCall from "@/components/features/common/book-call";
import PricingSection from "@/components/features/services/shop-management/pricing-section";
import CreatorRegions from "@/components/features/common/creator-regions";
import OurProcess from "@/components/features/common/our-process";
import HeroSection from "@/components/features/services/ugc-content-creation/hero-section";
import Reviews from "@/components/features/common/reviews";
import CaseStudies from "@/components/features/common/case-studies";

export default function UGCContentCreationPage() {
  return (
    <>
      <HeroSection />
      <BrandLogos />
      <CreatorRegions />
      <Reviews />
      <OurProcess />
      <CaseStudies />
      <Testimonials />
      <PricingSection />
      <FaqCarousel />
      <BookCall />
    </>
  );
}
