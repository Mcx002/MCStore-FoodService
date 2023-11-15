import { notEmptyString, stringToBool } from '../../../src/utils/value'

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

describe('Utils stringToBool Test', () => {
    test('Should return true', () => {
        const result = stringToBool('true')

        expect(result).toBe(true)
    })
    test('Should return true with value 1', () => {
        const result = stringToBool('1')

        expect(result).toBe(true)
    })
    test('Should return false', () => {
        const result = stringToBool('false')

        expect(result).toBe(false)
    })
    test('Should return false with value 0', () => {
        const result = stringToBool('0')

        expect(result).toBe(false)
    })
    test('Should return default value', () => {
        const result = stringToBool('default')

        expect(result).toBe(false)
    })
})
