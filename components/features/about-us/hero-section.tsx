import { Play } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section className="container mx-auto px-3 lg:px-4 pb-16 md:pb-20">
      <div className="relative bg-[#0a0a0a] rounded-[2rem] overflow-hidden p-6 sm:p-10 md:p-14 lg:p-20 text-white">
        {/* Subtle background glows */}
        <div className="absolute top-0 right-0 w-75 h-75 lg:w-200 lg:h-200 bg-[#28171E] blur-[100px] lg:blur-[160px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 opacity-80" />
        <div className="absolute bottom-0 right-0 lg:right-20 w-75 h-75 lg:w-200 lg:h-200 bg-[#181628] blur-[100px] lg:blur-[160px] rounded-full pointer-events-none translate-y-1/3 opacity-80" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Top Pill */}
          <div className="mb-6 md:mb-8">
            <span className="inline-block bg-[#BCF96A] text-black text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
              Our Story
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold tracking-tighter text-white max-w-210 leading-[1.05] mb-6 md:mb-8">
            We don&apos;t post videos. We build <span className="text-[#BCF96A]">TikTok Shops that print money.</span>
          </h2>

          {/* Description */}
          <p className="text-zinc-400 text-lg sm:text-xl max-w-160 leading-relaxed mb-16 md:mb-24">
            Brands were sitting on a goldmine and had no clue how to dig it out. So we built Tiksly, the full-stack TikTok Shop agency behind seven-figure shops. And we&apos;re just getting started.
          </p>

          {/* Bottom Section: Stats & Button */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10 lg:gap-4 mt-auto">
            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-20">
              <div className="flex flex-col gap-1.5">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">$1.4M+</span>
                <span className="text-zinc-400 text-sm sm:text-sm">GMV driven for one brand</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">800+</span>
                <span className="text-zinc-400 text-sm sm:text-sm">brands trusted us</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">US &bull; UK</span>
                <span className="text-zinc-400 text-sm sm:text-sm">TSP verified</span>
              </div>
            </div>

            {/* Video Button */}
            <button className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-full px-5 py-2.5 text-xs sm:text-sm text-zinc-300 w-fit">
              <Play className="w-3.5 h-3.5 fill-zinc-300 text-zinc-300" />
              Real footage of our team & creators
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
