"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  Lightbulb,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Github } from "@/components/icons";
import type { Project } from "@/data/portfolio";

interface ProjectCaseStudyProps {
  project: Project;
  relatedProjects: Project[];
}

const accentStyles = {
  cyan: {
    text: "text-accent-cyan",
    border: "border-accent-cyan/25",
    bg: "bg-accent-cyan/10",
    hover: "hover:border-accent-cyan/35",
    gradient: "from-accent-cyan via-accent-blue to-accent-violet",
    glow: "bg-accent-cyan/10",
  },
  violet: {
    text: "text-accent-violet",
    border: "border-accent-violet/25",
    bg: "bg-accent-violet/10",
    hover: "hover:border-accent-violet/35",
    gradient: "from-accent-violet via-accent-blue to-accent-cyan",
    glow: "bg-accent-violet/10",
  },
  blue: {
    text: "text-accent-blue",
    border: "border-accent-blue/25",
    bg: "bg-accent-blue/10",
    hover: "hover:border-accent-blue/35",
    gradient: "from-accent-blue via-accent-cyan to-accent-violet",
    glow: "bg-accent-blue/10",
  },
};

function getTheme(project: Project) {
  return accentStyles[project.visualTheme.accent as keyof typeof accentStyles] ?? accentStyles.cyan;
}

function SectionTitle({
  eyebrow,
  title,
  icon,
}: {
  eyebrow: string;
  title: string;
  icon: ReactNode;
}) {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-mono mb-4">
        {icon}
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
    </div>
  );
}

export default function ProjectCaseStudy({ project, relatedProjects }: ProjectCaseStudyProps) {
  const theme = getTheme(project);

  return (
    <main className="relative min-h-screen bg-bg-deep text-gray-100 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-70" />
      <div
        className={`absolute top-10 right-[-12%] h-[420px] w-[420px] rounded-full ${theme.glow} blur-[120px] pointer-events-none`}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep pointer-events-none" />

      <section className="relative z-10 px-6 pt-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7"
            >
              <span
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${theme.border} ${theme.bg} ${theme.text} text-xs font-mono mb-5`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {project.category}
              </span>
              <h1
                className={`text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}
              >
                {project.title}
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mt-7">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg border border-white/10 bg-white/5 text-xs font-mono text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-5 glass-panel rounded-2xl p-6 border border-white/5"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-5 mb-5">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500">
                    Primary Impact
                  </span>
                  <p className="text-white font-semibold mt-1">{project.impact}</p>
                </div>
                <Target className={`w-8 h-8 ${theme.text}`} />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{project.longDescription}</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} GitHub repository`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:bg-white/10 hover:scale-[1.02] transition-all"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${theme.border} ${theme.bg} ${theme.text} text-sm hover:scale-[1.02] transition-all`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            { eyebrow: "Problem", title: "What This Project Solves", body: project.problem, icon: <Lightbulb className="w-4 h-4" /> },
            { eyebrow: "Solution", title: "How The System Works", body: project.solution, icon: <ShieldCheck className="w-4 h-4" /> },
          ].map((item, index) => (
            <motion.article
              key={item.eyebrow}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`glass-panel rounded-2xl p-7 border border-white/5 ${theme.hover} transition-colors`}
            >
              <SectionTitle eyebrow={item.eyebrow} title={item.title} icon={item.icon} />
              <p className="text-gray-300 leading-relaxed">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="Architecture"
            title="Technical Flow"
            icon={<Network className="w-4 h-4" />}
          />
          <div className="glass-panel rounded-2xl p-5 sm:p-7 border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
              {project.architectureSteps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="relative"
                >
                  <div className={`h-full rounded-xl border ${theme.border} bg-white/[0.03] p-4`}>
                    <span className={`text-xs font-mono ${theme.text}`}>0{index + 1}</span>
                    <p className="text-sm text-white font-semibold mt-3">{step}</p>
                  </div>
                  {index < project.architectureSteps.length - 1 && (
                    <ArrowRight className="hidden xl:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 text-gray-600" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SectionTitle eyebrow="Features" title="Product Capabilities" icon={<Layers3 className="w-4 h-4" />} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className={`glass-panel rounded-xl p-4 border border-white/5 ${theme.hover} transition-colors`}
                >
                  <CheckCircle2 className={`w-4 h-4 ${theme.text} mb-3`} />
                  <p className="text-sm text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Role" title="Ownership" icon={<Target className="w-4 h-4" />} />
            <div className="glass-panel rounded-2xl p-6 border border-white/5">
              <p className="text-gray-300 text-sm leading-relaxed">{project.role}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <SectionTitle eyebrow="Stack" title="Technical Stack" icon={<CodeIcon />} />
            <div className="glass-panel rounded-2xl p-6 border border-white/5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 rounded-lg border ${theme.border} ${theme.bg} text-xs font-mono ${theme.text}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Impact" title="Measurable Outcomes" icon={<Target className="w-4 h-4" />} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.metrics.map((metric) => (
                <div key={metric} className="glass-panel rounded-xl p-5 border border-white/5">
                  <p className={`text-xl font-extrabold font-mono ${theme.text}`}>{metric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-panel rounded-2xl p-7 border border-white/5">
            <SectionTitle eyebrow="Engineering" title="Challenges And Decisions" icon={<ShieldCheck className="w-4 h-4" />} />
            <ul className="space-y-3">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className={`w-4 h-4 ${theme.text} mt-0.5 shrink-0`} />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel rounded-2xl p-7 border border-white/5">
            <SectionTitle eyebrow="Outcome" title="Recruiter Takeaway" icon={<Sparkles className="w-4 h-4" />} />
            <p className="text-gray-300 leading-relaxed mb-5">{project.outcome}</p>
            <div className={`rounded-xl border ${theme.border} ${theme.bg} p-5`}>
              <p className="text-white font-semibold leading-relaxed">{project.recruiterTakeaway}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <SectionTitle eyebrow="Explore More" title="Related Projects" icon={<ExternalLink className="w-4 h-4" />} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((related) => {
              const relatedTheme = getTheme(related);
              return (
                <Link
                  key={related.slug}
                  href={`/projects/${related.slug}`}
                  className={`glass-panel rounded-2xl p-6 border border-white/5 ${relatedTheme.hover} hover:-translate-y-1 transition-all duration-300 group`}
                >
                  <span className={`text-xs font-mono ${relatedTheme.text}`}>{related.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-accent-cyan transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-3 leading-relaxed">{related.shortDescription}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function CodeIcon() {
  return <Layers3 className="w-4 h-4" />;
}
