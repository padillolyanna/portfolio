"use client";

import { motion } from "framer-motion";

const highlights = [
  "UI/UX Design",
  "Frontend Development",
  "Backend Integration",
  "Database Management",
  "Business Process Digitization",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] font-semibold tracking-[0.2em] text-blue-600 uppercase">
              About
            </span>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#1A1A1A] mt-2 uppercase leading-tight">
              DESIGN-MINDED. TECHNOLOGY-DRIVEN.
            </h2>
            <p className="text-gray-600 mt-6 text-base leading-relaxed">
              I combine UI/UX design and web development to create intuitive digital
              experiences and practical business systems.
            </p>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              Based in the Philippines, I work with local businesses and startups to
              turn complex operational challenges into clean, efficient digital solutions.
              Every project is built from scratch — tailored to your workflow, your team,
              and your growth goals.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <span
                  key={h}
                  className="bg-white border border-gray-200 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full"
                >
                  {h}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-[#1A1A1A] rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-8 gap-3 p-4">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white rounded-full" />
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black mb-6">
                  LP
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
                  Independent Developer
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Web Developer · UI/UX Designer · Philippines
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Systems Built", val: "26+ Types" },
                    { label: "Specialization", val: "Full-Stack" },
                    { label: "Location", val: "Philippines" },
                    { label: "Availability", val: "Open to Work" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/5 rounded-xl p-3">
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest">{item.label}</div>
                      <div className="text-sm font-bold mt-0.5">{item.val}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-[11px] text-green-400 font-semibold uppercase tracking-widest">
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
