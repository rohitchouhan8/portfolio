import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export function formatDate(dateString: string) {
  const date = dayjs(dateString);
  return date.format('YYYY');
}

export function timeBetweenTwoDates(date1: string, date2: string) {
  const start = dayjs(date1);
  const end = dayjs(date2);
  const duration = dayjs.duration(end.diff(start));

  const years = duration.years();
  const months = duration.asMonths();
  const days = duration.asDays();
  return { years, months, days };
}

export function today() {
  return dayjs();
}

export function sortByRecency(a: string, b: string) {
  const date1 = dayjs(a);
  const date2 = dayjs(b);
  return date2.diff(date1);
}
