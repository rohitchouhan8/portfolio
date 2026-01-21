import './globals.css';
import { Page } from '@/components/Page';
import { Analytics } from '@vercel/analytics/next';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rohit Chouhan',
  description: 'Software Engineer at Figma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Analytics />
        <Page>{children}</Page>
      </body>
    </html>
  );
}
