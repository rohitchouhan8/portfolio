import * as React from "react"

import { BoldSpan, H1, H2 } from "../components/Text"
import { List, ListItem } from "../components/List"
import { graphql, useStaticQuery } from "gatsby"

import PageContainer from "../components/PageContainer"
import { formatDate } from "../utils/date"
import moment from "moment"

type MediumArticle = {
	title: string
	url: string
	id: string
	publishDate: string
}

export default function WritingPage() {
	const { allContentfulMediumArticles } = useStaticQuery(graphql`
		{
			allContentfulMediumArticles {
				totalCount
				nodes {
					title
					publishDate
					url
					id
				}
			}
		}
	`)
	console.log(allContentfulMediumArticles.nodes)

	const listItems = allContentfulMediumArticles.nodes.map(
		({ id, url, title, publishDate }: MediumArticle) => {
			console.log(id, url, title, publishDate)
			return (
				<ListItem key={id} href={url} target="_blank">
					<H2>{title}</H2>
					<p className="text-gray-500 dark:text-gray-400">
						Published on{" "}
						<span className="text-gray-700 dark:text-gray-200 font-medium">
							{formatDate(publishDate)}
						</span>
					</p>
				</ListItem>
			)
		}
	)
	return (
		<main>
			<PageContainer>
				<H1>Writing.</H1>
				<List>{listItems}</List>
			</PageContainer>
		</main>
	)
}
