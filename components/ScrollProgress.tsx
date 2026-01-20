'use client';

import { motion, useScroll } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-surface-3 w-full max-w-2xl fixed mx-auto inset-x-0 bottom-16 z-10 rounded-full overflow-hidden">
      <motion.div
        className="bg-accent p-0.5 w-full origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
