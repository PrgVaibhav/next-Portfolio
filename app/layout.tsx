import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/web/Footer";

export const metadata: Metadata = {
  title: "Vaibhav Kumar | React.js Developer",
  description:
    "Vaibhav Kumar is a React.js developer passionate about building innovative, scalable, and user-friendly web applications. Focused on delivering clean, efficient, and modern front-end experiences.",
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
    url: "https://kumarvaibhav.xyz", // replace with your actual domain
    siteName: "Vaibhav Kumar Portfolio",
    images: [
      {
        url: "/favicon.ico",
        width: 512,
        height: 512,
        alt: "Vaibhav Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto max-w-6xl relative antialiased">
        <header className="sticky top-0 z-[999] bg-[#ebebeb]">
          <Navbar />
        </header>
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
