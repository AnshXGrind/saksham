import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI/ML Engineer Portfolio",
  description: "Building intelligent systems at the intersection of AI, code, and creativity.",
  keywords: ["AI", "ML", "Machine Learning", "Portfolio", "Software Engineer", "Developer"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "AI/ML Engineer Portfolio",
    description: "Building intelligent systems at the intersection of AI, code, and creativity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
