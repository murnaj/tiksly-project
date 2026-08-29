import BookCall from "@/components/features/common/book-call";
import BrandLogos from "@/components/features/common/brand-logos";
import CaseStudies from "@/components/features/common/case-studies";
import CreatorRegions from "@/components/features/common/creator-regions";
import FaqCarousel from "@/components/features/common/faq-carousel";
import OurProcess from "@/components/features/common/our-process";
import Testimonials from "@/components/features/common/testimonials";
import HeroSection from "@/components/features/services/affiliate-creator-ops/hero-section";
import UkUsaCreators from "@/components/features/services/affiliate-creator-ops/uk-usa-creators";
import TargetMarketCreators from "@/components/features/services/affiliate-creator-ops/target-market-creators";
import OperationsSection from "@/components/features/services/shop-management/operations-section";
import PricingSection from "@/components/features/services/shop-management/pricing-section";

export default function AffiliateAndCreatorOpsPage() {
  return (
    <>
      <HeroSection />
      <BrandLogos />
      <CreatorRegions />
      <UkUsaCreators />
      <TargetMarketCreators />
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
