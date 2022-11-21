import * as React from "react"

import { H1, H2, ListSubtitle, StrongSpan } from "../components/Text"
import { List, ListItem } from "../components/List"
import { formatDate, timeBetweenTwoDates } from "../utils/date"
import { graphql, useStaticQuery } from "gatsby"

import { Document } from "@contentful/rich-text-types"
import PageContainer from "../components/PageContainer"
import moment from "moment"

export type Project = {
	name: string
	content: { raw: Document }
	startDate: string
	endDate: string
	id: string
}

const VerticalDivider = () => {
	return (
		<div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-700 rounded-sm border-0 inline-block mx-3 align-middle" />
	)
}

export default function ProjectsPage() {
	const { allContentfulWork } = useStaticQuery(graphql`
		{
			allContentfulWork(sort: { order: DESC, fields: endDate }) {
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

	const listItems = allContentfulWork.nodes.map(
		({ id, name, content, startDate, endDate }: Project) => {
			const { years, months, days } = timeBetweenTwoDates(
				startDate,
				endDate ?? moment()
			)
			let durationText = <></>
			if (years > 0) {
				const leftOverMonths = (months - 12 * years) / 12
				const yearsDecimal = years + leftOverMonths
				durationText = durationText = (
					<>
						<StrongSpan>{yearsDecimal.toPrecision(2)}</StrongSpan>{" "}
						{yearsDecimal > 1 ? "years" : "year"}{" "}
					</>
				)
			} else if (months > 0) {
				durationText = (
					<>
						<StrongSpan>{months.toPrecision(2)}</StrongSpan> months
					</>
				)
			} else {
				durationText = (
					<>
						<StrongSpan>{days}</StrongSpan> days
					</>
				)
			}

			return (
				<ListItem key={id} href={`/projects/${id}`}>
					<div className="flex flex-col md:flex-row place-content-between">
						<H2>{name}</H2>
						<ListSubtitle>
							{durationText}
							<VerticalDivider />
							<StrongSpan>
								{endDate ? formatDate(endDate) : "Present"}
							</StrongSpan>
						</ListSubtitle>
					</div>
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
