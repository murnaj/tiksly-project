import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";
import CaseStudyDetail from "@/components/features/case-studies/case-study-detail";
import {
  caseStudies,
  getCaseStudyBySlug,
} from "@/components/features/case-studies/case-study-data";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found | tiksly" };
  }

  return {
    title: `${study.title} | tiksly Case Studies`,
    description: study.excerpt,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="pt-24 md:pt-32">
        <CaseStudyDetail study={study} />
      </main>
      <FooterSection />
    </div>
  );
}
