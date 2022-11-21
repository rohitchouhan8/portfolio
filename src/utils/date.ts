import moment from "moment"

export function formatDate(dateString: string) {
	const date = moment(dateString)
	return date.format("YYYY")
}

export function timeBetweenTwoDates(date1: string, date2: string) {
	const start = moment(date1)
	const end = moment(date2)
	const duration = moment.duration(end.diff(start))

	const years = duration.years()
	const months = duration.asMonths()
	const days = duration.asDays()
	return { years, months, days }
}
