import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400"] });

export const metadata: Metadata = {
  title: "A Front-End Developer",
  description: "Creates websites and web applications",
  icons: { icon: "favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
