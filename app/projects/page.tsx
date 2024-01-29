import * as React from 'react';

import {
  H1,
  H2,
  H3,
  ListMonoSubtitle,
  StrongSpan,
} from '../../components/Typography';

import {
  formatDate,
  sortByRecency,
  timeBetweenTwoDates,
  today,
} from '../../utils/date';
import { Entry, createClient } from 'contentful';

import { Document } from '@contentful/rich-text-types';
import { LinkItem, List, ListItem } from '@/components/List';
import { ProjectSkeleton } from './types';
import client from '@/utils/contentfulClient';
import { TypingAnimatedText } from '@/components/TypingText';

const VerticalDivider = () => {
  return (
    <span className="text-mauve-11 rounded-sm border-0 inline-block mx-2 align-middle">
      •
    </span>
  );
};

async function getData() {
  const entries = await client.getEntries<ProjectSkeleton>({
    content_type: 'work',
  });

  return entries.items.sort((a, b) =>
    sortByRecency(a.fields.endDate, b.fields.endDate)
  );
}

export default function ProjectsPage() {
  const works = React.use(getData());
  const listItems = works.map((project, idx) => {
    const id = project.sys.id;
    const { name, startDate, endDate } = project.fields;

    const { years, months, days } = timeBetweenTwoDates(
      startDate,
      endDate ?? today()
    );
    let durationText = <></>;
    if (years > 0) {
      const leftOverMonths = (months - 12 * years) / 12;
      const yearsDecimal = years + leftOverMonths;
      durationText = durationText = (
        <>
          {yearsDecimal.toPrecision(2)} {yearsDecimal > 1 ? 'years' : 'year'}
        </>
      );
    } else if (months > 0) {
      durationText = <>{months.toPrecision(2)} months</>;
    } else {
      durationText = <>{days} days</>;
    }

    return (
      <LinkItem key={id} index={idx} href={`/projects/${id}`}>
        <div className="flex flex-col md:flex-row place-content-between items-center gap-4">
          <StrongSpan>
            <TypingAnimatedText text={name} />
          </StrongSpan>
          <div className="grow h-[0.05rem] bg-mauve-7" />
          <ListMonoSubtitle>
            {durationText}
            <VerticalDivider />
            {endDate ? formatDate(endDate) : 'Present'}
          </ListMonoSubtitle>
        </div>
      </LinkItem>
    );
  });

  return (
    <main>
      <H1>Projects.</H1>
      <List>{listItems}</List>
    </main>
  );
}
