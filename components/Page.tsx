'use client';

import { ThemeProvider } from 'next-themes';
import Toolbar from './Toolbar';
import FavIcon from './FavIcon';
import { motion } from 'motion/react';

export function Page({ children }: React.PropsWithChildren<{}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="w-full min-h-screen bg-cream relative transition-colors duration-300">
        {/* Subtle noise texture */}
        <div className="fixed inset-0 noise pointer-events-none" />

        {/* Favicon in corner */}
        <motion.div
          className="fixed left-6 top-6 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <FavIcon />
        </motion.div>

        {/* Main content */}
        <div className="relative z-10">
          <div className="max-w-2xl min-h-screen pb-40 pt-24 md:pt-28 px-6 md:px-8 mx-auto">
            <motion.main
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            >
              {children}
            </motion.main>
          </div>
        </div>

        {/* Toolbar */}
        <Toolbar />
      </div>
    </ThemeProvider>
  );
}
