import dayjs from 'dayjs';
import { Project, ProjectId } from './types';

export const jpMorganChaseAndCo: Project = {
  id: ProjectId.JP_MORGAN,
  name: 'JP Morgan Chase & Co.',
  startDate: dayjs('2019-06-06'),
  endDate: dayjs('2019-08-28'),
};
