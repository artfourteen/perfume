import { cn } from "@/shared/core/cn/cn";
import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import type { Metadata } from "next";
import "./globals.scss";
// import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  title: "Perfume Project",
  description: "Powered by ART14",
};

// const manrope = Manrope({
//   subsets: ["cyrillic", "latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("flex flex-col h-dvh antialiased")}>
        <Header />
        <main className="flex-1 h-dvh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
