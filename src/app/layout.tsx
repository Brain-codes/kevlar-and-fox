import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "@next/font/local";
import LoaderLayout from "@/components/LoaderLayout";

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

const title = "Kevlar & Fox Consulting";
const description =
  "Kevlar & Fox Consulting, Elevating organizations through expert PR strategies, cutting-edge digital transformations, and empowering training solutions.";
const url = "https://kevlarandfox.com";
export const metadata: Metadata = {
  applicationName: title,
  title,
  description,
  metadataBase: new URL(url),
  keywords: [title],
  themeColor: "#FFFFFF",
  colorScheme: "light",

  openGraph: {
    title,
    description,
    siteName: title,
    url,
    type: "website",
    images: [
      {
        url: "/images/logo-full.svg",
        width: 800,
        height: 600,
      },
      {
        url: "/images/logo-full.svg",
        width: 1800,
        height: 1600,
      },
    ],
  },

  icons: {
    icon: "/images/logo-one.svg",
    apple: "/images/logo-one.svg",
    shortcut: "/images/logo-one.svg",
    other: {
      rel: title,
      url: "/images/logo-one.svg",
    },
  },
  twitter: {
    title,
    description,
    site: "@kevlarandfox",
    creator: "@kevlarandfox",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilmer.variable} font-sans`} id="home">
        <LoaderLayout>{children}</LoaderLayout>
      </body>
    </html>
  );
}
