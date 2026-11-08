"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    tier: "WEBSITES",
    range: "₱12K – ₱55K",
    desc: "Professional web presence for businesses of all sizes.",
    features: [
      "Company / Landing Pages",
      "Portfolio Websites",
      "E-commerce Stores",
      "Responsive Mobile Design",
      "SEO-ready Structure",
      "CMS Integration",
    ],
    cta: "Request Quote",
    highlight: false,
  },
  {
    tier: "BUSINESS SYSTEMS",
    range: "₱25K – ₱65K",
    desc: "Custom web applications to digitize and manage your operations.",
    features: [
      "Inventory Systems",
      "Booking & Scheduling",
      "CRM & Sales Pipelines",
      "HR & Payroll Tools",
      "Dashboard & Reports",
      "User Role Management",
    ],
    cta: "Request Quote",
    highlight: true,
  },
  {
    tier: "ADVANCED SYSTEMS",
    range: "₱85K – ₱250K+",
    desc: "Enterprise-grade platforms built for scale and complexity.",
    features: [
      "ERP Systems",
      "Multi-branch Management",
      "SaaS Platform Architecture",
      "Multi-tenant Databases",
      "API Integrations",
      "Custom Workflows",
    ],
    cta: "Request Quote",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] text-blue-600 uppercase">
            Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#1A1A1A] mt-2 uppercase">
            TRANSPARENT RATES
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl">
            All prices are starting rates. Final quotations depend on functionality, project scope, integrations, and business requirements.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.tier}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-2xl p-7 flex flex-col gap-5 ${
                plan.highlight
                  ? "bg-[#1A1A1A] text-white ring-2 ring-blue-500"
                  : "bg-[#F3F4F6] text-[#1A1A1A]"
              }`}
            >
              <div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest ${
                    plan.highlight ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {plan.tier}
                </span>
                <div
                  className={`text-3xl font-black mt-2 tracking-tight ${
                    plan.highlight ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  {plan.range}
                </div>
                <p
                  className={`text-sm mt-2 leading-relaxed ${
                    plan.highlight ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2
                      size={14}
                      className={plan.highlight ? "text-blue-400" : "text-green-500"}
                    />
                    <span className={plan.highlight ? "text-gray-300" : "text-gray-700"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center py-3 px-6 rounded-full font-semibold text-sm uppercase tracking-widest transition-colors ${
                  plan.highlight
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-[#1A1A1A] text-white hover:bg-gray-700"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-blue-600 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">
              Not sure which tier fits?
            </h3>
            <p className="text-blue-200 text-sm mt-1">
              Let&apos;s discuss your requirements and I&apos;ll give you an accurate quote.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-blue-50 transition-colors"
          >
            REQUEST A QUOTATION
          </a>
        </motion.div>
      </div>
    </section>
  );
}
