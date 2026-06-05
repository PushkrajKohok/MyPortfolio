import type { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolio";

const siteUrl = "https://pushkraj-kohok.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects"];
  const projectRoutes = portfolioData.projects.map((project) => `/projects/${project.slug}`);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
