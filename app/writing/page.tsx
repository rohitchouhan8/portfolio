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
    const { id, url, title, publishDate } = entry;
    return (
      <AnimatedDiv key={id} index={index}>
        <LinkItem key={id} index={index} href={url} target="_blank">
          <div className="flex flex-col md:flex-row place-content-between items-start md:items-center gap-4">
            <Bold>{title}</Bold>
            <line className="grow h-[0.05rem] bg-grey-7" />
            <ListMonoSubtitle>{formatDate(publishDate)}</ListMonoSubtitle>
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
