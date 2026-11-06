import type { Metadata } from "next";
import "./globals.css";
import { PROFILE } from "@/lib/data";

export const metadata: Metadata = {
  title: `${PROFILE.name} | ${PROFILE.title}`,
  description: PROFILE.summary,
  keywords: [
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "AWS Certified",
    "Sadique Khan",
  ],
  authors: [{ name: PROFILE.name }],
  openGraph: {
    title: `${PROFILE.name} | ${PROFILE.title}`,
    description: PROFILE.summary,
    url: "https://sadique-khan.github.io",
    siteName: `${PROFILE.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}