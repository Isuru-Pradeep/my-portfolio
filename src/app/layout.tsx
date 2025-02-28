import type { ReactNode } from "react";
import { Metadata } from "next";
// In src/app/layout.tsx
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: "Zephyr Matrix Portfolio",
  description:
    "Portfolio of Zephyr Matrix, showcasing skills, projects, and business ventures.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
