import BrandLogos from "@/components/features/common/brand-logos";
import Testimonials from "@/components/features/common/testimonials";
import FaqCarousel from "@/components/features/common/faq-carousel";
import BookCall from "@/components/features/common/book-call";
import ComparisonTable from "@/components/features/common/comparison-table";
import WorkingExamples from "@/components/features/common/working-examples";
import PricingSection from "@/components/features/services/shop-management/pricing-section";
import ViolationFinder from "@/components/features/services/violation-removal/violation-finder";
import HeroSection from "@/components/features/services/violation-removal/hero-section";

export default function ViolationRemovalPage() {
  return (
    <>
      <HeroSection />
      <BrandLogos />
      <ComparisonTable />
      <ViolationFinder />
      <WorkingExamples />
      <Testimonials />
      <PricingSection />
      <FaqCarousel />
      <BookCall />
    </>
  );
}
