import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "../components/context/AuthProvider";
import Providers from "@/components/Provider/Provider";
import { Toaster } from "@/components/ui/toaster";
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
        <main className="relative flex flex-col m-auto min-h-screen min-w-[1440px] ">
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Toaster />
          <div className="flex-grow flex-1">
            <AuthProvider>
              <Providers>{children}</Providers>
            </AuthProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
