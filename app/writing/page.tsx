import * as React from 'react';

import { formatDate, sortByRecency } from '@/utils/date';
import { AnimatedDiv, LinkItem, List } from '@/components/List';
import { ListMonoSubtitle, H1, Bold } from '@/components/Typography';
import { writing } from '@/models/writing/data';

export default function WritingPage() {
  const articles = Object.values(writing).sort((a, b) =>
    sortByRecency(a.publishDate, b.publishDate)
  );

  const listItems = articles.map((entry, index) => {
    const { id, content, title, publishDate } = entry;
    const url = content.type === 'external' ? content.url : `/writing/${id}`;
    const target = content.type === 'external' ? '_blank' : undefined;
    return (
      <AnimatedDiv key={id} index={index}>
        <LinkItem key={id} index={index} href={url} target={target}>
          <div className="flex flex-col md:flex-row place-content-between items-start md:items-center gap-4">
            <Bold>{title}</Bold>
            <line className="grow h-[0.05rem] bg-grey-7" />
            <div className="flex items-center">
              <ListMonoSubtitle>{formatDate(publishDate)}</ListMonoSubtitle>
            </div>
          </div>
        </LinkItem>
      </AnimatedDiv>
    );
  });
  return (
    <main>
      <H1>Writing.</H1>
      <List>{listItems}</List>
    </main>
  );
}
