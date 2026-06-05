"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, MapPin, Notebook } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-[50%] right-[-10%] w-80 h-80 bg-accent-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/25 bg-accent-cyan/5 text-accent-cyan text-xs font-mono mb-4"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white font-sans"
          >
            Education & Background
          </motion.h2>
        </div>

        {/* Dual Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-panel rounded-3xl p-8 border border-white/5 flex flex-col justify-between hover:border-accent-cyan/15 transition-all duration-300 relative group"
            >
              <div>
                {/* Visual node */}
                <div className="absolute top-8 right-8 p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-accent-cyan/30 transition-colors">
                  <GraduationCap className="w-6 h-6 text-accent-cyan" />
                </div>

                <span className="text-xs font-mono text-accent-violet font-semibold tracking-wider block mb-2">
                  {edu.period}
                </span>

                <h3 className="text-2xl font-bold text-white leading-snug pr-12">
                  {edu.institution}
                </h3>
                
                <h4 className="text-sm font-mono text-gray-400 mt-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-accent-cyan" />
                  {edu.location}
                </h4>

                <p className="text-base font-semibold text-white mt-4 border-b border-white/5 pb-3">
                  {edu.degree}
                </p>

                {/* Coursework list */}
                <div className="mt-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block mb-3">
                    Core Coursework
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-mono px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-white/20 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Publication / Highlights footer */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block mb-3">
                    Key Highlights
                  </span>
                  <div className="flex flex-col gap-2">
                    {edu.highlights.map((highlight, hIdx) => {
                      const isPublication = highlight.toLowerCase().includes("publication");
                      return (
                        <div
                          key={hIdx}
                          className={`flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed ${
                            isPublication ? "p-3 rounded-lg bg-accent-cyan/5 border border-accent-cyan/15 text-accent-cyan" : ""
                          }`}
                        >
                          {isPublication ? (
                            <Award className="w-4.5 h-4.5 text-accent-cyan mt-0.5 shrink-0" />
                          ) : (
                            <Notebook className="w-4.5 h-4.5 text-accent-violet mt-0.5 shrink-0" />
                          )}
                          <span>{highlight}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
