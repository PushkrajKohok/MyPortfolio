import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pushkraj Kohok | AI/ML & Full-Stack AI Engineer",
  description: "Portfolio of Pushkraj Kohok, an AI/ML and Full-Stack AI Engineer specializing in Generative AI, RAG systems, multi-agent platforms, and cloud-native software architectures.",
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
