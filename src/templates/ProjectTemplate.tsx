import { H1, H2 } from "../components/Text"

import PageContainer from "../components/PageContainer"
import { Project } from "../pages/projects"
import React from "react"
import renderRichText from "../components/RichText"

export default function ProjectTemplate({ pageContext, ...props }: any) {
	const { name, content } = pageContext
	const parsedContent = JSON.parse(content.raw)
	return (
		<PageContainer>
			<H1>{name}.</H1>
			{renderRichText(parsedContent)}
		</PageContainer>
	)
}
