'use client';
import * as React from 'react';

import { H1, Bold } from '../../components/Typography';
import { formatDate, timeBetweenTwoDates, today } from '../../utils/date';
import { LinkItem, List } from '@/components/List';
import { TypingAnimatedText } from '@/components/TypingText';
import { projects } from '../../models/projects/data';

function formatDuration(startDate: ReturnType<typeof today>, endDate: ReturnType<typeof today> | undefined) {
  const { years, months, days } = timeBetweenTwoDates(startDate, endDate ?? today());

  if (years > 0) {
    const leftOverMonths = (months - 12 * years) / 12;
    const yearsDecimal = years + leftOverMonths;
    return `${yearsDecimal.toPrecision(2)} ${yearsDecimal > 1 ? 'years' : 'year'}`;
  } else if (months > 0) {
    return `${months.toPrecision(2)} months`;
  }
  return `${days} days`;
}

export default function ProjectsPage() {
  const works = Object.values(projects).sort((a, b) => {
    if (!a.endDate) return -1;
    if (!b.endDate) return 1;
    return b.endDate.diff(a.endDate);
  });

  return (
    <div>
      <H1>Projects</H1>

      <List>
        {works.map((project, idx) => {
          const { id, name, startDate, endDate } = project;

          return (
            <LinkItem key={id} index={idx} href={`/projects/${id}`} prefetch>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <Bold>
                  <TypingAnimatedText text={name} />
                </Bold>
                <span className="text-sm text-text-tertiary">
                  {formatDuration(startDate, endDate)}
                  <span className="mx-2">·</span>
                  {endDate ? formatDate(endDate) : 'Present'}
                </span>
              </div>
            </LinkItem>
          );
        })}
      </List>
    </div>
  );
}
