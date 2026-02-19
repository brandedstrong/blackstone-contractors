import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Blackstone Contractors LLC | Premium Concrete Services in Orting, WA",
  description: "Professional concrete contractor serving Orting, Washington and surrounding areas. 9+ years experience in driveways, patios, stamped concrete, and more. Licensed & insured. Free estimates.",
  keywords: "concrete contractor, Orting WA, driveways, patios, stamped concrete, concrete services, King County, Pierce County",
  openGraph: {
    title: "Blackstone Contractors LLC | Premium Concrete Services",
    description: "Professional concrete contractor serving Orting, Washington. 9+ years experience. Licensed & insured.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
