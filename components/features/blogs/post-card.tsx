import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { themeStyles, type Author, type Post } from "./blog-data";

export default function PostCard({
  post,
  author,
}: {
  post: Post;
  author: Author;
}) {
  const Icon = post.icon;
  const theme = themeStyles[post.theme];

  return (
    <Card className="group h-full overflow-hidden rounded-3xl border-gray-100 bg-[#F9F9F9] p-0 ">
      <Link href={`/blog/${post.slug}`} className="block">
        <div
          className={cn(
            "relative flex h-44 md:h-48 items-center justify-center overflow-hidden",
            theme.bg,
          )}
        >
          <Icon
            className={cn(
              "w-12 h-12 transition-transform duration-300 group-hover:scale-110",
              theme.icon,
            )}
            strokeWidth={1.5}
          />
        </div>
        <div className="p-6">
          <span className="mb-2 inline-block text-[12px] font-medium uppercase tracking-wide text-gray-400">
            {post.category}
          </span>
          <h3 className="text-[17px] font-semibold leading-snug text-black mb-5 line-clamp-2 group-hover:text-[#0081FB] transition-colors">
            {post.title}
          </h3>
        </div>
      </Link>
      <div className="flex items-center gap-2.5 px-6 pb-6 -mt-3">
        <Link
          href={`/blog/author/${author.slug}`}
          className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-gray-200"
        >
          <Image src={author.avatar} alt={author.name} fill className="object-cover" />
        </Link>
        <span className="text-[14px] text-gray-500">
          by{" "}
          <Link
            href={`/blog/author/${author.slug}`}
            className="font-medium text-black hover:text-[#0081FB] transition-colors"
          >
            {author.name}
          </Link>
        </span>
      </div>
    </Card>
  );
}
