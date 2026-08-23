import Image from "next/image";
import { Play } from "lucide-react";

export default function OurAgency() {
  return (
    <section className="bg-white pb-14 md:pb-18 overflow-hidden">
      <div className="container mx-auto">
        {/* Header Grid */}
        <div className="text-center mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-6">
            Get To Know More About Tiksly
          </h2>
          <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto">
            Dive into our story and expertise. Explore our values, achievements,
            and commitment to exceptional service. Get acquainted with us today.
          </p>
        </div>

        {/* Video Thumbnail Container */}
        <div className="relative w-full aspect-video md:aspect-21/9 lg:aspect-2.5/1 rounded-[2rem] overflow-hidden group">
          <a
            href="https://www.youtube.com/watch?v=Epp5qkyXY6s"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full relative"
          >
            {/* Background Image */}
            <Image
              src="/about-us/Tiktok-shop-agency.webp"
              alt="Tiksly Agency Video"
              fill
              className="object-cover"
              priority
            />

            {/* Dark Overlay for better button contrast on hover */}
            <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Play
                  className="w-6 h-6 md:w-8 md:h-8 text-zinc-900 ml-1.5"
                  fill="currentColor"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
