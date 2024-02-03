export enum StackItemId {
  RAYCAST = 'raycast',
  GRAPHITE = 'graphite',
  ARC_BROWSER = 'arc-browser',
  ARC_SEARCH = 'arc-search',
  MONARCH = 'monarch',
}

export type TStackItem = {
  id: StackItemId;
  title: string;
  url: string;
  label: string;
};
