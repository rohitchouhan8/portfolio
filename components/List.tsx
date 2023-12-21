'use client';
import Link from 'next/link';
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
}: {
  index: number;
  children: React.ReactNode;
}) {
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <div
      className="flex flex-col gap-1 hover:bg-slate-4 p-5 rounded-md transition-opacity duration-700 ease-in-out"
      style={{
        opacity,
        transitionDelay: `${index * 0.2}s`,
      }}
    >
      {children}
    </div>
  );
}

type LinkItemProps = React.ComponentProps<typeof Link> & { index: number };
export function LinkItem({ index, ...props }: LinkItemProps) {
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <Link
      {...props}
      className="flex flex-col gap-1 hover:bg-slate-4 p-5 rounded-md transition-opacity duration-700 ease-in-out"
      style={{
        opacity,
        transitionDelay: `${index * 0.2}s`,
      }}
    />
  );
}
