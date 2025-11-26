import { List } from '@/components/List';
import { H1 } from '@/components/Typography';
import { StackItem } from '@/components/stack/StackItem';
import { StackItemId, TStackItem } from '../../models/stack/types';

const stackItems: TStackItem[] = [
  {
    id: StackItemId.RAYCAST,
    title: 'Raycast',
    url: 'https://raycast.com/',
    label: 'A faster and more extensible Apple Spotlight',
  },
  {
    id: StackItemId.CURSOR,
    title: 'Cursor',
    url: 'https://cursor.com/',
    label: 'AI-powered IDE',
  },
  {
    id: StackItemId.GRAPHITE,
    title: 'Graphite',
    url: 'https://graphite.dev/',
    label: 'GitHub with better UX',
  },
  {
    id: StackItemId.ARC_BROWSER,
    title: 'Arc Browser',
    url: 'https://arc.net/',
    label: 'A better way to browse the web',
  },
  {
    id: StackItemId.ARC_SEARCH,
    title: 'Arc Search',
    url: 'https://apps.apple.com/us/app/arc-search/id6472513080',
    label: 'AI-powered mobile search',
  },
  {
    id: StackItemId.MONARCH,
    title: 'Monarch',
    url: 'https://www.monarchmoney.com/',
    label: 'Personal finance tracking and budgeting',
  },
];

export default function Stack() {
  return (
    <main>
      <H1>Stack.</H1>
      <List>
        {stackItems.map((item, index) => (
          <StackItem key={item.id} item={item} index={index} />
        ))}
      </List>
    </main>
  );
}
