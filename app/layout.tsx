import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Git Diff Viewer",
  description: "View git diffs in a GitHub-like interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
