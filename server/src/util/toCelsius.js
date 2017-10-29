export const toCelsius = farenheit => {
  // T(°C) = (T(°F) - 32) / 1.8
  const leftSide = farenheit - 32
  return leftSide / 1.8
}