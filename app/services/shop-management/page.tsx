"use client";

import BrandLogos from "@/components/features/common/brand-logos";
import CreatorRegions from "@/components/features/common/creator-regions";
import OurProcess from "@/components/features/common/our-process";
import CaseStudies from "@/components/features/common/case-studies";
import Testimonials from "@/components/features/common/testimonials";
import FaqCarousel from "@/components/features/common/faq-carousel";
import BookCall from "@/components/features/common/book-call";
import HeroSection from "@/components/features/services/shop-management/hero-section";
import ProblemSection from "@/components/features/services/shop-management/problem-section";
import OperationsSection from "@/components/features/services/shop-management/operations-section";
import PricingSection from "@/components/features/services/shop-management/pricing-section";

export default function ShopManagementPage() {
  return (
    <>
      <HeroSection />
      <BrandLogos />
      <CreatorRegions />
      <ProblemSection />
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
