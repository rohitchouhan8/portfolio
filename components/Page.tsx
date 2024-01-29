'use client';

import { ThemeProvider } from 'next-themes';
import Toolbar from './Toolbar';
import { AnimatedTitle } from './Typography';
import FavIcon from './FavIcon';

export function Page({ children }: React.PropsWithChildren<{}>) {
  return (
    <ThemeProvider attribute="class">
      <div className="w-full h-full min-h-screen bg-mauve-1 px-4 overflow-auto">
        <div className="absolute left-4 top-4">
          <FavIcon />
        </div>
        <div className="w-full h-full min-h-screen">
          <div className="max-w-3xl h-full pb-48 pt-20 gap-4 mx-auto inset-x-0 flex flex-col">
            {children}
            <Toolbar />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
