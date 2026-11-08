"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understanding your business goals, target users, and project requirements in depth.",
  },
  {
    num: "02",
    title: "Plan",
    desc: "Defining the project scope, tech stack, timeline, and deliverables.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Creating wireframes and high-fidelity UI/UX designs that prioritize usability.",
  },
  {
    num: "04",
    title: "Develop",
    desc: "Building the full application with clean, scalable, and maintainable code.",
  },
  {
    num: "05",
    title: "Test",
    desc: "Thorough testing across devices and browsers to ensure everything works flawlessly.",
  },
  {
    num: "06",
    title: "Deploy",
    desc: "Launching your project to production with optimized performance and security.",
  },
  {
    num: "07",
    title: "Support",
    desc: "Providing post-launch support, updates, and future enhancements as needed.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 lg:px-8 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] text-blue-400 uppercase">
            Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mt-2 uppercase">
            HOW I WORK
          </h2>
        </motion.div>

        {/* Desktop — Horizontal Steps */}
        <div className="hidden lg:block">
          <div className="flex gap-0 relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-0 right-0 h-px bg-gray-700" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex-1 relative group"
              >
                {/* Dot */}
                <div className="w-3 h-3 rounded-full bg-blue-500 relative z-10 mb-6 group-hover:scale-150 transition-transform duration-200" />

                <div className="pr-4">
                  <div className="text-[11px] font-bold text-gray-500 mb-1">{step.num}</div>
                  <h3 className="text-base font-black text-white uppercase tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile — Vertical Steps */}
        <div className="lg:hidden grid gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className="text-[11px] font-bold text-blue-500 mb-2">{step.num}</div>
                {i < steps.length - 1 && (
                  <div className="flex-1 w-px bg-gray-700 mt-1" />
                )}
              </div>
              <div className="pb-6">
                <h3 className="text-base font-black text-white uppercase tracking-tight mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
