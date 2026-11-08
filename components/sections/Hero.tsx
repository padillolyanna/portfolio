"use client";

import { motion } from "framer-motion";

function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Browser Window */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 bg-gray-50">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="flex-1 ml-3 bg-gray-200 rounded-full h-4 max-w-[180px]" />
        </div>
        {/* Dashboard inside */}
        <div className="p-4 bg-gray-50">
          {/* Sidebar + content layout */}
          <div className="flex gap-3">
            {/* Sidebar */}
            <div className="w-16 bg-gray-800 rounded-xl p-2 flex flex-col gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-lg mx-auto" />
              <div className="h-px bg-gray-700" />
              {["bg-gray-600", "bg-blue-500", "bg-gray-600", "bg-gray-600", "bg-gray-600"].map((c, i) => (
                <div key={i} className={`h-5 ${c} rounded-md`} />
              ))}
            </div>
            {/* Main Dashboard */}
            <div className="flex-1">
              {/* Top KPIs */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[
                  { label: "Revenue", val: "₱2.4M", color: "text-green-600", bg: "bg-green-50" },
                  { label: "Orders", val: "156", color: "text-blue-600", bg: "bg-blue-50" },
                  { label: "Clients", val: "48", color: "text-purple-600", bg: "bg-purple-50" },
                ].map((kpi, i) => (
                  <div key={i} className={`${kpi.bg} rounded-lg p-2`}>
                    <div className={`text-sm font-bold ${kpi.color}`}>{kpi.val}</div>
                    <div className="text-[9px] text-gray-500">{kpi.label}</div>
                  </div>
                ))}
              </div>
              {/* Chart bars */}
              <div className="bg-white rounded-xl p-3 mb-2">
                <div className="text-[9px] text-gray-500 mb-2">Monthly Performance</div>
                <div className="flex items-end gap-1 h-16">
                  {[30, 55, 40, 70, 60, 85, 65, 90, 75, 80, 70, 95].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t-sm ${i === 11 ? "bg-blue-500" : "bg-blue-200"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Metric Cards */}
      <motion.div
        className="absolute -left-8 top-14 bg-white rounded-xl shadow-xl border border-gray-100 p-3 z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="text-[10px] text-gray-500">Total Revenue</div>
        <div className="text-lg font-bold text-green-600">₱2.4M</div>
        <div className="text-[9px] text-green-500 font-medium">+18% this month</div>
      </motion.div>

      <motion.div
        className="absolute -right-6 top-8 bg-white rounded-xl shadow-xl border border-gray-100 p-3 z-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="text-[10px] text-gray-500">New Orders</div>
        <div className="text-lg font-bold text-blue-600">156</div>
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`w-4 h-4 rounded-full ${i < 4 ? "bg-blue-200" : "bg-gray-200"}`} />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 left-8 bg-[#1A1A1A] text-white rounded-xl shadow-xl p-3 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <div className="text-[9px] text-gray-400">System Status</div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-[11px] font-semibold">All systems live</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-[11px] font-semibold tracking-[0.2em] text-blue-600 uppercase">
                WEBSITE DEVELOPMENT / WEB APPLICATIONS / UI/UX DESIGN
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[1.05] mb-6 uppercase"
            >
              BUILDING DIGITAL{" "}
              <span className="text-blue-600">EXPERIENCES</span> &amp; BUSINESS SYSTEMS.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg"
            >
              Websites, custom applications, and business solutions designed to
              simplify operations and help businesses grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/catalog"
                className="inline-flex items-center justify-center bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-gray-700 transition-colors"
              >
                VIEW MY WORK
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                EXPLORE SERVICES
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-14 flex gap-10"
            >
              {[
                { number: "26+", label: "System Types" },
                { number: "5+", label: "Years Experience" },
                { number: "100%", label: "Custom Built" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-black text-[#1A1A1A]">{stat.number}</div>
                  <div className="text-[11px] text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:flex justify-center hidden"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
