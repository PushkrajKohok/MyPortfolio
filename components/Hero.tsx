"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Sparkles,
  TrendingDown,
  Zap,
  Search,
  TrendingUp,
  Target,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

const commandCenterStats = [
  { value: "90%", label: "DA effort reduced", icon: <TrendingDown className="w-3.5 h-3.5" /> },
  { value: "80%", label: "Transaction time cut", icon: <Zap className="w-3.5 h-3.5" /> },
  { value: "10×", label: "Faster AI search", icon: <Search className="w-3.5 h-3.5" /> },
  { value: "300%", label: "Sales increase", icon: <TrendingUp className="w-3.5 h-3.5" /> },
  { value: "70%", label: "Extraction accuracy↑", icon: <Target className="w-3.5 h-3.5" /> },
];

export default function Hero() {
  const { name, tagline, bio, github, linkedin } = portfolioData.personalInfo;
  const badges = portfolioData.heroBadges;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 cyber-grid z-0" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-violet/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none animate-float" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column — Text content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-xs font-mono mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Open to 2026 AI/ML & Full-Stack AI Roles</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 font-sans leading-[1.1]"
          >
            <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet bg-clip-text text-transparent animate-glow">
              {name}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 mb-5 max-w-2xl leading-snug"
          >
            AI/ML Engineer {tagline.toLowerCase()}
          </motion.h2>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-gray-400 max-w-2xl mb-8 leading-relaxed"
          >
            {bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "#projects")}
              className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue hover:from-accent-cyan hover:to-accent-violet text-bg-deep font-semibold rounded-xl shadow-lg shadow-accent-cyan/15 hover:shadow-accent-violet/20 hover:scale-[1.02] transition-all duration-300 text-sm group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#ai-agent"
              onClick={(e) => handleScrollTo(e, "#ai-agent")}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium rounded-xl transition-all duration-300 text-sm"
            >
              <Bot className="w-4 h-4" />
              <span>Ask My AI Agent</span>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 rounded-xl transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 rounded-xl transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-2 mt-10"
          >
            {badges.map((badge, idx) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + idx * 0.08 }}
                className="px-3 py-1.5 text-[11px] font-mono rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-accent-cyan/30 hover:bg-accent-cyan/5 transition-all duration-300 cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right column — AI Command Center Card */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="glass-panel rounded-2xl border border-white/5 p-6 relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent-cyan/15 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent-violet/10 rounded-full blur-[50px] pointer-events-none" />

            {/* Card header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono text-gray-400">IMPACT_DASHBOARD</span>
              </div>
              <span className="text-[10px] font-mono text-gray-500 px-2 py-0.5 bg-white/5 rounded border border-white/10">
                LIVE
              </span>
            </div>

            {/* Stats grid */}
            <div className="space-y-3">
              {commandCenterStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent-cyan/20 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-accent-cyan/60 group-hover:text-accent-cyan transition-colors">
                      {stat.icon}
                    </div>
                    <span className="text-xs text-gray-400 font-mono">{stat.label}</span>
                  </div>
                  <span className="text-base font-extrabold font-mono text-white">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="mt-5 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
            <p className="text-[10px] font-mono text-gray-500 text-center mt-3">
              Verified production metrics from professional engagements
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating dots */}
      <div className="absolute top-[80%] left-[8%] w-2.5 h-2.5 bg-accent-cyan rounded-full animate-float opacity-30" />
      <div className="absolute top-[35%] right-[6%] w-2 h-2 bg-accent-violet rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-[20%] left-[15%] w-1.5 h-1.5 bg-accent-blue rounded-full animate-float opacity-30" />
    </section>
  );
}
