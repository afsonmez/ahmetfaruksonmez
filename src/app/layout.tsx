import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmetfaruksonmez.vercel.app/"),
  title: {
    default: siteConfig.name,
    template: `%s - Psikoloji Öğrencisi`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "af",
    "Sönmez",
    "Faruk",
    "A. F. Sönmez",
    "Ahmet Faruk Sönmez",
    "Ahmet F. Sönmez",
    "A. Faruk Sönmez",
    "portfolio",
    "Grafik Tasarım",
  ],
  authors: [
    {
      name: "Ahmet Faruk Sönmez",
      url: "https://github.com/taqui-786",
    },
  ],
  creator: "A. F. Sönmez",

  openGraph: {
    type: "website",
    locale: "tr",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex relative screen break-words min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
            { "bg-white": "#E6E7EB" }
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
