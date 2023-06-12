export const getFriendlyFormat = (number: number) => {
  return new Intl.NumberFormat().format(number)
}