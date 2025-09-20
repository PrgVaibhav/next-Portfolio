import type { Metadata } from "next";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";

export const metadata: Metadata = {
  title: "Vaibhav Kumar | React.js Developer",
  description:
    "Vaibhav Kumar is a React.js developer passionate about building innovative, scalable, and user friendly web applications. Focused on delivering clean, efficient, and modern front-end experiences.",
  keywords: [
    "Vaibhav Kumar",
    "React.js Developer",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "Web Developer",
    "Frontend Engineer",
  ],
  authors: [{ name: "Vaibhav Kumar" }],
  creator: "Vaibhav Kumar",
  publisher: "Vaibhav Kumar",
  applicationName: "Portfolio - Vaibhav Kumar",

  openGraph: {
    title: "Vaibhav Kumar | React.js Developer",
    description:
      "React.js Developer with experience building modern, high-performance, and user-focused applications. Passionate about creating seamless front-end experiences.",
    url: "https://kumarvaibhav.xyz",
    siteName: "Vaibhav Kumar Portfolio",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Vaibhav Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter card
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Kumar | React.js Developer",
    description:
      "React.js Developer with experience building modern, high-performance, and user-focused applications.",
    creator: "@SyntaxError408",
    images: ["/banner.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  metadataBase: new URL("https://kumarvaibhav.xyz"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
