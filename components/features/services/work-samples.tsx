"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Same Cloudflare Stream account used across the site */
const CLOUDFLARE_CUSTOMER_CODE = "customer-wyu58i20r3viufsr";

interface WorkSample {
  videoId: string;
  brand: string;
  brandColor: string;
  tag: string;
  name: string;
  location: string;
  flag: string;
  avatar: string;
}

const SAMPLES: WorkSample[] = [
  { videoId: "ce3082f8b2b1151137c5b9a82aa9b342", brand: "Eterika", brandColor: "bg-pink-400", tag: "B-roll", name: "Veronika", location: "Zagreb", flag: "🇳🇱", avatar: "/Chelsea.webp" },
  { videoId: "ced34f0b20b4edf473a0055a73b9d71b", brand: "Mini Melts", brandColor: "bg-purple-400", tag: "Testimonial", name: "TNajah", location: "Orlando", flag: "🇺🇸", avatar: "/Brie_Tennessee.webp" },
  { videoId: "11d8f8e7bae109fa8d663716d9796058", brand: "Shape Republic", brandColor: "bg-orange-400", tag: "Testimonial", name: "Stefano", location: "Bologna", flag: "🇮🇹", avatar: "/Jonah_Nebraska.webp" },
  { videoId: "472c8a404f7d396a08417a00d5507f1c", brand: "GLAS", brandColor: "bg-cyan-400", tag: "Unboxing", name: "Marthe", location: "Kråkerøy", flag: "🇳🇴", avatar: "/Alexis_California.webp" },
  { videoId: "0aaea0305aa72881f52d75978391efb9", brand: "WOW TEA", brandColor: "bg-amber-400", tag: "Testimonial", name: "Mayela", location: "Madrid", flag: "🇪🇸", avatar: "/josh.webp" },
  { videoId: "a4e66c51a879a405eba452d44017299b", brand: "Gizzmo", brandColor: "bg-blue-400", tag: "Testimonial", name: "Sofiya", location: "Čestlice", flag: "🇨🇿", avatar: "/Chelsea.webp" },
  { videoId: "8880a052180933af96cb96020e560c85", brand: "Top Shop", brandColor: "bg-rose-400", tag: "Testimonial", name: "Julia", location: "Władysławowo", flag: "🇵🇱", avatar: "/Brie_Tennessee.webp" },
  { videoId: "79e7cf49cdb4ab1729369b36e5afd8cc", brand: "Maxiblock", brandColor: "bg-teal-400", tag: "B-roll", name: "Avy", location: "Arcen", flag: "🇳🇱", avatar: "/Jonah_Nebraska.webp" },
];

const DISPLAY_SAMPLES = [...SAMPLES, ...SAMPLES];

/** Only mounts the Cloudflare Stream iframe once the card scrolls into view — avoids autoplaying every video at once */
function LazyStreamCard({ videoId, caption }: { videoId: string; caption: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || inView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px", threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {inView ? (
        <iframe
          src={`https://${CLOUDFLARE_CUSTOMER_CODE}.cloudflarestream.com/${videoId}/iframe?autoplay=true&muted=true&loop=true&controls=false&preload=metadata`}
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="lazy"
          title={caption}
        />
      ) : (
        <Image
          src={`https://${CLOUDFLARE_CUSTOMER_CODE}.cloudflarestream.com/${videoId}/thumbnails/thumbnail.jpg?time=1s`}
          alt={caption}
          fill
          unoptimized
          className="object-cover"
        />
      )}
    </div>
  );
}

export default function WorkSamples() {
  const swiperTrackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-3 lg:px-4">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-12 text-center"
        >
          <p className="text-[13px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] 2xl:text-[52px] font-black uppercase tracking-tighter text-black leading-[1.05]">
            Our Work{" "}
            <span className="inline-flex items-center bg-[#BCF96A] text-black rounded-full px-4 py-1 font-black">
              Samples
            </span>
          </h2>
          <p className="text-gray-500 text-[15px] mt-4 max-w-lg mx-auto leading-relaxed">
            Real creator videos, real results. A glimpse of what we&apos;ve produced for brands like yours.
          </p>
        </motion.div>
      </div>

      {/* Edge-to-edge horizontal filmstrip */}
      <div
        ref={swiperTrackRef}
        className="w-full overflow-x-auto no-scrollbar"
      >
        <div className="flex w-max">
          {DISPLAY_SAMPLES.map((sample, i) => (
            <div
              key={`${sample.brand}-${i}`}
              className="relative shrink-0 w-[190px] md:w-[220px] border-r border-gray-100 bg-white"
            >
              {/* Video area */}
              <div className="relative aspect-[3/4] w-full bg-slate-900 overflow-hidden">
                <LazyStreamCard videoId={sample.videoId} caption={`${sample.brand} - ${sample.tag}`} />

                {/* Top scrim for text contrast */}
                <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-black/55 to-transparent pointer-events-none z-10" />

                {/* Brand badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 z-20">
                  <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0", sample.brandColor)}>
                    {sample.brand.charAt(0)}
                  </div>
                  <span className="text-white text-[13px] font-semibold tracking-tight drop-shadow-sm whitespace-nowrap">
                    {sample.brand}
                  </span>
                </div>

                {/* Bottom tag */}
                <div className="absolute bottom-3 left-3 bg-white/95 px-2.5 py-1 rounded-md z-20">
                  <span className="text-[10px] font-extrabold text-black uppercase tracking-tight">
                    {sample.tag}
                  </span>
                </div>
              </div>

              {/* Profile strip below */}
              <div className="flex items-center gap-2 px-3 py-3 bg-white">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 relative bg-slate-50 shrink-0">
                  <Image src={sample.avatar} alt={sample.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[13px] font-bold text-black leading-none truncate">
                    {sample.name}
                  </span>
                  <div className="flex items-center gap-1 mt-1 text-[10px] text-gray-400 font-semibold leading-none">
                    <MapPin className="w-2.5 h-2.5 shrink-0" />
                    <span className="truncate max-w-[80px]">{sample.location}</span>
                    <span className="shrink-0">{sample.flag}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
