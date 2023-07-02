'use client';

import './globals.css';
import { Inter, Dancing_Script, Rubik } from 'next/font/google';
import localFont from 'next/font/local';
import { Page } from '@/components/Page';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
});
const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

// Font files can be colocated inside of `app`
const brick = localFont({
  src: '../fonts/Brick-Variant.otf',
  display: 'swap',
  adjustFontFallback: 'Arial',
  variable: '--font-brick',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dancingScript.variable} ${rubik.variable} ${brick.variable}`}
    >
      <body>
        <Page>{children}</Page>
      </body>
    </html>
  );
}
