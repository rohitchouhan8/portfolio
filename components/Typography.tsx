import { cn } from '@/utils/tailwind';
import React from 'react';

export const HighlightSpan = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  function InnerHighlightSpan() {
    return (
      <span
        className={cn(
          `bg-gradient-to-r saturate-125 from-pink-400 via-amber-500 to-red-400 text-transparent rounded-sm animate-text bg-clip-text`,
          className
        )}
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
      className={`w-fit bg-clip-text font-bold text-7xl font-title text-mauve-12`}
    >
      {children}
    </h1>
  );
}

export function H1({ children }: React.PropsWithChildren<{}>) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-tight`}
    >
      {children}
    </h1>
  );
}

export function H2({ children }: React.PropsWithChildren<{}>) {
  return (
    <h2
      className={`scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0`}
    >
      {children}
    </h2>
  );
}

export function H3({ children }: React.PropsWithChildren<{}>) {
  return (
    <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight`}>
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
    <p className={`leading-7 [&:not(:first-child)]:mt-6s text-mauve-11`}>
      {children}
    </p>
  );
}

export function UnorderedList({ children }: React.PropsWithChildren<{}>) {
  return <ul className="ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}

export function LI({ children }: React.PropsWithChildren<{}>) {
  return <li className={`marker:text-mauve-11`}>{children}</li>;
}

export function Bold({ children }: React.PropsWithChildren<{}>) {
  return <span className="text-md font-medium text-mauve-12">{children}</span>;
}

export function ListMonoSubtitle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="text-mauve-11 font-normal whitespace-nowrap truncate text-ellipsis flex-shrink-0 font-mono text-sm">
      {children}
    </div>
  );
}

export function InlineCode({ children }: React.PropsWithChildren<{}>) {
  return (
    <code className="relative rounded bg-mauve-10 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}
