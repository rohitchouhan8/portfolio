'use client';
import * as React from 'react';

import { formatDate, sortByRecency } from '@/utils/date';
import { LinkItem, List } from '@/components/List';
import { H1, Bold } from '@/components/Typography';
import { writing } from '@/models/writing/data';

export default function WritingPage() {
  const articles = Object.values(writing).sort((a, b) =>
    sortByRecency(a.publishDate, b.publishDate)
  );

  return (
    <div>
      <H1>Writing</H1>

      <List>
        {articles.map((entry, index) => {
          const { id, content, title, publishDate } = entry;
          const url = content.type === 'external' ? content.url : `/writing/${id}`;
          const target = content.type === 'external' ? '_blank' : undefined;

          return (
            <LinkItem key={id} index={index} href={url} target={target}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <Bold>{title}</Bold>
                <span className="text-sm text-text-tertiary">
                  {formatDate(publishDate)}
                </span>
              </div>
            </LinkItem>
          );
        })}
      </List>
    </div>
  );
}
