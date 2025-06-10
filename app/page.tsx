import * as React from 'react';

import { HighlightSpan, Paragraph, Paragraphs } from '../components/Typography';

export default function Home() {
  return (
    <div className="mt-6">
      <Paragraphs>
        <Paragraph>
          Hey there! I&rsquo;m <HighlightSpan>Rohit</HighlightSpan>, a software
          engineer at Figma where I spend my days building the{' '}
          <HighlightSpan>extensibility platform</HighlightSpan> that powers
          thousands of plugins, widgets, and integrations. Think of me as the
          bridge between Figma&rsquo;s incredible design tools and the creative
          minds who want to extend them.
        </Paragraph>
        <Paragraph>
          When I&rsquo;m not deep in code, you&rsquo;ll find me on a completely
          different creative journey—learning to become a{' '}
          <HighlightSpan>digital artist</HighlightSpan>. There&rsquo;s something
          magical about switching from building software interfaces to crafting
          visual worlds. My dream? To create an entire universe through art,
          complete with its own stories and characters.
        </Paragraph>
        <Paragraph>
          Life outside the screen is just as important to me. I&rsquo;m that
          person who gets genuinely excited about a perfect{' '}
          <HighlightSpan>tennis serve</HighlightSpan>, spends weekends
          experimenting with <HighlightSpan>homemade ice cream</HighlightSpan>{' '}
          flavors (lavender honey is my latest obsession), and loses track of
          time in epic <HighlightSpan>gaming sessions</HighlightSpan>.
        </Paragraph>
        <Paragraph>
          While I&rsquo;m happily settled at Figma, I&rsquo;m always up for
          interesting conversations about technology, creativity, or that perfect
          ice cream recipe. Let&rsquo;s connect!
        </Paragraph>
      </Paragraphs>
    </div>
  );
}