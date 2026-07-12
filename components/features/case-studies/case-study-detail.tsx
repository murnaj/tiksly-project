import Image from "next/image";
import Link from "next/link";
import { getClientForCaseStudy, type CaseStudy } from "./case-study-data";

/* ── Share icons ──────────────────────────────────────────────────────── */

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

/* ── Component ────────────────────────────────────────────────────────── */

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const client = getClientForCaseStudy(study);

  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-[#0D0D0D]">
        <div className="container mx-auto px-3 lg:px-4 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] items-center gap-10">
            <div>
              <span className="inline-block mb-4 px-3 py-1 rounded-full text-[12px] font-medium uppercase tracking-wide bg-white/10 text-[#BCF96A]">
                {study.tag}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.1] mb-6 text-white">
                {study.title}
              </h1>
              <div className="flex items-center gap-3">
                <Link
                  href={`/case-studies/client/${client.slug}`}
                  className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-700"
                >
                  <Image src={client.avatar} alt={client.name} fill className="object-cover" />
                </Link>
                <div className="text-[14px] leading-snug text-gray-300">
                  <p>
                    Case study with{" "}
                    <Link
                      href={`/case-studies/client/${client.slug}`}
                      className="font-semibold text-white hover:underline underline-offset-2"
                    >
                      {client.name}
                    </Link>
                    , {client.company}
                  </p>
                  <p className="text-gray-400">Last updated on {study.updatedAt}</p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="relative h-40 w-full max-w-72 overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-3 lg:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[64px_1fr_260px] gap-10 xl:gap-14">
            {/* Share sidebar */}
            <aside className="hidden lg:flex bg-[#F9F9F9] p-4 rounded-2xl flex-col items-center gap-4 sticky top-32 h-fit">
              <div className="flex flex-col items-center">
                <span className="text-[15px] font-semibold text-black">
                  {study.shares.toLocaleString()}
                </span>
                <span className="text-[12px] text-gray-400">shares</span>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  aria-label="Share on X"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-black hover:text-white hover:border-black transition-colors"
                >
                  <XIcon />
                </a>
                <a
                  href="#"
                  aria-label="Share on Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-[#0081FB] hover:text-white hover:border-[#0081FB] transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  aria-label="Share on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-black hover:text-white hover:border-black transition-colors"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </aside>

            {/* Case study content */}
            <article className="max-w-2xl">
              <p className="text-gray-600 text-lg leading-relaxed mb-10 italic">
                &ldquo;{study.excerpt}&rdquo;
              </p>

              {/* Mobile-only share row */}
              <div className="flex lg:hidden items-center gap-3 mb-10">
                <a
                  href="#"
                  aria-label="Share on X"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-black hover:text-white hover:border-black transition-colors"
                >
                  <XIcon />
                </a>
                <a
                  href="#"
                  aria-label="Share on Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-[#0081FB] hover:text-white hover:border-[#0081FB] transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  aria-label="Share on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-black hover:text-white hover:border-black transition-colors"
                >
                  <LinkedInIcon />
                </a>
                <span className="text-[13px] text-gray-400">
                  {study.shares.toLocaleString()} shares
                </span>
              </div>

              {study.sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32 mb-10">
                  <h2 className="text-xl md:text-2xl font-bold text-black mb-4 tracking-tight">
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-gray-600 leading-relaxed mb-4 text-[15px] md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              {/* Client teaser */}
              <Link
                href={`/case-studies/client/${client.slug}`}
                className="mt-4 flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#F9F9F9] p-5 hover:bg-[#F3F3F3] transition-colors"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gray-200">
                  <Image src={client.avatar} alt={client.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[13px] text-gray-400">Case study client</p>
                  <p className="font-semibold text-black">{client.name}</p>
                  <p className="text-[13px] text-gray-500">
                    {client.role}, {client.company}
                  </p>
                </div>
              </Link>
            </article>

            {/* On This Page TOC */}
            <aside className="hidden lg:block sticky top-32 h-fit">
              <div className="rounded-2xl border border-gray-100 bg-[#F9F9F9] p-6">
                <h3 className="font-semibold text-black mb-4 text-[15px]">
                  On This Page
                </h3>
                <ul className="flex flex-col gap-3">
                  {study.sections.map((section, i) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-[13px] text-gray-500 hover:text-[#0081FB] transition-colors leading-snug"
                      >
                        {i + 1}. {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
