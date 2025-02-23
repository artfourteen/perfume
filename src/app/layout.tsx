import { cn } from "@/shared/core/cn/cn";
import { Footer } from "@/widgets/footer/Footer";
import { Header } from "@/widgets/header/Header";
import { OrderModal } from "@/widgets/orderModal/OrderModal";
import type { Metadata } from "next";
import { Dynalight } from "next/font/google";
import "react-loading-skeleton/dist/skeleton.css";
import { CartProvider } from "../features/cart/provider/CartProvider";
import "./globals.scss";
import { Cart } from "@/features/cart/ui/Cart";

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
        <CartProvider>
          <OrderModal />
          <Cart />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
