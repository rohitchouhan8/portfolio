import * as React from "react"

import { HighlightSpan, Paragraph, Paragraphs } from "../components/Text"

export default function Home() {
  return (
    <div>
      <Paragraphs>
        <Paragraph>
          I&rsquo;m <HighlightSpan>Rohit</HighlightSpan>. I&rsquo;m a software
          engineer at{" "}
          <HighlightSpan>Figma on the Creation Engine</HighlightSpan> pillar. I
          am on a team that works on the{" "}
          <HighlightSpan>plugin, widget, and REST APIs</HighlightSpan>.
        </Paragraph>
        <Paragraph>
          In my freetime, I improve my health through{" "}
          <HighlightSpan>CrossFit</HighlightSpan> and running. I expand my
          knowledge by <HighlightSpan>reading</HighlightSpan>. Finally, I
          explore my creative side through{" "}
          <HighlightSpan>digital art and designs</HighlightSpan>.
        </Paragraph>
        <Paragraph>
          I&rsquo;m not currently looking for a new job, but I&rsquo;d always
          love to connect.
        </Paragraph>
      </Paragraphs>
    </div>
  )
}
