import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
export const metadata: Metadata = {
  title: "Smash golf tour",
  description: "play. compete. win",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={cn(
          "relative h-full antialiased w-full bg-gray-800",
          inter.className
        )}
      >
        <main className="relative flex flex-col m-auto min-h-screen max-w-[1440px]">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
