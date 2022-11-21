import * as React from "react"

import { H1, H2, ListMonoSubtitle, StrongSpan } from "../components/Text"
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
		<span className=" text-gray-300 dark:text-gray-800 rounded-sm border-0 inline-block mx-2 align-middle">
			•
		</span>
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
						{yearsDecimal.toPrecision(2)}{" "}
						{yearsDecimal > 1 ? "years" : "year"}
					</>
				)
			} else if (months > 0) {
				durationText = <>{months.toPrecision(2)} months</>
			} else {
				durationText = <>{days} days</>
			}

			return (
				<ListItem key={id} href={`/projects/${id}`}>
					<div className="flex flex-col md:flex-row place-content-between">
						<H2>{name}</H2>
						<ListMonoSubtitle>
							{durationText}
							<VerticalDivider />
							{endDate ? formatDate(endDate) : "Present"}
						</ListMonoSubtitle>
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
