import type { Metadata } from "next";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";
import BlogSections from "@/components/features/blogs/blog-sections";

export const metadata: Metadata = {
  title: "Blog | tiksly",
  description:
    "Latest playbooks, benchmarks, and best practices for creator-led growth from the tiksly team.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="pt-24 md:pt-32">
        <BlogSections />
      </main>
      <FooterSection />
    </div>
  );
}
