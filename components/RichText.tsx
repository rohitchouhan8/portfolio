import { BLOCKS, Document, INLINES, MARKS } from '@contentful/rich-text-types';
import {
  H2,
  H3,
  HighlightSpan,
  LI,
  ListMonoSubtitle,
  Paragraph,
  StrongSpan,
  UnorderedList,
} from './Typography';
import {
  Options,
  documentToReactComponents,
} from '@contentful/rich-text-react-renderer';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: any) => <StrongSpan>{text}</StrongSpan>,
    [MARKS.CODE]: (text: any) => {
      return <code>{text}</code>;
    },
  },
  renderNode: {
    [BLOCKS.HEADING_2]: (node, next) => <H2>{next}</H2>,
    [BLOCKS.HEADING_3]: (node, next) => <H3>{next}</H3>,
    [BLOCKS.PARAGRAPH]: (node, next) => <Paragraph>{next}</Paragraph>,
    [BLOCKS.LIST_ITEM]: (node, next) => <LI>{next}</LI>,
    [BLOCKS.UL_LIST]: (node, next) => <UnorderedList>{next}</UnorderedList>,
    [INLINES.HYPERLINK]: (node, next) => (
      <Link
        className="w-fit"
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="font-medium text-mauve-12 underline underline-offset-4">
          {next}
        </span>
      </Link>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <Image
            className="w-full h-full object-contain"
            src={'https:' + node.data.target.fields.file.url}
            alt={node.data.target.fields.title}
            width={node.data.target.fields.file.details.image.width}
            height={node.data.target.fields.file.details.image.height}
          />
        </div>
      );
    },
    [BLOCKS.QUOTE]: (node, next) => {
      return <blockquote className="border-l-2 pl-6 italic">{next}</blockquote>;
    },
  },
};

export default function renderRichText(content: Document): React.ReactNode {
  return documentToReactComponents(content, options);
}
