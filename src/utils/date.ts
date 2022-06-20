import moment from "moment"

export function formatDate(dateString: string) {
	const date = moment(dateString)
	return date.format("MMMM, YYYY")
}

export function timeBetweenTwoDates(date1: string, date2: string) {
	const start = moment(date1)
	const end = moment(date2)
	const duration = moment.duration(end.diff(start))

	const years = Math.round(duration.years())
	const months = Math.round(duration.asMonths())
	const days = Math.round(duration.asDays())
	return { years, months, days }
}
