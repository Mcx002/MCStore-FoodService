import { getDateFromUnix, getUnixFromDate } from '../../../src/utils/time'

describe('Utils getUnixFromDate Test', () => {
    test('Should return unix of new Date', () => {
        const date = new Date()
        const unix = Math.round(date.getTime() / 1000)

        const unixFromUtils = getUnixFromDate(date)
        expect(unixFromUtils).toBe(unix)
    })
})

describe('Utils getDateFromUnix Test', () => {
    test('Should return unix of new Date', () => {
        const date = new Date()
        const unix = Math.round(date.getTime() / 1000)
        const dateFromUnix = new Date(unix * 1000)

        const dateFromUnixUtils = getDateFromUnix(unix)
        expect(dateFromUnixUtils).toEqual(dateFromUnix)
    })
})
