"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, ExternalLink, FolderGit2 } from "lucide-react";
import { Github } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Workflow pipeline icon mapper for visuals
  const renderWorkflow = (workflow: string[], id: string) => {
    return (
      <div className="mt-6 p-4 bg-black/30 border border-white/5 rounded-xl">
        <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block mb-3">
          Pipeline Architecture Diagram
        </span>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          {workflow.map((step, idx) => (
            <React.Fragment key={step}>
              {/* Step bubble */}
              <div
                className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-300 ${
                  hoveredId === id
                    ? "bg-accent-cyan/10 border-accent-cyan/40 text-accent-cyan"
                    : "bg-white/5 border-white/10 text-gray-400"
                }`}
              >
                {step}
              </div>
              
              {/* Connection arrow (only between steps) */}
              {idx < workflow.length - 1 && (
                <div className="text-gray-600 font-mono text-sm hidden sm:block">
                  &rarr;
                </div>
              )}
              {idx < workflow.length - 1 && (
                <div className="text-gray-600 font-mono text-xs sm:hidden py-1">
                  &darr;
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-accent-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center md:text-left mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/25 bg-accent-cyan/5 text-accent-cyan text-xs font-mono mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white font-sans"
          >
            Showcasing High-Impact AI Implementations
          </motion.h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => {
            const isHovered = hoveredId === project.id;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ y: -6 }}
                className="relative flex flex-col justify-between rounded-2xl border transition-all duration-300 h-full p-6 glass-panel"
                style={{
                  borderColor: isHovered
                    ? "rgba(34, 211, 238, 0.3)"
                    : "rgba(255, 255, 255, 0.05)",
                  boxShadow: isHovered
                    ? "0 20px 40px -20px rgba(34, 211, 238, 0.15)"
                    : "none"
                }}
              >
                {/* Visual glowing border corner */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-cyan/15 to-transparent rounded-tr-2xl blur-[12px] transition-opacity duration-300 pointer-events-none ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div>
                  {/* Category Type */}
                  <span className="text-[11px] font-mono text-accent-violet font-semibold tracking-wider uppercase block mb-2">
                    {project.type}
                  </span>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                    <span>{project.title}</span>
                    <Code className="w-5 h-5 text-gray-500" />
                  </h3>

                  {/* Highlight Metrics Panel */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/15"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 rounded text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pipeline visual section */}
                <div>
                  {renderWorkflow(project.visualWorkflow, project.id)}

                  {/* Card footer links */}
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} GitHub repository`}
                      className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    
                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={`View ${project.title} case study`}
                      className="inline-flex items-center gap-1.5 text-xs text-accent-cyan hover:text-accent-cyan/85 font-medium ml-auto"
                    >
                      <span>View Case Study</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
