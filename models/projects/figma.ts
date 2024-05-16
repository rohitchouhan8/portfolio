import dayjs from 'dayjs';
import { Project, ProjectId } from './types';

export const figma: Project = {
  id: ProjectId.FIGMA,
  name: 'Figma',
  startDate: dayjs('2021-08-30'),
  endDate: undefined,
};
