"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Cpu, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "AI Agent", href: "#ai-agent" },
  { name: "Contact", href: "#contact" },
];

const resumeUrl = "/Pushkraj_Kohok_Resume.pdf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { github, linkedin } = portfolioData.personalInfo;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-deep/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleScrollTo(e, "#hero")}
          className="flex items-center gap-2.5 group rounded-lg"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 group-hover:border-accent-cyan/50 transition-colors">
            <Cpu className="w-4.5 h-4.5 text-accent-cyan group-hover:text-accent-violet transition-colors" />
            <span className="absolute inset-0 rounded-lg bg-accent-cyan/10 blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-semibold text-base tracking-wider text-white font-mono">
            P.KOHOK<span className="text-accent-cyan">.AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group px-3 py-2 rounded-lg hover:bg-white/5"
            >
              {item.name}
              <span className="absolute bottom-1 left-3 right-3 h-px bg-gradient-to-r from-accent-cyan to-accent-violet scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Pushkraj Kohok GitHub profile"
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            <Github className="w-4.5 h-4.5" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Pushkraj Kohok LinkedIn profile"
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>

          <div className="w-px h-5 bg-white/10 mx-1" />

          <a
            href="#ai-agent"
            onClick={(e) => handleScrollTo(e, "#ai-agent")}
            className="px-4 py-2 text-xs font-mono rounded-lg border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10 hover:border-accent-cyan transition-all duration-300"
          >
            Run Agent
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Pushkraj Kohok resume in a new tab"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white rounded-lg"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-white/5 bg-bg-deep/95 backdrop-blur-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-base font-medium text-gray-400 hover:text-white transition-colors py-3 border-b border-white/5"
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile social links */}
              <div className="flex items-center gap-3 pt-4 pb-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Pushkraj Kohok GitHub profile"
                  className="p-2.5 bg-white/5 text-gray-400 hover:text-white rounded-lg border border-white/10"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Pushkraj Kohok LinkedIn profile"
                  className="p-2.5 bg-white/5 text-gray-400 hover:text-white rounded-lg border border-white/10"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <a
                href="#ai-agent"
                onClick={(e) => handleScrollTo(e, "#ai-agent")}
                className="w-full text-center px-4 py-2.5 mt-2 text-sm font-mono rounded-lg border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10"
              >
                Run Agent
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Pushkraj Kohok resume in a new tab"
                className="w-full text-center px-4 py-2.5 text-sm font-mono rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
