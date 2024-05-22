import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "@next/font/local";

const inter = Inter({ subsets: ["latin"] });
const gilmer = localFont({
  src: [
    {
      path: "../../public/fonts/Gilmer-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Gilmer-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Gilmer-Medium.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Gilmer-Bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Gilmer-Heavy.otf",
      weight: "800",
    },
    {
      path: "../../public/fonts/Gilmer-Outline.otf",
      weight: "1000",
    },
  ],
  variable: "--font-gilmer",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilmer.variable} font-sans`}>{children}</body>
    </html>
  );
}
