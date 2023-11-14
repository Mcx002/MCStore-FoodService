export const getUnixFromDate = (date: Date) => {
    return Math.round(date.getTime() / 1000)
}

export const getDateFromUnix = (unixTime: number) => {
    return new Date(unixTime * 1000)
}
