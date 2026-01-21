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
        h1: ({ children }) => <H1 animate={false}>{children}</H1>,
        h2: ({ children }) => <H2>{children}</H2>,
        h3: ({ children }) => <H3>{children}</H3>,
        p: ({ children }) => <Paragraph delay={0}>{children}</Paragraph>,
        ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
        ol: ({ children }) => <OrderedList>{children}</OrderedList>,
        code: ({ children }) => <Code>{children}</Code>,
        strong: ({ children }) => <Bold>{children}</Bold>,
        b: ({ children }) => <Bold>{children}</Bold>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-border-dark pl-4 italic text-text-secondary my-4">
            {children}
          </blockquote>
        ),
        a: ({ href, children }) => (
          <Link
            className="text-accent link-underline"
            href={href as string}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </Link>
        ),
        img: ({ src, alt, className }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt ?? ''}
            loading="lazy"
            className={cn(
              'my-6 mx-auto block h-auto w-auto max-h-[480px] max-w-full rounded-lg border border-border shadow-sm',
              className
            )}
          />
        ),
      }}
    >
      {content}
    </Markdown>
  );
}
