'use client';
import * as React from 'react';
import { motion } from 'motion/react';
import {
  HighlightSpan,
  Paragraph,
  Paragraphs,
  GlowText,
} from '../components/Typography';
import Link from 'next/link';

function HeroSection() {
  return (
    <div className="mb-12">
      <motion.h1
        className="text-4xl md:text-5xl font-serif font-semibold tracking-tight leading-[1.15] text-text-primary mb-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
      >
        Rohit Chouhan
      </motion.h1>

      <motion.p
        className="text-text-tertiary"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
      >
        Software Engineer at <GlowText>Figma</GlowText>
      </motion.p>
    </div>
  );
}

function QuickLinks() {
  const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/writing', label: 'Writing' },
    { href: '/reading', label: 'Reading' },
    { href: '/stack', label: 'Stack' },
  ];

  return (
    <motion.nav
      className="flex flex-wrap gap-x-6 gap-y-2 mt-10"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-text-secondary hover:text-accent transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
    </motion.nav>
  );
}

export default function Home() {
  return (
    <div>
      <HeroSection />

      <Paragraphs>
        <Paragraph delay={0.15}>
          I lead the team behind <HighlightSpan>Figma Make</HighlightSpan>, our
          app builder serving hundreds of thousands of creators. I spend a lot of
          time thinking about AI agents and how they should work.
        </Paragraph>

        <Paragraph delay={0.2}>
          Outside of work, I&rsquo;m learning to become a{' '}
          <HighlightSpan>digital artist</HighlightSpan>. There&rsquo;s something
          satisfying about switching from building software to crafting visual
          worlds. I want to create an entire universe through art someday.
        </Paragraph>

        <Paragraph delay={0.25}>
          I also enjoy a good <HighlightSpan>tennis match</HighlightSpan>, making{' '}
          <HighlightSpan>homemade ice cream</HighlightSpan>, and long{' '}
          <HighlightSpan>gaming sessions</HighlightSpan>.
        </Paragraph>

        <Paragraph delay={0.3}>
          Always happy to chat about technology, creativity, or that perfect ice
          cream recipe.
        </Paragraph>
      </Paragraphs>

      <QuickLinks />
    </div>
  );
}
