'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function TypingAnimatedText({ text }: { text: string }) {
  const letters = text.split('');
  //   const [current, setCurrent] = useState('');

  //   // Animate typing a few random letters as the real text animates in
  //   const randomLetters =
  //     '012i3o4p5a6s7d8f9g0hjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

  //   const [realIndex, setRealIndex] = useState(0);
  //   const [lastIndex, setLastIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setRealIndex((prev) => prev + 1);
  //       setLastIndex((prev) => prev + 2);
  //     }, 50);

  //     return () => clearInterval(interval);
  //   }, []);

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
  const [timesLeft, setTimesLeft] = useState(30);

  useEffect(() => {
    setTimeout(() => {
      if (timesLeft === 0) {
        setDisplayLetter(letter);
        return;
      }
      const randomIdx = Math.floor(Math.random() * randomLetters.length);
      setDisplayLetter(randomLetters[randomIdx]);
      setTimesLeft((prev) => prev - 1);
    }, 10 * (index * 0.25));
  }, [index, letter, timesLeft]);

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
