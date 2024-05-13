import * as React from 'react';

import { H1, Paragraph, Bold } from '../../components/Typography';

import { AnimatedDiv, List, ListItem } from '@/components/List';
import { readings } from '../../models/reading/data';

const ReadingPage = () => {
  const listItems = readings.map((reading, index) => {
    const { id, title, author, review } = reading;
    return (
      <AnimatedDiv key={id} index={index}>
        <ListItem key={id} index={index}>
          <div className="flex gap-1 items-baseline">
            <Bold>{title}</Bold>
            <label className="text-grey-11">by {author}</label>
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
