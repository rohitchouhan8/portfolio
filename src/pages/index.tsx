import * as React from "react"

import { BoldSpan, Header } from "../components/Text"

import PageContainer from "../components/PageContainer"

// markup
const IndexPage = () => {
	return (
		<main>
			<PageContainer>
				<Header>Rohit Chouhan</Header>
				<div className="text-gray-800 dark:text-gray-50 text-xl leading-relaxed flex flex-col gap-3">
					<p>
						I'm Rohit. I'm a software engineer at{" "}
						<BoldSpan>Figma on the Creation Engine</BoldSpan>{" "}
						pillar. I am on a team that works on the{" "}
						<BoldSpan>plugin, widget, and REST APIs</BoldSpan>.
					</p>
					<p>
						In my freetime, I improve my health through{" "}
						<BoldSpan>CrossFit</BoldSpan>. I expand my knowledge by{" "}
						<BoldSpan>reading</BoldSpan>. Finally, I try to expand
						my creativity by making{" "}
						<BoldSpan>digital art and designs</BoldSpan>.
					</p>
					<p>
						I'm not currently looking for a new job, but I'd always
						love to connect.
					</p>
				</div>
			</PageContainer>
		</main>
	)
}

export default IndexPage
