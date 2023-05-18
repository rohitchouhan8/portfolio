import * as React from "react"

import { H1, H2, ListMonoSubtitle, StrongSpan } from "../../components/Text"

import { formatDate, timeBetweenTwoDates, today } from "../../utils/date"
import { Entry, createClient } from "contentful"

import { Document } from "@contentful/rich-text-types"
import { List, ListItem } from "@/components/List"

export type ProjectSkeleton = {
  contentTypeId: "work"
  fields: {
    name: string
    content: { raw: Document }
    startDate: string
    endDate: string
    id: string
  }
}

const VerticalDivider = () => {
  return (
    <span className=' text-gray-300 dark:text-gray-800 rounded-sm border-0 inline-block mx-2 align-middle'>
      •
    </span>
  )
}

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
  })

  const entries = await client.getEntries<ProjectSkeleton>({
    content_type: "work",
  })

  return entries.items
}

export default function ProjectsPage() {
  const works = React.use(getData())
  const listItems = works.map((project) => {
    const { id, name, content, startDate, endDate } = project.fields
    const { years, months, days } = timeBetweenTwoDates(
      startDate,
      endDate ?? today()
    )
    let durationText = <></>
    if (years > 0) {
      const leftOverMonths = (months - 12 * years) / 12
      const yearsDecimal = years + leftOverMonths
      durationText = durationText = (
        <>
          {yearsDecimal.toPrecision(2)} {yearsDecimal > 1 ? "years" : "year"}
        </>
      )
    } else if (months > 0) {
      durationText = <>{months.toPrecision(2)} months</>
    } else {
      durationText = <>{days} days</>
    }

    return (
      <ListItem key={id} href={`/projects/${id}`}>
        <div className='flex flex-col md:flex-row place-content-between'>
          <H2>{name}</H2>
          <ListMonoSubtitle>
            {durationText}
            <VerticalDivider />
            {endDate ? formatDate(endDate) : "Present"}
          </ListMonoSubtitle>
        </div>
      </ListItem>
    )
  })

  return (
    <main>
      <H1>Projects.</H1>
      <List>{listItems}</List>
    </main>
  )
}
