import * as React from 'react';

import { formatDate, sortByRecency } from '@/utils/date';
import { LinkItem, List, ListItem } from '@/components/List';
import {
  H2,
  ListMonoSubtitle,
  H1,
  H3,
  StrongSpan,
} from '@/components/Typography';
import client from '@/utils/contentfulClient';

type MediumArticle = {
  title: string;
  url: string;
  id: string;
  publishDate: string;
};

type MediumArticleSkeleton = {
  contentTypeId: 'mediumArticles';
  fields: MediumArticle;
};

async function getData() {
  const entries = await client.getEntries<MediumArticleSkeleton>({
    content_type: 'mediumArticles',
  });

  return entries.items.sort((a, b) =>
    sortByRecency(a.fields.publishDate, b.fields.publishDate)
  );
}

export default function WritingPage() {
  const articles = React.use(getData());

  const listItems = articles.map((entry, index) => {
    const { id, url, title, publishDate } = entry.fields;
    return (
      <LinkItem key={id} index={index} href={url} target="_blank">
        <div className="flex flex-col md:flex-row place-content-between items-center gap-4">
          <StrongSpan>{title}</StrongSpan>
          <line className="grow h-[0.05rem] bg-mauve-7" />
          <ListMonoSubtitle>{formatDate(publishDate)}</ListMonoSubtitle>
        </div>
      </LinkItem>
    );
  });
  return (
    <main>
      <H1>Writing.</H1>
      <List>{listItems}</List>
    </main>
  );
}
