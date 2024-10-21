import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// Providers
import PreLoader from "@/providers/PreLoader";
import UIProvider from "./UIProvider";

// Utils
import { cn } from "@/lib/utils";
// Css
import "./globals.css";
import { ROOT_URL } from "@/constants";
import Metrics from "./metrics";

// Load the Poppins font with 'latin' subset
const poppins = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Metadata for the application
export const metadata: Metadata = {
  metadataBase: new URL(ROOT_URL),
  title: "Blinkadz",
  description:
    "Create dynamic adz automatically. Focus on ideas and not editing. Discover the magic of creating dynamic videos automatically.",
  applicationName: "Blinkadz",
  keywords: [
    "video",
    "dynamic",
    "automatic",
    "editing",
    "creation",
    "AI Ad Creation",
    "Automated Ad Management",
    "Blinkadz Advertising",
    "AI-Powered Ad Metrics",
    "B2B Ad Campaigns",
    "Intelligent Ad Optimization",
    "Smart Ad Analytics",
    "Business Marketing Automation",
    "Digital Ad Automation",
    "AI Marketing Solutions",
    "Programmatic Ad Creation",
    "Data-Driven Ad Metrics",
    "Business Ad Efficiency",
    "Intelligent Ad Platform",
    "Marketing Insights Tool",
  ],
  creator: "Blinkadz",
  publisher: "Cinemachines Private Limited",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      {/*
        The <head /> component will contain the components returned by the nearest parent
        head.js. It can be used to define the document head for SEO, metadata, and other purposes.
        Learn more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={cn("min-h-screen", poppins.className)}>
        {/* Wrap the children with the AuthContextProvider to provide authentication context */}
        <PreLoader>
          <UIProvider>
            {children}
            <Toaster />
          </UIProvider>
        </PreLoader>
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_APP_ENV === "production" && <Metrics />}
      </body>
    </html>
  );
}
