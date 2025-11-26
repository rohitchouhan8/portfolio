import Markdown from 'react-markdown';
import {
  Bold,
  Code,
  H1,
  H2,
  H3,
  OrderedList,
  Paragraph,
  UnorderedList,
} from './Typography';
import Link from 'next/link';
import { cn } from '@/utils/tailwind';

export function ReactMarkdown({ content }: { content: string }) {
  return (
    <Markdown
      components={{
        h1: ({ node, ...props }) => <H1 {...props} />,
        h2: ({ node, ...props }) => <H2 {...props} />,
        h3: ({ node, ...props }) => <H3 {...props} />,
        p: ({ node, ...props }) => <Paragraph {...props} />,
        ul: ({ node, ...props }) => <UnorderedList {...props} />,
        ol: ({ node, ...props }) => <OrderedList {...props} />,
        code: ({ node, ...props }) => <Code {...props} />,
        strong: ({ node, ...props }) => <Bold {...props} />,
        b: ({ node, ...props }) => <Bold {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-2 pl-6 italic" {...props} />
        ),
        a: ({ node, ...props }) => (
          <Link
            className="w-fit font-medium text-grey-12 underline underline-offset-4"
            href={props.href as string}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.children}
          </Link>
        ),
        img: ({ node, ...props }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            {...props}
            alt={props.alt ?? ''}
            loading="lazy"
            className={cn(
              'my-6 mx-auto block h-auto w-auto max-h-[480px] max-w-full rounded-lg border border-grey-7 shadow-sm',
              props.className
            )}
          />
        ),
      }}
    >
      {content}
    </Markdown>
  );
}
