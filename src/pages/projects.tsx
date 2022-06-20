import * as React from "react"

import { H1, H2 } from "../components/Text"
import { List, ListItem } from "../components/List"
import { graphql, useStaticQuery } from "gatsby"

import { Document } from "@contentful/rich-text-types"
import PageContainer from "../components/PageContainer"
import { formatDate } from "../utils/date"

export type Project = {
	name: string
	content: { raw: Document }
	startDate: string
	endDate: string
	id: string
}
export default function ProjectsPage() {
	const { allContentfulWork } = useStaticQuery(graphql`
		{
			allContentfulWork {
				nodes {
					endDate
					startDate
					id
					name
					content {
						raw
					}
				}
			}
		}
	`)
	console.log(allContentfulWork.nodes)

	const listItems = allContentfulWork.nodes.map(
		({ id, name, content, startDate, endDate }: Project) => {
			return (
				<ListItem key={id} href={`/projects/${id}`}>
					<H2>{name}</H2>
					<p className="text-gray-500 dark:text-gray-400">
						<span className="text-gray-700 dark:text-gray-200 font-medium">
							{formatDate(startDate)}
						</span>{" "}
						to{" "}
						<span className="text-gray-700 dark:text-gray-200 font-medium">
							{endDate ? formatDate(endDate) : "Present"}
						</span>
					</p>
				</ListItem>
			)
		}
	)

	return (
		<PageContainer>
			<H1>Projects.</H1>
			<List>{listItems}</List>
		</PageContainer>
	)
}
