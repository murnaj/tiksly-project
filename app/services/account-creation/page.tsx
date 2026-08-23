import BrandLogos from "@/components/features/common/brand-logos";
import Testimonials from "@/components/features/common/testimonials";
import FaqCarousel from "@/components/features/common/faq-carousel";
import BookCall from "@/components/features/common/book-call";
import ComparisonTable from "@/components/features/common/comparison-table";
import RequirementsSection from "@/components/features/services/account-creation/requirements-section";
import HeroSection from "@/components/features/services/account-creation/hero-section";
import WorkingExamples from "@/components/features/common/working-examples";
import PricingSection from "@/components/features/services/shop-management/pricing-section";

export default function AccountCreationPage() {
  return (
    <>
      <HeroSection />
      <BrandLogos />
      <ComparisonTable />
      <RequirementsSection />
      <WorkingExamples />
      <Testimonials />
      <PricingSection />
      <FaqCarousel />
      <BookCall />
    </>
  );
}
