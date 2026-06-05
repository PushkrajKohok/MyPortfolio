import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://pushkraj-kohok.vercel.app";
const siteTitle = "Pushkraj Kohok | AI/ML & Full-Stack AI Engineer";
const siteDescription =
  "Portfolio of Pushkraj Kohok, an AI/ML and Full-Stack AI Engineer specializing in Generative AI, RAG systems, multi-agent platforms, healthcare AI, AI security, and cloud-native software architectures.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Pushkraj Kohok",
  },
  description: siteDescription,
  keywords: [
    "Pushkraj Kohok",
    "AI/ML Engineer",
    "Full-Stack AI Engineer",
    "Generative AI",
    "RAG systems",
    "multi-agent AI",
    "healthcare AI",
    "AI security",
    "Next.js portfolio",
  ],
  authors: [{ name: "Pushkraj Kohok" }],
  creator: "Pushkraj Kohok",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Pushkraj Kohok Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pushkraj Kohok AI/ML and Full-Stack AI Engineer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
