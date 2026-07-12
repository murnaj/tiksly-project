import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { getClientForCaseStudy, type CaseStudy } from "./case-study-data";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const client = getClientForCaseStudy(study);

  return (
    <Card className="group h-full overflow-hidden rounded-3xl border-transparent bg-[#0D0D0D] p-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] transition-shadow duration-300">
      <Link href={`/case-studies/${study.slug}`} className="block">
        <div className="relative h-44 md:h-48 overflow-hidden">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <span className="mb-2 inline-block text-[12px] font-medium uppercase tracking-wide text-gray-500">
            {study.tag}
          </span>
          <h3 className="text-[17px] font-semibold leading-snug text-white mb-5 line-clamp-2 group-hover:text-[#BCF96A] transition-colors">
            {study.title}
          </h3>
        </div>
      </Link>
      <div className="flex items-center gap-2.5 px-6 pb-6 -mt-3">
        <Link
          href={`/case-studies/client/${client.slug}`}
          className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-gray-700"
        >
          <Image src={client.avatar} alt={client.name} fill className="object-cover" />
        </Link>
        <span className="text-[14px] text-gray-400">
          <Link
            href={`/case-studies/client/${client.slug}`}
            className="font-medium text-white hover:text-[#BCF96A] transition-colors"
          >
            {client.name}
          </Link>{" "}
          · {client.company}
        </span>
      </div>
    </Card>
  );
}
