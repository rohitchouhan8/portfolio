import React from "react";

export function List(props: React.PropsWithChildren<{}>) {
  return (
    <div className="grid gap-4 grid-cols-1 relative pl-4 border-l-slate-7 border-l-2">
      {props.children}
    </div>
  );
}

export function ListItem({
  children,
  ...props
}: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a {...props}>
      <div className="flex flex-col gap-1 hover:bg-slate-4 p-5 rounded-md transition-all duration-300 ease-in-out">
        {children}
      </div>
    </a>
  );
}
