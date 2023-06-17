import * as React from "react";

import {
  H1,
  H2,
  ListMonoSubtitle,
  Paragraph,
  StrongSpan,
} from "../../components/Typography";

import { formatDate, timeBetweenTwoDates, today } from "../../utils/date";
import { Entry, createClient } from "contentful";

import { Document } from "@contentful/rich-text-types";
import { List, ListItem } from "@/components/List";

type ReadingSkeleton = {
  contentTypeId: "reading";
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
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
  });

  const entries = await client.getEntries<ReadingSkeleton>({
    content_type: "reading",
  });

  return entries.items;
}

// markup
const ReadingPage = () => {
  const reading = React.use(getData());
  const listItems = reading.map((reading) => {
    const { id, title, author, review, dateFinished } = reading.fields;
    return (
      <ListItem key={id}>
        <H2>{title}</H2>
        <label className="text-slate-11">by {author}</label>
        <Paragraph>{review}</Paragraph>
      </ListItem>
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
