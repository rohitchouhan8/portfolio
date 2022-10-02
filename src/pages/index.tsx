import * as React from "react"

import {
	AnimatedGradientSpan,
	AnimatedTitle,
	BoldSpan,
	H1,
	Paragraph,
	Paragraphs,
	RegularTitle,
} from "../components/Text"

import PageContainer from "../components/PageContainer"

export default function IndexPage() {
	return (
		<PageContainer>
			<AnimatedTitle>Rohit Chouhan.</AnimatedTitle>
			<Paragraphs>
				<Paragraph>
					I'm <BoldSpan>Rohit</BoldSpan>. I'm a software engineer at{" "}
					<BoldSpan>Figma on the Creation Engine</BoldSpan> pillar. I
					am on a team that works on the{" "}
					<BoldSpan>plugin, widget, and REST APIs</BoldSpan>.
				</Paragraph>
				<Paragraph>
					In my freetime, I improve my health through{" "}
					<BoldSpan>CrossFit</BoldSpan> and running. I expand my
					knowledge by <BoldSpan>reading</BoldSpan>. Finally, I
					explore my creative side through{" "}
					<BoldSpan>digital art and designs</BoldSpan>.
				</Paragraph>
				<Paragraph>
					I'm not currently looking for a new job, but I'd always love
					to connect.
				</Paragraph>
			</Paragraphs>
		</PageContainer>
	)
}
