import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FolderGit2 } from "lucide-react";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Pushkraj Kohok's AI, ML, RAG, healthcare AI, and AI security projects.",
  openGraph: {
    title: "Projects | Pushkraj Kohok",
    description:
      "Explore Pushkraj Kohok's AI, ML, RAG, healthcare AI, and AI security projects.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Pushkraj Kohok",
    description:
      "Explore Pushkraj Kohok's AI, ML, RAG, healthcare AI, and AI security projects.",
    images: ["/og-image.png"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <main className="relative min-h-screen bg-bg-deep text-gray-100 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-70" />
        <div className="absolute top-0 right-[-15%] h-[420px] w-[420px] rounded-full bg-accent-cyan/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-15%] h-[420px] w-[420px] rounded-full bg-accent-violet/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-transparent to-bg-deep pointer-events-none" />

        <section className="relative z-10 max-w-7xl mx-auto px-6 py-12 sm:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back Home
          </Link>

          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-cyan/25 bg-accent-cyan/5 text-accent-cyan text-xs font-mono mb-5">
              <FolderGit2 className="w-3.5 h-3.5" />
              Technical Case Studies
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet bg-clip-text text-transparent">
              Featured AI Systems
            </h1>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-5">
              A closer look at Pushkraj&apos;s strongest AI/ML and full-stack AI projects,
              including the product problem, architecture, impact, and engineering decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-accent-cyan/25 transition-all duration-300 group"
                aria-label={`View ${project.title} case study`}
              >
                <span className="text-[11px] font-mono text-accent-violet uppercase tracking-wider">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold text-white mt-3 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed mt-4">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/15 text-emerald-400 text-[11px] font-mono"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm text-accent-cyan font-medium mt-7">
                  Read Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
