import React from 'react';

export const HighlightSpan = ({ children }: React.PropsWithChildren<{}>) => {
  function InnerHighlightSpan() {
    return (
      <span
        className={`bg-gradient-to-r saturate-125 from-pink-400 via-amber-500 to-red-400 text-transparent font-semibold rounded-sm  animate-text bg-clip-text`}
      >
        {children}
      </span>
    );
  }
  return <InnerHighlightSpan />;
};

export function AnimatedTitle({ children }: React.PropsWithChildren<{}>) {
  function InnerTitle() {
    return (
      <h1
        className={`w-fit bg-clip-text text-4xl font-title text-transparent leading-loose
			 bg-gradient-to-r saturate-125 from-pink-400 via-amber-500 to-red-400  animate-text`}
      >
        {children}
      </h1>
    );
  }
  return <InnerTitle />;
}

export function RegularTitle({ children }: React.PropsWithChildren<{}>) {
  return (
    <h1
      className={`w-fit bg-clip-text font-bold text-7xl font-title text-slate-12`}
    >
      {children}
    </h1>
  );
}

export function H1({ children }: React.PropsWithChildren<{}>) {
  return (
    <h1
      className={`bg-clip-text font-bold text-3xl font-header text-slate-12 bg-blend-darken tracking-wider mb-2`}
    >
      {children}
    </h1>
  );
}

export function H2({ children }: React.PropsWithChildren<{}>) {
  return (
    <h2
      className={`w-fit font-medium text-xl font-header text-slate-12 bg-blend-darken tracking-wider text-ellipsis`}
    >
      {children}
    </h2>
  );
}

export function H3({ children }: React.PropsWithChildren<{}>) {
  return (
    <h3
      className={`w-fit font-medium text-lg font-header text-slate-12 bg-blend-darken tracking-wider`}
    >
      {children}
    </h3>
  );
}

export function AnimatedGradientSpan({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <span
      className={`font-extrabold text-xl bg-clip-text text-transparent 
            bg-gradient-to-r saturate-125 from-pink-400 via-amber-500 to-red-400`}
    >
      {children}
    </span>
  );
}

export function Paragraphs({ children }: React.PropsWithChildren<{}>) {
  return <div className="leading-relaxed flex flex-col gap-3">{children}</div>;
}

export function Paragraph({ children }: React.PropsWithChildren<{}>) {
  return (
    <p className={`text-slate-12 text-md leading-loose font-sans`}>
      {children}
    </p>
  );
}

export function UnorderedList({ children }: React.PropsWithChildren<{}>) {
  return <ul className="ml-10">{children}</ul>;
}

export function LI({ children }: React.PropsWithChildren<{}>) {
  return (
    <li className={`list-disc text-slate-12 text-md leading-relaxed`}>
      {children}
    </li>
  );
}

export function StrongSpan({ children }: React.PropsWithChildren<{}>) {
  return <span className="text-slate-12 font-medium">{children}</span>;
}

export function ListMonoSubtitle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="text-slate-11 font-normal whitespace-nowrap truncate text-ellipsis flex-shrink-0 font-mono">
      {children}
    </div>
  );
}

export function ImageMonoSubtitle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="text-slate-11 font-normal whitespace-nowrap truncate text-ellipsis flex-shrink-0 font-mono">
      {children}
    </div>
  );
}
