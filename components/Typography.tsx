import { cn } from '@/utils/tailwind';
import React, { HTMLAttributes } from 'react';

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

export function H1(props: React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl lg:leading-tight`}
      {...props}
    />
  );
}

export function H2(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={`scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0`}
      {...props}
    />
  );
}

export function H3(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight`}
      {...props}
    />
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

export function Paragraph(props: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-6s text-grey-11`}
      {...props}
    />
  );
}

export function UnorderedList(props: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className="ml-6 list-disc [&>li]:mt-2 text-grey-11 leading-7"
      {...props}
    />
  );
}

export function OrderedList(props: HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className="ml-6 list-decimal [&>li]:mt-2 text-grey-11 leading-7"
      {...props}
    />
  );
}

export function LI(props: HTMLAttributes<HTMLLIElement>) {
  return <li className={`marker:text-grey-11`} {...props} />;
}

export function Bold(props: React.HTMLAttributes<HTMLSpanElement>) {
  return <strong className="text-md font-medium text-grey-12" {...props} />;
}

export function ListMonoSubtitle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="text-grey-11 font-normal whitespace-nowrap truncate text-ellipsis flex-shrink-0 font-mono text-sm">
      {children}
    </div>
  );
}

export function InlineCode({ children }: React.PropsWithChildren<{}>) {
  return (
    <code className="relative rounded bg-grey-10 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}

export function Code(props: HTMLAttributes<HTMLElement>) {
  return <code className="text-grey-12 font-mono font-semibold" {...props} />;
}
