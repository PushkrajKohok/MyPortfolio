"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Braces, Cloud, Cpu, Database, GitMerge, Layout, Server, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

// Icon mapper for categories
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "AI / ML":
      return <Cpu className="w-5 h-5 text-accent-cyan" />;
    case "Programming":
      return <Terminal className="w-5 h-5 text-accent-violet" />;
    case "Frontend":
      return <Layout className="w-5 h-5 text-accent-blue" />;
    case "Backend":
      return <Server className="w-5 h-5 text-emerald-400" />;
    case "Data / ML Libraries":
      return <Database className="w-5 h-5 text-accent-cyan" />;
    case "Cloud & DevOps":
      return <Cloud className="w-5 h-5 text-accent-violet" />;
    default:
      return <Braces className="w-5 h-5 text-gray-400" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "AI / ML":
      return "border-accent-cyan/30 text-accent-cyan shadow-accent-cyan/5";
    case "Programming":
      return "border-accent-violet/30 text-accent-violet shadow-accent-violet/5";
    case "Frontend":
      return "border-accent-blue/30 text-accent-blue shadow-accent-blue/5";
    case "Backend":
      return "border-emerald-400/30 text-emerald-400 shadow-emerald-400/5";
    case "Data / ML Libraries":
      return "border-accent-cyan/30 text-accent-cyan shadow-accent-cyan/5";
    case "Cloud & DevOps":
      return "border-accent-violet/30 text-accent-violet shadow-accent-violet/5";
    default:
      return "border-white/10 text-white";
  }
};

const getCategoryBadgeStyle = (category: string) => {
  switch (category) {
    case "AI / ML":
      return "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20";
    case "Programming":
      return "bg-accent-violet/10 text-accent-violet border-accent-violet/20";
    case "Frontend":
      return "bg-accent-blue/10 text-accent-blue border-accent-blue/20";
    case "Backend":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    case "Data / ML Libraries":
      return "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20";
    case "Cloud & DevOps":
      return "bg-accent-violet/10 text-accent-violet border-accent-violet/20";
    default:
      return "bg-white/5 text-gray-300 border-white/10";
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...portfolioData.skills.map((c) => c.category)];

  const filteredSkills =
    activeCategory === "All"
      ? portfolioData.skills
      : portfolioData.skills.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-slate-950/20 to-bg-deep pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-violet/25 bg-accent-violet/5 text-accent-violet text-xs font-mono mb-4"
          >
            <GitMerge className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white font-sans"
          >
            Skills Inventory & Domains
          </motion.h2>
          <p className="text-gray-400 text-sm mt-3 font-mono">
            Click a category tab below to isolate specific engineering stacks.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-mono rounded-xl border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white/10 border-white/20 text-white shadow-md"
                  : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((catBlock) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={catBlock.category}
                className={`glass-panel rounded-2xl p-6 border relative transition-all duration-300 shadow-sm ${getCategoryColor(
                  catBlock.category
                )}`}
              >
                {/* Header Icon + Title */}
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                    {getCategoryIcon(catBlock.category)}
                  </div>
                  <h3 className="text-base font-bold font-mono text-white tracking-wide">
                    {catBlock.category}
                  </h3>
                </div>

                {/* Badges list */}
                <div className="flex flex-wrap gap-2">
                  {catBlock.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-3 py-1 rounded-lg border font-medium font-mono transition-transform duration-300 hover:scale-105 ${getCategoryBadgeStyle(
                        catBlock.category
                      )}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Spoken Languages Sub-section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-xl mx-auto glass-panel rounded-2xl p-6 border border-white/5 text-center"
        >
          <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
            Spoken Languages
          </h4>
          <div className="flex items-center justify-center gap-6">
            {portfolioData.languages.map((lang) => (
              <div key={lang} className="flex flex-col items-center">
                <span className="text-sm font-semibold text-white font-mono">{lang}</span>
                <span className="text-[10px] text-gray-500 mt-1 uppercase font-mono">Fluent</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
