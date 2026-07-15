"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronDown, CalendarDays, MessageSquare, CheckCircle } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type FormData = { name: string; email: string; phone: string; message: string };
type FormErrors = Partial<FormData>;

function validate(form: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Full name is required.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email address.";
  if (!form.phone.trim()) errors.phone = "Phone number is required.";
  else if (!/^\+?[\d\s\-().]{7,20}$/.test(form.phone)) errors.phone = "Enter a valid phone number.";
  if (!form.message.trim()) errors.message = "Please write a message.";
  else if (form.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function BookCall() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const closeModal = () => {
    setModalOpen(false);
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setTouched({});
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate({ ...form }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) setErrors(validate(updated));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border text-[14px] text-black placeholder-gray-400 focus:outline-none transition-colors bg-[#F9F9F9] ${
      touched[field] && errors[field] ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-black"
    }`;

  return (
    <>
      <section className="bg-white py-14 md:py-20 overflow-hidden">
        <div className="container mx-auto px-3 lg:px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
            <Card className="bg-[#B4F656] bg-[radial-gradient(71.9%_62.07%_at_50%_50%,rgba(255,255,255,0)_0%,rgba(253,249,249,0.6)_100%)] border-none rounded-[2.5rem] p-6 md:p-12 lg:p-16 relative overflow-visible">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left image */}
                <div className="relative flex items-center justify-center w-full max-w-120 mx-auto">
                  <motion.div variants={itemVariants} className="w-full z-10">
                    <Image src="/demo.webp" alt="Tom - Tiksly" width={480} height={380} priority className="w-full h-auto object-contain" />
                  </motion.div>
                </div>

                {/* Right copy */}
                <motion.div variants={itemVariants} className="flex flex-col gap-6 text-left max-w-xl lg:max-w-none">
                  <h2 className="text-[28px] md:text-[42px] xl:text-[48px] font-semibold text-[#212120] leading-[1.12] tracking-tight">
                    Want to see Tiksly in action? Get a quick demo.
                  </h2>
                  <p className="text-[14px] md:text-[16px] text-[#212120]/80 font-medium leading-relaxed">
                    Hey, I&apos;m Tom! If you&apos;re curious about Tiksly, let&apos;s hop on a brief demo call. I&apos;ll show you how to turn any product link into instant video briefs and find creators for your category.
                  </p>

                  {/* Dropdown button */}
                  <div className="pt-2">
                    <div
                      className="relative inline-block"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-black text-white rounded-full text-[15px] font-semibold hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95 select-none">
                        Get in Touch
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.18, ease: EASE }}
                            className="absolute left-0 top-full pt-3 z-50 w-64"
                          >
                            <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 p-2 flex flex-col gap-1">
                              <Link
                                href="/get-demo"
                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                              >
                                <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center shrink-0">
                                  <CalendarDays className="w-4 h-4 text-white" />
                                </div>
                                <div className="text-left">
                                  <p className="text-[14px] font-semibold text-black leading-tight">Book a Demo</p>
                                  <p className="text-[12px] text-gray-400 mt-0.5">Schedule a call with our team</p>
                                </div>
                              </Link>

                              <button
                                onClick={() => { setDropdownOpen(false); setModalOpen(true); }}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors w-full text-left"
                              >
                                <div className="w-9 h-9 rounded-xl bg-[#BCF96A] flex items-center justify-center shrink-0">
                                  <MessageSquare className="w-4 h-4 text-black" />
                                </div>
                                <div>
                                  <p className="text-[14px] font-semibold text-black leading-tight">Send an Inquiry</p>
                                  <p className="text-[12px] text-gray-400 mt-0.5">Drop us a message anytime</p>
                                </div>
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg p-7 md:p-8 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-black" />
              </button>

              {!submitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-[22px] font-bold tracking-tight text-black mb-1">Send an Inquiry</h3>
                    <p className="text-gray-500 text-[14px]">Fill in your details and we&apos;ll get back to you within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-black">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        className={inputClass("name")}
                      />
                      {touched.name && errors.name && <p className="text-[12px] text-red-500">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-black">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        className={inputClass("email")}
                      />
                      {touched.email && errors.email && <p className="text-[12px] text-red-500">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-black">Phone Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        className={inputClass("phone")}
                      />
                      {touched.phone && errors.phone && <p className="text-[12px] text-red-500">{errors.phone}</p>}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-black">Message <span className="text-red-500">*</span></label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your brand and goals..."
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        onBlur={() => handleBlur("message")}
                        className={`${inputClass("message")} resize-none`}
                      />
                      {touched.message && errors.message && <p className="text-[12px] text-red-500">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full py-3.5 bg-black text-white rounded-full text-[15px] font-semibold hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] active:scale-95"
                    >
                      Send Inquiry
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center text-center py-8 gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#BCF96A] flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-[22px] font-bold tracking-tight text-black">Inquiry Sent!</h3>
                  <p className="text-gray-500 text-[14px] max-w-xs leading-relaxed">
                    Thanks, <span className="font-semibold text-black">{form.name}</span>! We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-2 px-8 py-3 bg-black text-white rounded-full text-[14px] font-semibold hover:bg-gray-800 transition-all"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
