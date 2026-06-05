"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-[30%] left-[-10%] w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header Title */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-blue/25 bg-accent-blue/5 text-accent-blue text-xs font-mono mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Employment History</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white font-sans"
          >
            Professional Experience & Milestones
          </motion.h2>
          <p className="text-gray-400 text-sm mt-3 font-mono">
            Focusing on scalable backend execution, ML model tuning, and core automation.
          </p>
        </div>

        {/* Timeline block container */}
        <div className="relative">
          {/* Vertical central line (Hidden on small screens, left-aligned) */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent-cyan via-accent-violet to-accent-blue/20 -translate-x-1/2 hidden md:block" />
          
          {/* Timeline Node Items */}
          <div className="space-y-16">
            {portfolioData.experience.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              const dateMeta = (
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`py-2 hidden md:block ${isLeft ? "text-right pr-12" : "text-left pl-12"}`}
                >
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-cyan bg-accent-cyan/5 px-2.5 py-1 rounded-md border border-accent-cyan/10">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <h4
                    className={`text-sm font-mono text-gray-500 mt-2 flex items-center gap-1 ${
                      isLeft ? "justify-end" : "justify-start"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </h4>
                </motion.div>
              );

              const contentCard = (
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`glass-panel rounded-2xl p-6 border border-white/5 relative hover:border-accent-cyan/20 transition-all duration-300 ${
                    isLeft ? "md:ml-12" : "md:mr-12"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400 mb-4 md:hidden">
                    <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded">
                      <Calendar className="w-3 h-3 text-accent-cyan" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-accent-cyan" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white leading-tight">
                    {item.role}
                  </h3>
                  <h4 className="text-sm font-mono text-accent-cyan font-semibold mt-1">
                    {item.company}
                  </h4>

                  <div className="flex flex-wrap gap-2 my-4">
                    {item.impactMetrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/15"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2.5 text-sm text-gray-400 mb-5 font-sans">
                    {item.highlights.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent-cyan mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {item.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );

              return (
                <div
                  key={item.company + item.role}
                  className="relative grid grid-cols-1 md:grid-cols-2 items-start"
                >
                  {/* Outer Timeline Dot Indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-bg-deep border-2 border-accent-cyan flex items-center justify-center shadow-lg shadow-accent-cyan/15"
                  >
                    <div className="w-3 h-3 rounded-full bg-accent-cyan animate-pulse" />
                  </motion.div>

                  <div className="pl-12 md:pl-0">{isLeft ? dateMeta : contentCard}</div>
                  <div className="pl-12 md:pl-0">{isLeft ? contentCard : dateMeta}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
