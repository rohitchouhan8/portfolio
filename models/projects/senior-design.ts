import dayjs from 'dayjs';
import { Project, ProjectId } from './types';

export const seniorDesign: Project = {
  id: ProjectId.SENIOR_DESIGN,
  name: 'Senior Design',
  startDate: dayjs('2021-01-01'),
  endDate: dayjs('2021-05-15'),
};
