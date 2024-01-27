import * as React from 'react';

import { H1, H2, H3, Paragraph, StrongSpan } from '../../components/Typography';

import { createClient } from 'contentful';

import { AnimatedDiv, List, ListItem } from '@/components/List';

type ReadingSkeleton = {
  contentTypeId: 'reading';
  fields: {
    id: string;
    title: string;
    author: string;
    review: string;
    dateFinished: string;
  };
};

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
  });

  const entries = await client.getEntries<ReadingSkeleton>({
    content_type: 'reading',
  });

  return entries.items;
}

// markup
const ReadingPage = () => {
  const reading = React.use(getData());
  const listItems = reading.map((reading, index) => {
    const { id, title, author, review } = reading.fields;
    return (
      <AnimatedDiv key={id} index={index}>
        <ListItem key={id} index={index}>
          <div className="flex gap-1 items-baseline">
            <StrongSpan>{title}</StrongSpan>
            <label className="text-mauve-11 text-sm">by {author}</label>
          </div>
          <Paragraph>{review}</Paragraph>
        </ListItem>
      </AnimatedDiv>
    );
  });

  return (
    <main>
      <H1>Reading.</H1>
      <List>{listItems}</List>
    </main>
  );
};

export default ReadingPage;
