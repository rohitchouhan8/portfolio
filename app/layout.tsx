"use client"

import { AnimatedTitle } from "@/components/Text"
import Toolbar from "@/components/Toolbar"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import { Inter, Dancing_Script, Rubik } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
})
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
})

function Page({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className='w-full h-full min-h-screen bg-gray-50 dark:bg-black px-4 overflow-auto'>
      <div className='w-full h-full min-h-screen'>
        <div className='absolute left-4 top-4 mx-auto'>
          <AnimatedTitle>Rohit Chouhan.</AnimatedTitle>
        </div>
        <div className='max-w-3xl h-full pb-64 pt-20 gap-4 mx-auto inset-x-0 flex flex-col'>
          {children}
          <Toolbar />
        </div>
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${dancingScript.variable} ${rubik.variable}`}>
      <body>
        <ThemeProvider attribute='class'>
          <Page>{children}</Page>
        </ThemeProvider>
      </body>
    </html>
  )
}
