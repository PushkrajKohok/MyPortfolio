"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Mail, Phone, MessageSquarePlus } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { email, phone, linkedin, github } = portfolioData.personalInfo;
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

              {/* CTA links */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-xs font-mono bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-deep font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-4.5 h-4.5" />
                  <span>Email Me</span>
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 px-4 py-2.5 rounded-xl text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                  <span>Connect on LinkedIn</span>
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 px-4 py-2.5 rounded-xl text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="w-4.5 h-4.5" />
                  <span>View GitHub</span>
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
                      href={`mailto:${email}`}
                      className="text-sm font-semibold text-white hover:text-accent-cyan transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>
                
                <button
                  onClick={copyEmail}
                  className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors ml-4 border border-white/5"
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
                      href={`tel:${phone}`}
                      className="text-sm font-semibold text-white hover:text-accent-violet transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhone}
                  className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors ml-4 border border-white/5"
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
