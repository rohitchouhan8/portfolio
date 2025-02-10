'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function TypingAnimatedText({ text }: { text: string }) {
  const letters = text.split('');

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {letters.map((letter, idx) => {
        return <AnimatedLetter key={idx} letter={letter} index={idx} />;
      })}
    </motion.div>
  );
}

function AnimatedLetter({ letter, index }: { letter: string; index: number }) {
  const randomLetters =
    '012i3o4p5a6s7d8f9g0hjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  const [displayLetter, setDisplayLetter] = useState(randomLetters[index]);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const startDelay = index * 50; // Base delay for each letter
    const intervalDuration = 30; // How fast letters change
    const animationDuration = 500; // Total animation time per letter

    // Start the animation after the initial delay
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (!isAnimating) return;

        const randomIdx = Math.floor(Math.random() * randomLetters.length);
        setDisplayLetter(randomLetters[randomIdx]);
      }, intervalDuration);

      // Stop the animation and show the final letter
      const endTimeout = setTimeout(() => {
        setIsAnimating(false);
        setDisplayLetter(letter);
        clearInterval(interval);
      }, animationDuration);

      return () => {
        clearInterval(interval);
        clearTimeout(endTimeout);
      };
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [index, letter, isAnimating, randomLetters]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index / 30 }}
      exit={{ opacity: 0 }}
    >
      {displayLetter}
    </motion.span>
  );
}
