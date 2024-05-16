import dayjs from 'dayjs';
import { Project, ProjectId } from './types';

export const facebook: Project = {
  id: ProjectId.FACEBOOK,
  name: 'Facebook',
  startDate: dayjs('2021-06-01'),
  endDate: dayjs('2021-08-21'),
};
