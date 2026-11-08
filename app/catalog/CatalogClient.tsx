"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { systems, categories } from "@/data/systems";
import { getMockup } from "@/components/mockups";

const categoryColors: Record<string, string> = {
  Finance: "bg-green-100 text-green-700",
  Inventory: "bg-orange-100 text-orange-700",
  Sales: "bg-blue-100 text-blue-700",
  HR: "bg-purple-100 text-purple-700",
  Services: "bg-pink-100 text-pink-700",
  Education: "bg-teal-100 text-teal-700",
  Advanced: "bg-gray-200 text-gray-700",
};

export default function CatalogClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? systems
      : systems.filter((s) => s.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-12">
        <span className="text-[11px] font-semibold tracking-[0.2em] text-blue-600 uppercase">
          26 Systems
        </span>
        <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-[#1A1A1A] mt-2 uppercase">
          SYSTEM CATALOG
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl text-base">
          Ready-to-deploy business web applications across 7 categories. Each system is fully
          customizable for your specific business requirements.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 sticky top-16 py-4 bg-white z-10 -mx-6 px-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-widest transition-all duration-200 ${
              activeCategory === cat
                ? "bg-[#1A1A1A] text-white"
                : "bg-[#F3F4F6] text-gray-500 hover:bg-gray-200"
            }`}
          >
            {cat}
            {cat !== "All" && (
              <span className="ml-1.5 text-[9px] opacity-60">
                {systems.filter((s) => s.category === cat).length}
              </span>
            )}
          </button>
        ))}
        <span className="ml-auto self-center text-[11px] text-gray-400 uppercase tracking-widest">
          {filtered.length} system{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* System Cards Grid */}
      <AnimatePresence mode="popLayout">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((system) => {
            const MockupComponent = getMockup(system.mockup);
            const categoryColor =
              categoryColors[system.category] || "bg-gray-100 text-gray-600";

            return (
              <motion.div
                key={system.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col group"
              >
                {/* Mockup Preview */}
                <div className="h-52 p-4 bg-gray-50 overflow-hidden relative">
                  <div className="origin-top-left scale-[0.65] w-[150%]">
                    <MockupComponent />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="flex-1 min-w-0">
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mb-2 ${categoryColor}`}
                      >
                        {system.category}
                      </span>
                      <h3 className="font-black text-base text-[#1A1A1A] leading-tight">
                        {system.name}
                      </h3>
                    </div>
                    <span className="text-blue-600 font-black text-sm flex-shrink-0 pt-6">
                      {system.price}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {system.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-green-500 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors duration-200"
                  >
                    View Details <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </AnimatePresence>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 bg-[#1A1A1A] rounded-2xl p-10 text-center"
      >
        <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400">
          Custom Requirements?
        </span>
        <h2 className="text-3xl font-black text-white uppercase tracking-tight mt-2 mb-3">
          DON&apos;T SEE WHAT YOU NEED?
        </h2>
        <p className="text-gray-400 text-base mb-8 max-w-md mx-auto">
          Every system is fully customizable. If your business has unique requirements,
          let&apos;s build something tailored from scratch.
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest transition-colors"
        >
          Request Custom System <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </div>
  );
}
