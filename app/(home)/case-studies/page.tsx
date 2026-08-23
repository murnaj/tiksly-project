import type { Metadata } from "next";
import CaseStudySections from "@/components/features/case-studies/case-study-sections";

export const metadata: Metadata = {
  title: "Case Studies | tiksly",
  description:
    "Real results from real brands who partnered with tiksly for creator-led growth.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudySections />
    </>
  );
}
