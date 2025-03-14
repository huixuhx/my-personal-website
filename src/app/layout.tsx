import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MyFooter from "@/components/MyFooter";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"], 
  weight: ["400", "500", "700"], // 可选权重
  variable: "--font-jetbrains-mono", // CSS 变量
});

export const metadata: Metadata = {
  title: "Hui Xu | Software Engineer & Developer",
  description: "I build scalable and high-performance applications with Java, AWS, and Next.js.",
  icons: {
    shortcut: "/favicon.png", // ✅ Optional shortcut icon
    apple: "/apple-touch-icon.png", // ✅ For iOS home screen
  },
  keywords: "Hui Xu, Software Engineer, Web Developer, AWS, Next.js, React, Java, Cloud Computing",
  authors: [{ name: "Hui Xu", url: "https://huixu.dev" }],
  openGraph: {
    title: "Hui Xu | Software Engineer & Developer",
    description: "Passionate about building scalable applications using modern technologies.",
    url: "https://huixu.dev",
    siteName: "Hui Xu",
    images: [
      {
        url: "/og", // ✅ This dynamically generates the OG image from `/og/route.tsx`
        width: 1200,
        height: 630,
        alt: "Hui Xu - Software Engineer Portfolio",
      },
    ],
    type: "website",
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
       className={jetBrainsMono.variable}
      >
      <Navbar />
     
      <main>{children}</main>
      <MyFooter />
      </body>
    </html>
  );
}
