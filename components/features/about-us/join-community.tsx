import Image from "next/image";
import { Button } from "@/components/ui/button";

const communityPlatforms = [
  {
    name: "Facebook",
    buttonText: "Join Facebook",
    src: "/about-us/community/Facebook-1.webp",
    link: "#",
  },
  {
    name: "LinkedIn",
    buttonText: "Join LinkedIn",
    src: "/about-us/community/Linkedin-page-2.webp",
    link: "#",
  },
  {
    name: "YouTube",
    buttonText: "Join YouTube",
    src: "/about-us/community/Youtube-3.webp",
    link: "#",
  },
];

export default function JoinCommunity() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-3 lg:px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-6">
            Join the Tiksly Community
          </h2>
          <p className="text-zinc-600 max-w-3xl mx-auto text-base md:text-lg">
            Want to stay ahead of TikTok Shop trends? Our YouTube Channel and Facebook Group are where the magic happens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {communityPlatforms.map((platform, index) => (
            <div 
              key={index}
              className="bg-[#F4F8FA] rounded-[2rem] p-6 flex flex-col h-full border border-slate-100"
            >
              {/* Image Container */}
              <div className="w-full relative aspect-4/3 rounded-[1.5rem] overflow-hidden mb-8">
                <Image
                  src={platform.src}
                  alt={`${platform.name} Community`}
                  fill
                  className="object-contain "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Button */}
              <div className="mt-auto flex justify-center pb-2">
                <Button 
                  asChild
                  className="bg-[#BCF96A] text-black  font-semibold tracking-wide rounded-full px-10 py-6 text-sm  w-fit"
                >
                  <a className="hover:bg-[#BCF96A]/80! hover:text-black!" href={platform.link} target="_blank" rel="noopener noreferrer">
                    {platform.buttonText}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
