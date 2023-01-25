import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
    const firstDayOfTheYear = dayjs().startOf('year')
    const today = new Date()

    const dates = []
    let campareDate = firstDayOfTheYear

    while (campareDate.isBefore(today)) {
        dates.push(campareDate.toDate())
        campareDate = campareDate.add(1, 'day')
    }

    return dates
}