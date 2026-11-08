"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { systems } from "@/data/systems";
import { getMockup } from "@/components/mockups";

const featured = systems.slice(0, 6);

const categoryColors: Record<string, string> = {
  Finance: "bg-green-100 text-green-700",
  Inventory: "bg-orange-100 text-orange-700",
  Sales: "bg-blue-100 text-blue-700",
  HR: "bg-purple-100 text-purple-700",
  Services: "bg-pink-100 text-pink-700",
  Education: "bg-teal-100 text-teal-700",
  Advanced: "bg-gray-200 text-gray-700",
};

export default function FeaturedSystems() {
  return (
    <section id="work" className="py-24 px-6 lg:px-8 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] text-blue-600 uppercase">
            Systems Catalog
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#1A1A1A] mt-2 uppercase">
            FEATURED SYSTEMS
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl">
            Pre-built system templates, fully customizable for your business. 26 systems across 7 categories.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {featured.map((system, i) => {
            const MockupComponent = getMockup(system.mockup);
            const categoryColor = categoryColors[system.category] || "bg-gray-100 text-gray-600";

            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Mockup Preview */}
                <div className="h-52 p-4 bg-gray-50 overflow-hidden relative">
                  <div className="origin-top-left scale-[0.65] w-[150%]">
                    <MockupComponent />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColor}`}>
                        {system.category}
                      </span>
                      <h3 className="font-bold text-base text-[#1A1A1A] mt-2 leading-tight">
                        {system.name}
                      </h3>
                    </div>
                    <span className="text-blue-600 font-bold text-sm flex-shrink-0 pt-1">
                      {system.price}
                    </span>
                  </div>

                  <ul className="space-y-1 mb-4 flex-1">
                    {system.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={12} className="text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/catalog"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-blue-600 hover:text-blue-800 transition-colors mt-auto"
                  >
                    View Details <ArrowUpRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-14"
        >
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-gray-700 transition-colors"
          >
            View All 26 Systems <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
