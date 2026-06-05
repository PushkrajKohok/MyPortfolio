import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { portfolioData } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function getProject(slug: string) {
  return portfolioData.projects.find((project) => project.slug === slug);
}

const seoDescriptions: Record<string, string> = {
  "teachfusion-ai":
    "TeachFusion AI is a RAG and multi-agent teaching platform built by Pushkraj Kohok for grounded course-plan generation.",
  medorbit:
    "MedOrbit is a healthcare AI and clinical orchestration platform built by Pushkraj Kohok for transcript intelligence and doctor-approved patient communication.",
  codebleed:
    "CodeBleed is an AI security and graph-based repository threat intelligence platform built by Pushkraj Kohok.",
};

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const description = seoDescriptions[project.slug] ?? project.shortDescription;

  return {
    title: project.title,
    description,
    openGraph: {
      title: `${project.title} | Pushkraj Kohok`,
      description,
      type: "article",
      images: ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Pushkraj Kohok`,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const relatedProjects = portfolioData.projects.filter((item) => item.slug !== project.slug);

  return (
    <>
      <ProjectCaseStudy project={project} relatedProjects={relatedProjects} />
      <Footer />
    </>
  );
}
