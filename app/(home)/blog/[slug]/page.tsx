import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostDetail from "@/components/features/blogs/blog-post-detail";
import {
  getAuthorForPost,
  getPostBySlug,
  posts,
} from "@/components/features/blogs/blog-data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | tiksly Blog" };
  }

  return {
    title: `${post.title} | tiksly Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = getAuthorForPost(post);

  return (
    <>
      <BlogPostDetail post={post} author={author} />
    </>
  );
}
