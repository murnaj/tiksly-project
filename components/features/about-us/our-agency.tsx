import Image from "next/image";
import { Play } from "lucide-react";

export default function OurAgency() {
  return (
    <section className="bg-white py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-3 lg:px-4">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-tight">
              Get To Know More About Tiksly
            </h2>
          </div>
          <div>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
              Dive into our story and expertise. Explore our values, achievements, and commitment to exceptional service. Get acquainted with us today.
            </p>
          </div>
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
                <Play className="w-6 h-6 md:w-8 md:h-8 text-zinc-900 ml-1.5" fill="currentColor" />
              </div>
            </div>
          </a>
        </div>
        
      </div>
    </section>
  );
}
