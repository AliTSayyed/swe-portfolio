import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali-Taabesh Sayyed: Software Developer",
  description:
    "Welcome to my portfolio! I am a passionate full stack developer, building robust APIs and intuitive user interfaces. I create efficient and reliable solutions.",
  keywords: [
    "Backend Developer",
    "Software Engineer",
    "System Architecture",
    "API Development",
    "Database Design",
    "Cloud Computing",
    "Microservices",
    "DevOps",
    "Ali-Taabesh Sayyed",
    "Node.js",
    "Python",
    "Java",
    "Distributed Systems",
    "System Design",
    "Backend Architecture",
  ],
  authors: [{ name: "Ali-Taabesh Sayyed" }],
  creator: "[Ali-Taabesh Sayyed",
  openGraph: {
    title: "Ali-Taabesh Sayyed: Software Developer Portfolio",
    description:
      "Passionate full stack developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.",
    url: "https://alitsayyed.com",
    siteName: "Ali-Taabesh Sayyed - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "[Your Name] - Backend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
