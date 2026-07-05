import Image from "next/image";

export default function Overview() {
  return (
    <section className="container mx-auto px-3 lg:px-4 pb-16 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950">
            The Tiksly Story
          </h1>
          
          <div className="flex flex-col gap-4 text-zinc-600 text-lg leading-relaxed">
            <p>
              It all started when we noticed something big TikTok Shop was blowing up, 
              but so many brands had no idea how to tap into its full potential. We knew 
              this wasn&apos;t just another trend; it was the future of eCommerce. So, we built 
              Tiksly.
            </p>
            <p>
              Now, with a team of 20+ experts, we help brands not just sell on TikTok 
              Shop but thrive. We handle everything optimizing product listings, creating 
              scroll-stopping videos, running high performing campaigns so our clients 
              can focus on growing their business while we drive the sales.
            </p>
            <p>
              What makes us different? We don&apos;t do cookie-cutter strategies. We test, 
              tweak, and scale what actually works. We&apos;re not just another agency we&apos;re 
              partners in growth, obsessed with helping brands win in this fast-moving 
              space.
            </p>
            <p>
              And honestly? We&apos;re just getting started.
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative w-full aspect-4/3 lg:aspect-auto lg:h-[500px]">
          {/* Subtle dot pattern background accent (mimicking the design reference) */}
          <div className="absolute -top-6 -left-3 lg:-left-6 w-32 h-32 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] bg-size-[16px_16px] z-0 opacity-50" />
          <div className="absolute -bottom-6 -right-3 lg:-right-6 w-32 h-32 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] bg-size-[16px_16px] z-0 opacity-50" />
          
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-zinc-50 border border-zinc-100 shadow-sm z-10 p-2 md:p-4">
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-white">
              <Image 
                src="/about-us/1.webp" 
                alt="The Tiksly Team" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
