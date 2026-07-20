import { Metadata } from "next";
import NavBar from "@/components/features/nav-bar";
import FooterSection from "@/components/features/footer-section";
import {
  FileText,
  UserCheck,
  CreditCard,
  RotateCcw,
  ShieldAlert,
  ExternalLink,
  Scale,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  Building2,
  Globe,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions - Tiksly",
  description:
    "Read the official Terms and Conditions governing your use of Tiksly's website, platform, and services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="pt-28 md:pt-36 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#BCF96A] text-black text-xs md:text-sm font-bold rounded-full mb-4 shadow-xs">
              <FileText className="w-4 h-4 text-black" />
              <span>Effective Date: 24-03-2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Please read these Terms and Conditions carefully before using our website and services.
            </p>
          </div>

          {/* Sections List */}
          <div className="flex flex-col gap-10">
            {/* Section 1: Introduction */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  1
                </span>
                Introduction
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Welcome to Tiksly. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to comply with these terms. If you do not agree, please refrain from using our services.
              </p>
            </section>

            {/* Section 2: Definitions */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  2
                </span>
                Definitions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <h3 className="font-semibold text-black text-sm mb-1">Company</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    “Company,” “we,” “our,” or “us” refers to Tiksly.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <h3 className="font-semibold text-black text-sm mb-1">User</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    “User,” “you,” or “your” refers to anyone accessing our services.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <h3 className="font-semibold text-black text-sm mb-1">Services</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    “Services” refers to any features, products, or solutions offered by Tiksly.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Use of Services */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  3
                </span>
                <span className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-black" />
                  Use of Services
                </span>
              </h2>
              <ul className="space-y-2.5">
                {[
                  "You must be at least 18 years old to use our services.",
                  "You agree not to misuse, alter, or disrupt our platform in any way.",
                  "Unauthorized access, reverse engineering, or distribution of our content is strictly prohibited.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-[#BCF96A] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 4: Account Registration */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  4
                </span>
                <span className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-black" />
                  Account Registration
                </span>
              </h2>
              <ul className="space-y-2.5">
                {[
                  "To access certain features, you may need to create an account.",
                  "You are responsible for maintaining the confidentiality of your login credentials.",
                  "We reserve the right to suspend or terminate accounts that violate these terms.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-[#BCF96A] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 5: Payments and Billing */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  5
                </span>
                <span className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-black" />
                  Payments and Billing
                </span>
              </h2>
              <ul className="space-y-2.5">
                {[
                  "All payments for services must be made in accordance with the pricing structure displayed on our website.",
                  "We use secure third-party payment processors, and we do not store payment details.",
                  "Tiksly reserves the right to update pricing at any time with prior notice.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-[#BCF96A] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 6: Refund and Cancellation Policy */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  6
                </span>
                <span className="flex items-center gap-2">
                  <RotateCcw className="w-5 h-5 text-black" />
                  Refund and Cancellation Policy
                </span>
              </h2>
              <ul className="space-y-2.5">
                {[
                  "Refund requests will be considered on a case-by-case basis.",
                  "Subscription-based services can be canceled at any time, but fees already paid are non-refundable.",
                  "If a user violates our terms, we reserve the right to terminate access without a refund.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-[#BCF96A] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 7: Intellectual Property */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  7
                </span>
                Intellectual Property
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                All content on this website, including text, graphics, logos, and software, is the property of Tiksly.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                You may not copy, distribute, or modify our content without explicit permission.
              </p>
            </section>

            {/* Section 8: Third-Party Links */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  8
                </span>
                <span className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-black" />
                  Third-Party Links
                </span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                Our website may contain links to external websites. We do not endorse or control their content.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Users are advised to review third-party privacy policies and terms before engaging with external sites.
              </p>
            </section>

            {/* Section 9: Limitation of Liability */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  9
                </span>
                <span className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-black" />
                  Limitation of Liability
                </span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                We do not guarantee that our services will be uninterrupted or error-free.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Tiksly is not liable for any direct, indirect, or incidental damages resulting from your use of our services.
              </p>
            </section>

            {/* Section 10: Indemnification */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  10
                </span>
                Indemnification
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                You agree to indemnify and hold Tiksly harmless from any claims, losses, or damages arising from your violation of these terms.
              </p>
            </section>

            {/* Section 11: Governing Law */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  11
                </span>
                <span className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-black" />
                  Governing Law
                </span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                These terms are governed by the laws of Pakistan and the United States, depending on the applicable jurisdiction.
              </p>
            </section>

            {/* Section 12: Changes to Terms */}
            <section className="border-b border-gray-100 pb-8">
              <h2 className="text-xl md:text-2xl font-bold text-black mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-gray-100 text-black flex items-center justify-center text-sm font-extrabold shrink-0">
                  12
                </span>
                <span className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-black" />
                  Changes to Terms
                </span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                We reserve the right to update these Terms and Conditions at any time.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Continued use of our services after changes signifies acceptance of the updated terms.
              </p>
            </section>

            {/* Section 13: Contact Information */}
            <section className="bg-black text-white rounded-3xl p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-black mb-2 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#BCF96A] text-black flex items-center justify-center text-base font-black shrink-0">
                  13
                </span>
                Contact Information
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-8">
                For any questions regarding these terms, please contact us:
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
                      <span className="font-semibold text-white">Pakistan Address</span>
                      <span className="text-gray-400">Sarwar Colony, Tandlianwala, Punjab, Pakistan</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs md:text-sm">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="w-4 h-4 text-[#BCF96A]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-white">USA Address</span>
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
