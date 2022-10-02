import * as React from "react"

import { BoldSpan, H1, H2, ListSubtitle } from "../components/Text"
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
			allContentfulMediumArticles(
				sort: { order: DESC, fields: publishDate }
			) {
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

	const listItems = allContentfulMediumArticles.nodes.map(
		({ id, url, title, publishDate }: MediumArticle) => {
			return (
				<ListItem key={id} href={url} target="_blank">
					<div className="flex flex-col md:flex-row place-content-between gap-4">
						<H2>{title}</H2>
						<ListSubtitle>{formatDate(publishDate)}</ListSubtitle>
					</div>
				</ListItem>
			)
		}
	)
	return (
		<PageContainer>
			<H1>Writing.</H1>
			<List>{listItems}</List>
		</PageContainer>
	)
}
