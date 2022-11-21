import * as React from "react"

import { H1, H2, LI, Paragraph } from "../components/Text"
import { List, ListItem } from "../components/List"
import { graphql, useStaticQuery } from "gatsby"

import PageContainer from "../components/PageContainer"
import { formatDate } from "../utils/date"

// markup
const ReadingPage = () => {
	const { allContentfulReading } = useStaticQuery(
		graphql`
			{
				allContentfulReading(
					sort: { order: DESC, fields: dateFinished }
				) {
					nodes {
						author
						id
						review
						title
						dateFinished
					}
				}
			}
		`
	)
	const listItems = (allContentfulReading.nodes as Array<any>).map(
		({ id, title, author, review, dateFinished }: any) => {
			return (
				<ListItem key={id}>
					<H2>{title}</H2>
					<label className="text-gray-400 dark:text-gray-500">
						by {author}
					</label>
					<Paragraph>{review}</Paragraph>
				</ListItem>
			)
		}
	)

	return (
		<main>
			<PageContainer>
				<H1>Reading.</H1>
				<List>{listItems}</List>
			</PageContainer>
		</main>
	)
}

export default ReadingPage
