export function hasDuplicates(array: Array<string>): boolean {
  const valuesSoFar = {}
  // eslint-disable-next-line no-restricted-syntax
  for (const element of array) {
    if (element in valuesSoFar) {
      return true
    }
    valuesSoFar[element] = true
  }
  return false
}
