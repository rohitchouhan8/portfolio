'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/tailwind';

export function List(props: React.PropsWithChildren<{}>) {
  return (
    <div className="grid grid-cols-1 -ml-3 relative border-l-mauve-7 border-l-1">
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
  return (
    <AnimatedDiv
      index={index}
      className="flex flex-col gap-1 hover:bg-mauve-4 p-4 rounded-lg transition-colors"
    >
      {children}
    </AnimatedDiv>
  );
}

type LinkItemProps = React.ComponentProps<typeof Link> & { index: number };
export function LinkItem({ index, ...props }: LinkItemProps) {
  return (
    <AnimatedDiv index={index}>
      <Link
        {...props}
        className="flex flex-col gap-1 hover:bg-mauve-4 p-4 rounded-lg transition-colors"
      >
        {props.children}
      </Link>
    </AnimatedDiv>
  );
}

function AnimatedDiv({
  index,
  children,
  className,
}: React.PropsWithChildren<{ index: number; className?: string }>) {
  return (
    <motion.div
      className={cn('w-full h-full', className)}
      initial={{ y: 25, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}
