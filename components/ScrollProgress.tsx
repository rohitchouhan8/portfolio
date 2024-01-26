'use client';

import { motion, useScroll } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-mauve-4 w-full max-w-2xl fixed mx-auto inset-x-0 bottom-16 z-10 rounded-full overflow-hidden">
      <motion.div
        className="bg-gradient-to-r saturate-125 from-pink-400 via-amber-500 to-red-400 p-1 w-full origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
