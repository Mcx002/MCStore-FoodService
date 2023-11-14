export const notEmptyString = (str: string): string | undefined => {
    return str === '' ? undefined : str
}
