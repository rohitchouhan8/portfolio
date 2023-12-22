'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/tailwind';

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
    <AnimatedDiv
      index={index}
      className="flex flex-col gap-1 hover:bg-slate-4 p-5 rounded-md"
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
        className="flex flex-col gap-1 hover:bg-slate-4 p-5 rounded-md"
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
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      layout
      transition={{
        type: 'spring',
        stiffness: 160,
        damping: 20,
        duration: 0.5,
        delay: index * 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
