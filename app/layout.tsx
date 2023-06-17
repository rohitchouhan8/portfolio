"use client";

import { AnimatedTitle } from "@/components/Text";
import Toolbar from "@/components/Toolbar";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Inter, Dancing_Script, Rubik } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

// Font files can be colocated inside of `app`
const brick = localFont({
  src: "../fonts/Brick-Variant.otf",
  display: "swap",
  adjustFontFallback: "Arial",
  variable: "--font-brick",
});

function Page({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="w-full h-full min-h-screen bg-slate-2 px-4 overflow-auto">
      <div className="w-full h-full min-h-screen">
        <div className="absolute left-4 top-4 mx-auto">
          <AnimatedTitle>Rohit Chouhan.</AnimatedTitle>
        </div>
        <div className="max-w-3xl h-full pb-48 pt-20 gap-4 mx-auto inset-x-0 flex flex-col">
          {children}
          <Toolbar />
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dancingScript.variable} ${rubik.variable} ${brick.variable}`}>
      <body>
        <ThemeProvider attribute="class">
          <Page>{children}</Page>
        </ThemeProvider>
      </body>
    </html>
  );
}
