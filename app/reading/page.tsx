'use client';
import * as React from 'react';

import { H1, Bold } from '../../components/Typography';
import { List, ListItem } from '@/components/List';
import { readings } from '../../models/reading/data';

export default function ReadingPage() {
  return (
    <div>
      <H1>Reading</H1>

      <List>
        {readings.map((reading, index) => {
          const { id, title, author, review } = reading;

          return (
            <ListItem key={id} index={index}>
              <div className="flex flex-wrap gap-x-2 items-baseline">
                <Bold>{title}</Bold>
                <span className="text-sm text-text-tertiary">by {author}</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mt-1">
                {review}
              </p>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
