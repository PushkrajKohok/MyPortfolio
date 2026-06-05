"use client";

import React from "react";
import { Cpu } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { github, linkedin } = portfolioData.personalInfo;

  return (
    <footer className="w-full bg-slate-950/60 border-t border-white/5 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm font-mono text-gray-300">
              Pushkraj Kohok &copy; {currentYear}
            </span>
          </div>
          <span className="text-xs font-mono text-gray-500">
            AI/ML Engineer | Full-Stack AI Engineer
          </span>
        </div>

        {/* Stack info */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Pushkraj Kohok GitHub profile"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Pushkraj Kohok LinkedIn profile"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
          </div>
          <div className="text-xs font-mono text-gray-500 text-center md:text-right">
            Built with <span className="text-gray-300">Next.js</span>,{" "}
            <span className="text-gray-300">TypeScript</span>,{" "}
            <span className="text-gray-300">Tailwind CSS</span>, and{" "}
            <span className="text-gray-300">Vercel</span>.
          </div>
        </div>
      </div>
    </footer>
  );
}
