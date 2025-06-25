import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scanmate - AI-OCRサービス Landing Page",
  description: "Scanmateは、AIを活用したOCRサービスで、業務の効率化と生産性向上を実現します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-xs fixed top-0 left-0 w-full z-50">
        <Header
          links={[
            { label: "製品特徴", href: "#features" },
            { label: "料金・プラン", href: "#pricing" },
            { label: "機能一覧", href: "#testimonials" },
            { label: "チュートリアル", href: "#support" },
            { label: "お問い合わせ", href: "#tutorial" },
          ]}
        />
      </div>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
