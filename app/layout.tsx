import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Review Sentiment Tracker — Track Team Morale Through Code Review Tone",
  description: "Analyze code review comments for sentiment and tone to identify team friction and burnout patterns. Built for engineering managers and team leads."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0d26277a-3ad9-4d42-84f9-20d6afa902c9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
