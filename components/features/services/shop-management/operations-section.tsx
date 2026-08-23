import { ShieldCheck, Package, Users, FileText, Sparkles } from "lucide-react";

const OperationsSection = () => {
  return (
    <section className="bg-white pb-14 md:pb-18">
      <div className="container mx-auto">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] text-black mb-6">
            Full seller center operations
          </h2>
          <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed max-w-3xl mx-auto">
            Tired of logging into the Seller Center, checking compliance
            strikes, mapping inventory levels, and reviewing creator messages?
            We take the entire operations checklist off your plate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-black">
              Compliance & Policy
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              We monitor account health 24/7, respond to policy violation
              strikes, handle category approvals, and ensure your TikTok Shop
              remains in good standing.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-black">
              Product & Catalog Setup
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Optimized descriptions with keywords, high-quality images, product
              variant setups, mapping category tags, and commission rate
              integrations.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-truck-icon lucide-truck"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-black">
              Logistics & 3PL Sync
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Syncing inventory levels from Shopify/ERP, tracking shipping
              timeframes, managing courier connections, and solving courier
              tracking update errors.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-black">
              Affiliate Inbox Ops
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Triage chat messages from creators requesting free product
              samples. Filter out low-value requests and ship samples to
              creators that generate ROI.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-black">
              Invoice & Tax Setup
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Handling tax settings inside Seller Center, managing customer
              invoices, resolving dispute tickets, and filing payouts reports.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-[#F9F9F9] border border-gray-100 p-8 rounded-3xl flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#BCF96A]/80 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-black">
              Live & Ads Integration
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Scheduling streaming hosts, linking showcase accounts, launching
              Shopping Ads, and optimizing campaign budgets for maximum
              conversion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
