import BookCall from "@/components/features/common/book-call";
import BrandLogos from "@/components/features/common/brand-logos";
import CaseStudies from "@/components/features/common/case-studies";
import CreatorRegions from "@/components/features/common/creator-regions";
import FaqCarousel from "@/components/features/common/faq-carousel";
import OurProcess from "@/components/features/common/our-process";
import Testimonials from "@/components/features/common/testimonials";
import HeroSection from "@/components/features/services/tiktok-shop-ads/hero-section";
import OperationsSection from "@/components/features/services/shop-management/operations-section";
import PricingSection from "@/components/features/services/shop-management/pricing-section";
import AnatomySection from "@/components/features/services/tiktok-shop-ads/anatomy-section";

export default function TiktokShopAdsPage() {
  return (
    <>
      <HeroSection />
      <BrandLogos />
      <CreatorRegions />
      <AnatomySection />

      <OurProcess />
      <OperationsSection />
      <CaseStudies />
      <Testimonials />
      <PricingSection />
      <FaqCarousel />
      <BookCall />
    </>
  );
}
