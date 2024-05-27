import dayjs from 'dayjs';
import { Project, ProjectId } from './types';

export const riceUniversity: Project = {
  id: ProjectId.RICE_UNIVERSITY,
  name: 'Rice University',
  startDate: dayjs('2019-01-08'),
  endDate: dayjs('2021-05-06'),
};
