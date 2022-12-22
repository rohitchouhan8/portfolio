import * as React from "react"

import { HighlightSpan, Paragraph, Paragraphs } from "../components/Text"

import PageContainer from "../components/PageContainer"
import { StaticImage } from "gatsby-plugin-image"

export default function IndexPage() {
	return (
		<PageContainer>
			<div className='relative w-48 h-48 flex items-center justify-center md:-left-10 mx-auto md:mx-0'>
				<div className='w-40 h-40 overflow-clip rounded-full'>
					<StaticImage src='../images/avatar.jpeg' alt='Avatar' />
				</div>
			</div>
			<div>
				<Paragraphs>
					<Paragraph>
						I'm <HighlightSpan>Rohit</HighlightSpan>. I'm a software
						engineer at{" "}
						<HighlightSpan>
							Figma on the Creation Engine
						</HighlightSpan>{" "}
						pillar. I am on a team that works on the{" "}
						<HighlightSpan>
							plugin, widget, and REST APIs
						</HighlightSpan>
						.
					</Paragraph>
					<Paragraph>
						In my freetime, I improve my health through{" "}
						<HighlightSpan>CrossFit</HighlightSpan> and running. I
						expand my knowledge by{" "}
						<HighlightSpan>reading</HighlightSpan>. Finally, I
						explore my creative side through{" "}
						<HighlightSpan>digital art and designs</HighlightSpan>.
					</Paragraph>
					<Paragraph>
						I'm not currently looking for a new job, but I'd always
						love to connect.
					</Paragraph>
				</Paragraphs>
			</div>
		</PageContainer>
	)
}
