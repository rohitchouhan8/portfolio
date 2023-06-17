'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function List(props: React.PropsWithChildren<{}>) {
  return (
    <AnimatePresence>
      <motion.div className="grid gap-4 grid-cols-1 relative pl-4 border-l-slate-7 border-l-2">
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}

export function ListItem({
  children,
  index,
  ...props
}: React.HTMLProps<HTMLAnchorElement> & { index: number }) {
  return (
    <a {...props}>
      <motion.div
        className="flex flex-col gap-1 hover:bg-slate-4 p-5 rounded-md transition-all duration-300 ease-in-out"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </a>
  );
}
