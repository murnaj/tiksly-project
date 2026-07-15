import type { Metadata } from "next";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";
import ServicesHero from "@/components/features/services/services-hero";
import BrandLogos from "@/components/features/brand-logos";
import OurProcess from "@/components/features/our-process";
import WhatWeNeed from "@/components/features/services/what-we-need";
import WorkSamples from "@/components/features/services/work-samples";
import ServicesPricing from "@/components/features/services/services-pricing";
import Testimonials from "@/components/features/testimonials";
import FaqCarousel from "@/components/features/faq-carousel";
import BookCall from "@/components/features/book-call";

export const metadata: Metadata = {
  title: "Services | tiksly",
  description:
    "Proven creator marketing services — from partnerships to full-funnel campaigns — that help brands scale with data-driven growth.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <ServicesHero />
        <BrandLogos />
        <OurProcess />
        <WhatWeNeed />
        <WorkSamples />
        <ServicesPricing />
        <Testimonials />
        <FaqCarousel />
        <BookCall />
      </main>
      <FooterSection />
    </div>
  );
}
