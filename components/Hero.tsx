"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Download,
  Sparkles,
  FileText,
  GraduationCap,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { name, tagline, bio, github, linkedin } = portfolioData.personalInfo;
  const badges = portfolioData.heroBadges;
  const resumeUrl = "/Pushkraj_Kohok_Resume.pdf";
  const resumeDownloadUrl = "/resume/download";
  const profileImageUrl = "/Pushkraj_Kohok_Picture.jpeg";

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
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:hidden self-center mb-8"
          >
            <ProfilePortrait src={profileImageUrl} sizeClass="w-40 h-40" />
          </motion.div>

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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mb-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300"
          >
            <GraduationCap className="w-4 h-4 text-accent-cyan" />
            <span>MS Artificial Intelligence student at Illinois Tech, Chicago</span>
          </motion.div>

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
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-cyan/25 hover:scale-[1.02] text-white font-medium rounded-xl transition-all duration-300 text-sm"
            >
              <Bot className="w-4 h-4" />
              <span>Ask My AI Agent</span>
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Pushkraj Kohok resume PDF in a new tab"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-cyan/25 hover:scale-[1.02] text-white font-medium rounded-xl transition-all duration-300 text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </a>
            <a
              href={resumeDownloadUrl}
              download
              aria-label="Download Pushkraj Kohok resume PDF"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-violet/25 hover:scale-[1.02] text-white font-medium rounded-xl transition-all duration-300 text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 rounded-xl transition-colors"
              aria-label="Open Pushkraj Kohok GitHub profile"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 rounded-xl transition-colors"
              aria-label="Open Pushkraj Kohok LinkedIn profile"
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

        {/* Right column — Profile visual card */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative min-h-[560px] flex flex-col items-center justify-center">
            {/* Decorative glow */}
            <div className="absolute top-12 right-4 w-64 h-64 bg-accent-cyan/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-10 left-4 w-56 h-56 bg-accent-violet/12 rounded-full blur-[70px] pointer-events-none" />

            <div className="relative z-10 flex justify-center">
              <ProfilePortrait src={profileImageUrl} sizeClass="w-[27rem] h-[27rem] xl:w-[30rem] xl:h-[30rem]" />
            </div>
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

function ProfilePortrait({ src, sizeClass }: { src: string; sizeClass: string }) {
  return (
    <div
      className={`relative ${sizeClass} rounded-full bg-gradient-to-br from-accent-cyan via-accent-blue to-accent-violet p-[3px] shadow-2xl shadow-accent-cyan/20 transition-transform duration-300 hover:scale-[1.03]`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-slate-950">
        <Image
          src={src}
          alt="Pushkraj Kohok profile picture"
          fill
          priority
          unoptimized
          sizes="(max-width: 1024px) 160px, (max-width: 1280px) 432px, 480px"
          className="object-cover"
        />
      </div>
      <span className="absolute inset-0 -z-10 rounded-full bg-accent-cyan/20 blur-2xl" />
    </div>
  );
}
