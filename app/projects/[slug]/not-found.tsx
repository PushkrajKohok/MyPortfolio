import Link from "next/link";
import { ArrowLeft, FolderX } from "lucide-react";
import Footer from "@/components/Footer";

export default function ProjectNotFound() {
  return (
    <>
      <main className="relative min-h-screen bg-bg-deep text-gray-100 overflow-hidden flex items-center">
        <div className="absolute inset-0 cyber-grid opacity-70" />
        <div className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/10 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-20 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-cyan/20 bg-accent-cyan/10 text-accent-cyan">
            <FolderX className="w-7 h-7" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Project Not Found</h1>
          <p className="text-gray-400 leading-relaxed mt-4">
            That project case study is not available in the current portfolio context.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-deep font-semibold text-sm"
            >
              View All Projects
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
