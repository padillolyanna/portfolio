"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const projectTypes = [
  "Website Development",
  "E-commerce Development",
  "Business Management System",
  "Inventory Management System",
  "Booking & Appointment System",
  "CRM System",
  "HR & Payroll System",
  "Custom Web Application",
  "Other",
];

const budgetRanges = [
  "₱12,000 – ₱25,000",
  "₱25,000 – ₱50,000",
  "₱50,000 – ₱100,000",
  "₱100,000 – ₱200,000",
  "₱200,000+",
  "Not sure yet",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] font-semibold tracking-[0.2em] text-blue-400 uppercase">
              Contact
            </span>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mt-2 uppercase leading-tight">
              LET&apos;S BUILD SOMETHING USEFUL.
            </h2>
            <p className="text-gray-400 mt-6 text-base leading-relaxed">
              Have a project in mind? Tell me about your business and what you need.
              I&apos;ll review your inquiry and get back to you within 24 hours.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { label: "Email", val: "hello@lyannapadillo.com" },
                { label: "Location", val: "Philippines" },
                { label: "Response Time", val: "Within 24 hours" },
                { label: "Availability", val: "Open for new projects" },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest w-28 flex-shrink-0 pt-0.5">
                    {info.label}
                  </span>
                  <span className="text-white text-sm font-medium">{info.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-white/5 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                      <path d="M1.5 6L6 10.5L14.5 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
                  Inquiry Sent!
                </h3>
                <p className="text-gray-400 text-sm">
                  Thank you! I&apos;ll review your project and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Juan Dela Cruz"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="juan@business.com"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Business */}
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                    Business / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Dela Cruz Trading Co."
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Project Type + Budget */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                      Project Type
                    </label>
                    <select
                      required
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                    >
                      <option value="" className="bg-gray-800">Select type…</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-gray-800">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                    >
                      <option value="" className="bg-gray-800">Select range…</option>
                      {budgetRanges.map((r) => (
                        <option key={r} value={r} className="bg-gray-800">
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                    Project Description
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, the problem you're solving, and any specific requirements…"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white py-4 rounded-full font-semibold text-sm uppercase tracking-widest transition-colors"
                >
                  {loading ? (
                    <span>Sending…</span>
                  ) : (
                    <>
                      <Send size={16} />
                      SEND PROJECT INQUIRY
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
