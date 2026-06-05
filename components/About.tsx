"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  GitBranch,
  Network,
  Search,
  Server,
  ShieldCheck,
  Target,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

const dnaIconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="w-4 h-4" />,
  search: <Search className="w-4 h-4" />,
  network: <Network className="w-4 h-4" />,
  server: <Server className="w-4 h-4" />,
  cloud: <Cloud className="w-4 h-4" />,
  target: <Target className="w-4 h-4" />,
};

export default function About() {
  const { paragraphs, dna } = portfolioData.about;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-slate-950/20 to-bg-deep pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-violet/25 bg-accent-violet/5 text-accent-violet text-xs font-mono mb-4"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>My Journey & Philosophy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white font-sans"
          >
            Engineering Intelligence: From Code to Cognition
          </motion.h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left — Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-gray-300 space-y-6 text-base sm:text-lg leading-relaxed"
          >
            {paragraphs.map((p, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </motion.div>

          {/* Right — Engineering DNA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel rounded-2xl p-8 border border-white/5 relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-cyan/10 rounded-full blur-[40px] pointer-events-none" />

              <h3 className="text-lg font-bold text-white mb-6 font-mono border-b border-white/10 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent-cyan" />
                <span>Engineering DNA</span>
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {dna.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.06 }}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent-cyan/20 hover:bg-accent-cyan/[0.03] transition-all duration-300 group"
                  >
                    <div className="text-accent-cyan/60 group-hover:text-accent-cyan transition-colors">
                      {dnaIconMap[item.icon] || <Target className="w-4 h-4" />}
                    </div>
                    <span className="text-xs font-mono text-gray-300 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Core directives below */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-cyan font-bold font-mono text-xs mt-0.5">01.</span>
                    <span>
                      <strong className="text-white">Explainable Workflows:</strong> Designing AI
                      systems that reveal <em>why</em> a decision was made.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-cyan font-bold font-mono text-xs mt-0.5">02.</span>
                    <span>
                      <strong className="text-white">Reliable Guardrails:</strong> Human-in-the-loop
                      structures for sensitive verticals like healthcare.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-cyan font-bold font-mono text-xs mt-0.5">03.</span>
                    <span>
                      <strong className="text-white">Cloud Native Scale:</strong> Docker, CI/CD
                      pipelines, and AWS hosting under heavy loads.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
