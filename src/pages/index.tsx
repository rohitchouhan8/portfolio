import * as React from "react"

import {
	AnimatedGradientSpan,
	BoldSpan,
	H1,
	Paragraph,
	Paragraphs,
} from "../components/Text"

import PageContainer from "../components/PageContainer"

export default function IndexPage() {
	return (
		<main>
			<PageContainer>
				<H1>Rohit Chouhan.</H1>
				<Paragraphs>
					<Paragraph>
						I'm{" "}
						<AnimatedGradientSpan>
							Rohit Chouhan
						</AnimatedGradientSpan>
						. I'm a software engineer at{" "}
						<BoldSpan>Figma on the Creation Engine</BoldSpan>{" "}
						pillar. I am on a team that works on the{" "}
						<BoldSpan>plugin, widget, and REST APIs</BoldSpan>.
					</Paragraph>
					<Paragraph>
						In my freetime, I improve my health through{" "}
						<BoldSpan>CrossFit</BoldSpan>. I expand my knowledge by{" "}
						<BoldSpan>reading</BoldSpan>. Finally, I try to expand
						my creativity by making{" "}
						<BoldSpan>digital art and designs</BoldSpan>.
					</Paragraph>
					<Paragraph>
						I'm not currently looking for a new job, but I'd always
						love to connect.
					</Paragraph>
				</Paragraphs>
			</PageContainer>
		</main>
	)
}
