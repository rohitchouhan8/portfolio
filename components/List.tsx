'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/utils/tailwind';

export function List({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col gap-1 mt-6">
      {children}
    </div>
  );
}

const itemClassName = cn(
  'group relative flex flex-col gap-1 py-3 px-4 -mx-4 rounded-lg transition-colors duration-200',
  'hover:bg-surface-hover'
);

export function ListItem({
  children,
  className,
  index,
}: {
  index: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(itemClassName, className)}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.03,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

type LinkItemProps = React.ComponentProps<typeof Link> & { index: number };

export function LinkItem({ index, className, children, ...props }: LinkItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.03,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      <Link {...props} className={cn(itemClassName, className)}>
        {children}
      </Link>
    </motion.div>
  );
}

export function AnimatedDiv({
  index,
  children,
  className,
}: React.PropsWithChildren<{ index: number; className?: string }>) {
  return (
    <motion.div
      className={cn('w-full h-full', className)}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.03,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
