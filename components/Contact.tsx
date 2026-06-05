"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Check,
  Copy,
  FileText,
  GraduationCap,
  Mail,
  MessageSquarePlus,
  Phone,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { email, phone, linkedin, github } = portfolioData.personalInfo;
  const roleTargets = portfolioData.roleTargets;
  const resumeUrl = "/Pushkraj_Kohok_Resume.pdf";
  const phoneHref = "tel:+18728990708";
  const emailHref = `mailto:${email}?subject=Interested%20in%20Pushkraj%20Kohok%20for%20AI%2FML%20Engineer%20Role&body=Hi%20Pushkraj%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.`;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background visual components */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/5 relative overflow-hidden">
          {/* Top border glowing line overlay */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-blue" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Headings */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/25 bg-accent-cyan/5 text-accent-cyan text-xs font-mono"
              >
                <MessageSquarePlus className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </motion.div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans leading-tight">
                Let’s build intelligent systems together.
              </h2>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
                I&apos;m currently focused on AI/ML Engineering, Full-Stack AI systems, RAG applications, multi-agent platforms, and scalable software products.
              </p>

              <div className="rounded-2xl border border-white/5 bg-black/30 p-5 max-w-xl">
                <div className="flex items-center gap-2 text-accent-cyan text-xs font-mono mb-4">
                  <BriefcaseBusiness className="w-4 h-4" />
                  <span>Recruiter Snapshot</span>
                </div>
                <div className="grid gap-3 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-4 h-4 text-accent-violet mt-0.5 shrink-0" />
                    <span>MS Artificial Intelligence candidate at Illinois Tech, Chicago.</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {roleTargets.map((role) => (
                      <span
                        key={role}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-gray-300"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs leading-relaxed text-gray-400">
                    Strongest fits: RAG, multi-agent systems, healthcare AI, AI security,
                    backend architecture, cloud automation, and product-focused ML workflows.
                  </p>
                  <p className="text-xs leading-relaxed text-gray-400">
                    Based in Chicago and looking for full-time engineering roles across applied AI,
                    backend systems, and AI product teams.
                  </p>
                </div>
              </div>

              {/* CTA links */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={emailHref}
                  aria-label="Email Pushkraj Kohok about an AI or ML engineering role"
                  className="flex items-center gap-2 text-xs font-mono bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-deep font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-4.5 h-4.5" />
                  <span>Email Me</span>
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Pushkraj Kohok LinkedIn profile"
                  className="flex items-center gap-2 text-xs font-mono bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 px-4 py-2.5 rounded-xl text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                  <span>Connect on LinkedIn</span>
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Pushkraj Kohok GitHub profile"
                  className="flex items-center gap-2 text-xs font-mono bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 px-4 py-2.5 rounded-xl text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="w-4.5 h-4.5" />
                  <span>View GitHub</span>
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Pushkraj Kohok resume in a new tab"
                  className="flex items-center gap-2 text-xs font-mono bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 px-4 py-2.5 rounded-xl text-gray-300 hover:text-white transition-colors"
                >
                  <FileText className="w-4.5 h-4.5" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Right Col: Details cards */}
            <div className="lg:col-span-5 space-y-4">
              {/* Email details card */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-accent-cyan/25 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent-cyan/10 border border-accent-cyan/15 rounded-xl text-accent-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 block uppercase">
                      Email Address
                    </span>
                    <a
                      href={emailHref}
                      aria-label="Email Pushkraj Kohok"
                      className="text-sm font-semibold text-white hover:text-accent-cyan transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>
                
                <button
                  onClick={copyEmail}
                  className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors ml-4 border border-white/5"
                  aria-label="Copy email address to clipboard"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone details card */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-accent-violet/25 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent-violet/10 border border-accent-violet/15 rounded-xl text-accent-violet">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 block uppercase">
                      Phone Number
                    </span>
                    <a
                      href={phoneHref}
                      aria-label="Call Pushkraj Kohok"
                      className="text-sm font-semibold text-white hover:text-accent-violet transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhone}
                  className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors ml-4 border border-white/5"
                  aria-label="Copy phone number to clipboard"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
