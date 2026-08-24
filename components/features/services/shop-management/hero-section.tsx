import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-[#F6FED9] relative py-24 md:py-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.25fr] gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE }}
              className="flex flex-col gap-5 z-10"
            >
              <div className="inline-flex items-center self-start mb-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="relative p-[1.5px] rounded-full overflow-hidden shadow-xs cursor-default"
                >
                  <motion.div
                    className="absolute -inset-[150%] rounded-full pointer-events-none"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #BCF96A, #0081FB, #FF004F, #7B61FF, #00D084, #00F2EA, #BCF96A)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative bg-white px-3.5 py-1 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#BCF96A] animate-pulse" />
                    <span className="text-[11.5px] md:text-[12px] font-extrabold uppercase tracking-wider text-black">
                      Shop Management
                    </span>
                  </div>
                </motion.div>
              </div>

              <h1 className="text-3xl md:text-[45px] lg:text-[50px] font-black text-black leading-[1.05] tracking-tighter uppercase">
                The complete
                <br />
                <span className="bg-[#BCF96A] text-black px-4 rounded-full inline-block font-black my-1">
                  operations
                </span>{" "}
                engine for tiktok shop
              </h1>

              <p className="text-gray-500 text-[14px] md:text-[16px] leading-relaxed max-w-xl">
                Listing, creators, ads, and live sellin, all run by one team
                that treats your shop like its own money is on the line.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href="/book-a-meeting"
                  className="mb-4 inline-flex items-center gap-2 px-7 py-3 bg-black text-white rounded-full text-[14px] font-semibold hover:bg-black transition-all duration-200 hover:scale-105 active:scale-95 shadow-md text-center justify-center"
                >
                  Get my free growth plan
                </Link>
              </div>

              <div className="border-t border-gray-200/80 pt-8 mt-4">
                <p className="text-[10px] font-black text-neutral-400 tracking-wider uppercase mb-4">
                  explore our services
                </p>

                <div className="flex flex-wrap gap-2 max-w-xl">
                  {[
                    "Shop Management",
                    "Account Creation",
                    "Category Approval",
                    "Violation Removal",
                    "Affiliate & Creator Ops",
                    "UGC Content",
                    "TikTok Shop Ads",
                    "Live Streaming",
                    "Virtual Assistance",
                    "Automation",
                    "3PL & Fulfillment",
                    "Coaching & Consultation",
                  ].map((service, idx) => {
                    return (
                      <div
                        key={idx}
                        className={`flex items-center gap-1.5 px-3.5 py-1.5 bg-white rounded-full text-[12px] md:text-[13px] font-semibold select-none cursor-default transition-colors border border-gray-200/90 text-neutral-700 shadow-2xs hover:border-gray-300`}
                      >
                        <span>{service}</span>
                        <span className="w-4 h-4 rounded-full bg-[#BCF96A] text-black flex items-center justify-center text-[10px] font-black shrink-0">
                          ✓
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <div className="relative flex items-center justify-start w-full my-auto lg:-mr-32 xl:-mr-48 2xl:-mr-72">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
                className="relative w-full lg:w-[135%] xl:w-[145%] 2xl:w-[155%] max-w-none"
              >
                <div
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                  }}
                  className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-gray-200/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] bg-white"
                >
                  <Image
                    src="/TikTok Shop Ads Services banner.jpg"
                    alt="TikTok Shop Operations Dashboard"
                    width={1300}
                    height={850}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />

                  <div className="absolute inset-x-0 bottom-0 h-44 md:h-72 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
      </section>
    </>
  );
};

export default HeroSection;
