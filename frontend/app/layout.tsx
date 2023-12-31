import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer-page";
import Header from "@/components/Header-page";

import "./globals.css";

export const metadata: Metadata = {
  title: "TODO LIST",
  description: "TODO LIST hecho con react y nextjs y nodejs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={GeistSans.className}>
      <body
        className={cn(
          `min-h-screen flex flex-col  bg-background antialiased   relative pb-[3em] `
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <Toaster />

          <main>{children}</main>
          <footer className=" h-fit flex  justify-center items-center absolute w-full bottom-0 ">
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
