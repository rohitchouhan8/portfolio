'use client';
import { cn } from '@/utils/tailwind';
import React from 'react';
import { motion } from 'motion/react';

export const HighlightSpan = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <span
      className={cn(
        'text-accent font-medium',
        className
      )}
    >
      {children}
    </span>
  );
};

export const GlowText = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <span className={cn('text-accent font-medium', className)}>
      {children}
    </span>
  );
};

export function H1({
  children,
  className,
  animate = true,
}: {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}) {
  const content = (
    <h1
      className={cn(
        'text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15]',
        'text-text-primary font-serif',
        className
      )}
    >
      {children}
    </h1>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
    >
      {content}
    </motion.div>
  );
}

export function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      className={cn(
        'text-2xl md:text-3xl font-semibold tracking-tight',
        'text-text-primary font-serif',
        'mt-10 mb-4',
        className
      )}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </motion.h2>
  );
}

export function H3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        'text-xl md:text-2xl font-semibold tracking-tight',
        'text-text-primary font-serif',
        'mt-8 mb-3',
        className
      )}
    >
      {children}
    </h3>
  );
}

export function AnimatedGradientSpan({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <span className="text-accent font-semibold">
      {children}
    </span>
  );
}

export function Paragraphs({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col gap-5">
      {children}
    </div>
  );
}

export function Paragraph({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.p
      className={cn(
        'leading-[1.8] text-text-secondary mb-5',
        className
      )}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      {children}
    </motion.p>
  );
}

export function UnorderedList({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <ul className={cn("ml-5 list-disc [&>li]:mt-2 text-text-secondary leading-[1.8] mb-5", className)}>
      {children}
    </ul>
  );
}

export function OrderedList({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <ol className={cn("ml-5 list-decimal [&>li]:mt-2 text-text-secondary leading-[1.8] mb-5", className)}>
      {children}
    </ol>
  );
}

export function LI({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <li className={cn("marker:text-text-tertiary", className)}>{children}</li>;
}

export function Bold({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <strong className={cn("font-medium text-text-primary", className)}>
      {children}
    </strong>
  );
}

export function ListMonoSubtitle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="text-text-tertiary font-normal whitespace-nowrap truncate text-ellipsis shrink-0 font-mono text-sm">
      {children}
    </div>
  );
}

export function InlineCode({ children }: React.PropsWithChildren<{}>) {
  return (
    <code className="relative rounded bg-surface-2 border border-border px-1.5 py-0.5 font-mono text-sm text-text-primary">
      {children}
    </code>
  );
}

export function Code({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <code className={cn("text-accent font-mono", className)}>
      {children}
    </code>
  );
}

export function SectionLabel({ children }: React.PropsWithChildren<{}>) {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
    >
      <span className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
        {children}
      </span>
    </motion.div>
  );
}
