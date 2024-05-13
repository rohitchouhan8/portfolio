import { facebook } from './facebook';
import { figma } from './figma';
import { jpMorganChaseAndCo } from './jp-morgan-chase-and-co';
import { riceUniversity } from './rice-university';
import { seniorDesign } from './senior-design';
import { Project, ProjectId } from './types';

export const projects: Record<ProjectId, Project> = {
  [ProjectId.FACEBOOK]: facebook,
  [ProjectId.FIGMA]: figma,
  [ProjectId.JP_MORGAN]: jpMorganChaseAndCo,
  [ProjectId.RICE_UNIVERSITY]: riceUniversity,
  [ProjectId.SENIOR_DESIGN]: seniorDesign,
};
