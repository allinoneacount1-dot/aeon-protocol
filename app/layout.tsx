import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "ÆON — A Protocol for the Long Now",
  description: "A protocol for the long now. Value compounds across geological time, indifferent to the 24h candle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bone text-ink min-h-screen">
        <CustomCursor />
        <Nav />
        <PageTransition />
        <main>{children}</main>
      </body>
    </html>
  );
}
