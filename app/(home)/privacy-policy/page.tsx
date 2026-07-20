import { Metadata } from "next";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";
import {
  ShieldCheck,
  FileText,
  Lock,
  Cookie,
  UserCheck,
  ExternalLink,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Tiksly",
  description:
    "Learn how Tiksly collects, uses, discloses, and safeguards your personal information when visiting our website and using our services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="pt-28 md:pt-36 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#BCF96A] text-black text-xs md:text-sm font-bold rounded-full mb-4 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-black" />
              <span>Effective Date: 24-03-2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Welcome to Tiksly. Your privacy is important to us, and we are committed to protecting your personal information.
            </p>
          </div>

          {/* Introduction Card */}
          <div className="bg-[#F9F9F9] border border-gray-100 rounded-3xl p-6 md:p-8 mb-10 shadow-xs">
            <h2 className="text-lg font-bold text-black mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5 text-black" />
              Introduction
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </div>

          {/* Sections List */}
          <div className="flex flex-col gap-10">
            {/* Section 1 */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  1
                </span>
                Information We Collect
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                We collect different types of information to provide and improve our services to you:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <h3 className="font-semibold text-black text-sm mb-1">Personal Information</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Name, email address, phone number, and payment details when you engage with our services.
                  </p>
                </li>
                <li className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <h3 className="font-semibold text-black text-sm mb-1">Non-Personal Information</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Browser type, IP address, and cookies to enhance user experience.
                  </p>
                </li>
                <li className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <h3 className="font-semibold text-black text-sm mb-1">User Content</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Any information you voluntarily provide through communication, feedback, or inquiries.
                  </p>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  2
                </span>
                How We Use Your Information
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                We use the collected information for the following business purposes:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Provide and improve our services.",
                  "Process payments and transactions securely.",
                  "Respond to your inquiries and provide customer support.",
                  "Send promotional offers and updates (you can opt out anytime).",
                  "Ensure compliance with legal and regulatory requirements.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-[#BCF96A] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  3
                </span>
                Sharing of Information
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                We do not sell or rent your personal information. However, we may share your data with:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <h3 className="font-semibold text-black text-sm mb-1">Service Providers</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Third-party partners assisting in payment processing, analytics, and customer support.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <h3 className="font-semibold text-black text-sm mb-1">Legal Authorities</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    If required by law, to comply with legal processes or protect our rights.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <h3 className="font-semibold text-black text-sm mb-1">Business Transfers</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    In case of a merger, acquisition, or asset sale, your information may be transferred.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  4
                </span>
                <span className="flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-black" />
                  Cookies and Tracking Technologies
                </span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Tiksly uses cookies and tracking tools to enhance your experience. You can manage or disable cookies through your browser settings, though some website functionalities may be affected.
              </p>
            </section>

            {/* Section 5 */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  5
                </span>
                <span className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-black" />
                  Data Security
                </span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We implement security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet is 100% secure.
              </p>
            </section>

            {/* Section 6 */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  6
                </span>
                <span className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-black" />
                  Your Rights and Choices
                </span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Access, update, or delete your personal data.",
                  "Opt out of marketing communications.",
                  "Request information on how your data is being used.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-[#BCF96A] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 7 */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  7
                </span>
                <span className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-black" />
                  Third-Party Links
                </span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Our website may contain links to third-party sites. We are not responsible for their privacy policies or practices. Please review their policies before sharing any information.
              </p>
            </section>

            {/* Section 8 */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  8
                </span>
                <span className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-[#BCF96A]" />
                  Changes to This Privacy Policy
                </span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We may update this Privacy Policy periodically. Any changes will be posted on this page, and we encourage you to review it regularly.
              </p>
            </section>

            {/* Section 9: Contact Us */}
            <section className="bg-black text-white rounded-3xl p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-black mb-2 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#BCF96A] text-black flex items-center justify-center text-base font-black shrink-0">
                  9
                </span>
                Contact Us
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-8">
                If you have any questions about this Privacy Policy or your data rights, please contact us:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Communication details */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#BCF96A]" />
                    </div>
                    <a href="tel:+447412066394" className="hover:underline font-medium text-white">
                      +44 7412 066394
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#BCF96A]" />
                    </div>
                    <a href="mailto:sales@tiksly.com" className="hover:underline font-medium text-white">
                      sales@tiksly.com
                    </a>
                  </div>
                </div>

                {/* Office locations */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3 text-xs md:text-sm">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#BCF96A]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-white">Pakistan Office</span>
                      <span className="text-gray-400">Sarwar Colony Tandlianwala, Punjab, Pakistan</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs md:text-sm">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="w-4 h-4 text-[#BCF96A]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-white">USA Office</span>
                      <span className="text-gray-400">1001 S Main St, Suite 500, Kalispell, MT 59901, USA</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
