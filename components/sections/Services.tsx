"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, BarChart3, Package, Users, Code2 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    price: "Starting at ₱12,000",
    desc: "Responsive, fast, and visually stunning websites built for performance and conversions.",
    tags: ["Landing Pages", "Company Sites", "Portfolios"],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    mockupBars: [
      { w: "80%", color: "bg-blue-300" },
      { w: "60%", color: "bg-blue-200" },
      { w: "90%", color: "bg-blue-400" },
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    price: "Starting at ₱55,000",
    desc: "Full-featured online stores with cart, checkout, and payment gateway integration.",
    tags: ["Shopify-style", "Payment Gateways", "Order Mgmt"],
    color: "bg-pink-50",
    iconColor: "text-pink-600",
    mockupBars: [
      { w: "70%", color: "bg-pink-300" },
      { w: "85%", color: "bg-pink-400" },
      { w: "55%", color: "bg-pink-200" },
    ],
  },
  {
    icon: BarChart3,
    title: "Business Management Systems",
    price: "Starting at ₱25,000",
    desc: "Custom dashboards and tools to digitize and streamline your business operations.",
    tags: ["Admin Panels", "Analytics", "Reporting"],
    color: "bg-green-50",
    iconColor: "text-green-600",
    mockupBars: [
      { w: "90%", color: "bg-green-400" },
      { w: "65%", color: "bg-green-300" },
      { w: "75%", color: "bg-green-200" },
    ],
  },
  {
    icon: Package,
    title: "Inventory Management",
    price: "Starting at ₱45,000",
    desc: "Track stock levels, suppliers, and movements with real-time alerts and reports.",
    tags: ["Stock Tracking", "SKU Mgmt", "Supplier Portal"],
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    mockupBars: [
      { w: "50%", color: "bg-orange-200" },
      { w: "80%", color: "bg-orange-400" },
      { w: "65%", color: "bg-orange-300" },
    ],
  },
  {
    icon: Users,
    title: "Customer & Booking Systems",
    price: "Starting at ₱45,000",
    desc: "CRM, appointment scheduling, and customer management tools to grow your clientele.",
    tags: ["CRM", "Bookings", "Client Portal"],
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    mockupBars: [
      { w: "75%", color: "bg-violet-300" },
      { w: "55%", color: "bg-violet-200" },
      { w: "85%", color: "bg-violet-400" },
    ],
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    price: "Starting at ₱85,000",
    desc: "Enterprise-grade applications — SaaS platforms, ERPs, and multi-module solutions.",
    tags: ["SaaS Platforms", "ERP", "Multi-tenant"],
    color: "bg-gray-100",
    iconColor: "text-gray-700",
    mockupBars: [
      { w: "85%", color: "bg-gray-400" },
      { w: "70%", color: "bg-gray-300" },
      { w: "90%", color: "bg-gray-500" },
    ],
  },
];

function ServiceMockup({ bars }: { bars: { w: string; color: string }[] }) {
  return (
    <div className="rounded-lg bg-white/60 p-2.5 border border-white/80 shadow-sm">
      <div className="flex gap-1 mb-2">
        <div className="w-1.5 h-1.5 rounded-full bg-red-300" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
      </div>
      <div className="grid grid-cols-3 gap-1 mb-2">
        {["₱48K", "12", "98%"].map((v, i) => (
          <div key={i} className="bg-white rounded py-1 text-center">
            <div className="text-[8px] font-bold text-gray-700">{v}</div>
          </div>
        ))}
      </div>
      <div className="space-y-1">
        {bars.map((bar, i) => (
          <div key={i} className="bg-white/80 rounded-full h-1.5">
            <div className={`${bar.color} h-full rounded-full`} style={{ width: bar.w }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-8">
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
            Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#1A1A1A] mt-2 uppercase">
            WHAT I BUILD
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`${service.color} rounded-2xl p-6 flex flex-col gap-4 group hover:shadow-md transition-shadow duration-300`}
              >
                <div className="flex items-start justify-between">
                  <div className={`${service.iconColor} w-10 h-10 flex items-center justify-center`}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <ServiceMockup bars={service.mockupBars} />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-[#1A1A1A] leading-tight mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold mb-3">{service.price}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold bg-white/70 text-gray-600 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
