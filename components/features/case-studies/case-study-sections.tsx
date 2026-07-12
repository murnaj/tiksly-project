"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { caseStudies } from "./case-study-data";
import CaseStudyCard from "./case-study-card";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/* ── Decorative squiggle ──────────────────────────────────────────────── */

function Squiggle() {
  return (
    <svg
      width="140"
      height="26"
      viewBox="0 0 140 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
      aria-hidden="true"
    >
      <path
        d="M4 13C11 3 18 3 25 13C32 23 39 23 46 13C53 3 60 3 67 13C74 23 81 23 88 13C95 3 102 3 109 13C116 23 123 23 130 13"
        stroke="#BCF96A"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Data ─────────────────────────────────────────────────────────────── */

const categories = ["All", ...Array.from(new Set(caseStudies.map((s) => s.tag)))];

/* ── Section 1: Hero ──────────────────────────────────────────────────── */

function CaseStudiesHero() {
  return (
    <section className="bg-linear-to-b from-white via-white to-[#F3F5F9]">
      <div className="container mx-auto px-3 lg:px-4 py-16 md:py-20 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-5"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-[56px] font-black tracking-tighter text-black"
          >
            tiksly Case Studies
          </motion.h1>
          <motion.div variants={item}>
            <Squiggle />
          </motion.div>
          <motion.p
            variants={item}
            className="text-[15px] md:text-base text-gray-500 max-w-md"
          >
            Real results from real brands who partnered with tiksly.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Section 2: Filters + Featured Case Studies grid ──────────────────── */

function CaseStudiesListing() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      const matchesCategory =
        activeCategory === "All" || study.tag === activeCategory;
      const matchesQuery = study.title
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-3 lg:px-4">
        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-[14px] font-medium border transition-all duration-200 cursor-pointer",
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-[#ECECEC] hover:text-black",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-sm mx-auto mb-16">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            aria-label="Search case studies"
            className="h-11 rounded-full border-gray-200 bg-[#F9F9F9] pl-11 pr-4 text-[15px] focus-visible:border-black focus-visible:ring-black/10"
          />
        </div>

        {/* Featured Case Studies header */}
        <div className="flex items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-black mb-2">
              Featured Case Studies
            </h2>
            <p className="text-gray-500 text-[15px]">
              See how leading brands and fast-growing startups grow with
              tiksly.
            </p>
          </div>
          <Link
            href="#"
            className="hidden sm:inline-block shrink-0 text-[15px] font-medium text-black hover:text-[#0081FB] underline underline-offset-4 decoration-gray-300 hover:decoration-[#0081FB] transition-colors"
          >
            View all
          </Link>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <CaseStudyCard study={study} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredStudies.length === 0 && (
          <div className="py-20 text-center text-gray-400 text-[15px]">
            No case studies found. Try a different category or search term.
          </div>
        )}
      </div>
    </section>
  );
}

/* ── Combined export ──────────────────────────────────────────────────── */

export default function CaseStudySections() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesListing />
    </>
  );
}
