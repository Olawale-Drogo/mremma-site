import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mremma.com"),
  title: {
    default: "Mremma | Data Strategy & Digital Growth",
    template: "%s | Mremma",
  },
  description:
    "Mremma helps businesses turn complex data into clear strategy, sharper decisions, and measurable digital growth.",
  applicationName: "Mremma",
  authors: [{ name: "Emmanuel Olawale" }],
  creator: "Emmanuel Olawale",
  publisher: "Mremma",
  keywords: [
    "data strategy",
    "business intelligence",
    "dashboard design",
    "digital consulting",
    "analytics consulting",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mremma.com",
    siteName: "Mremma",
    title: "Mremma | Data Strategy & Digital Growth",
    description:
      "Strategic analytics, performance dashboards, and consulting for businesses ready to grow with clarity.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Mremma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mremma | Data Strategy & Digital Growth",
    description:
      "Strategic analytics, performance dashboards, and consulting for businesses ready to grow with clarity.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport = {
  themeColor: "#0f172a",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
