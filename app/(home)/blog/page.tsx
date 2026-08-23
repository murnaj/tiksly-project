import type { Metadata } from "next";
import BlogSections from "@/components/features/blogs/blog-sections";

export const metadata: Metadata = {
  title: "Blog | tiksly",
  description:
    "Latest playbooks, benchmarks, and best practices for creator-led growth from the tiksly team.",
};

export default function BlogPage() {
  return (
    <>
      <BlogSections />
    </>
  );
}
