import dayjs from 'dayjs';
import { Project, ProjectId } from './types';

const content = `I interned on a team that supported the market risk data for the Corporate Investment Bank at JPMorgan Chase & Co. Given they were managing large amounts of data, they needed a way to ensure that future code changes would not affect query performance. I built a web application to calculate, summarize, and visualize this data. I wrote the server and back-end code in Python. I used React.js to build the user interface. This was my first exposure to full-stack web development, and I loved it because I was responsible for every aspect of the application. My favorite part of the internship was the gratification of knowing I built a useful application for the team that they will use to validate performance and catch any potential issues that arise in the future.`;

export const riceUniversity: Project = {
  id: ProjectId.RICE_UNIVERSITY,
  name: 'Rice University',
  startDate: dayjs('2019-01-08'),
  endDate: dayjs('2021-05-06'),
  content: content,
};
