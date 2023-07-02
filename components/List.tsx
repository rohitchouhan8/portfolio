'use client';
import React from 'react';

export function List(props: React.PropsWithChildren<{}>) {
  return (
    <div className="grid gap-4 grid-cols-1 relative pl-4 border-l-slate-7 border-l-2">
      {props.children}
    </div>
  );
}

export function ListItem({
  children,
  index,
  ...props
}: React.HTMLProps<HTMLAnchorElement> & { index: number }) {
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <a {...props}>
      <div
        className="flex flex-col gap-1 hover:bg-slate-4 p-5 rounded-md transition-opacity duration-700 ease-in-out"
        style={{
          opacity,
          transitionDelay: `${index * 0.2}s`,
        }}
      >
        {children}
      </div>
    </a>
  );
}
