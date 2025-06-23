import * as React from 'react';

import { H1, ListMonoSubtitle, Bold } from '../../components/Typography';

import { formatDate, timeBetweenTwoDates, today } from '../../utils/date';

import { LinkItem, List } from '@/components/List';
import { TypingAnimatedText } from '@/components/TypingText';
import { projects } from '../../models/projects/data';

const VerticalDivider = () => {
  return (
    <span className="text-grey-11 rounded-sm border-0 inline-block mx-2 align-middle">
      •
    </span>
  );
};

export default function ProjectsPage() {
  const works = Object.values(projects).sort((a, b) => {
    if (!a.endDate) {
      return -1;
    }
    if (!b.endDate) {
      return 1;
    }
    return b.startDate.diff(a.startDate);
  });

  const listItems = works.map((project, idx) => {
    const id = project.id;
    const { name, startDate, endDate } = project;

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
      <LinkItem key={id} index={idx} href={`/projects/${id}`} prefetch>
        <div className="flex flex-col md:flex-row place-content-between items-start md:items-center gap-4">
          <Bold>
            <TypingAnimatedText text={name} />
          </Bold>
          <div className="grow h-[0.05rem] bg-grey-7" />
          <div className="flex items-center">
            <ListMonoSubtitle>
              {durationText}
              <VerticalDivider />
              {endDate ? formatDate(endDate) : 'Present'}
            </ListMonoSubtitle>
          </div>
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
