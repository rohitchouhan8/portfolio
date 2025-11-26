'use client';

import { ThemeProvider } from 'next-themes';
import Toolbar from './Toolbar';
import FavIcon from './FavIcon';

export function Page({ children }: React.PropsWithChildren<{}>) {
  return (
    <ThemeProvider attribute="class">
      <div className="w-full h-full min-h-screen bg-grey-1 px-4 overflow-auto">
        <div className="absolute left-0 right-0 w-full h-full flex items-start justify-center z-0 noise"></div>
        <div className="absolute left-4 top-4">
          <FavIcon />
        </div>
        <div className="relative w-full h-full min-h-screen z-10">
          <div className="max-w-3xl h-full pb-48 pt-20 gap-4 mx-auto inset-x-0 flex flex-col">
            {children}
            <Toolbar />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
