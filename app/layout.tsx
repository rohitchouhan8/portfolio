'use client';

import './globals.css';
import { Inter, Dancing_Script, Rubik, Alex_Brush } from 'next/font/google';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dancingScript.variable} ${rubik.variable}`}
    >
      <body>
        <Page>{children}</Page>
      </body>
    </html>
  );
}
