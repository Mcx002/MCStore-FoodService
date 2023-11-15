export const notEmptyString = (str: string): string | undefined => {
    return str === '' ? undefined : str
}

export const stringToBool = (str?: string, defaultValue = false): boolean => {
    if (str && str.toLowerCase() === 'true') {
        return true
    }
    if (str && str.toLowerCase() === 'false') {
        return false
    }

    if (str === '1') {
        return true
    }
    if (str === '0') {
        return false
    }

    return defaultValue
}