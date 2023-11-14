import { notEmptyString } from '../../../src/utils/value'

describe('Utils notEmptyString Test', () => {
    test('Should return undefined', () => {
        const result = notEmptyString('')

        expect(result).toBeUndefined()
    })
    test('Should return string', () => {
        const result = notEmptyString('test')

        expect(result).toBe('test')
    })
})
