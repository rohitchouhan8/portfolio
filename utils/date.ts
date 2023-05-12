import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"

dayjs.extend(duration)

export function formatDate(dateString: string) {
  const date = dayjs(dateString)
  return date.format("YYYY")
}

export function timeBetweenTwoDates(date1: string, date2: string) {
  const start = dayjs(date1)
  const end = dayjs(date2)
  const duration = dayjs.duration(end.diff(start))

  const years = duration.years()
  const months = duration.asMonths()
  const days = duration.asDays()
  return { years, months, days }
}
