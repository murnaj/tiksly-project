import Image from "next/image";
import Link from "next/link";
import { type CaseStudy, type Client } from "./case-study-data";
import CaseStudyCard from "./case-study-card";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

export default function ClientProfile({
  client,
  studies,
}: {
  client: Client;
  studies: CaseStudy[];
}) {
  return (
    <>
      <section className="bg-linear-to-b from-white via-white to-[#F3F5F9]">
        <div className="container mx-auto px-3 lg:px-4 py-10 md:py-14">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 rounded-[2rem] border border-gray-100 bg-white p-8 md:p-10 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]">
            <p className="text-[13px] font-medium uppercase tracking-wide text-gray-400">
              This is a case study client:
            </p>

            <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-[#BCF96A]/30">
              <Image
                src={client.avatar}
                alt={client.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight text-black mb-1">
                {client.name}
              </h1>
              <p className="text-[15px] font-medium text-[#0081FB]">
                {client.role}, {client.company}
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-[15px]">
              {client.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="#all-case-studies"
                className="px-5 py-2.5 rounded-full bg-black text-white text-[14px] font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
              >
                See all case studies
              </Link>
              {client.linkedin && (
                <a
                  href={client.linkedin}
                  aria-label={`${client.name} on LinkedIn`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-black hover:text-white hover:border-black transition-colors"
                >
                  <LinkedInIcon />
                </a>
              )}
              {client.twitter && (
                <a
                  href={client.twitter}
                  aria-label={`${client.name} on X`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-black hover:text-white hover:border-black transition-colors"
                >
                  <XIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {studies.length > 0 && (
        <section id="all-case-studies" className="scroll-mt-24 bg-white py-10 md:py-16">
          <div className="container mx-auto px-3 lg:px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black mb-8 md:mb-10 text-center">
              Case Studies with {client.name.split(" ")[0]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {studies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
