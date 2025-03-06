import type { Metadata } from "next";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Isuru Pradeep - Full Stack Developer & AI Engineer",
  description:
    "Isuru Pradeep's Portfolio: AI Engineer & Full Stack Developer. Showcasing projects in AI, web development, and cloud. Hire Isuru for innovative solutions.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Isuru Pradeep - Full Stack Developer & AI Engineer",
    description:
      "Isuru Pradeep's Portfolio: AI Engineer & Full Stack Developer. Showcasing projects in AI, web development, and cloud. Hire Isuru for innovative solutions.",
    url: "https://isurupradeep.me",
    siteName: "Isuru Pradeep Portfolio",
    images: [
      {
        url: "/images/isuru.jpg", // Use a relevant image in your public directory
        width: 1200, // Recommended size for social sharing
        height: 630, // Recommended size for social sharing
        alt: "Isuru Pradeep - AI Engineer & Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
