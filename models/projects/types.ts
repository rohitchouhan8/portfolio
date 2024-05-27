import dayjs from 'dayjs';

export enum ProjectId {
  FIGMA = 'figma',
  SENIOR_DESIGN = 'senior-design',
  RICE_UNIVERSITY = 'rice-university',
  FACEBOOK = 'facebook',
  JP_MORGAN = 'jp-morgan-chase-and-co',
  PULSE_FITNESS_AI = 'pulse-fitness-ai',
}
export type Project = {
  id: ProjectId;
  name: string;
  startDate: dayjs.Dayjs;
  endDate: dayjs.Dayjs | undefined;
};
