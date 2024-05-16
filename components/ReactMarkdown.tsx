import Markdown from 'react-markdown';
import { Bold, H1, H2, H3, Paragraph, UnorderedList } from './Typography';
import Link from 'next/link';
import Image from 'next/image';

export function ReactMarkdown({ content }: { content: string }) {
  return (
    <Markdown
      components={{
        h1: ({ node, ...props }) => <H1 {...props} />,
        h2: ({ node, ...props }) => <H2 {...props} />,
        h3: ({ node, ...props }) => <H3 {...props} />,
        p: ({ node, ...props }) => <Paragraph {...props} />,
        ul: ({ node, ...props }) => <UnorderedList {...props} />,
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
      }}
    >
      {content}
    </Markdown>
  );
}
