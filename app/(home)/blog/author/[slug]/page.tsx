import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";
import AuthorProfile from "@/components/features/blogs/author-profile";
import {
  authors,
  getAuthorBySlug,
  getPostsByAuthor,
} from "@/components/features/blogs/blog-data";

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return { title: "Author Not Found | tiksly Blog" };
  }

  return {
    title: `${author.name} | tiksly Blog`,
    description: author.bio,
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const authorPosts = getPostsByAuthor(author.slug);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="pt-24 md:pt-32">
        <AuthorProfile author={author} posts={authorPosts} />
      </main>
      <FooterSection />
    </div>
  );
}
