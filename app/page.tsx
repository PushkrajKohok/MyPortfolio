import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import PortfolioAgent from "@/components/PortfolioAgent";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-deep text-gray-100 flex flex-col font-sans overflow-x-hidden">
      {/* Dynamic top bar navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-1 w-full mx-auto">
        <Hero />
        <ImpactMetrics />
        <About />
        <Projects />
        <ExperienceTimeline />
        <Skills />
        <Education />
        <PortfolioAgent />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
