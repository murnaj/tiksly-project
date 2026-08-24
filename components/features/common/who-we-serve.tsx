import { Sparkles, RefreshCw, Building2, Clock } from "lucide-react";

const WhoWeServe = () => {
  return (
    <section className="pb-14 md:pb-18 bg-gradient-to-b from-white via-[#F6FED9] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-6">
            Who we set shops up for
          </h2>
          <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto">
            If you want to sell on TikTok Shop but the setup is standing in your way, this is for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-black">
              Brand new sellers
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Don&apos;t know the process and don&apos;t want to get it wrong
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
              <RefreshCw className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-black">
              Rejected applicants
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Verification keeps failing on your own
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
              <Building2 className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-black">
              Brands entering TikTok
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Want a clean, compliant setup from day one
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
              <Clock className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-black">
              Busy owners
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              No time to figure out the setup themselves
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-[15px]">
            Not sure where to start? <a href="#contact" className="text-[#BCF96A] font-medium hover:underline cursor-pointer">Ask us on the call</a>, we&apos;ll tell you exactly what&apos;s needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
