"use client";

import { motion } from "framer-motion";

const techGroups = [
  {
    label: "Design",
    items: ["Figma", "Framer", "Webflow"],
    color: "bg-pink-50 text-pink-700 border-pink-200",
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "HTML/CSS", "JavaScript", "TypeScript"],
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    label: "Backend",
    items: ["Supabase", "PostgreSQL", "Sanity CMS"],
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    label: "Deployment",
    items: ["Vercel", "GitHub"],
    color: "bg-gray-100 text-gray-700 border-gray-200",
  },
  {
    label: "Automation",
    items: ["n8n", "Zapier"],
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    label: "AI Tools",
    items: ["ChatGPT", "Claude"],
    color: "bg-violet-50 text-violet-700 border-violet-200",
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] text-blue-600 uppercase">
            Technology
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#1A1A1A] mt-2 uppercase">
            TOOLS &amp; TECH STACK
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg">
            Modern tools and frameworks used to build robust, scalable digital products.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.07 }}
              className="flex items-start gap-6"
            >
              <div className="w-24 flex-shrink-0 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  {group.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`text-sm font-semibold px-4 py-2 rounded-full border ${group.color}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
