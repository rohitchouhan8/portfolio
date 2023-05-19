export type ProjectSkeleton = {
  contentTypeId: "work"
  fields: Project
}

export type Project = {
  name: string
  content: { raw: Document }
  startDate: string
  endDate: string
  id: string
}
