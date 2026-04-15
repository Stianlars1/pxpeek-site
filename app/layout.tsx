import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://pxpeek.com"),
  title: "PxPeek — See the pixels behind your units",
  description:
    "JetBrains IDE plugin that shows the pixel equivalent of every relative CSS unit as an inline hint. For CSS, SCSS, Sass, and LESS.",
  keywords: [
    "PxPeek",
    "JetBrains plugin",
    "WebStorm",
    "IntelliJ",
    "CSS",
    "SCSS",
    "Sass",
    "LESS",
    "inlay hints",
    "rem to px",
  ],
  authors: [{ name: "Stian Larsen", url: "https://github.com/Stianlars1" }],
  icons: { icon: "/logo.svg" },
  openGraph: {
    type: "website",
    url: "https://pxpeek.com",
    title: "PxPeek — See the pixels behind your units",
    description:
      "Inline pixel equivalents for every relative CSS unit. A JetBrains IDE plugin.",
    siteName: "PxPeek",
  },
  twitter: {
    card: "summary_large_image",
    title: "PxPeek — See the pixels behind your units",
    description:
      "Inline pixel equivalents for every relative CSS unit. A JetBrains IDE plugin.",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
