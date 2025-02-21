import { cn } from "@/shared/core/cn/cn";
import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import type { Metadata } from "next";
import "./globals.scss";
import { Dynalight } from "next/font/google";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata: Metadata = {
  title: "AysParfume",
  description: "Приобретите изысканные духи на любой случай.",
};

const dynalight = Dynalight({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dynalight",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          dynalight.variable,
          "flex flex-col h-dvh antialiased relative"
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
