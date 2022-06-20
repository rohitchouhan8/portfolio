import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types"
import { BoldSpan, H2, H3, LI, Paragraph, UnorderedList } from "./Text"
import {
	Options,
	documentToReactComponents,
} from "@contentful/rich-text-react-renderer"

import React from "react"

const options: Options = {
	renderMark: {
		[MARKS.BOLD]: (text: any) => <BoldSpan>{text}</BoldSpan>,
	},
	renderNode: {
		[BLOCKS.HEADING_2]: (node, next) => <H2>{next}</H2>,
		[BLOCKS.HEADING_3]: (node, next) => <H3>{next}</H3>,
		[BLOCKS.PARAGRAPH]: (node, next) => <Paragraph>{next}</Paragraph>,
		[BLOCKS.LIST_ITEM]: (node, next) => <LI>{next}</LI>,
		[BLOCKS.UL_LIST]: (node, next) => <UnorderedList>{next}</UnorderedList>,
	},
}

export default function renderRichText(content: Document): React.ReactNode {
	return documentToReactComponents(content, options)
}
