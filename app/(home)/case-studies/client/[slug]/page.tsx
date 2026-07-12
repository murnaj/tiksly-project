import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";
import ClientProfile from "@/components/features/case-studies/client-profile";
import {
  clients,
  getClientBySlug,
  getCaseStudiesByClient,
} from "@/components/features/case-studies/case-study-data";

export function generateStaticParams() {
  return clients.map((client) => ({ slug: client.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const client = getClientBySlug(slug);

  if (!client) {
    return { title: "Client Not Found | tiksly" };
  }

  return {
    title: `${client.name} | tiksly Case Studies`,
    description: client.bio,
  };
}

export default async function CaseStudyClientPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const client = getClientBySlug(slug);

  if (!client) {
    notFound();
  }

  const studies = getCaseStudiesByClient(client.slug);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="pt-24 md:pt-32">
        <ClientProfile client={client} studies={studies} />
      </main>
      <FooterSection />
    </div>
  );
}
