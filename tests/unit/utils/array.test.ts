import { isAnyStringInArrayB } from '../../../src/utils/array'

describe('Utils isAnyStringInArrayB Test', () => {
    test('Should return false', () => {
        const arr1 = ['A', 'B', 'C']
        const arr2 = ['D']

        const result = isAnyStringInArrayB(arr2, arr1)

        expect(result).toBe(false)
    })
    test('Should return true', () => {
        const arr1 = ['A', 'B', 'C']
        const arr2 = ['C']

        const result = isAnyStringInArrayB(arr2, arr1)

        expect(result).toBe(true)
    })
})
