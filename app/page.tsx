import * as React from "react";

import { HighlightSpan, Paragraph, Paragraphs } from "../components/Typography";

export default function Home() {
  return (
    <div className="mt-6">
      <Paragraphs>
        <Paragraph>
          I&rsquo;m <HighlightSpan>Rohit</HighlightSpan>. I&rsquo;m a software
          engineer at Figma on building the platform that powers{" "}
          <HighlightSpan>Plugins, Widgets, and the REST API. </HighlightSpan>
        </Paragraph>
        <Paragraph>
          Outside of work, I&rsquo;m working on my creative skills to become a{" "}
          <HighlightSpan>digital artist.</HighlightSpan>. One day, I want to
          create an entire world through my art.
        </Paragraph>
        <Paragraph>
          In my freetime, I love to play <HighlightSpan>tennis</HighlightSpan>,{" "}
          <HighlightSpan>make ice creams</HighlightSpan>, and play
          <HighlightSpan>video games</HighlightSpan>.
        </Paragraph>
        <Paragraph>
          I&rsquo;m not currently looking for a new job, but I&rsquo;d always
          love to connect.
        </Paragraph>
      </Paragraphs>
    </div>
  );
}
