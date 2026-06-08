"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, TrendingDown, Zap, Search, TrendingUp, Target, Brain } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  "trending-down": <TrendingDown className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
  search: <Search className="w-5 h-5" />,
  "trending-up": <TrendingUp className="w-5 h-5" />,
  target: <Target className="w-5 h-5" />,
  brain: <Brain className="w-5 h-5" />,
};

const accentColors = [
  "text-accent-cyan",
  "text-accent-blue",
  "text-accent-violet",
  "text-emerald-400",
  "text-accent-cyan",
  "text-accent-blue",
];

const bgColors = [
  "bg-accent-cyan/10 border-accent-cyan/20",
  "bg-accent-blue/10 border-accent-blue/20",
  "bg-accent-violet/10 border-accent-violet/20",
  "bg-emerald-400/10 border-emerald-400/20",
  "bg-accent-cyan/10 border-accent-cyan/20",
  "bg-accent-blue/10 border-accent-blue/20",
];

export default function ImpactMetrics() {
  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/25 bg-accent-cyan/5 text-accent-cyan text-xs font-mono mb-4"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Career Achievements</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-3xl sm:text-4xl font-bold text-white font-sans"
          >
            Key Achievements Delivered Across AI and Full-Stack Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="text-gray-400 text-sm mt-3 font-mono"
          >
            Recruiter-ready highlights from production work, automation, search, and AI product delivery.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {portfolioData.impactMetrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-panel rounded-2xl p-5 border border-white/5 text-center hover:border-white/15 transition-all duration-300 group hover:-translate-y-1"
            >
              <div
                className={`w-10 h-10 rounded-xl ${bgColors[idx]} border flex items-center justify-center mx-auto mb-3 ${accentColors[idx]} group-hover:scale-110 transition-transform duration-300`}
              >
                {iconMap[metric.icon]}
              </div>
              <div
                className={`text-2xl sm:text-3xl font-extrabold font-mono ${accentColors[idx]} leading-none mb-1`}
              >
                {metric.value}
              </div>
              <div className="text-[11px] font-mono text-gray-400 leading-tight">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
